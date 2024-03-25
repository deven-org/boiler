import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property, query } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { InputSizesType } from '../../globals/types';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { radioDark, radioLight } from '../../foundation/component-tokens/radio.css';
import { TAG_NAME } from './renderFunction';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction';
import { createBlrBlurEvent, createBlrFocusEvent, createBlrSelectedValueChangeEvent } from '../../globals/events';
import { LitElementCustom } from '../../utils/lit-element-custom';

export class BlrRadio extends LitElementCustom {
  static styles = [styleCustom];

  @query('input')
  protected _radioNode!: HTMLInputElement;

  @property() optionId!: string;
  @property() label!: string;
  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;
  @property() name?: string;
  @property() size?: InputSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorIcon?: SizelessIconType;
  @property() hasHint?: boolean;
  @property() hintMessage?: string;
  @property() hintIcon?: SizelessIconType;

  @property() theme: ThemeType = 'Light';

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

  protected handleChange(event: Event) {
    const selectedValue = this._radioNode.value;
    this.dispatchEvent(createBlrSelectedValueChangeEvent({ originalEvent: event, selectedValue }));
  }

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [formLight, radioLight] : [formDark, radioDark];

      const classes = classMap({
        [this.size]: this.size,
        disabled: this.disabled || false,
        readonly: this.readonly || false,
        checked: this.checked || false,
        error: this.hasError || false,
      });

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintIcon)
          ? html`
              <div class="hint-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'hint',
                  theme: this.theme,
                  sizeVariant: this.size,
                  message: this.hintMessage,
                  icon: this.hintIcon,
                })}
              </div>
            `
          : nothing}
        ${this.hasError && (this.errorMessage || this.errorIcon)
          ? html`
              <div class="error-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'error',
                  theme: this.theme,
                  sizeVariant: this.size,
                  message: this.errorMessage,
                  icon: this.errorIcon,
                })}
              </div>
            `
          : nothing}
      `;

      return html`
        <style>
          ${dynamicStyles}
        </style>
        <div class="blr-radio ${classes}">
          <input
            id=${this.optionId || nothing}
            class="${classes} input-control"
            type="radio"
            name=${this.name}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?invalid=${this.hasError}
            ?checked=${this.checked}
            ?required=${this.required}
            @input=${this.handleChange}
            @focus=${this.handleFocus}
            @blur=${this.handleBlur}
          />
          <div class="label-wrapper">
            ${BlrFormLabelInlineRenderFunction({
              labelText: this.label,
              forValue: this.optionId,
              labelSize: this.size,
            })}
            ${this.hasHint || this.hasError
              ? BlrFormCaptionGroupRenderFunction({ sizeVariant: this.size }, captionContent)
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

export type BlrRadioType = Omit<BlrRadio, keyof LitElementCustom>;
