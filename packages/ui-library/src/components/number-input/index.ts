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
import { BlrDividerRenderFunction } from '../divider';
import { FormSizesType } from '../../globals/types';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { IconType, SizelessIconType } from '@boiler/icons';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { BlrFormHintRenderFunction } from '../internal-components/form-hint';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

type ButtonTemplateType = 'operators' | 'chevrons';
type AdjustType = 'increment' | 'decrement';
type LayoutType = 'horizontal' | 'vertical';

const TAG_NAME = 'blr-number-input';

@customElement(TAG_NAME)
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
  @property() unit?: string | undefined;
  @property() totalDigits?: number;
  @property() fractionDigits?: number;
  @property() prependUnit?: boolean;

  @property() theme: ThemeType = 'Light';

  @state() protected isFocused = false;
  @state() protected currentValue = 0;
  @state() protected adjustType = 'vertical' || 'horizontal';

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
      ?disabled="${this.disabled}"
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

    return button;
  };

  protected render() {
    const dynamicStyles =
      this.theme === 'Light'
        ? [formLight, wrapperLight, actionLight, StepperComboLight]
        : [formDark, wrapperDark, actionDark, StepperComboDark];

    const inputClasses = classMap({
      'custom-form-input': true,
      [`${this.size}`]: this.size,
      [`error-input`]: this.hasError || false,
    });

    const unitClasses = classMap({
      unit: true,
      prepend: this.prependUnit === true,
      [`${this.size}`]: this.size,
      disabled: this.disabled || false,
      [`error-input`]: this.hasError || false,
      focus: this.isFocused || false,
    });

    const wrapperClasses = classMap({
      'input-wrapper': true,
      'focus': this.isFocused || false,
      'disabled': this.disabled || false,
      [`${this.size}`]: this.size,
      [`${this.variant || 'mode1'}`]: this.variant || 'mode1',
      [`error-input`]: this.hasError || false,
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
            variant: this.hasError ? 'error' : 'label',
          })}`
        : nothing}
      <div class="${wrapperClasses}">
        ${!this.readonly
          ? html` ${this.variant === 'mode1'
              ? html`
                  ${this.getButtonTemplate('operators', 'decrement', iconSize, 'horizontal')}
                  ${this.getButtonTemplate('operators', 'increment', iconSize, 'horizontal')}
                `
              : this.variant === 'mode2'
              ? html`
                  <div class="stepper-combo horizontal ${this.size}">
                    <div class="divider-vertical">
                      ${BlrDividerRenderFunction({
                        dividerDirectionVariant: 'vertical',
                        theme: this.theme,
                      })}
                    </div>
                    ${this.getButtonTemplate('operators', 'decrement', iconSize, 'horizontal')}
                    ${this.getButtonTemplate('operators', 'increment', iconSize, 'horizontal')}
                  </div>
                `
              : html`
                  <div class="stepper-combo vertical ${this.size}">
                    <div class="divider-horizontal">
                      ${BlrDividerRenderFunction({
                        dividerDirectionVariant: 'horizontal',
                        theme: this.theme,
                      })}
                    </div>
                    ${this.getButtonTemplate('chevrons', 'increment', iconSize, 'vertical')}
                    ${this.getButtonTemplate('chevrons', 'decrement', iconSize, 'vertical')}
                  </div>
                `}`
          : nothing}
        ${this.prependUnit && this.unit && this.unit.length && !this.readonly
          ? html`<span class="${unitClasses}">${this.unit}</span>`
          : nothing}

        <input
          class="${inputClasses}"
          type="number"
          .value=${!this.readonly
            ? this.customFormat(this.currentValue || 0, this.fractionDigits || 0, this.totalDigits || 0)
            : ''}
          step="${this.step || nothing}"
          ?disabled="${this.disabled}"
          ?readonly="${this.readonly}"
          ?required="${this.required}"
          hasError="${this.hasError}"
          @change=${this.handleChange}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          placeholder=${this.placeholder || nothing}
        />
        ${!this.prependUnit && this.unit && this.unit.length && !this.readonly
          ? html`<span class="${unitClasses}">${this.unit}</span>`
          : nothing}
      </div>
      <div class="hint-wrapper ${this.size}">
        ${this.showHint
          ? html`
              ${BlrFormHintRenderFunction({
                message: this.hasError ? this.errorMessage : this.hintText,
                variant: this.hasError ? 'error' : 'hint',
                icon: this.hintIcon,
                size: 'sm',
                theme: this.theme,
              })}
            `
          : nothing}
      </div>
    `;
  }
}

export type BlrNumberInputType = Omit<BlrNumberInput, keyof LitElement>;

export const BlrNumberInputRenderFunction = (params: BlrNumberInputType) =>
  genericBlrComponentRenderer<BlrNumberInputType>(TAG_NAME, { ...params });
