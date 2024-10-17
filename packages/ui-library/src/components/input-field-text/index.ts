import { PropertyValueMap, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { query, state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { styleCustom } from './index.css.js';
import { InputTypes, FormSizesType, SizesType } from '../../globals/types.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { getComponentConfigToken } from '../../utils/get-component-config-token.js';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction.js';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { BlrFormLabelRenderFunction } from '../form-label/renderFunction.js';
import { BlrIconRenderFunction } from '../icon/renderFunction.js';
import { TAG_NAME } from './renderFunction.js';
import {
  BlrBlurEvent,
  BlrFocusEvent,
  BlrSelectEvent,
  BlrTextValueChangeEvent,
  createBlrBlurEvent,
  createBlrFocusEvent,
  createBlrSelectEvent,
  createBlrTextValueChangeEvent,
} from '../../globals/events.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { BlrIconEventHandlers } from '../icon/index.js';
import { ifDefined } from 'lit/directives/if-defined.js';

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
  protected accessor _inputFieldTextNode!: HTMLInputElement;

  @property() accessor inputFieldTextId!: string;
  @property() accessor type: InputTypes = 'text';
  @property() accessor arialabel!: string;
  @property({ type: Boolean }) accessor hasLabel!: boolean;
  @property() accessor label!: string;
  @property() accessor labelAppendix: string | undefined;
  @property() accessor value!: string;
  @property() accessor placeholder: string | undefined;
  @property({ type: Boolean }) accessor disabled: boolean | undefined;
  @property({ type: Boolean }) accessor readonly: boolean | undefined;
  @property() accessor sizeVariant: FormSizesType | undefined = 'md';
  @property({ type: Boolean }) accessor required: boolean | undefined;
  @property({ type: Number }) accessor maxLength: number | undefined;
  @property() accessor pattern: string | undefined;
  @property({ type: Boolean }) accessor hasError: boolean | undefined;
  @property() accessor errorMessage: string | undefined;
  @property() accessor icon: SizelessIconType | undefined = 'blr360';
  @property({ type: Boolean }) accessor hasHint = true;
  @property() accessor hintMessage: string | undefined;
  @property() accessor hintMessageIcon: SizelessIconType | undefined;
  @property() accessor errorMessageIcon: SizelessIconType | undefined;

  @property() accessor name!: string;
  @property() accessor theme: ThemeType = 'Light_value';

  @state() protected accessor currentType: InputTypes = this.type;
  @state() protected accessor isFocused = false;

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
        createBlrTextValueChangeEvent({ originalEvent: event, inputValue: this._inputFieldTextNode.value }),
      );
    }
  };

  protected handleSelect = (event: Event) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrSelectEvent({ originalEvent: event }));
    }
  };

  protected firstUpdated(): void {
    const inputWrapper = this.shadowRoot?.querySelector('.blr-input-wrapper');
    if (inputWrapper) {
      inputWrapper.addEventListener('click', this.handleWrapperClick);
    }
  }

  protected handleWrapperClick = (): void => {
    if (!this.disabled) {
      this._inputFieldTextNode.focus();
    }
  };

  protected handleIconClick: BlrIconEventHandlers['blrClick'] = () => {
    if (this.disabled) {
      return;
    }

    this.togglePassword();
  };

  protected renderInputIcon() {
    if (this.type !== 'password' && !this.icon) {
      return nothing;
    }

    const iconSizeVariant = getComponentConfigToken([
      'sem',
      'forms',
      'inputfield',
      'icon',
      'sizevariant',
      this.sizeVariant!,
    ]) as SizesType;

    const iconClasses = classMap({
      'icon-input': true,
      [this.sizeVariant!]: this.sizeVariant!,
      'no-pointer-events': Boolean(this.disabled || this.type !== 'password'),
      [this.theme]: this.theme,
    });

    const iconName: SizelessIconType | undefined =
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
      },
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
        'readonly': this.readonly ? true : false,
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
          <div class="blr-input-wrapper ${inputContainerClasses}">
            <div class="blr-input-inner-container ${this.theme}">
              <input
                class="blr-form-input ${inputClasses}"
                id=${this.inputFieldTextId}
                name="${ifDefined(this.name)}"
                aria-label=${this.arialabel}
                type="${this.currentType}"
                .value="${this.value}"
                placeholder="${ifDefined(this.placeholder)}"
                ?disabled="${this.disabled}"
                ?readonly="${this.readonly}"
                ?required="${this.required}"
                @input=${this.handleChange}
                @blur=${this.handleBlur}
                @focus=${this.handleFocus}
                maxlength="${ifDefined(this.maxLength)}"
                pattern="${ifDefined(this.pattern)}"
                ?data-has-error=${this.hasError}
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

export type BlrInputFieldTextType = ElementInterface<BlrInputFieldText>;
