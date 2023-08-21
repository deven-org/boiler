import { LitElement, TemplateResult, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { baseStyle, formLight, formDark } from './index.css';
import { classMap } from 'lit-html/directives/class-map.js';
import { BlrFormLabelRenderFunction } from '../internal-components/form-label';
import { FormSizesType, SizesType } from '../../globals/types';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
// import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { SizelessIconType } from '@boiler/icons';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';

type ButtonTemplateType = 'operators' | 'chevrons';
type AdjustType = 'increment' | 'decrement';

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

  protected getButtonTemplate = (
    buttonsType: ButtonTemplateType,
    adjustType: AdjustType,
    stepperButtonSize: SizesType
  ): TemplateResult<1> => {
    let iconKey: SizelessIconType = adjustType === 'increment' ? 'blrPlus' : 'blrMinus';

    if (buttonsType === 'chevrons') {
      iconKey = adjustType === 'increment' ? 'blrChevronUp' : 'blrChevronDown';
    }

    return html`<button
      class="custom-stepper-button blr-semantic-action cta ${adjustType}"
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
  };

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [formLight, actionLight] : [formDark, actionDark];

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
    const stepperButtonSize = getComponentConfigToken('StepperButton', this.size).toLowerCase() as SizesType;

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
              ${this.getButtonTemplate('operators', 'increment', stepperButtonSize)}
              ${this.getButtonTemplate('operators', 'decrement', stepperButtonSize)}
            `
          : html`
              ${this.getButtonTemplate('chevrons', 'increment', stepperButtonSize)}
              ${this.getButtonTemplate('chevrons', 'decrement', stepperButtonSize)}
            `}
        <input
          class="${inputClasses}"
          type="number"
          value=${this.currentValue}
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
  ></blr-number-input>`;
};
