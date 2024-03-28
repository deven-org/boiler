import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { radioLight, radioDark } from '../../foundation/component-tokens/radio.css';
import { formLight, formDark } from '../../foundation/semantic-tokens/form.css';
import { InputSizesType, RadioGroupDirection, RadioOption } from '../../globals/types';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction';
import { TAG_NAME } from './renderFunction';
import { LitElementCustom } from '../../utils/lit-element-custom';

export class BlrRadioGroup extends LitElementCustom {
  static styles = [styleCustom];

  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;
  @property() name?: string;
  @property() sizeVariant: InputSizesType = 'md';
  @property() hasLegend?: boolean;
  @property() required?: boolean;
  @property() blrChange?: HTMLElement['oninput'];
  @property() blrBlur?: HTMLElement['blur'];
  @property() blrFocus?: HTMLElement['focus'];
  @property() hasError?: boolean;
  @property() errorIcon?: SizelessIconType;
  @property() options!: RadioOption[];
  @property() hasHint = true;
  @property() groupHintMessageIcon?: SizelessIconType;
  @property() groupErrorMessage?: string;
  @property() groupHintMessage?: string;
  @property() groupErrorMessageIcon?: SizelessIconType;
  @property() legend?: string;
  @property() direction: RadioGroupDirection = 'horizontal';

  @property() theme: ThemeType = 'Light';

  protected render() {
    if (!this.sizeVariant) {
      return null;
    }
    const dynamicStyles = this.theme === 'Light' ? [formLight, radioLight] : [formDark, radioDark];

    const legendClasses = classMap({
      'blr-legend': true,
      [this.sizeVariant]: this.sizeVariant,
      'error': this.hasError || false,
    });

    const legendWrapperClasses = classMap({
      'blr-legend-wrapper': true,
      [this.sizeVariant]: this.sizeVariant,
    });

    const radioClasses = classMap({
      [this.sizeVariant]: this.sizeVariant,
    });
    const classes = classMap({
      [this.sizeVariant]: this.sizeVariant,
      disabled: this.disabled || false,
      readonly: this.readonly || false,
      checked: this.checked || false,
      error: this.hasError || false,
      [this.direction]: this.direction,
    });

    const calculateOptionId = (label: string) => {
      return label.replace(/ /g, '_').toLowerCase();
    };
    const captionContent = html`
      ${this.hasHint && (this.groupHintMessage || this.groupHintMessageIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'hint',
            theme: this.theme,
            sizeVariant: this.sizeVariant,
            message: this.groupHintMessage,
            icon: this.groupHintMessageIcon,
          })
        : nothing}
      ${this.hasError && (this.groupErrorMessage || this.groupErrorMessageIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'error',
            theme: this.theme,
            sizeVariant: this.sizeVariant,
            message: this.groupErrorMessage,
            icon: this.groupErrorMessageIcon,
          })
        : nothing}
    `;

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      ${this.hasLegend
        ? html`<div class="${legendWrapperClasses}"><legend class="${legendClasses}">${this.legend}</legend></div>`
        : nothing}

      <div class="blr-radio-group ${classes}">
        ${this.options &&
        this.options.map((option: RadioOption) => {
          const id = calculateOptionId(option.label);
          return html`
            <div class="blr-radio ${radioClasses}">
              <input
                id=${id || nothing}
                class="${radioClasses} input-control"
                type="radio"
                name=${this.name}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?aria-disabled=${this.disabled}
                ?invalid=${this.hasError}
                ?aria-invalid=${this.hasError}
                ?checked=${this.checked}
                ?required=${this.required}
                @input=${this.blrChange}
                @blur=${this.blrBlur}
                @focus=${this.blrFocus}
              />
              <div class="label-wrapper">
                ${option.label
                  ? html`${BlrFormLabelInlineRenderFunction({
                      labelText: option.label,
                      forValue: id,
                      labelSize: this.sizeVariant || 'md',
                    })}`
                  : nothing}
              </div>
            </div>
          `;
        })}
      </div>

      ${this.hasHint || this.hasError
        ? html` <div class="caption-group ${classes}">
            ${BlrFormCaptionGroupRenderFunction({ sizeVariant: this.sizeVariant }, captionContent)}
          </div>`
        : nothing} `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrRadioGroup);
}

export type BlrRadioGroupType = Omit<BlrRadioGroup, keyof LitElementCustom>;
