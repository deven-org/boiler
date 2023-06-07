import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { InputSizesType, RadioOption } from '../../globals/types';
import { form } from '../../foundation/semantic-tokens/form.css';
import { radioInput } from '../../foundation/semantic-tokens/radioInput.css';
import { BlrFormLabel } from '../internal-components/form-label';

@customElement('blr-radio-input')
export class BlrRadioInput extends LitElement {
  static styles = [styleCustom, form, radioInput];

  @property() id!: string;
  @property() textInputId!: string;
  @property() type!: string;
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

  render() {
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
      <div class="blr-form-element blr-radio-input ${classes}">
        <input
          id=${this.id}
          class="${inputclasses}"
          type="radio"
          name="${this.label}"
          value="${this.name}"
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
        ${BlrFormLabel({ labelText: this.label, labelSize: this.size || 'md' })}
      </div>
    `;
  }
}
