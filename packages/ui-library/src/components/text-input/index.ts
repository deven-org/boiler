import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { password } from '../../foundation/semantic-tokens/form.css';
import { SizesType } from '../../globals/types';
import { BlrFormLabel } from '../form-label';
import { BlrFormHint } from '../form-hint';
import { IconType } from '@boiler/icons';

@customElement('blr-password')
export class BlrPassword extends LitElement {
  static styles = [styleCustom, password];

  @property() passwordId!: string;
  @property() type!: string;
  @property() value!: string;
  @property() label!: string;
  @property() placeholder?: string;
  @property() disabled?: boolean;
  @property() size?: SizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() hint?: string;
  @property() hintIcon?: IconType;

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
      <div class="blr-password ${classes}">
        ${BlrFormLabel({ labelText: this.label })}
        <input
          class="blr-input-password ${inputclasses}"
          id=${this.passwordId}
          value=${this.value}
          type="password"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          @input="${this.onChange}"
          @blur="${this.onBlur}"
          @focus="${this.onFocus}"
          hasError="${this.hasError}"
        />
        <blr-icon
          class="blr-input-icon ${inputclasses}"
          name="${this.hasError ? 'blrFlagSm' : this.hintIcon}"
          aria-hidden
        ></blr-icon>
        ${BlrFormHint({
          message: (this.hasError ? this.errorMessage : this.hint) || 'Please enter the passord',
          variant: this.hasError ? 'error' : 'hint',
        })}
      </div>
    `;
  }
}
