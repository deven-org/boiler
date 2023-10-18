import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { textInputLight, textInputDark } from '../../foundation/component-tokens/text-input.css';
import { InputTypes, FormSizesType } from '../../globals/types';
import { BlrFormLabelRenderFunction } from '../internal-components/form-label';
import { BlrFormHintRenderFunction } from '../internal-components/form-hint';
import { IconType } from '@boiler/icons';
import { iconButtonDark, iconButtonLight } from '../../foundation/component-tokens/action.css';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-text-input';

@customElement(TAG_NAME)
export class BlrTextInput extends LitElement {
  static styles = [styleCustom];

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
  @property() errorIcon: IconType = 'blrInfoSm';
  @property() hasLabel!: boolean;

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
    const dynamicStyles =
      this.theme === 'Light' ? [formLight, textInputLight, iconButtonLight] : [formDark, textInputDark, iconButtonDark];

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

    return html`
      <style>
        ${dynamicStyles.map((style) => style)}
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
          : html``}
        <div class="blr-input-wrapper ${inputContainerClasses}">
          <div class="blr-input-inner-container">
            <input
              class="blr-form-input ${inputClasses}"
              id=${this.textInputId}
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
                icon: this.hasError ? 'blrErrorFilledSm' : calculateIconName(this.inputIcon, this.size),
                name: this.hasError ? 'blrErrorFilledSm' : calculateIconName(this.inputIcon, this.size),
                size: this.size,
                classMap: iconClasses,
                hideAria: true,
                disablePointerEvents: this.disabled || this.readonly,
              })}`
            : nothing}
          ${wasInitialPasswordField && !this.readonly
            ? html`${BlrIconRenderFunction({
                icon: this.hasError ? 'blrErrorFilledSm' : getPasswordIcon(),
                name: this.hasError ? 'blrErrorFilledSm' : getPasswordIcon(),
                size: this.size,
                classMap: iconClasses,
                hideAria: true,
                disablePointerEvents: this.disabled || this.readonly,
                onClick: () => this.togglePassword(),
              })}`
            : nothing}
        </div>
        <div class="textinput-wrapper ${this.size}">
          ${this.showHint
            ? html`
                <div class="hint-wrapper">
                  ${BlrFormHintRenderFunction({
                    message: this.hintText || '',
                    variant: 'hint',
                    icon: this.hintIcon,
                    size: this.size,
                    theme: this.theme,
                  })}
                </div>
              `
            : nothing}
          ${this.hasError
            ? html`
                <div class="error-wrapper">
                  ${BlrFormHintRenderFunction({
                    message: this.errorMessage || 'Ups, an error occured..',
                    variant: 'error',
                    icon: this.errorIcon,
                    size: this.size,
                    theme: this.theme,
                  })}
                </div>
              `
            : nothing}
        </div>
      </div>
    `;
  }
}

export type BlrTextInputType = Omit<BlrTextInput, keyof LitElement>;

export const BlrTextInputRenderFunction = (params: BlrTextInputType) =>
  genericBlrComponentRenderer<BlrTextInputType>(TAG_NAME, { ...params });
