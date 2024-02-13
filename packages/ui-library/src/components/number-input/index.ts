import { LitElement, TemplateResult, html, nothing } from 'lit';
import { property, query, state } from 'lit/decorators.js';
import { baseStyle, wrapperLight, wrapperDark, StepperComboDark, StepperComboLight } from './index.css';
import { classMap } from 'lit-html/directives/class-map.js';
import { TAG_NAME } from './renderFunction';
import { BlrDividerRenderFunction } from '../divider/renderFunction';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { actionLight, actionDark } from '../../foundation/semantic-tokens/action.css';
import { FormSizesType } from '../../globals/types';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { BlrFormLabelRenderFunction } from '../form-label/renderFunction';
import { BlrIconRenderFunction } from '../icon/renderFunction';

export class BlrNumberInput extends LitElement {
  static styles = [baseStyle];

  @query('input')
  protected _numberFieldNode!: HTMLInputElement;

  @property() numberInputId!: string;
  @property() stepperVariant: 'split' | 'horizontal' | 'vertical' = 'split';
  @property() label!: string;
  @property() disabled?: boolean;
  @property() placeholder?: string;
  @property() readonly?: boolean;
  @property() required?: boolean;
  @property() hasLabel?: boolean;
  @property() size?: FormSizesType = 'md';
  @property() labelAppendix?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorIcon?: SizelessIconType;
  @property() hasHint = true;
  @property() hintMessage?: string;
  @property() hintIcon?: SizelessIconType;
  @property() value?: number;
  @property() step?: number;
  @property() unit?: string;
  @property() leadingZeros?: number;
  @property() decimals?: number;
  @property() prependUnit?: boolean;

  @property() theme: ThemeType = 'Light';

  @state() protected currentValue = 0;

  protected stepperUp() {
    if (this.currentValue !== undefined && this.step !== undefined) {
      this.currentValue += Number(this.step);
      this.requestUpdate('currentValue');
    }
  }

  protected stepperDown() {
    if (this.currentValue !== undefined && this.step !== undefined) {
      this.currentValue -= Number(this.step);
      this.requestUpdate('currentValue');
    }
  }

  connectedCallback() {
    super.connectedCallback();
    this.currentValue = Number(this.currentValue) || Number(this.value) || 0;
  }

  protected handleChange() {
    this.currentValue = Number(this._numberFieldNode.value) || 0;
  }

  protected customFormat(cur: number, fractions: number, digits: number): string {
    const formattedNumber = cur.toFixed(fractions);
    const [integerPart, fractionPart] = formattedNumber.split('.');

    let paddedInteger = integerPart;
    if (digits > 0) {
      paddedInteger = '0'.repeat(digits) + integerPart;
    }
    return `${paddedInteger}${fractionPart ? `.${fractionPart}` : ''}`;
  }

  protected getButtonTemplate(icon: SizelessIconType, onClick: () => void): TemplateResult<1> {
    if (!this.size) {
      return html``;
    }

    const iconSizeVariant = getComponentConfigToken([
      'SizeVariant',
      'Actions',
      'StepperButton',
      this.size.toUpperCase(),
      'Icon',
    ]).toLowerCase() as FormSizesType;

    const buttonClass = classMap({
      'custom-stepper-button': true,
      [iconSizeVariant]: true,
      [this.stepperVariant]: true,
    });

    const iconClasses = classMap({
      noPointerEvents: true,
    });

    const button = html`
      <button ?disabled="${this.disabled}" class="${buttonClass}" @click=${onClick}>
        ${BlrIconRenderFunction(
          {
            classMap: iconClasses,
            icon: calculateIconName(icon, iconSizeVariant),
            size: iconSizeVariant,
          },
          {
            'aria-hidden': true,
          }
        )}
      </button>
    `;
    return button;
  }

  protected renderMode() {
    switch (this.stepperVariant) {
      case 'split': {
        return html`
          ${this.getButtonTemplate('blrMinus', this.stepperDown)} ${this.getButtonTemplate('blrPlus', this.stepperUp)}
        `;
      }
      case 'horizontal': {
        return html`
          <div class="stepper-combo horizontal  ${this.size}">
            ${this.getButtonTemplate('blrMinus', this.stepperDown)}
            ${BlrDividerRenderFunction({
              directionVariant: 'vertical',
              theme: this.theme,
            })}
            ${this.getButtonTemplate('blrPlus', this.stepperUp)}
          </div>
        `;
      }
      case 'vertical': {
        return html`
          <div class="stepper-combo vertical  ${this.size}">
            ${this.getButtonTemplate('blrChevronUp', this.stepperUp)}
            ${BlrDividerRenderFunction({
              directionVariant: 'horizontal',
              theme: this.theme,
            })}
            ${this.getButtonTemplate('blrChevronDown', this.stepperDown)}
          </div>
        `;
      }
    }
  }

  protected render() {
    const hasUnit = this.unit !== undefined && this.unit.length > 0;

    if (this.size) {
      const dynamicStyles =
        this.theme === 'Light'
          ? [wrapperLight, actionLight, StepperComboLight]
          : [wrapperDark, actionDark, StepperComboDark];

      const inputClasses = classMap({
        [this.size]: this.size,
        prepend: hasUnit && !!this.prependUnit,
      });

      const unitClasses = classMap({
        unit: true,
        prepend: hasUnit && !!this.prependUnit,
        [`${this.size}`]: this.size,
        [this.stepperVariant || 'split']: this.stepperVariant || 'split',
      });

      const wrapperClasses = classMap({
        'input-wrapper': true,
        'disabled': this.disabled || false,
        [`${this.size}`]: this.size,
        [this.stepperVariant || 'split']: this.stepperVariant || 'split',
        'error-input': this.hasError || false,
        'prepend': hasUnit && !!this.prependUnit,
        'readonly': this.readonly || false,
      });

      const inputAndUnitContainer = classMap({
        'input-unit-container': true,
        'prepend': hasUnit && !!this.prependUnit,
        [`${this.size}`]: this.size,
        [this.stepperVariant || 'split']: this.stepperVariant || 'split',
      });

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintIcon)
          ? html`
              <div class="hint-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'hint',
                  theme: this.theme,
                  size: this.size,
                  message: this.hintMessage,
                  icon: this.hintIcon,
                })}
              </div>
            `
          : nothing}
        ${this.hasError && (this.errorMessage || this.errorIcon)
          ? html`
              <div class="error-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'error',
                  theme: this.theme,
                  size: this.size,
                  message: this.errorMessage,
                  icon: this.errorIcon,
                })}
              </div>
            `
          : nothing}
      `;

      return html`
        <style>
          ${dynamicStyles}
        </style>
        <div class="blr-number-input ${this.size}">
          ${this.hasLabel
            ? html`
                <div class="label-wrapper">
                  ${BlrFormLabelRenderFunction({
                    labelText: this.label,
                    labelSize: this.size,
                    labelAppendix: this.labelAppendix,
                    forValue: this.numberInputId,
                    theme: this.theme,
                    variant: this.hasError ? 'error' : 'label',
                  })}
                </div>
              `
            : nothing}
          <div class="${wrapperClasses}">
            <div class="${inputAndUnitContainer}">
              <input
                class="${inputClasses}"
                type="number"
                .value=${this.currentValue != 0
                  ? this.customFormat(this.currentValue || 0, this.decimals || 0, this.leadingZeros || 0)
                  : nothing}
                step="${this.step || nothing}"
                ?disabled="${this.disabled}"
                ?readonly="${this.readonly}"
                ?required="${this.required}"
                hasError="${this.hasError}"
                @change=${this.handleChange}
                placeholder=${this.placeholder || nothing}
              />
              ${hasUnit ? html` <div class="${unitClasses}">${this.unit}</div> ` : nothing}
            </div>
            ${this.renderMode()}
          </div>
        </div>

        ${this.hasHint || this.hasError
          ? BlrFormCaptionGroupRenderFunction({ size: this.size }, captionContent)
          : nothing}
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrNumberInput);
}

export type BlrNumberInputType = Omit<BlrNumberInput, keyof LitElement>;
