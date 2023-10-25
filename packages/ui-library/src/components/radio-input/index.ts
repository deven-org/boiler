import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { InputSizesType, RadioOption } from '../../globals/types';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { radioDark, radioLight } from '../../foundation/component-tokens/radio.css';
import { BlrFormLabelInline } from '../form-label-inline';
import { BlrFormHintRenderFunction } from '../internal-components/form-hint';
import { IconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-radio';

@customElement(TAG_NAME)
export class BlrRadio extends LitElement {
  static styles = [styleCustom];

  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;
  @property() name?: string;
  @property() size: InputSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() hasError?: boolean;
  @property() errorIcon?: IconType;
  @property() option!: RadioOption;
  @property() showHint?: boolean;
  @property() hintIcon?: IconType;

  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight, radioLight] : [formDark, radioDark];

    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`disabled`]: this.disabled || false,
      [`readonly`]: this.readonly || false,
      [`checked`]: this.checked || this.option.checked || false,
      [`error`]: this.hasError || false,
    });

    const calculateOptionId = (label: string) => {
      return label ? label.replace(/ /g, '_').toLowerCase() : '';
    };

    const id = this.option.label ? calculateOptionId(this.option.label) : '';

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="blr-radio ${classes}">
        <input
          id=${id || nothing}
          class="${classes} input-control"
          type="radio"
          name=${this.name}
          value=${this.option.value || nothing}
          ?disabled=${this.disabled}
          ?readonly=${this.readonly}
          ?aria-disabled=${this.disabled}
          ?invalid=${this.hasError}
          ?aria-invalid=${this.hasError}
          ?checked=${this.checked}
          ?required=${this.required}
          @input=${this.onChange}
          @blur=${this.onBlur}
          @focus=${this.onFocus}
        />
        <div class="label-wrapper">
          ${this.option.label
            ? html`${BlrFormLabelInline({ labelText: this.option.label, forValue: this.id, labelSize: this.size })}`
            : nothing}
          ${this.showHint
            ? html`
                <div class="hint-wrapper">
                  ${BlrFormHintRenderFunction({
                    message: this.option.hintMessage,
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
                    message: this.option.errorMessage,
                    variant: 'error',
                    size: this.size,
                    icon: this.errorIcon ? this.errorIcon : undefined,
                    theme: this.theme,
                  })}
                </div>
              `
            : nothing}
        </div>
      </div> `;
  }
}

export type BlrRadioType = Omit<BlrRadio, keyof LitElement>;

export const BlrRadioRenderFunction = (params: BlrRadioType) =>
  genericBlrComponentRenderer<BlrRadioType>(TAG_NAME, { ...params });
