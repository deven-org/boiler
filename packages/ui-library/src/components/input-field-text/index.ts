import { PropertyValueMap, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property, query, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
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
import { LitElementCustom } from '../../utils/lit-element-custom';
import { BlrIconEventHandlers } from '../icon';

export type BlrInputFieldTextEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrTextValueChange?: (event: BlrTextValueChangeEvent) => void;
  blrSelect?: (event: BlrSelectEvent) => void;
};

/**
 * @fires blrFocus InputFieldText received focus
 * @fires blrBlur InputFieldText lost focus
 * @fires blrTextValueChange InputFieldText value changed
 * @fires blrSelect Text in InputFieldText got selected
 */
export class BlrInputFieldText extends LitElementCustom {
  static styles = [styleCustom];

  @query('input')
  protected _inputFieldTextNode!: HTMLInputElement;

  @property() inputFieldTextId!: string;
  @property() type: InputTypes = 'text';
  @property() arialabel!: string;
  @property() hasLabel!: boolean;
  @property() label!: string;
  @property() labelAppendix?: string;
  @property() value!: string;
  @property() placeholder?: string;
  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() sizeVariant?: FormSizesType = 'md';
  @property() required?: boolean;
  @property() maxLength?: number;
  @property() pattern?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() icon: SizelessIconType = 'blr360';
  @property() hasHint = true;
  @property() hintMessage?: string;
  @property() hintMessageIcon?: SizelessIconType;
  @property() errorMessageIcon?: SizelessIconType;

  @property() name!: string;
  @property() theme: ThemeType = 'Light';

  @state() protected currentType: InputTypes = this.type;
  @state() protected isFocused = false;

  protected willUpdate(_changedProperties: PropertyValueMap<never> | Map<PropertyKey, unknown>): void {
    if (_changedProperties.get('type')) {
      this.currentType = this.type;
    }
  }

  protected togglePassword = () => {
    if (this.type !== 'password') {
      return;
    }

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
      this.dispatchEvent(
        createBlrTextValueChangeEvent({ originalEvent: event, inputValue: this._inputFieldTextNode.value })
      );
    }
  };

  protected handleSelect = (event: Event) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrSelectEvent({ originalEvent: event }));
    }
  };

  protected handleIconClick: BlrIconEventHandlers['blrClick'] = () => {
    if (this.disabled) {
      return;
    }

    this.togglePassword();
  };

  protected renderInputIcon() {
    if (this.type !== 'password' && !this.hasIcon) {
      return nothing;
    }

    const iconSizeVariant = getComponentConfigToken([
      'sem',
      'forms',
      'inputfield',
      'icon',
      'sizevariant',
      this.sizeVariant!,
    ]).toLowerCase() as SizesType;

    const iconClasses = classMap({
      'icon-input': true,
      [this.sizeVariant!]: this.sizeVariant!,
      'no-pointer-events': Boolean(this.disabled || this.type !== 'password'),
      [this.theme]: this.theme,
    });

    const iconName: SizelessIconType =
      this.type === 'password' ? (this.currentType === 'password' ? 'blrEyeOff' : 'blrEyeOn') : this.icon;

    return BlrIconRenderFunction(
      {
        icon: calculateIconName(iconName, iconSizeVariant),
        sizeVariant: iconSizeVariant,
        classMap: iconClasses,
        fillParent: false,
        blrClick: this.handleIconClick,
      },
      {
        'aria-hidden': this.type !== 'password',
      }
    );
  }

  protected render() {
    if (this.sizeVariant) {
      const classes = classMap({
        'blr-input-field-text': true,
        [this.sizeVariant]: this.sizeVariant,
        [this.theme]: this.theme,
      });

      const inputClasses = classMap({
        'error-input': this.hasError || false,
        'disabled': this.disabled || false,
        [this.sizeVariant]: this.sizeVariant,
      });

      const inputContainerClasses = classMap({
        'focus': this.isFocused || false,
        'error-input': this.hasError || false,
        'disabled': this.disabled || false,
        [this.sizeVariant]: this.sizeVariant,
        [this.theme]: this.theme,
      });

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintMessageIcon)
          ? BlrFormCaptionRenderFunction({
              variant: 'hint',
              theme: this.theme,
              sizeVariant: this.sizeVariant,
              message: this.hintMessage,
              icon: this.hintMessageIcon,
            })
          : nothing}
        ${this.hasError && (this.errorMessage || this.errorMessageIcon)
          ? BlrFormCaptionRenderFunction({
              variant: 'error',
              theme: this.theme,
              sizeVariant: this.sizeVariant,
              message: this.errorMessage,
              icon: this.errorMessageIcon,
            })
          : nothing}
      `;

      return html`
        <div class="${classes}">
          ${this.hasLabel
            ? html`
                <div class="label-wrapper">
                  ${BlrFormLabelRenderFunction({
                    label: this.label,
                    sizeVariant: this.sizeVariant,
                    labelAppendix: this.labelAppendix,
                    forValue: this.inputFieldTextId,
                    theme: this.theme,
                    hasError: Boolean(this.hasError),
                  })}
                </div>
              `
            : nothing}
          <div class="blr-input-wrapper ${inputContainerClasses}" ?readonly="${this.readonly}">
            <div class="blr-input-inner-container ${this.theme}">
              <input
                class="blr-form-input ${inputClasses}"
                id=${this.inputFieldTextId}
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
            ${this.renderInputIcon()}
          </div>
          ${(this.hasHint && this.hintMessage) || (this.hasError && this.errorMessage)
            ? BlrFormCaptionGroupRenderFunction({ theme: this.theme, sizeVariant: this.sizeVariant }, captionContent)
            : nothing}
        </div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrInputFieldText);
}

export type BlrInputFieldTextType = Omit<BlrInputFieldText, keyof LitElementCustom> & BlrInputFieldTextEventHandlers;
