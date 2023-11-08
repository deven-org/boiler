import { LitElement, TemplateResult, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import { baseStyle, wrapperLight, wrapperDark, StepperComboDark, StepperComboLight } from './index.css';
import { classMap } from 'lit-html/directives/class-map.js';
import { BlrFormLabelRenderFunction } from '../../internal-components/form-label';
import { BlrDividerRenderFunction } from '../../ui/divider';
import { FormSizesType } from '../../../globals/types';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { BlrIconRenderFunction } from '../../ui/icon';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';
import { SizelessIconType } from '@boiler/icons';
import { actionDark, actionLight } from '../../../foundation/semantic-tokens/action.css';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';
import { BlrFormInfoRenderFunction } from '../../internal-components/form-info';

const TAG_NAME = 'blr-number-input';

@customElement(TAG_NAME)
export class BlrNumberInput extends LitElement {
  static styles = [baseStyle];

  @query('input')
  protected _numberFieldNode!: HTMLInputElement;

  @property() numberInputId!: string;
  @property() variant: 'mode1' | 'mode2' | 'mode3' = 'mode1';
  @property() label!: string;
  @property() disabled?: boolean;
  @property() placeholder?: string;
  @property() readonly?: boolean;
  @property() required?: boolean;
  @property() hasLabel?: boolean;
  @property() size: FormSizesType = 'md';
  @property() labelAppendix?: string;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() errorIcon?: SizelessIconType = 'blrInfoSm';
  @property() showHint = true;
  @property() hintText?: string;
  @property() hintIcon: SizelessIconType = 'blrInfo';
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
      [this.variant]: true,
    });

    const button = html`
      <button ?disabled="${this.disabled}" class="${buttonClass}" @click=${onClick}>
        ${BlrIconRenderFunction({
          icon: calculateIconName(icon, iconSizeVariant),
          size: iconSizeVariant,
          hideAria: true,
          disablePointerEvents: true,
        })}
      </button>
    `;

    return button;
  }

  protected renderMode() {
    switch (this.variant) {
      case 'mode1': {
        return html`
          ${this.getButtonTemplate('blrMinus', this.stepperDown)} ${this.getButtonTemplate('blrPlus', this.stepperUp)}
        `;
      }
      case 'mode2': {
        return html`
          <div class="stepper-combo mode2 horizontal ${this.size}">
            ${this.getButtonTemplate('blrMinus', this.stepperDown)}
            ${BlrDividerRenderFunction({
              directionVariant: 'vertical',
              theme: this.theme,
            })}
            ${this.getButtonTemplate('blrPlus', this.stepperUp)}
          </div>
        `;
      }
      case 'mode3': {
        return html`
          <div class="stepper-combo mode3 vertical ${this.size}">
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
    const dynamicStyles =
      this.theme === 'Light'
        ? [wrapperLight, actionLight, StepperComboLight]
        : [wrapperDark, actionDark, StepperComboDark];

    const inputClasses = classMap({
      [this.size]: this.size,
    });

    const unitClasses = classMap({
      unit: true,
      prepend: !!this.prependUnit,
      [this.size]: this.size,
    });

    const wrapperClasses = classMap({
      'input-wrapper': true,
      'disabled': this.disabled || false,
      [this.size]: this.size,
      [this.variant || 'mode1']: this.variant || 'mode1',
      'error-input': this.hasError || false,
    });

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
      ${this.showHint || this.hasError
        ? BlrFormInfoRenderFunction({
            theme: this.theme,
            size: this.size,
            showHint: this.showHint,
            hintText: this.hintText,
            hintIcon: this.hintIcon,
            hasError: !!this.hasError,
            errorMessage: this.errorMessage,
            errorIcon: this.errorIcon,
          })
        : nothing}
    `;
  }
}

export type BlrNumberInputType = Omit<BlrNumberInput, keyof LitElement>;

export const BlrNumberInputRenderFunction = (params: BlrNumberInputType) =>
  genericBlrComponentRenderer<BlrNumberInputType>(TAG_NAME, { ...params });
