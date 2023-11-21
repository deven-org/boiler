import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';
import { textInputLight, textInputDark } from '../../../foundation/component-tokens/text-input.css';
import { InputTypes, FormSizesType, SizesType } from '../../../globals/types';
import { BlrFormLabelRenderFunction } from '../../internal-components/form-label';
import { SizelessIconType } from '@boiler/icons';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { BlrIconRenderFunction } from '../../ui/icon';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-text-input';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';
import { BlrFormInfoRenderFunction } from '../../internal-components/form-info';

@customElement(TAG_NAME)
export class BlrTextInput extends LitElement {
  static styles = [styleCustom];

  @property() textInputId!: string;
  @property() type: InputTypes = 'text';
  @property() arialabel!: string;
  @property() label!: string;
  @property() labelAppendix?: string;
  @property() value!: string;
  @property() placeholder?: string;
  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() size?: FormSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() onSelect?: HTMLElement['onselect'];
  @property() maxLength?: number;
  @property() pattern?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() showInputIcon = true;
  @property() inputIcon: SizelessIconType = 'blr360';
  @property() showHint = true;
  @property() hintText?: string;
  @property() hintIcon: SizelessIconType = 'blrInfo';
  @property() errorIcon: SizelessIconType = 'blrInfo';
  @property() hasLabel!: boolean;
  @property() name!: string;

  @property() theme: ThemeType = 'Light';

  @state() protected currentType: InputTypes = this.type;
  @state() protected isFocused = false;

  protected togglePassword = () => {
    this.currentType = this.currentType === 'password' ? 'text' : 'password';
  };

  protected handleFocus = () => {
    this.isFocused = true;
  };

  protected handleBlur = () => {
    this.isFocused = false;
  };

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [formLight, textInputLight] : [formDark, textInputDark];

      const wasInitialPasswordField = Boolean(this.type === 'password');

      const classes = classMap({
        [`${this.size}`]: this.size,
      });

      const inputClasses = classMap({
        [`${this.size}`]: this.size,
      });

      const inputContainerClasses = classMap({
        [`focus`]: this.isFocused || false,
        [`error-input`]: this.hasError || false,
        [`disabled`]: this.disabled || false,
        [`${this.size}`]: this.size,
      });

      const iconClasses = classMap({
        'blr-input-icon': true,
        [`${this.size}`]: this.size,
      });

      const getPasswordIcon = () => {
        return this.currentType.includes('password') ? 'blrEyeOffSm' : 'blrEyeOnSm';
      };

      const iconSizeVariant = getComponentConfigToken([
        'SizeVariant',
        'Forms',
        this.size.toUpperCase(),
        'InputField',
        'Icon',
      ]).toLowerCase() as SizesType;

      return html`
        <style>
          ${dynamicStyles}
        </style>
        <div class="blr-text-input ${classes}">
          ${this.hasLabel
            ? html`
                ${BlrFormLabelRenderFunction({
                  labelText: this.label,
                  labelSize: this.size,
                  labelAppendix: this.labelAppendix,
                  forValue: this.textInputId,
                  theme: this.theme,
                  variant: this.hasError ? 'error' : 'label',
                })}
              `
            : nothing}
          <div class="blr-input-wrapper ${inputContainerClasses}">
            <div class="blr-input-inner-container">
              <input
                class="blr-form-input ${inputClasses}"
                id=${this.textInputId}
                aria-label=${this.arialabel}
                type="${this.currentType}"
                .value="${this.value}"
                placeholder="${this.placeholder}"
                ?disabled="${this.disabled}"
                ?readonly="${this.readonly}"
                ?required="${this.required}"
                @input=${this.onChange}
                @blur=${this.handleBlur}
                @focus=${this.handleFocus}
                maxlength="${this.maxLength}"
                pattern="${this.pattern}"
                hasError="${this.hasError}"
              />
            </div>
            ${this.showInputIcon && !wasInitialPasswordField && !this.readonly
              ? html`${BlrIconRenderFunction({
                  icon: this.hasError
                    ? calculateIconName(`blrErrorFilled`, iconSizeVariant)
                    : calculateIconName(this.inputIcon, iconSizeVariant),
                  name: this.hasError
                    ? calculateIconName(`blrErrorFilled`, iconSizeVariant)
                    : calculateIconName(this.inputIcon, iconSizeVariant),
                  size: iconSizeVariant,
                  classMap: iconClasses,
                  hideAria: true,
                  disablePointerEvents: this.disabled || this.readonly,
                })}`
              : nothing}
            ${wasInitialPasswordField && !this.readonly
              ? html`${BlrIconRenderFunction({
                  icon: this.hasError ? calculateIconName(`blrErrorFilled`, iconSizeVariant) : getPasswordIcon(),
                  name: this.hasError ? calculateIconName(`blrErrorFilled`, iconSizeVariant) : getPasswordIcon(),
                  size: iconSizeVariant,
                  classMap: iconClasses,
                  hideAria: true,
                  disablePointerEvents: this.disabled || this.readonly,
                  onClick: () => this.togglePassword(),
                })}`
              : nothing}
          </div>
          ${this.showHint || this.hasError
            ? html`${BlrFormInfoRenderFunction({
                theme: this.theme,
                size: this.size,
                showHint: this.showHint,
                hintText: this.hintText,
                hintIcon: this.hintIcon,
                hasError: !!this.hasError,
                errorMessage: this.errorMessage,
                errorIcon: this.errorIcon,
              })}`
            : nothing}
        </div>
      `;
    }
  }
}

export type BlrTextInputType = Omit<BlrTextInput, keyof LitElement>;

export const BlrTextInputRenderFunction = (params: BlrTextInputType) =>
  genericBlrComponentRenderer<BlrTextInputType>(TAG_NAME, { ...params });
