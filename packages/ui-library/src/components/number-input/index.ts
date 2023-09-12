import { LitElement, TemplateResult, html, nothing } from 'lit';
import { customElement, property, query, state } from 'lit/decorators.js';
import {
  baseStyle,
  formLight,
  formDark,
  StepperComboLight,
  StepperComboDark,
  wrapperLight,
  wrapperDark,
} from './index.css';
import { classMap } from 'lit-html/directives/class-map.js';
import { BlrFormLabelRenderFunction } from '../internal-components/form-label';
import { FormSizesType } from '../../globals/types';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { IconType, SizelessIconType } from '@boiler/icons';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';

type ButtonTemplateType = 'operators' | 'chevrons';
type AdjustType = 'increment' | 'decrement';
type LayoutType = 'horizontal' | 'vertical';

@customElement('blr-number-input')
export class BlrNumberInput extends LitElement {
  static styles = [baseStyle];

  @query('input')
  protected _numberFieldNode!: HTMLInputElement;

  @property() numberInputId!: string;
  @property() variant = 'mode1';
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
  @property() showHint = true;
  @property() hintText?: string;
  @property() hintIcon: IconType = 'blrInfoSm';
  @property() value?: number;
  @property() step?: number;
  @property() unit?: string = 'kg';
  @property() totalDigits?: number;
  @property() fractionDigits?: number;

  @property() theme: ThemeType = 'Light';

  @state() protected isFocused = false;
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
    this.step = Number(this.step);
  }

  protected handleFocus = () => {
    this.isFocused = true;
  };

  protected handleBlur = () => {
    this.isFocused = false;
  };

  protected handleChange() {
    this.currentValue = Number(this._numberFieldNode.value) || 0;
  }

  protected customFormat(cur: number, fractions: number, digits: number): string {
    if (fractions === 0) {
      return cur?.toFixed(0);
    }

    const formattedNumber = cur.toFixed(fractions);
    const [integerPart, fractionPart] = formattedNumber.split('.');

    let paddedInteger = integerPart;
    if (digits > 0) {
      const padding = Math.max(digits - integerPart.length, 0);
      paddedInteger = '0'.repeat(padding) + integerPart;
    }

    const result = `${paddedInteger}${fractionPart ? `.${fractionPart}` : ''}`;

    return result;
  }
  protected getButtonTemplate = (
    buttonsType: ButtonTemplateType,
    adjustType: AdjustType,
    stepperButtonSize: FormSizesType,
    buttonAlignment: LayoutType
  ): TemplateResult<1> => {
    let iconKey: SizelessIconType = adjustType === 'increment' ? 'blrPlus' : 'blrMinus';

    if (buttonsType === 'chevrons') {
      iconKey = adjustType === 'increment' ? 'blrChevronUp' : 'blrChevronDown';
    }

    const button = html`<button
      disabled=${this.disabled || nothing}
      class="custom-stepper-button ${buttonAlignment} ${buttonAlignment === 'vertical'
        ? 'fullWidthHeight'
        : stepperButtonSize} ${adjustType}"
      @click=${adjustType === 'increment' ? this.stepperUp : this.stepperDown}
    >
      ${BlrIconRenderFunction({
        icon: calculateIconName(iconKey, stepperButtonSize),
        name: adjustType === 'increment' ? 'up' : 'down',
        size: stepperButtonSize,
        hideAria: true,
        disablePointerEvents: true,
      })}
    </button>`;

    if (buttonAlignment === 'vertical') {
      return html`<div class="stepper-combo vertical ${this.size} ${adjustType}">${button}</div>`;
    } else {
      return button;
    }
  };

  protected render() {
    const dynamicStyles =
      this.theme === 'Light'
        ? [formLight, wrapperLight, actionLight, StepperComboLight]
        : [formDark, wrapperDark, actionDark, StepperComboDark];

    const inputClasses = classMap({
      'custom-form-input': true,
      [`error`]: this.hasError || false,
      [`error-input`]: this.hasError || false,
      [`${this.size}`]: this.size,
    });

    const wrapperClasses = classMap({
      'input-wrapper': true,
      'focus': this.isFocused || false,
      'disabled': this.disabled || false,
      [`${this.size}`]: this.size,

      [`${this.variant || 'mode1'}`]: this.variant || 'mode1',
    });
    const iconSize = getComponentConfigToken('StepperButton', this.size).toLowerCase() as FormSizesType;

    return html`
      <style>
        ${dynamicStyles.map((style) => style)}
      </style>

      ${this.hasLabel
        ? html` ${BlrFormLabelRenderFunction({
            labelText: this.label,
            labelSize: this.size,
            labelAppendix: this.labelAppendix,
            forValue: this.numberInputId,
            theme: this.theme,
          })}`
        : nothing}
      <div class="${wrapperClasses}">
        ${this.variant === 'mode1' || this.variant === 'mode2'
          ? html`
              ${this.getButtonTemplate('operators', 'decrement', iconSize, 'horizontal')}
              ${this.getButtonTemplate('operators', 'increment', iconSize, 'horizontal')}
            `
          : html`
              ${this.getButtonTemplate('chevrons', 'increment', iconSize, 'vertical')}
              ${this.getButtonTemplate('chevrons', 'decrement', iconSize, 'vertical')}
            `}
        <input
          class="${inputClasses}"
          type="number"
          .value=${this.customFormat(this.currentValue || 0, this.fractionDigits || 0, this.totalDigits || 0)}
          step="${this.step || nothing}"
          ?disabled=${this.disabled || nothing}
          ?readonly=${this.readonly || nothing}
          ?required="${this.required}"
          @change=${this.handleChange}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          placeholder=${this.placeholder || nothing}
        />
        ${this.unit && html`<span>${this.unit}</span>`}
      </div>
    `;
  }
}

export type BlrNumberInputType = Omit<BlrNumberInput, keyof LitElement>;

export const BlrNumberInputRenderFunction = ({
  variant,
  disabled,
  placeholder,
  readonly,
  required,
  label,
  hasLabel,
  hasError,
  size,
  labelAppendix,
  numberInputId,
  value,
  step,
  theme,
  unit,
  fractionDigits,
  totalDigits,
}: BlrNumberInputType) => {
  return html`<blr-number-input
    .variant="${variant}"
    .disabled="${disabled}"
    .placeholder="${placeholder}"
    .readonly="${readonly}"
    .required="${required}"
    .label="${label}"
    .hasLabel="${hasLabel}"
    .hasError="${hasError}"
    .size="${size}"
    .value="${value}"
    .step="${step}"
    .labelAppendix="${labelAppendix}"
    .numberInputId="${numberInputId}"
    .theme="${theme}"
    .unit="${unit}"
    .fractionDigits="${fractionDigits}"
    .totalDigits="${totalDigits}"
  ></blr-number-input>`;
};
