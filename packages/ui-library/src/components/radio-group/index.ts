import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { radioLight, radioDark } from '../../foundation/component-tokens/radio.css';
import { formLight, formDark } from '../../foundation/semantic-tokens/form.css';
import { InputSizesType, RadioOption } from '../../globals/types';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelInlineRenderFunction } from '../form-label/form-label-inline/renderFunction';
import { TAG_NAME } from './renderFunction';

export class BlrRadioGroup extends LitElement {
  static styles = [styleCustom];

  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;
  @property() name?: string;
  @property() size: InputSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() hasError?: boolean;
  @property() errorIcon?: SizelessIconType;
  @property() hasGroupLabel?: boolean;
  @property() options!: RadioOption[];
  @property() hasHint = true;
  @property() groupHintIcon?: SizelessIconType;
  @property() groupErrorMessage?: string;
  @property() groupHintMessage?: string;
  @property() groupErrorIcon?: SizelessIconType;
  @property() groupLabel?: string;
  @property() direction?: 'vertical' | 'horizontal';

  @property() theme: ThemeType = 'Light';

  protected _optionElements: Element[] | undefined;

  protected handleSlotChange() {
    const slot = this.renderRoot?.querySelector('slot');

    this._optionElements = slot?.assignedElements({ flatten: false });
    this.requestUpdate();
  }

  protected render() {
    if (!this.size) {
      return null;
    }
    const dynamicStyles = this.theme === 'Light' ? [formLight, radioLight] : [formDark, radioDark];

    const legendClasses = classMap({
      'blr-legend': true,
      [`${this.size}`]: this.size,
      'error': this.hasError || false,
    });

    const legendWrapperClasses = classMap({
      'blr-legend-wrapper': true,
      [`${this.size}`]: this.size,
    });

    const classes = classMap({
      [`${this.size}`]: this.size,
      disabled: this.disabled || false,
      readonly: this.readonly || false,
      checked: this.checked || false,
      error: this.hasError || false,
    });

    const calculateOptionId = (label: string) => {
      return label.replace(/ /g, '_').toLowerCase();
    };
    const captionContent = html`
      ${this.hasHint && (this.groupHintMessage || this.groupHintIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'hint',
            theme: this.theme,
            size: this.size,
            message: this.groupHintMessage,
            icon: this.groupHintIcon,
          })
        : nothing}
      ${this.hasError && (this.groupErrorMessage || this.groupErrorIcon)
        ? BlrFormCaptionRenderFunction({
            variant: 'error',
            theme: this.theme,
            size: this.size,
            message: this.groupErrorMessage,
            icon: this.groupErrorIcon,
          })
        : nothing}
    `;

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      ${this.hasGroupLabel
        ? html`<div class="${legendWrapperClasses}"><legend class="${legendClasses}">${this.groupLabel}</legend></div>`
        : nothing}

      <div class="blr-radio-group ${classes}">
        <slot style="display: none;" @slotchange=${this.handleSlotChange}></slot>

        ${this.options &&
        this._optionElements?.map((option: Element) => {
          const id = calculateOptionId(option.label);

          return html`
            <div class="blr-radio ${classes}">
              <input
                id=${id || nothing}
                class="${classes} input-control"
                type="radio"
                name=${this.name}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?aria-disabled=${this.disabled}
                ?invalid=${this.hasError}
                ?aria-invalid=${this.hasError}
                ?checked=${this.checked}
                ?required=${this.required}
                @input=${this.onChange}
                @blur=${this.onBlur}
                @focus=${this.onFocus}
              />
              <div class="label-wrapper">
                ${option.label
                  ? html`${BlrFormLabelInlineRenderFunction({
                      labelText: option.label,
                      forValue: id,
                      labelSize: this.size || 'md',
                    })}`
                  : nothing}
              </div>
            </div>
          `;
        })}
      </div>`;

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      ${this.hasGroupLabel
        ? html`<div class="${legendWrapperClasses}"><legend class="${legendClasses}">${this.groupLabel}</legend></div>`
        : nothing}

      <div class="blr-radio-group ${classes}">
        ${this.options &&
        this.options.map((option: RadioOption) => {
          const id = calculateOptionId(option.label);
          return html`
            <div class="blr-radio ${classes}">
              <input
                id=${id || nothing}
                class="${classes} input-control"
                type="radio"
                name=${this.name}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?aria-disabled=${this.disabled}
                ?invalid=${this.hasError}
                ?aria-invalid=${this.hasError}
                ?checked=${this.checked}
                ?required=${this.required}
                @input=${this.onChange}
                @blur=${this.onBlur}
                @focus=${this.onFocus}
              />
              <div class="label-wrapper">
                ${option.label
                  ? html`${BlrFormLabelInlineRenderFunction({
                      labelText: option.label,
                      forValue: id,
                      labelSize: this.size || 'md',
                    })}`
                  : nothing}
              </div>
            </div>
          `;
        })}
      </div>

      ${this.hasHint || this.hasError
        ? html` <div class="caption-group ${classes}">
            ${BlrFormCaptionGroupRenderFunction({ size: this.size }, captionContent)}
          </div>`
        : nothing} `;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrRadioGroup);
}

export type BlrRadioGroupType = Omit<BlrRadioGroup, keyof LitElement>;
