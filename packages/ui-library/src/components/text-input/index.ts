import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { textInputLight, textInputDark } from './index.css';
import { InputTypes, FormSizesType, SizesType } from '../../globals/types';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelRenderFunction } from '../form-label/renderFunction';
import { BlrIconRenderFunction } from '../icon/renderFunction';
import { TAG_NAME } from './renderFunction';
import {
  BlrBlurEvent,
  BlrFocusEvent,
  BlrSelectEvent,
  BlrTextValueChangeEvent,
  createBlrBlurEvent,
  createBlrFocusEvent,
  createBlrSelectEvent,
  createBlrTextValueChangeEvent,
} from '../../globals/events';

export type BlrTextInputEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrTextValueChange?: (event: BlrTextValueChangeEvent) => void;
  blrSelect?: (event: BlrSelectEvent) => void;
};

/**
 * @fires blrFocus TextInput received focus
 * @fires blrBlur TextInput lost focus
 * @fires blrTextValueChange TextInput value changed
 * @fires blrSelect Text in TextInput got selected
 */
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
  @property() maxLength?: number;
  @property() pattern?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() showInputIcon = true;
  @property() inputIcon: SizelessIconType = 'blr360';
  @property() hasHint = true;
  @property() hintMessage?: string;
  @property() hintIcon?: SizelessIconType;
  @property() errorIcon?: SizelessIconType;
  @property() hasLabel!: boolean;
  @property() name!: string;
  @property() theme: ThemeType = 'Light';

  @state() protected currentType: InputTypes = this.type;
  @state() protected isFocused = false;

  protected togglePassword = () => {
    this.currentType = this.currentType === 'password' ? 'text' : 'password';
  };

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled) {
      this.isFocused = true;
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.isFocused = false;
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  protected handleChange = (event: Event) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrTextValueChangeEvent({ originalEvent: event }));
    }
  };

  protected handleSelect = (event: Event) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrSelectEvent({ originalEvent: event }));
    }
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
        'focus': this.isFocused || false,
        'error-input': this.hasError || false,
        'disabled': this.disabled || false,
        [`${this.size}`]: this.size,
      });

      const iconClasses = classMap({
        'blr-input-icon': true,
        [`${this.size}`]: this.size,
        'noPointerEvents': Boolean(this.disabled || this.readonly),
      });

      const getPasswordIcon = () => {
        return this.currentType.includes('password') ? 'blrEyeOffSm' : 'blrEyeOnSm';
      };

      const iconSizeVariant = getComponentConfigToken([
        'sem',
        'forms',
        'inputfield',
        'icon',
        'sizevariant',
        this.size,
      ]).toLowerCase() as SizesType;

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintIcon)
          ? BlrFormCaptionRenderFunction({
              variant: 'hint',
              theme: this.theme,
              size: this.size,
              message: this.hintMessage,
              icon: this.hintIcon,
            })
          : nothing}
        ${this.hasError && (this.errorMessage || this.errorIcon)
          ? BlrFormCaptionRenderFunction({
              variant: 'error',
              theme: this.theme,
              size: this.size,
              message: this.errorMessage,
              icon: this.errorIcon,
            })
          : nothing}
      `;

      return html`
        <style>
          ${dynamicStyles}
        </style>
        <div class="blr-text-input ${classes}">
          ${this.hasLabel
            ? html`
                <div class="label-wrapper">
                  ${BlrFormLabelRenderFunction({
                    label: this.label,
                    sizeVariant: this.size,
                    labelAppendix: this.labelAppendix,
                    forValue: this.textInputId,
                    theme: this.theme,
                    hasError: Boolean(this.hasError),
                  })}
                </div>
              `
            : nothing}
          <div class="blr-input-wrapper ${inputContainerClasses}">
            <div class="blr-input-inner-container">
              <input
                class="blr-form-input ${inputClasses}"
                id=${this.textInputId}
                name="${this.name || nothing}"
                aria-label=${this.arialabel}
                type="${this.currentType}"
                .value="${this.value}"
                placeholder="${this.placeholder}"
                ?disabled="${this.disabled}"
                ?readonly="${this.readonly}"
                ?required="${this.required}"
                @input=${this.handleChange}
                @blur=${this.handleBlur}
                @focus=${this.handleFocus}
                maxlength="${this.maxLength}"
                pattern="${this.pattern}"
                hasError="${this.hasError}"
                @select=${this.handleSelect}
              />
            </div>
            ${this.showInputIcon && !wasInitialPasswordField && !this.readonly
              ? html`${BlrIconRenderFunction(
                  {
                    icon: this.hasError
                      ? calculateIconName(`blrErrorFilled`, iconSizeVariant)
                      : calculateIconName(this.inputIcon, iconSizeVariant),
                    sizeVariant: iconSizeVariant,
                    classMap: iconClasses,
                    fillParent: false,
                  },
                  {
                    'aria-hidden': true,
                    'name':
                      (this.hasError
                        ? calculateIconName(`blrErrorFilled`, iconSizeVariant)
                        : calculateIconName(this.inputIcon, iconSizeVariant)) || '',
                  }
                )}`
              : nothing}
            ${wasInitialPasswordField && !this.readonly
              ? html`${BlrIconRenderFunction(
                  {
                    icon: this.hasError ? calculateIconName(`blrErrorFilled`, iconSizeVariant) : getPasswordIcon(),
                    sizeVariant: iconSizeVariant,
                    classMap: iconClasses,
                    fillParent: false,
                    blrClick: this.togglePassword,
                  },
                  {
                    'aria-hidden': true,
                    'name':
                      (this.hasError ? calculateIconName(`blrErrorFilled`, iconSizeVariant) : getPasswordIcon()) || '',
                  }
                )}`
              : nothing}
          </div>
          ${this.hasHint || this.hasError
            ? BlrFormCaptionGroupRenderFunction({ sizeVariant: this.size }, captionContent)
            : nothing}
        </div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrTextInput);
}

export type BlrTextInputType = Omit<BlrTextInput, keyof LitElement> & BlrTextInputEventHandlers;
