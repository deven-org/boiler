import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { form } from '../../foundation/semantic-tokens/form.css';
import { InputTypes, FormSizesType } from '../../globals/types';
import { BlrFormLabel } from '../internal-components/form-label';
import { BlrFormHint } from '../internal-components/form-hint';
import { IconType } from '@boiler/icons';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { BlrIconRenderFunction } from '../icon';

@customElement('blr-text-input')
export class BlrTextInput extends LitElement {
  static styles = [styleCustom, form];

  @property() textInputId!: string;
  @property() type: InputTypes = 'text';
  @property() hasLabel = true;
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
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() showInputIcon = true;
  @property() inputIcon: IconType = 'blr360Sm';
  @property() showHint = true;
  @property() hintText?: string;
  @property() hintIcon: IconType = 'blrInfoSm';
  @property() pattern?: RegExp;

  @state() protected showPassword = false;

  togglePassword = () => {
    return (this.showPassword = !this.showPassword);
  };

  protected render() {
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
      return this.showPassword === true ? 'blrEyeOffSm' : 'blrEyeOnSm';
    };

    const getType = () => {
      if (this.type === 'password') {
        return this.showPassword ? 'text' : 'password';
      } else {
        return this.type;
      }
    };

    return html`
      <div class="blr-input ${classes}">
        ${this.hasLabel
          ? html` ${BlrFormLabel({
              labelText: this.label,
              labelSize: this.size,
              labelAppendix: this.labelAppendix,
              forValue: this.textInputId,
            })}`
          : html``}
        <div class="blr-input-inner-container">
          <input
            class="blr-form-element ${inputClasses}"
            id=${this.textInputId || nothing}
            type=${getType()}
            value=${this.value}
            placeholder=${this.placeholder || nothing}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            @input=${this.onChange}
            @blur=${this.onBlur}
            @focus=${this.onFocus}
            maxlength=${this.maxLength}
            hasError=${this.hasError}
            pattern=${this.pattern || nothing}
          />

          ${this.showInputIcon && !wasInitialPasswordField
            ? html`${BlrIconRenderFunction({
                icon: this.hasError ? 'blrErrorFilledSm' : calculateIconName(this.inputIcon, this.size),
                name: this.hasError ? 'blrErrorFilledSm' : calculateIconName(this.inputIcon, this.size),
                size: this.size,
                classMap: inputClasses,
                hideAria: true,
                disablePointerEvents: true,
              })}`
            : nothing}
          ${wasInitialPasswordField
            ? html`${BlrIconRenderFunction({
                icon: this.hasError ? 'blrErrorFilledSm' : getPasswordIcon(),
                name: this.hasError ? 'blrErrorFilledSm' : getPasswordIcon(),
                size: this.size,
                classMap: inputClasses,
                hideAria: true,
                disablePointerEvents: false,
                onClick: () => this.togglePassword(),
              })}`
            : nothing}
        </div>
        ${this.showHint
          ? html`
              ${BlrFormHint({
                message: this.hasError ? this.errorMessage : this.hintText,
                variant: this.hasError ? 'error' : 'hint',
                iconName: calculateIconName(this.hintIcon, this.size),
                size: 'sm',
              })}
            `
          : nothing}
      </div>
    `;
  }
}

export type BlrTextInputType = Omit<BlrTextInput, keyof LitElement>;

export const BlrTextInputRenderFunction = ({
  textInputId,
  type,
  hasLabel,
  label,
  labelAppendix,
  value,
  placeholder,
  disabled,
  readonly,
  size,
  required,
  onChange,
  onBlur,
  onFocus,
  maxLength,
  hasError,
  errorMessage,
  showInputIcon,
  inputIcon,
  showHint,
  hintText,
  hintIcon,
  pattern,
}: BlrTextInputType) => {
  return html`<blr-text-input
    class="example-layout-class"
    .textInputId=${textInputId}
    .type=${type}
    .hasLabel=${hasLabel}
    .label=${label}
    .labelAppendix=${labelAppendix}
    .value=${value}
    .placeholder=${placeholder}
    .disabled=${disabled}
    .readonly=${readonly}
    .size=${size}
    .required=${required}
    .onChange=${onChange}
    .onBlur=${onBlur}
    .onFocus=${onFocus}
    .maxLength=${maxLength}
    .errorMessage=${errorMessage}
    .showInputIcon=${showInputIcon}
    .inputIcon=${inputIcon}
    .showHint=${showHint}
    .hintText=${hintText}
    .hintIcon=${hintIcon}
    .hasError=${hasError}
    .pattern=${pattern}
  ></blr-input>`;
};
