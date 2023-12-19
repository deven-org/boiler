import { LitElement, html, nothing } from 'lit-element';
import { classMap } from 'lit-html/directives/class-map.js';
import { customElement, property } from 'lit-element/decorators.js';
import { styleCustom } from './index.css';
import { InputSizesType } from '../../../../globals/types';
import { formDark, formLight } from '../../../../foundation/semantic-tokens/form.css';
import { radioDark, radioLight } from '../../../../foundation/component-tokens/radio.css';
import { BlrFormLabelInline } from '../../../internal-components/form-label/form-label-inline';
import { BlrFormCaptionGroupRenderFunction } from '../../../internal-components/form-caption-group';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';
import { BlrFormCaptionRenderFunction } from '../../../internal-components/form-caption-group/form-caption';

const TAG_NAME = 'blr-radio';

@customElement(TAG_NAME)
export class BlrRadio extends LitElement {
  static styles = [styleCustom];

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
                  size: this.size,
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
                  size: this.size,
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
            @input=${this.onChange}
            @blur=${this.onBlur}
            @focus=${this.onFocus}
          />
          <div class="label-wrapper">
            ${BlrFormLabelInline({
              labelText: this.label,
              forValue: this.optionId,
              labelSize: this.size,
            })}
            ${this.hasHint || this.hasError
              ? BlrFormCaptionGroupRenderFunction({ size: this.size }, captionContent)
              : nothing}
          </div>
        </div>
      `;
    }
  }
}

export type BlrRadioType = Omit<BlrRadio, keyof LitElement>;

export const BlrRadioRenderFunction = (params: BlrRadioType) =>
  genericBlrComponentRenderer<BlrRadioType>(TAG_NAME, { ...params });
