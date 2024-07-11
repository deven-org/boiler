import { PropertyValues, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from '../../utils/lit/decorators.js';
import { staticStyles as componentSpecificStaticStyles } from './index.css.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { staticStyles as staticRadioStyles } from '../../foundation/component-tokens/radio.css.js';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css.js';
import { InputSizesType, RadioGroupDirection } from '../../globals/types.js';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction.js';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { TAG_NAME } from './renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import {
  BlrBlurEvent,
  BlrFocusEvent,
  BlrSelectedValueChangeEvent,
  createBlrSelectedValueChangeEvent,
} from '../../globals/events.js';
import { BlrRadio } from '../radio/index.js';
import { batch, Signal } from '@lit-labs/preact-signals';

export type BlrRadioGroupEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrSelectedValueChange?: (event: BlrSelectedValueChangeEvent) => void;
};

/**
 * @fires blrFocus Radio received focus
 * @fires blrBlur Radio lost focus
 * @fires blrSelectedValueChange Radio selected value changed
 */

export class BlrRadioGroup extends LitElementCustom {
  static styles = [staticFormStyles, staticRadioStyles, componentSpecificStaticStyles];

  @property() accessor disabled: boolean | undefined;
  @property() accessor readonly: boolean | undefined;
  @property() accessor name: string | undefined;
  @property() accessor sizeVariant: InputSizesType = 'md';
  @property() accessor hasLegend: boolean | undefined;
  @property() accessor required: boolean | undefined;
  @property() accessor hasError: boolean | undefined;
  @property() accessor errorIcon: SizelessIconType | undefined;
  @property() accessor hasHint = true;
  @property() accessor groupHintMessageIcon: SizelessIconType | undefined;
  @property() accessor groupErrorMessage: string | undefined;
  @property() accessor groupHintMessage: string | undefined;
  @property() accessor groupErrorMessageIcon: SizelessIconType | undefined;
  @property() accessor legend: string | undefined;
  @property() accessor direction: RadioGroupDirection = 'horizontal';
  @property() accessor theme: ThemeType = 'Light';

  protected _radioElements: BlrRadio[] = [];
  private _selectedRadio?: BlrRadio;
  private _radioCheckedSignalSubscriptionDisposers: ReturnType<Signal['subscribe']>[] = [];

  protected handleRadioCheckedSignal = (target: BlrRadio, value?: boolean) => {
    const selectedRadio: BlrRadio | undefined = value
      ? target
      : target === this._selectedRadio && !value
      ? undefined
      : this._selectedRadio;

    batch(() => {
      this._radioElements?.forEach((radio) => {
        if (radio !== selectedRadio) {
          radio.checked = false;
        }
      });
    });

    if (this._selectedRadio !== selectedRadio) {
      this.dispatchEvent(createBlrSelectedValueChangeEvent({ selectedValue: (<BlrRadio>selectedRadio)?.value ?? '' }));
      this._selectedRadio = selectedRadio;
    }
  };

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected firstUpdated(_changedProperties: PropertyValues): void {
    this.handleSlotChange();
  }

  protected handleSlotChange = () => {
    // Cleanup signal listeners from previously slotted elements
    this._radioCheckedSignalSubscriptionDisposers.forEach((cancelSubscription) => cancelSubscription());

    const slot = this.renderRoot?.querySelector('slot');
    this._radioElements = slot?.assignedElements({ flatten: false }) as BlrRadio[];

    // Add signal listeners to newly slotted elements
    this._radioElements.forEach((item) => {
      if (item instanceof BlrRadio === false) {
        throw new Error('child component of blr-radio-group must be blr-radio');
      }

      item.hasError = this.hasError;
      item.disabled = this.disabled;
      item.readonly = this.readonly;
      item.theme = this.theme;

      this._radioCheckedSignalSubscriptionDisposers.push(
        item.signals.checked.subscribe((value) => this.handleRadioCheckedSignal(item, value))
      );
    });
  };

  protected render() {
    if (!this.sizeVariant) {
      return null;
    }

    const legendClasses = classMap({
      'blr-legend': true,
      [this.sizeVariant]: this.sizeVariant,
      'error': this.hasError || false,
    });

    const legendWrapperClasses = classMap({
      'blr-legend-wrapper': true,
      [this.theme]: this.theme,
      [this.sizeVariant]: this.sizeVariant,
    });

    const classes = classMap({
      [this.theme]: this.theme,
      [this.sizeVariant]: this.sizeVariant,
      disabled: this.disabled || false,
      readonly: this.readonly || false,
      error: this.hasError || false,
      [this.direction]: this.direction,
    });

    const captionContent = html`
      ${this.hasHint && (this.groupHintMessage || this.groupHintMessageIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'hint',
            theme: this.theme,
            sizeVariant: this.sizeVariant,
            message: this.groupHintMessage,
            icon: this.groupHintMessageIcon,
          })
        : nothing}
      ${this.hasError && (this.groupErrorMessage || this.groupErrorMessageIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'error',
            theme: this.theme,
            sizeVariant: this.sizeVariant,
            message: this.groupErrorMessage,
            icon: this.groupErrorMessageIcon,
          })
        : nothing}
    `;

    return html`
      ${this.hasLegend
        ? html`<div class="${legendWrapperClasses}">
            <legend class="${legendClasses}">${this.legend}</legend>
          </div>`
        : nothing}
      <div class="blr-radio-group ${classes}">
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>

      ${(this.hasHint && (this.groupHintMessageIcon || this.groupHintMessage)) ||
      (this.hasError && (this.groupErrorMessageIcon || this.groupErrorMessage))
        ? html` <div class="caption-group ${classes}">
            ${BlrFormCaptionGroupRenderFunction({ sizeVariant: this.sizeVariant, theme: this.theme }, captionContent)}
          </div>`
        : nothing}
    `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrRadioGroup);
}

export type BlrRadioGroupType = ElementInterface<BlrRadioGroup & BlrRadioGroupEventHandlers>;
