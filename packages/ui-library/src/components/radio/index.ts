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
  @property() sizeVariant?: InputSizesType = 'md';
  @property() required?: boolean;
  @property() blrChange?: HTMLElement['oninput'];
  @property() blrBlur?: HTMLElement['blur'];
  @property() blrFocus?: HTMLElement['focus'];
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorMessageIcon?: SizelessIconType;
  @property() hasHint?: boolean;
  @property() hintMessage?: string;
  @property() hintMessageIcon?: SizelessIconType;

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
    this.dispatchEvent(
      createBlrSelectedValueChangeEvent({ originalEvent: event, selectedValue: this._radioNode.value })
    );
  }

  protected render() {
    if (this.sizeVariant) {
      const dynamicStyles = this.theme === 'Light' ? [formLight, radioLight] : [formDark, radioDark];

      const classes = classMap({
        [this.sizeVariant]: this.sizeVariant,
        disabled: this.disabled || false,
        readonly: this.readonly || false,
        checked: this.checked || false,
        error: this.hasError || false,
      });

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
              labelSize: this.sizeVariant,
            })}
            ${this.hasHint || this.hasError
              ? BlrFormCaptionGroupRenderFunction({ sizeVariant: this.sizeVariant }, captionContent)
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
