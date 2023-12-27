import { LitElement, TemplateResult, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { baseStyle, wrapperLight, wrapperDark, StepperComboDark, StepperComboLight } from './index.css';
import { classMap } from 'lit-html/directives/class-map.js';
import { BlrFormLabelRenderFunction } from '../../internal-components/form-label/renderFunction';
import { BlrDividerRenderFunction } from '../../ui/divider/renderFunction';
import { FormSizesType } from '../../../globals/types';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { BlrIconRenderFunction } from '../../ui/icon/renderFunction';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';
import { SizelessIconType } from '@boiler/icons';
import { actionDark, actionLight } from '../../../foundation/semantic-tokens/action.css';
import { BlrFormCaptionGroupRenderFunction } from '../../internal-components/form-caption-group/renderFunction';
import { BlrFormCaptionRenderFunction } from '../../internal-components/form-caption-group/form-caption/renderFunction';

export const TAG_NAME = 'blr-number-input';

@customElement(TAG_NAME)
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
  @property() totalDigits?: number;
  @property() fractionDigits?: number;
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
      const padding = Math.max(digits - integerPart.length, 0);
      paddedInteger = '0'.repeat(padding) + integerPart;
    }

    return `${paddedInteger}${fractionPart ? `.${fractionPart}` : ''}`;
  }

  protected getButtonTemplate(icon: SizelessIconType, onClick: () => void): TemplateResult<1> {
    if (!this.size) {
      return html``;
    }

    const iconSizeVariant = getComponentConfigToken([
      'SizeVariant',
      'Action',
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
    if (this.size) {
      const dynamicStyles =
        this.theme === 'Light'
          ? [wrapperLight, actionLight, StepperComboLight]
          : [wrapperDark, actionDark, StepperComboDark];

      const inputClasses = classMap({
        [this.size]: this.size,
        prepend: !!this.prependUnit,
      });

      const unitClasses = classMap({
        unit: true,
        prepend: !!this.prependUnit,
        [`${this.size}`]: this.size,
      });

      const wrapperClasses = classMap({
        'input-wrapper': true,
        'disabled': this.disabled || false,
        [`${this.size}`]: this.size,
        [this.stepperVariant || 'split']: this.stepperVariant || 'split',
        'error-input': this.hasError || false,
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
        ${this.hasLabel
          ? BlrFormLabelRenderFunction({
              labelText: this.label,
              labelSize: this.size,
              labelAppendix: this.labelAppendix,
              forValue: this.numberInputId,
              theme: this.theme,
              variant: this.hasError ? 'error' : 'label',
            })
          : nothing}
        <div class="${wrapperClasses}">
          <input
            class="${inputClasses}"
            type="number"
            .value=${!this.readonly
              ? this.customFormat(this.currentValue || 0, this.fractionDigits || 0, this.totalDigits || 0)
              : nothing}
            step="${this.step || nothing}"
            ?disabled="${this.disabled}"
            ?readonly="${this.readonly}"
            ?required="${this.required}"
            hasError="${this.hasError}"
            @change=${this.handleChange}
            placeholder=${this.placeholder || nothing}
          />
          ${!this.readonly && this.unit
            ? html`
                <span class="${unitClasses}">${this.unit}</span>
                ${this.renderMode()}
              `
            : nothing}
        </div>
        ${this.hasHint || this.hasError
          ? BlrFormCaptionGroupRenderFunction({ size: this.size }, captionContent)
          : nothing}
      `;
    }
  }
}

export type BlrNumberInputType = Omit<BlrNumberInput, keyof LitElement>;
