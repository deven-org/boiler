import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { query } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { InputSizesType } from '../../globals/types.js';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css.js';
import { staticStyles as staticRadioStyles } from '../../foundation/component-tokens/radio.css.js';
import { TAG_NAME } from './renderFunction.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction.js';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction.js';
import {
  createBlrBlurEvent,
  createBlrFocusEvent,
  createBlrSelectedValueChangeEvent,
  BlrBlurEvent,
  BlrFocusEvent,
  BlrCheckedChangeEvent,
} from '../../globals/events.js';
import { LitElementCustom } from '../../utils/lit/element.js';
import { SignalHub } from '../../utils/lit/signals.js';

/**
 * @fires blrFocus Radio received focus
 * @fires blrBlur Radio lost focus
 * @fires blrSelectedValueChangeEvent Radio selected value changed
 */

export class BlrRadio extends LitElementCustom implements PublicReactiveProperties {
  public declare signals: SignalHub<PublicReactiveProperties>;

  static styles = [staticFormStyles, staticRadioStyles];

  @query('input')
  protected accessor _radioNode!: HTMLInputElement;

  @property() accessor optionId!: string;
  @property() accessor label!: string;
  @property() accessor disabled: boolean | undefined;
  @property({ type: Boolean }) accessor checked: boolean | undefined;
  @property() accessor name: string | undefined;
  @property() accessor sizeVariant: InputSizesType | undefined = 'md';
  @property() accessor required: boolean | undefined;
  @property() accessor hasError: boolean | undefined;
  @property() accessor errorMessage: string | undefined;
  @property() accessor errorMessageIcon: SizelessIconType | undefined;
  @property() accessor hasHint: boolean | undefined;
  @property() accessor hintMessage: string | undefined;
  @property() accessor hintMessageIcon: SizelessIconType | undefined;
  @property() accessor value: string | undefined;
  @property() accessor theme: ThemeType = 'Light';

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  protected handleClick(event: Event) {
    event.preventDefault();

    if (!this.disabled) {
      const changeEvent = createBlrSelectedValueChangeEvent({
        originalEvent: event,
        selectedValue: this._radioNode.value,
      });

      this.dispatchEvent(changeEvent);

      if (!changeEvent.defaultPrevented) {
        this.checked = true;
      }
    }
  }

  protected render() {
    if (this.sizeVariant) {
      const classes = classMap({
        [this.sizeVariant]: this.sizeVariant,
        [this.theme]: this.theme,
        disabled: this.disabled || false,
        checked: this.checked || false,
        error: this.hasError || false,
      });

      const calculateOptionId = (label: string) => {
        return label.replace(/ /g, '_').toLowerCase();
      };

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintMessageIcon)
          ? html`
              <div class="hint-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'hint',
                  theme: this.theme,
                  sizeVariant: this.sizeVariant,
                  message: this.hintMessage,
                  icon: this.hintMessageIcon,
                })}
              </div>
            `
          : nothing}
        ${this.hasError && (this.errorMessage || this.errorMessageIcon)
          ? html`
              <div class="error-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'error',
                  theme: this.theme,
                  sizeVariant: this.sizeVariant,
                  message: this.errorMessage,
                  icon: this.errorMessageIcon,
                })}
              </div>
            `
          : nothing}
      `;
      const id = calculateOptionId(this.label);
      return html`
        <div class="blr-radio ${classes}">
          <input
            id=${id || nothing}
            class="${classes} input-control"
            type="radio"
            name=${this.name}
            ?disabled=${this.disabled}
            ?invalid=${this.hasError}
            ?checked=${this.checked}
            .checked=${this.checked || nothing}
            ?required=${this.required}
            @click=${this.handleClick}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />
          <div class="label-wrapper">
            ${BlrFormLabelInlineRenderFunction({
              labelText: this.label,
              forValue: id,
              labelSize: this.sizeVariant,
              theme: this.theme,
            })}
            ${(this.hasHint && (this.hintMessageIcon || this.hintMessage)) ||
            (this.hasError && (this.errorMessageIcon || this.errorMessage))
              ? BlrFormCaptionGroupRenderFunction({ sizeVariant: this.sizeVariant, theme: this.theme }, captionContent)
              : nothing}
          </div>
        </div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrRadio);
}

export type BlrRadioType = PublicReactiveProperties & PublicMethods & BlrRadioEventHandlers;

export type PublicReactiveProperties = {
  optionId: string;
  label: string;
  disabled?: boolean;
  name?: string;
  sizeVariant?: InputSizesType;
  required?: boolean;
  hasError?: boolean;
  errorMessage?: string;
  errorMessageIcon?: SizelessIconType;
  hasHint?: boolean;
  hintMessage?: string;
  hintMessageIcon?: SizelessIconType;
  value?: string;
  theme: ThemeType;
  checked?: boolean;
};

export type PublicMethods = unknown;

export type BlrRadioEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrSelectedValueChangeEvent?: (event: BlrCheckedChangeEvent) => void;
};
