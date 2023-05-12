import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { form } from '../../foundation/semantic-tokens/form.css';
import { InputTypes, FormSizesType } from '../../globals/types';
import { BlrFormLabel } from '../form-label';
import { BlrFormHint } from '../form-hint';
import { IconType } from '@boiler/icons';
import { iconButton } from '../../foundation/component-tokens/action.css';

@customElement('blr-text-input')
export class BlrTextInput extends LitElement {
  static styles = [styleCustom, form, iconButton];

  @property() textInputId!: string;
  @property() type: InputTypes = 'text';
  @property() label!: string;
  @property() value!: string;
  @property() placeholder?: string;
  @property() disabled?: boolean;
  @property() size?: FormSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() maxLength?: number;
  @property() pattern?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() hint?: string;
  @property() hintIcon?: IconType;

  @state() protected currentType: InputTypes = this.type;

  toggleInputType() {
    this.currentType = this.currentType === 'password' ? 'text' : 'password';
  }

  render() {
    const wasInitialPasswordField = Boolean(this.type === 'password');

    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`disabled`]: this.disabled || false,
    });

    const inputClasses = classMap({
      [`error`]: this.hasError || false,
      [`error-input`]: this.hasError || false,
      [`${this.size}`]: this.size || 'md',
    });

    return html`
      <div class="blr-input ${classes}">
        ${BlrFormLabel({ labelText: this.label })}
        <input
          class="blr-form-element ${inputClasses}"
          id=${this.textInputId}
          type="${this.currentType}"
          value="${this.value}"
          placeholder="${this.placeholder}"
          ?disabled="${this.disabled}"
          ?required="${this.required}"
          @input="${this.onChange}"
          @blur="${this.onBlur}"
          @focus="${this.onFocus}"
          maxlength="${this.maxLength}"
          pattern="${this.pattern}"
          hasError="${this.hasError}"
        />

        ${wasInitialPasswordField
          ? html`<blr-icon
              class="blr-input-icon"
              @click=${this.toggleInputType}
              icon="${this.currentType.includes('password') ? 'blrCloseSm' : 'blrEyeSm'}"
              size="md"
              name="${this.currentType.includes('password') ? 'blrEyeSm' : this.hasError ? 'blrFlagSm' : this.hintIcon}"
              aria-hidden
            ></blr-icon>`
          : html``}
        ${BlrFormHint({
          message: this.hasError ? this.errorMessage : this.hint,
          variant: this.hasError ? 'error' : 'hint',
          iconName: this.hintIcon,
        })}
      </div>
    `;
  }
}
