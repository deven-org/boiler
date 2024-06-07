import { PropertyValues, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { staticStyles as componentSpecificStaticStyles } from './index.css';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { staticStyles as staticRadioStyles } from '../../foundation/component-tokens/radio.css';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css';
import { InputSizesType, RadioGroupDirection, RadioOption } from '../../globals/types';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction';
import { TAG_NAME } from './renderFunction';
import { LitElementCustom } from '../../utils/lit-element-custom';

export class BlrRadioGroup extends LitElementCustom {
  static styles = [staticFormStyles, staticRadioStyles, componentSpecificStaticStyles];

  @property({ type: Boolean }) disabled = false;
  @property({ type: Boolean }) readonly = false;
  @property({ type: Boolean }) checked = false;
  @property({ type: String }) name = '';
  @property({ type: String }) sizeVariant: InputSizesType = 'md';
  @property({ type: Boolean }) hasLegend = false;
  @property({ type: Boolean }) required = false;
  @property() blrChange?: HTMLElement['oninput'];
  @property() blrBlur?: HTMLElement['blur'];
  @property() blrFocus?: HTMLElement['focus'];
  @property({ type: Boolean }) hasError = false;
  @property({ type: String }) errorIcon?: SizelessIconType;
  @property({ type: Array }) options: RadioOption[] = [];
  @property({ type: Boolean }) hasHint = true;
  @property({ type: String }) groupHintMessageIcon?: SizelessIconType;
  @property({ type: String }) groupErrorMessage = '';
  @property({ type: String }) groupHintMessage = '';
  @property({ type: String }) groupErrorMessageIcon?: SizelessIconType;
  @property({ type: String }) legend = '';
  @property({ type: String }) direction: RadioGroupDirection = 'horizontal';
  @property({ type: String }) theme: ThemeType = 'Light';

  willUpdate(changedProperties: PropertyValues) {
    if (changedProperties.has('sizeVariant') && !this.sizeVariant) {
      this.sizeVariant = 'md';
    }
    if (changedProperties.has('theme') && !this.theme) {
      this.theme = 'Light';
    }
    if (changedProperties.has('direction') && !this.direction) {
      this.direction = 'horizontal';
    }
    if (changedProperties.has('options') && !this.options) {
      this.options = [];
    }
  }

  protected render() {
    const legendClasses = classMap({
      'blr-legend': true,
      [this.sizeVariant]: this.sizeVariant,
      'error': this.hasError,
    });

    const legendWrapperClasses = classMap({
      'blr-legend-wrapper': true,
      [this.theme]: this.theme,
      [this.sizeVariant]: this.sizeVariant,
    });

    const radioClasses = classMap({
      [this.theme]: this.theme,
      [this.sizeVariant]: this.sizeVariant,
      error: this.hasError,
    });

    const classes = classMap({
      [this.theme]: this.theme,
      [this.sizeVariant]: this.sizeVariant,
      disabled: this.disabled,
      readonly: this.readonly,
      checked: this.checked,
      error: this.hasError,
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

    return html`
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
                class="input-control ${radioClasses}"
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
                      theme: this.theme,
                    })}`
                  : nothing}
              </div>
            </div>
          `;
        })}
      </div>

      ${this.hasHint || this.hasError
        ? html` <div class="caption-group ${classes}">
            ${BlrFormCaptionGroupRenderFunction({ sizeVariant: this.sizeVariant, theme: this.theme }, captionContent)}
          </div>`
        : nothing}
    `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrRadioGroup);
}

export type BlrRadioGroupType = Omit<BlrRadioGroup, keyof LitElementCustom>;
