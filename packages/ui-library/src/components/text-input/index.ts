import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { form } from '../../foundation/semantic-tokens/form.css';
import { InputTypes, FormSizesType } from '../../globals/types';
import { BlrFormLabel } from '../internal-components/form-label';
import { BlrFormHint } from '../internal-components/form-hint';
import { IconType } from '@boiler/icons';
import { iconButton } from '../../foundation/component-tokens/action.css';
import { calculateIconName } from '../../utils/calculate-icon-name';

@customElement('blr-text-input')
export class BlrTextInput extends LitElement {
  static styles = [styleCustom, form, iconButton];

  @property() textInputId!: string;
  @property() type: InputTypes = 'text';
  @property() label!: string;
  @property() labelAppendix?: string;
  @property() value!: string;
  @property() placeholder?: string;
  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() size: FormSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() maxLength?: number;
  @property() pattern?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() showInputIcon = true;
  @property() inputIcon: IconType = 'blr360Sm';
  @property() showHint = true;
  @property() hintText?: string;
  @property() hintIcon: IconType = 'blrInfoSm';

  @state() protected currentType: InputTypes = this.type;

  connectedCallback() {
    super.connectedCallback();
    this.currentType = this.type;
  }

  toggleInputType() {
    this.currentType = this.currentType === 'password' ? 'text' : 'password';
  }

  render() {
    const wasInitialPasswordField = Boolean(this.type === 'password');

    const classes = classMap({
      [`${this.size}`]: this.size,
      [`disabled`]: this.disabled || false,
    });

    const inputClasses = classMap({
      [`error`]: this.hasError || false,
      [`error-input`]: this.hasError || false,
      [`${this.size}`]: this.size,
    });

    const getPasswordIcon = () => {
      return this.currentType.includes('password') ? 'blrEyeSm' : 'blrCloseSm';
    };

    return html`
      <div class="blr-input ${classes}">
        ${BlrFormLabel({
          labelText: this.label,
          labelSize: this.size,
          labelAppendix: this.labelAppendix,
          forValue: this.textInputId,
        })}
        <div class="blr-input-inner-container">
          <input
            class="blr-form-element ${inputClasses}"
            id=${this.textInputId}
            type="${this.currentType}"
            value="${this.value}"
            placeholder="${this.placeholder}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            ?required="${this.required}"
            @input="${this.onChange}"
            @blur="${this.onBlur}"
            @focus="${this.onFocus}"
            maxlength="${this.maxLength}"
            pattern="${this.pattern}"
            hasError="${this.hasError}"
          />

          ${this.showInputIcon && !wasInitialPasswordField
            ? html`<blr-icon
                class="blr-input-icon ${inputClasses}"
                icon="${this.hasError ? 'blrInfoSm' : calculateIconName(this.inputIcon, this.size)}"
                size="sm"
                aria-hidden
              ></blr-icon>`
            : nothing}
          ${wasInitialPasswordField
            ? html`<blr-icon
                class="blr-input-icon ${inputClasses}"
                @click=${this.toggleInputType}
                icon="${getPasswordIcon()}"
                size="sm"
                name="${getPasswordIcon()}"
                aria-hidden
              ></blr-icon>`
            : nothing}
        </div>
        ${this.showHint
          ? html`
              ${BlrFormHint({
                message: this.hasError ? this.errorMessage : this.hintText,
                variant: this.hasError ? 'error' : 'hint',
                iconName: calculateIconName(this.hintIcon, this.size),
                size: this.size,
              })}
            `
          : nothing}
      </div>
    `;
  }
}
