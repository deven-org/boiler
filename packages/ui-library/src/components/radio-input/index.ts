import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { RadioOption, SizesType } from '../../globals/types';

@customElement('blr-radio-input')
export class BlrRadioInput extends LitElement {
  static styles = [styleCustom];

  @property() id!: string;
  @property() textInputId!: string;
  @property() type!: string;
  @property() label!: string;
  @property() value!: string;
  @property() name!: string;
  @property() disabled?: boolean;
  @property() checked?: boolean;
  @property() size?: SizesType = 'md';
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
    });

    const inputclasses = classMap({
      [`error`]: this.hasError || false,
      [`error-input`]: this.hasError || false,
    });

    return html`
      <div class="blr-radio-input ${classes}">
        <input
          id=${this.id}
          class="${inputclasses}"
          type="radio"
          name="${this.label}"
          value="${this.name}"
          ?disabled="${this.disabled}"
          ?checked="${this.checked}"
          ?required="${this.required}"
          @input="${this.onChange}"
          @blur="${this.onBlur}"
          @focus="${this.onFocus}"
          hasError="${this.hasError}"
          invalid="{invalid}"
        />
        <label for=${this.id}>${this.label}</label><br />
      </div>
    `;
  }
}
