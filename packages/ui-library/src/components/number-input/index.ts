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
import {
  BlrBlurEvent,
  BlrFocusEvent,
  BlrNumberStepperClickEvent,
  BlrNumberValueChangeEvent,
  BlrSelectEvent,
  createBlrBlurEvent,
  createBlrFocusEvent,
  createBlrNumberStepperClickEvent,
  createBlrNumberValueChangeEvent,
  createBlrSelectEvent,
} from '../../globals/events';

export type BlrNumberInputEventListeners = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrNumberValueChange?: (event: BlrNumberValueChangeEvent) => void;
  blrSelect?: (event: BlrSelectEvent) => void;
  blrNumberStepperClick?: (event: BlrNumberStepperClickEvent) => void;
};

/**
 * @fires blrFocus NumberInput received focus
 * @fires blrBlur NumberInput lost focus
 * @fires blrNumberValueChange NumberInput value changed
 * @fires blrSelect Text in NumberInput was selected
 * @fires blrNumberStepperClick Step button was clicked
 */
export class BlrNumberInput extends LitElement {
  static styles = [baseStyle];

  @query('input')
  protected _numberFieldNode!: HTMLInputElement;

  @property({ type: String }) numberInputId!: string;
  @property({ type: String }) stepperVariant: 'split' | 'horizontal' | 'vertical' = 'split';
  @property({ type: String }) label!: string;
  @property({ type: Boolean }) disabled?: boolean;
  @property({ type: String }) placeholder?: string;
  @property({ type: Boolean }) readonly?: boolean;
  @property({ type: Boolean }) required?: boolean;
  @property({ type: Boolean }) hasLabel?: boolean;
  @property({ type: String }) sizeVariant?: FormSizesType = 'md';
  @property({ type: String }) labelAppendix?: string;
  @property({ type: Boolean }) hasError?: boolean;
  @property({ type: String }) errorMessage?: string;
  @property({ type: String }) errorIcon?: SizelessIconType;
  @property({ type: Boolean }) hasHint = true;
  @property({ type: String }) hintMessage?: string;
  @property({ type: String }) hintIcon?: SizelessIconType;
  @property({ type: Number }) value?: number;
  @property({ type: Number }) step?: number;
  @property({ type: String }) unit?: string;
  @property({ type: Number }) leadingZeros?: number;
  @property({ type: Number }) decimals?: number;
  @property({ type: Boolean }) prependUnit?: boolean;
  @property({ type: String }) stepIncreaseAriaLabel?: string = '+';
  @property({ type: String }) stepDecreaseAriaLabel?: string = '\u2212'; // minus-sign (not minus-hyphen)

  @property({ type: String }) theme: ThemeType = 'Light';

  @state() protected currentValue = 0;
  @state() protected isFocused = false;

  protected stepperUp(event: MouseEvent) {
    if (this.currentValue !== undefined && this.step !== undefined) {
      const oldValue = this.currentValue;
      const step = this.step ?? 1;
      const newValue = oldValue + step;
      this.currentValue = newValue;
      this.dispatchEvent(createBlrNumberValueChangeEvent({ originalEvent: event, oldValue, newValue }));
      this.dispatchEvent(createBlrNumberStepperClickEvent({ originalEvent: event, direction: 'increase', step }));
      this.requestUpdate('currentValue');
    }
  }

  protected stepperDown(event: MouseEvent) {
    if (this.currentValue !== undefined && this.step !== undefined) {
      const oldValue = this.currentValue;
      const step = this.step ?? 1;
      const newValue = oldValue - step;
      this.currentValue = newValue;
      this.dispatchEvent(createBlrNumberValueChangeEvent({ originalEvent: event, oldValue, newValue }));
      this.dispatchEvent(createBlrNumberStepperClickEvent({ originalEvent: event, direction: 'decrease', step }));
      this.requestUpdate('currentValue');
    }
  }

  connectedCallback() {
    super.connectedCallback();

    this.currentValue = this.currentValue || this.value || 0;
  }

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled) {
      this.isFocused = true;
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.isFocused = false;
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  protected handleSelect = (event: Event) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrSelectEvent({ originalEvent: event }));
    }
  };

  protected handleChange(event: Event) {
    const oldValue = this.currentValue;
    const newValue = Number(this._numberFieldNode.value) || 0;
    this.currentValue = newValue;
    this.dispatchEvent(createBlrNumberValueChangeEvent({ originalEvent: event, oldValue, newValue }));
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

  protected getStepperButtonTemplate(direction: 'increase' | 'decrease', icon: SizelessIconType): TemplateResult<1> {
    if (!this.sizeVariant) {
      return html``;
    }

    const ariaLabel = direction === 'increase' ? this.stepIncreaseAriaLabel! : this.stepDecreaseAriaLabel!;
    const onClick = direction === 'increase' ? this.stepperUp : this.stepperDown;

    const iconSizeVariant = getComponentConfigToken([
      'cmp',
      'StepperButton',
      'Icon',
      'SizeVariant',
      this.sizeVariant.toUpperCase(),
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
      <button
        aria-label=${ariaLabel}
        aria-controls=${this.numberInputId}
        ?disabled="${this.disabled}"
        class="${buttonClass}"
        @click=${onClick}
      >
        ${BlrIconRenderFunction(
          {
            classMap: iconClasses,
            icon: calculateIconName(icon, iconSizeVariant),
            sizeVariant: iconSizeVariant,
            fillParent: false,
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
          ${this.getStepperButtonTemplate('decrease', 'blrMinus')}
          ${this.getStepperButtonTemplate('increase', 'blrPlus')}
        `;
      }
      case 'horizontal': {
        return html`
          <div class="stepper-combo horizontal  ${this.sizeVariant}">
            ${this.getStepperButtonTemplate('decrease', 'blrMinus')}
            ${BlrDividerRenderFunction({
              direction: 'vertical',
              theme: this.theme,
            })}
            ${this.getStepperButtonTemplate('increase', 'blrPlus')}
          </div>
        `;
      }
      case 'vertical': {
        return html`
          <div class="stepper-combo vertical  ${this.sizeVariant}">
            ${this.getStepperButtonTemplate('increase', 'blrChevronUp')}
            ${BlrDividerRenderFunction({
              direction: 'horizontal',
              theme: this.theme,
            })}
            ${this.getStepperButtonTemplate('decrease', 'blrChevronDown')}
          </div>
        `;
      }
    }
  }

  protected render() {
    const hasUnit = this.unit !== undefined && this.unit.length > 0;

    if (this.sizeVariant) {
      const dynamicStyles =
        this.theme === 'Light'
          ? [wrapperLight, actionLight, StepperComboLight]
          : [wrapperDark, actionDark, StepperComboDark];

      const inputClasses = classMap({
        [this.sizeVariant]: this.sizeVariant,
        prepend: hasUnit && !!this.prependUnit,
      });

      const unitClasses = classMap({
        unit: true,
        prepend: hasUnit && !!this.prependUnit,
        [`${this.sizeVariant}`]: this.sizeVariant,
        [this.stepperVariant || 'split']: this.stepperVariant || 'split',
      });

      const wrapperClasses = classMap({
        'input-wrapper': true,
        'disabled': this.disabled || false,
        [`${this.sizeVariant}`]: this.sizeVariant,
        [this.stepperVariant || 'split']: this.stepperVariant || 'split',
        'error-input': this.hasError || false,
        'prepend': hasUnit && !!this.prependUnit,
        'readonly': this.readonly || false,
      });

      const inputAndUnitContainer = classMap({
        'input-unit-container': true,
        'prepend': hasUnit && !!this.prependUnit,
        [`${this.sizeVariant}`]: this.sizeVariant,
        [this.stepperVariant || 'split']: this.stepperVariant || 'split',
      });

      const captionContent = html`
        ${this.hasHint && (this.hintMessage || this.hintIcon)
          ? html`
              <div class="hint-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'hint',
                  theme: this.theme,
                  size: this.sizeVariant,
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
                  size: this.sizeVariant,
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
        <div class="blr-number-input ${this.sizeVariant}">
          ${this.hasLabel
            ? html`
                <div class="label-wrapper">
                  ${BlrFormLabelRenderFunction({
                    label: this.label,
                    sizeVariant: this.sizeVariant,
                    labelAppendix: this.labelAppendix,
                    forValue: this.numberInputId,
                    theme: this.theme,
                    hasError: Boolean(this.hasError),
                  })}
                </div>
              `
            : nothing}
          <div class="${wrapperClasses}">
            <div class="${inputAndUnitContainer}">
              <input
                id="${this.numberInputId}"
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
                @blur=${this.handleBlur}
                @focus=${this.handleFocus}
                @select=${this.handleSelect}
                placeholder=${this.placeholder || nothing}
              />
              ${hasUnit ? html` <div class="${unitClasses}">${this.unit}</div> ` : nothing}
            </div>
            ${this.renderMode()}
          </div>
        </div>

        ${this.hasHint || this.hasError
          ? BlrFormCaptionGroupRenderFunction({ size: this.sizeVariant }, captionContent)
          : nothing}
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrNumberInput);
}

export type BlrNumberInputType = Omit<BlrNumberInput, keyof LitElement> & BlrNumberInputEventListeners;
