import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from '../../utils/lit/decorators.js';
import { staticStyles as componentSpecificStaticStyles } from './index.css.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { staticStyles as staticRadioStyles } from '../../foundation/component-tokens/radio.css.js';
import { staticStyles as staticFormStyles } from '../../foundation/semantic-tokens/form.css.js';
import { InputSizesType, RadioGroupDirection, RadioOption } from '../../globals/types.js';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction.js';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction.js';
import { TAG_NAME } from './renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';

export class BlrRadioGroup extends LitElementCustom {
  static styles = [staticFormStyles, staticRadioStyles, componentSpecificStaticStyles];

  @property() accessor disabled: boolean | undefined;
  @property() accessor readonly: boolean | undefined;
  @property() accessor checked: boolean | undefined;
  @property() accessor name: string | undefined;
  @property() accessor sizeVariant: InputSizesType = 'md';
  @property() accessor hasLegend: boolean | undefined;
  @property() accessor required: boolean | undefined;
  @property() accessor blrChange: HTMLElement['oninput'] | undefined;
  @property() accessor blrBlur: HTMLElement['blur'] | undefined;
  @property() accessor blrFocus: HTMLElement['focus'] | undefined;
  @property() accessor hasError: boolean | undefined;
  @property() accessor errorIcon: SizelessIconType | undefined;
  @property() accessor options!: RadioOption[];
  @property() accessor hasHint = true;
  @property() accessor groupHintMessageIcon: SizelessIconType | undefined;
  @property() accessor groupErrorMessage: string | undefined;
  @property() accessor groupHintMessage: string | undefined;
  @property() accessor groupErrorMessageIcon: SizelessIconType | undefined;
  @property() accessor legend: string | undefined;
  @property() accessor direction: RadioGroupDirection = 'horizontal';

  @property() accessor theme: ThemeType = 'Light';

  protected render() {
    if (!this.sizeVariant) {
      return null;
    }

    const legendClasses = classMap({
      'blr-legend': true,
      [this.sizeVariant]: this.sizeVariant,
      'error': this.hasError || false,
    });

    const legendWrapperClasses = classMap({
      'blr-legend-wrapper': true,
      [this.theme]: this.theme,
      [this.sizeVariant]: this.sizeVariant,
    });

    const radioClasses = classMap({
      [this.theme]: this.theme,
      [this.sizeVariant]: this.sizeVariant,
      error: this.hasError || false,
    });

    const classes = classMap({
      [this.theme]: this.theme,
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
                class=" input-control ${radioClasses}"
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

export type BlrRadioGroupType = ElementInterface<BlrRadioGroup>;
