import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from '../../utils/lit/decorators.js';
import { staticStyles as componentSpecificStaticStyles } from './index.css.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { staticStyles as staticRadioStyles } from '../radio/index.css.js';
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
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

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

const propertySanitizer = makeSanitizer((unsanitized: BlrRadioGroupType) => ({
  sizeVariant: unsanitized.sizeVariant ?? 'md',
  theme: unsanitized.theme ?? Themes[0],
  hasHint: unsanitized.hasHint ?? true,
  direction: unsanitized.direction ?? 'horizontal',
}));

export class BlrRadioGroup extends LitElementCustom {
  private sanitizedController: SanitizationController<
    BlrRadioGroupType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();
    this.sanitizedController = new SanitizationController<
      BlrRadioGroupType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }
  static styles = [staticFormStyles, staticRadioStyles, componentSpecificStaticStyles];

  @property({ type: Boolean }) accessor disabled: boolean | undefined;
  @property() accessor name: string | undefined;
  @property() accessor sizeVariant: InputSizesType | undefined;
  @property({ type: Boolean }) accessor hasLegend: boolean | undefined;
  @property({ type: Boolean }) accessor required: boolean | undefined;
  @property({ type: Boolean }) accessor hasError: boolean | undefined;
  @property() accessor errorIcon: SizelessIconType | undefined;
  @property({ type: Boolean }) accessor hasHint: boolean | undefined;
  @property() accessor groupHintMessageIcon: SizelessIconType | undefined;
  @property() accessor groupErrorMessage: string | undefined;
  @property() accessor groupHintMessage: string | undefined;
  @property() accessor groupErrorMessageIcon: SizelessIconType | undefined;
  @property() accessor legend: string | undefined;
  @property() accessor direction: RadioGroupDirection | undefined;
  @property() accessor theme: ThemeType | undefined;

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

  protected firstUpdated() {
    this.handleSlotChange();
  }

  protected handleSlotChange = () => {
    const sanitize = this.sanitizedController.values;
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
      item.theme = sanitize.theme;
      item.sizeVariant = sanitize.sizeVariant;

      this._radioCheckedSignalSubscriptionDisposers.push(
        item.signals.checked.subscribe((value) => this.handleRadioCheckedSignal(item, value)),
      );
    });
  };

  protected render() {
    const sanitize = this.sanitizedController.values;
    if (!sanitize.sizeVariant) {
      return null;
    }

    const legendClasses = classMap({
      'blr-legend': true,
      [sanitize.sizeVariant]: sanitize.sizeVariant,
      'error': this.hasError || false,
    });

    const legendWrapperClasses = classMap({
      'blr-legend-wrapper': true,
      [sanitize.theme]: sanitize.theme,
      [sanitize.sizeVariant]: sanitize.sizeVariant,
    });

    const classes = classMap({
      [sanitize.theme]: sanitize.theme,
      [sanitize.sizeVariant]: sanitize.sizeVariant,
      disabled: this.disabled || false,
      error: this.hasError || false,
      [sanitize.direction]: sanitize.direction,
    });

    const captionContent = html`
      ${this.hasHint && (this.groupHintMessage || this.groupHintMessageIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'hint',
            theme: sanitize.theme,
            sizeVariant: sanitize.sizeVariant,
            message: this.groupHintMessage,
            icon: this.groupHintMessageIcon,
          })
        : nothing}
      ${this.hasError && (this.groupErrorMessage || this.groupErrorMessageIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'error',
            theme: sanitize.theme,
            sizeVariant: sanitize.sizeVariant,
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
            ${BlrFormCaptionGroupRenderFunction(
              { sizeVariant: sanitize.sizeVariant, theme: sanitize.theme },
              captionContent,
            )}
          </div>`
        : nothing}
    `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrRadioGroup);
}

export type BlrRadioGroupType = ElementInterface<BlrRadioGroup & BlrRadioGroupEventHandlers>;
