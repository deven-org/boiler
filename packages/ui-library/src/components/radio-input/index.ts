import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { InputSizesType, RadioOption } from '../../globals/types';
import { form } from '../../foundation/semantic-tokens/form.css';
import { radio } from '../../foundation/semantic-tokens/radioInput.css';
import { BlrFormLabel } from '../internal-components/form-label';

@customElement('blr-radio')
export class BlrRadio extends LitElement {
  static styles = [styleCustom, form, radio];

  @property() radioId!: string;
  @property() label!: string;
  @property() value!: string;
  @property() name!: string;
  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;
  @property() size?: InputSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() options!: RadioOption[];

  protected render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`disabled`]: this.disabled || false,
      [`readonly`]: this.readonly || false,
    });

    const inputclasses = classMap({
      [`error`]: this.hasError || false,
      [`error-input`]: this.hasError || false,
    });

    return html`
      <div class="blr-radio ${classes}">
        <input
          id=${this.radioId}
          class="${inputclasses}"
          type="radio"
          name="${this.name}"
          value="${this.value}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          ?required="${this.required}"
          ?readonly="${this.readonly}"
          @input="${this.onChange}"
          @blur="${this.onBlur}"
          @focus="${this.onFocus}"
          hasError="${this.hasError}"
          invalid="{invalid}"
        />
        ${BlrFormLabel({ labelText: this.label, labelSize: this.size || 'md', forValue: this.id })}
      </div>
    `;
  }
}

export type BlrRadioType = Omit<BlrRadio, keyof LitElement>;

export const BlrRadioRenderFunction = ({
  radioId,
  value,
  name,
  label,
  disabled,
  size,
  required,
  readonly,
  onChange,
  onBlur,
  onFocus,
  errorMessage,
  hasError,
  options,
}: BlrRadioType) => {
  return html`<blr-radio
    .radioId=${radioId}
    .label=${label}
    .name=${name}
    .value=${value}
    .disabled=${disabled}
    .size=${size}
    .required=${required}
    .readonly=${readonly}
    .onChange=${onChange}
    .onBlur=${onBlur}
    .onFocus=${onFocus}
    .errorMessage=${errorMessage}
    .hasError=${hasError}
    .options=${options}
    class="example-layout-class"
  ></blr-radio>`;
};
