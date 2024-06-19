import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property, query, state } from 'lit/decorators.js';
import { staticStyles } from './index.css';
import { FormSizesType, SizesType } from '../../globals/types';
import { SizelessIconType } from '@boiler/icons';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { BlrIconRenderFunction } from '../icon/renderFunction';
import { TAG_NAME } from './renderFunction';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelRenderFunction } from '../form-label/renderFunction';
import {
  BlrBlurEvent,
  BlrFocusEvent,
  BlrSelectedValueChangeEvent,
  createBlrBlurEvent,
  createBlrFocusEvent,
  createBlrSelectedValueChangeEvent,
} from '../../globals/events';

import { LitElementCustom } from '../../utils/lit-element-custom';

type Options = {
  label: string;
  value: string;
  disabled?: boolean;
  selected?: boolean;
};

export type BlrSelectEventHandlers = {
  blrSelectedValueChange?: (event: BlrSelectedValueChangeEvent) => void;
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
};

/**
 * @fires blrSelectedValueChange Selected value changed
 * @fires blrFocus Select received focus
 * @fires blrBlur Select lost focus
 */
export class BlrSelect extends LitElementCustom {
  static styles = [staticFormStyles, staticStyles];

  @query('select')
  protected _selectNode!: HTMLInputElement;

  @property() arialabel?: string;
  @property() selectId!: string;
  @property() labelAppendix?: string;
  @property() name!: string;
  @property() hasLabel?: boolean;
  @property() label!: string;
  @property() disabled?: boolean;
  @property() sizeVariant: FormSizesType = 'md';
  @property() required?: boolean;
  @property() blrBlur?: HTMLElement['blur'];
  @property() blrFocus?: HTMLElement['focus'];
  @property() options!: Options[] | JSON;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() hintMessage?: string;
  @property() hintMessageIcon?: SizelessIconType;
  @property() errorMessageIcon?: SizelessIconType;
  @property() hasHint?: boolean;
  @property() icon?: SizelessIconType = 'blrChevronDown';
  @property() theme: ThemeType = 'Light';
  @state() protected isFocused = false;

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

  protected handleChange(event: Event) {
    this.dispatchEvent(
      createBlrSelectedValueChangeEvent({ originalEvent: event, selectedValue: this._selectNode.value })
    );
  }

  protected renderIcon() {
    const classes = classMap({
      'icon-direction-indicator': true,
      [this.sizeVariant]: this.sizeVariant,
      [this.theme]: this.theme,
    });

    if (this.sizeVariant) {
      const iconSizeVariant = getComponentConfigToken([
        'sem',
        'forms',
        'inputfield',
        'icon',
        'sizevariant',
        this.sizeVariant,
      ]).toLowerCase() as SizesType;

      const modifiedIcon = this.icon ? this.icon : 'blrChevronDown';
      return BlrIconRenderFunction(
        {
          icon: calculateIconName(modifiedIcon, iconSizeVariant),
          sizeVariant: iconSizeVariant,
          classMap: classes,
          fillParent: false,
          theme: this.theme,
        },
        {
          'aria-hidden': true,
        }
      );
    }
  }

  protected renderCaptionContent() {
    return html`
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
  }

  protected render() {
    if (this.sizeVariant) {
      const inputClasses = classMap({
        'error': this.hasError || false,
        'error-input': this.hasError || false,
        [this.sizeVariant]: this.sizeVariant,
        'disabled': this.disabled || false,
        'focus': this.isFocused || false,
        [this.theme]: this.theme,
      });

      return html`
        <div class="blr-select ${this.sizeVariant} ${this.theme}">
          ${this.hasLabel
            ? html`
                <div class="label-wrapper">
                  ${BlrFormLabelRenderFunction({
                    label: this.label,
                    labelAppendix: this.labelAppendix,
                    sizeVariant: this.sizeVariant,
                    forValue: this.selectId,
                    theme: this.theme,
                    hasError: Boolean(this.hasError),
                  })}
                </div>
              `
            : nothing}
          <div class="blr-select-wrapper ${inputClasses}">
            <div class="blr-select-inner-container ${this.theme}">
              <select
                aria-label=${this.ariaLabel || nothing}
                class="blr-form-select ${inputClasses}"
                id=${this.selectId || nothing}
                name=${this.name || nothing}
                ?disabled=${this.disabled}
                ?required=${this.required}
                @input=${this.handleChange}
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              >
                ${(typeof this.options === 'string' ? JSON.parse(this.options) : this.options).map((opt: Options) => {
                  return html`
                    <option
                      class="blr-select-option"
                      value=${opt.value || ''}
                      ?selected=${opt.selected ?? false}
                      ?disabled=${opt.disabled ?? false}
                    >
                      ${opt.label}
                    </option>
                  `;
                })}
              </select>
            </div>
            ${this.renderIcon()}
          </div>
          ${(this.hasHint && this.hintMessage) || (this.hasError && this.errorMessage)
            ? BlrFormCaptionGroupRenderFunction(
                { theme: this.theme, sizeVariant: this.sizeVariant },
                this.renderCaptionContent()
              )
            : nothing}
        </div>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrSelect);
}

export type BlrSelectType = Omit<BlrSelect, keyof LitElementCustom> & BlrSelectEventHandlers;
