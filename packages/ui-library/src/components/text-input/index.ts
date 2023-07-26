import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { form } from '../../foundation/semantic-tokens/form.css';
import { InputTypes, FormSizesType } from '../../globals/types';
import { BlrFormLabelRenderFunction } from '../internal-components/form-label';
import { BlrFormHintRenderFunction } from '../internal-components/form-hint';
import { IconType } from '@boiler/icons';
import { iconButton } from '../../foundation/component-tokens/action.css';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { BlrIconRenderFunction } from '../internal-components/icon';

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
  @property() showPassword!: boolean;
  @property() hasLabel!: boolean;

  @state() protected currentType: InputTypes = this.type;

  protected togglePassword = () => {
    return (this.showPassword = !this.showPassword);
  };

  protected render() {
    const toggleInputType = () => {
      this.currentType = this.currentType === 'password' ? 'text' : 'password';
    };

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

    const iconClasses = classMap({
      'blr-input-icon': true,
      [`${this.size}`]: this.size,
    });

    const getPasswordIcon = () => {
      return this.currentType.includes('password') ? 'blrEyeSm' : 'blrCloseSm';
    };

    return html`
      <div class="blr-input ${classes}">
        ${this.hasLabel
          ? html` ${BlrFormLabelRenderFunction({
              labelText: this.label,
              labelSize: this.size,
              labelAppendix: this.labelAppendix,
              forValue: this.textInputId,
            })}`
          : html``}
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
            @input=${this.onChange}
            @blur=${this.onBlur}
            @focus=${this.onFocus}
            maxlength="${this.maxLength}"
            pattern="${this.pattern}"
            hasError="${this.hasError}"
          />

          ${this.showInputIcon && !wasInitialPasswordField
            ? html`${BlrIconRenderFunction({
                icon: this.hasError ? 'blrErrorFilledSm' : calculateIconName(this.inputIcon, this.size),
                name: this.hasError ? 'blrErrorFilledSm' : calculateIconName(this.inputIcon, this.size),
                size: this.size,
                classMap: iconClasses,
                hideAria: true,
                disablePointerEvents: true,
              })}`
            : nothing}
          ${wasInitialPasswordField
            ? html`${BlrIconRenderFunction({
                icon: this.hasError ? 'blrErrorFilledSm' : getPasswordIcon(),
                name: this.hasError ? 'blrErrorFilledSm' : getPasswordIcon(),
                size: this.size,
                classMap: iconClasses,
                hideAria: true,
                disablePointerEvents: false,
                onClick: () => this.togglePassword(),
              })}`
            : nothing}
        </div>
        ${this.showHint
          ? html`
              ${BlrFormHintRenderFunction({
                message: this.hasError ? this.errorMessage : this.hintText,
                variant: this.hasError ? 'error' : 'hint',
                icon: calculateIconName(this.hintIcon, this.size),
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
  pattern,
  hasError,
  errorMessage,
  showInputIcon,
  inputIcon,
  showHint,
  hintText,
  hintIcon,
}: BlrTextInputType) => {
  return html`<blr-text-input
    .textInputId=${textInputId}
    .label=${label}
    .labelAppendix=${labelAppendix}
    .showInputIcon=${showInputIcon}
    .inputIcon=${inputIcon}
    .type=${type}
    .value=${value}
    .placeholder=${placeholder}
    .disabled=${disabled}
    .size=${size}
    .required=${required}
    .readonly=${readonly}
    .onChange=${onChange}
    .onBlur=${onBlur}
    .onFocus=${onFocus}
    .maxLength=${maxLength}
    .pattern=${pattern}
    .errorMessage=${errorMessage}
    .showHint=${showHint}
    .hintText=${hintText}
    .hintIcon=${hintIcon}
    .hasError=${hasError}
    class="example-layout-class"
  ></blr-text-input>`;
};
