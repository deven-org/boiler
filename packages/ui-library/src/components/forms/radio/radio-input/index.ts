import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { InputSizesType } from '../../../../globals/types';
import { formDark, formLight } from '../../../../foundation/semantic-tokens/form.css';
import { radioDark, radioLight } from '../../../../foundation/component-tokens/radio.css';
import { BlrFormLabelInline } from '../../../internal-components/form-label/form-label-inline';
import { BlrFormHintRenderFunction } from '../../../internal-components/form-hint';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';

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
  @property() showHint?: boolean;
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
            ${this.showHint
              ? html`
                  <div class="hint-wrapper">
                    ${BlrFormHintRenderFunction({
                      message: this.hintMessage,
                      variant: 'hint',
                      size: this.size,
                      icon: this.hintIcon ? this.hintIcon : undefined,
                      theme: this.theme,
                    })}
                  </div>
                `
              : nothing}
            ${this.hasError
              ? html`
                  <div class="error-wrapper">
                    ${BlrFormHintRenderFunction({
                      message: this.errorMessage,
                      variant: 'error',
                      size: this.size,
                      icon: this.errorIcon ? this.errorIcon : undefined,
                      theme: this.theme,
                    })}
                  </div>
                `
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
