import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './css';
import { action } from '../../foundation/semantic-tokens/action';
import { textInput } from '../../foundation/component-tokens/input';
import { SizesType, InputTypes } from '../../globals/types';

@customElement('blr-text-input')
export class BlrTextInput extends LitElement {
  static styles = [styleCustom, action, textInput];

  @property() textInputId: string;
  @property() type: InputTypes;
  @property() label: string;
  @property() value: string;
  @property() placeholder?: string;
  @property() disabled?: boolean;
  @property() size?: SizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() maxLength: number;
  @property() minLength: number;
  @property() pattern: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() hint: string;

  render() {
    const classes = {
      [`${this.size}`]: this.size,
      disabled: this.disabled,
    };

    return html`
      <div class="blr-input ${classMap(classes)}">
        <span class="blr-text-label">${this.label}</span>
        <input
          class="blr-text-input "
          id=${this.textInputId}
          type="${this.type}"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          @input="${this.onChange}"
          @blur="${this.onBlur}"
          @focus="${this.onFocus}"
          maxlength="${this.maxLength}"
          minlength="${this.minLength}"
          pattern="${this.pattern}"
          hasError="${this.hasError}"
        />
        <span class="blr-hint-error ${this.hasError ? 'blr-error' : 'blr-hint'}">
          <blr-icon name="blr360Sm"></blr-icon>
          <span>${this.hasError ? this.errorMessage : this.hint}</span>
        </span>
      </div>
    `;
  }
}
