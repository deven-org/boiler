import { LitElement, TemplateResult, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { baseStyle, formLight, formDark, StepperComboLight, StepperComboDark } from './index.css';
import { classMap } from 'lit-html/directives/class-map.js';
import { BlrFormLabelRenderFunction } from '../internal-components/form-label';
import { FormSizesType } from '../../globals/types';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { SizelessIconType } from '@boiler/icons';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';

type ButtonTemplateType = 'operators' | 'chevrons';
type AdjustType = 'increment' | 'decrement';
type LayoutType = 'horizontal' | 'vertical';

@customElement('blr-number-input')
export class BlrNumberInput extends LitElement {
  static styles = [baseStyle];
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
  @property() hasError!: boolean;
  @property() currencyUnit!: string;
  @property() hasCurrency?: boolean;
  @property() locale?: string;
  @property() weightUnit!: string;
  @property() hasWeight?: boolean;
  @property() unit!: string;
  @property() unitDisplay?: string;
  @property() minimumFractionDigits?: number;
  @property() maximumFractionDigits?: number;
  @property() useValueFormat?: boolean;

  @property() theme: ThemeType = 'Light';
  @state() protected isFocused = false;
  @state() protected currentValue = 0;

  protected stepperUp() {
    this.currentValue++;
  }
  protected stepperDown() {
    this.currentValue--;
  }
  connectedCallback() {
    super.connectedCallback();
    this.currentValue = Number(this.currentValue) || 0;
  }
  protected handleFocus = () => {
    this.isFocused = true;
  };
  protected handleBlur = () => {
    this.isFocused = false;
  };

  protected toggleCurrency() {
    this.hasCurrency = !this.hasCurrency;
  }

  protected toggleWeight() {
    this.hasWeight = !this.hasWeight;
  }

  protected formatCurrencyValue(value: number) {
    if (this.hasCurrency) {
      const locale = this.locale;
      return new Intl.NumberFormat(locale, {
        style: 'currency',
        currency: this.currencyUnit,
      })
        .format(value)
        .replace(/([\d,.]+)$/, ' $1');
    } else {
      return value.toString();
    }
  }

  protected formatWeightValue(value: number) {
    if (this.hasWeight) {
      const locale = this.locale;
      return new Intl.NumberFormat(locale, {
        style: 'unit',
        unit: this.weightUnit,
        unitDisplay: 'narrow',
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      }).format(value);
    } else {
      return value.toString();
    }
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
      this.theme === 'Light' ? [formLight, actionLight, StepperComboLight] : [formDark, actionDark, StepperComboDark];
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
          type="text"
          value="${this.useValueFormat && this.hasCurrency
            ? this.formatCurrencyValue(this.currentValue)
            : this.useValueFormat && this.hasWeight
            ? this.formatWeightValue(this.currentValue)
            : this.currentValue}"
          currency="${this.currencyUnit}"
          hasCurrency="${this.hasCurrency}"
          locale="${this.locale}"
          weight="${this.weightUnit}"
          hasWeight="${this.hasWeight}"
          unit="${this.unit}"
          unitDisplay="${this.unitDisplay}"
          minimumFractionDigits="${this.minimumFractionDigits}"
          maximumFractionDigits="${this.maximumFractionDigits}"
          toggleCurrency="${this.toggleCurrency}"
          toggleWeight="${this.toggleWeight}"
          ?disabled=${this.disabled || nothing}
          ?readonly=${this.readonly || nothing}
          ?required="${this.required}"
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          placeholder=${this.placeholder || nothing}
        />
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
  theme,
  currencyUnit,
  hasCurrency,
  locale,
  weightUnit,
  hasWeight,
  unit,
  unitDisplay,
  minimumFractionDigits,
  maximumFractionDigits,
  useValueFormat,
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
    .labelAppendix="${labelAppendix}"
    .numberInputId="${numberInputId}"
    .theme="${theme}"
    .currencyUnit="${currencyUnit}"
    .hasCurrency="${hasCurrency}"
    .locale="${locale}"
    .weightUnit="${weightUnit}"
    .hasWeight="${hasWeight}"
    .unit="${unit}"
    .unitDisplay="${unitDisplay}"
    .minimumFractionDigits="${minimumFractionDigits}"
    .maximumFractionDigits="${maximumFractionDigits}"
    .useValueFormat="${useValueFormat}"
  ></blr-number-input>`;
};