import { TemplateResult, html, nothing } from 'lit';
import { query, state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { staticBaseStyles, staticSemanticStyles, staticComponentStyles } from './index.css.js';
import { classMap } from 'lit-html/directives/class-map.js';
import { TAG_NAME } from './renderFunction.js';
import { BlrDividerRenderFunction } from '../divider/renderFunction.js';
import { SizelessIconType } from '@boiler/icons';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { FormSizesType, UnitType, UnitVariantType } from '../../globals/types.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { getComponentConfigToken } from '../../utils/get-component-config-token.js';
import { BlrFormCaptionGroupRenderFunction } from '../form-caption-group/renderFunction.js';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction.js';
import { BlrFormLabelRenderFunction } from '../form-label/renderFunction.js';
import { BlrIconRenderFunction } from '../icon/renderFunction.js';
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
} from '../../globals/events.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

export type BlrNumberInputEventListeners = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrNumberValueChange?: (event: BlrNumberValueChangeEvent) => void;
  blrSelect?: (event: BlrSelectEvent) => void;
  blrNumberStepperClick?: (event: BlrNumberStepperClickEvent) => void;
};

const propertySanitizer = makeSanitizer((unsanitized: BlrInputFieldNumberType) => ({
  sizeVariant: unsanitized.sizeVariant ?? 'md',
  theme: unsanitized.theme ?? Themes[0],
  stepperVariant: unsanitized.stepperVariant ?? 'vertical',
  stepIncreaseAriaLabel: unsanitized.stepIncreaseAriaLabel ?? '+',
  stepDecreaseAriaLabel: unsanitized.stepDecreaseAriaLabel ?? '\u2212', // minus-sign (not minus-hyphen)
}));

/**
 * @fires blrFocus NumberInput received focus
 * @fires blrBlur NumberInput lost focus
 * @fires blrNumberValueChange NumberInput value changed
 * @fires blrSelect Text in NumberInput was selected
 * @fires blrNumberStepperClick Step button was clicked
 */
export class BlrInputFieldNumber extends LitElementCustom {
  private sanitizedController: SanitizationController<
    BlrInputFieldNumberType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();
    this.sanitizedController = new SanitizationController<
      BlrInputFieldNumberType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }

  protected get sanitized() {
    return this.sanitizedController.values;
  }

  static styles = [staticBaseStyles, staticSemanticStyles, staticComponentStyles];

  @query('input')
  protected accessor _numberFieldNode!: HTMLInputElement;

  @property() accessor inputFieldNumberId!: string;
  @property() accessor stepperVariant: 'split' | 'horizontal' | 'vertical' | undefined;
  @property() accessor label!: string;
  @property({ type: Boolean }) accessor disabled: boolean | undefined;
  @property() accessor placeholder: string | undefined;
  @property({ type: Boolean }) accessor readonly: boolean | undefined;
  @property({ type: Boolean }) accessor required: boolean | undefined;
  @property({ type: Boolean }) accessor hasLabel: boolean | undefined;
  @property() accessor sizeVariant: FormSizesType | undefined;
  @property() accessor labelAppendix: string | undefined;
  @property({ type: Boolean }) accessor hasError: boolean | undefined;
  @property() accessor errorMessage: string | undefined;
  @property() accessor errorMessageIcon: SizelessIconType | undefined;
  @property({ type: Boolean }) accessor hasHint = true;
  @property() accessor hintMessage: string | undefined;
  @property() accessor hintMessageIcon: SizelessIconType | undefined;
  @property() accessor value: number | string | undefined;
  @property({ type: Number }) accessor step: number | undefined;
  @property() accessor unit: UnitType | undefined;
  @property({ type: Number }) accessor leadingZeros: number | undefined;
  @property({ type: Number }) accessor decimals: number | undefined;
  @property() accessor unitPosition: UnitVariantType | undefined;
  @property() accessor stepIncreaseAriaLabel: string | undefined;
  @property() accessor stepDecreaseAriaLabel: string | undefined;
  @property() accessor name: string | undefined;

  @property() accessor theme: ThemeType | undefined;

  @state() protected accessor currentValue: number | undefined;
  @state() protected accessor isFocused = false;

  protected stepperUp(event: MouseEvent) {
    if (this.currentValue !== undefined && this.step !== undefined) {
      const oldValue = Number(this.currentValue);
      const step = Number(this.step ?? 1);
      const newValue = oldValue + step;
      this.currentValue = newValue;
      this.dispatchEvent(createBlrNumberValueChangeEvent({ originalEvent: event, inputValue: newValue }));
      this.dispatchEvent(createBlrNumberStepperClickEvent({ originalEvent: event, direction: 'increase', step }));
      this.requestUpdate('currentValue');
    }
  }

  protected stepperDown(event: MouseEvent) {
    if (this.currentValue !== undefined && this.step !== undefined) {
      const oldValue = Number(this.currentValue);
      const step = Number(this.step ?? 1);
      const newValue = oldValue - step;
      this.currentValue = newValue;
      this.dispatchEvent(createBlrNumberValueChangeEvent({ originalEvent: event, inputValue: newValue }));
      this.dispatchEvent(createBlrNumberStepperClickEvent({ originalEvent: event, direction: 'decrease', step }));
      this.requestUpdate('currentValue');
    }
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.value !== '') {
      this.currentValue = Number(this.currentValue) || Number(this.value);
    }
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
    const newValue = Number(this._numberFieldNode.value) || 0;
    this.currentValue = newValue;
    this.dispatchEvent(createBlrNumberValueChangeEvent({ originalEvent: event, inputValue: newValue }));
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
    const sanitized = this.sanitized;
    if (!sanitized.sizeVariant) {
      return html``;
    }
    const ariaLabel = direction === 'increase' ? sanitized.stepIncreaseAriaLabel! : sanitized.stepDecreaseAriaLabel!;
    const onClick = direction === 'increase' ? this.stepperUp : this.stepperDown;

    const iconSizeVariant = getComponentConfigToken([
      'cmp',
      'stepperbutton',
      'icon',
      'sizevariant',
      sanitized.sizeVariant,
    ]) as FormSizesType;

    const buttonClass = classMap({
      'custom-stepper-button': true,
      [iconSizeVariant]: true,
      [sanitized.sizeVariant]: true,
      [sanitized.stepperVariant]: true,
      [sanitized.theme]: true,
    });

    const iconClasses = classMap({
      noPointerEvents: true,
    });

    const button = html`
      <button
        aria-label=${ariaLabel}
        aria-controls=${this.inputFieldNumberId}
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
          },
        )}
      </button>
    `;
    return button;
  }

  protected renderMode() {
    const sanitized = this.sanitized;

    switch (sanitized.stepperVariant) {
      case 'split': {
        return html`
          ${this.getStepperButtonTemplate('decrease', 'blrMinus')}
          ${this.getStepperButtonTemplate('increase', 'blrPlus')}
        `;
      }
      case 'horizontal': {
        return html`
          <div class="stepper-combo horizontal ${sanitized.theme} ${sanitized.sizeVariant}">
            ${this.getStepperButtonTemplate('decrease', 'blrMinus')}
            ${BlrDividerRenderFunction({
              direction: 'vertical',
              theme: sanitized.theme,
            })}
            ${this.getStepperButtonTemplate('increase', 'blrPlus')}
          </div>
        `;
      }
      case 'vertical': {
        return html`
          <div class="stepper-combo vertical ${sanitized.theme} ${sanitized.sizeVariant}">
            ${this.getStepperButtonTemplate('increase', 'blrChevronUp')}
            ${BlrDividerRenderFunction({
              direction: 'horizontal',
              theme: sanitized.theme,
            })}
            ${this.getStepperButtonTemplate('decrease', 'blrChevronDown')}
          </div>
        `;
      }
    }
  }

  protected render() {
    const sanitized = this.sanitized;
    if (sanitized.sizeVariant) {
      const inputClasses = classMap({
        [sanitized.sizeVariant]: sanitized.sizeVariant,
        'prepend': this.unitPosition === 'prefix',
        'suffix': this.unitPosition === 'suffix',
        'readonly': this.readonly || false,
        'error-input': this.hasError || false,
        [sanitized.theme]: sanitized.theme,
      });

      const unitClasses = classMap({
        unit: true,
        prepend: this.unitPosition === 'prefix',
        suffix: this.unitPosition === 'suffix',
        [sanitized.sizeVariant]: sanitized.sizeVariant,
        [sanitized.stepperVariant || 'split']: sanitized.stepperVariant || 'split',
        [sanitized.theme]: sanitized.theme,
      });

      const wrapperClasses = classMap({
        'input-wrapper': true,
        'disabled': this.disabled || false,
        [sanitized.sizeVariant]: sanitized.sizeVariant,
        [sanitized.stepperVariant || 'split']: sanitized.stepperVariant || 'split',
        'error-input': this.hasError || false,
        [sanitized.theme]: sanitized.theme,
      });

      const inputAndUnitContainer = classMap({
        'input-unit-container': true,
        'prepend': this.unitPosition === 'prefix' || this.unitPosition === 'suffix',
        [sanitized.sizeVariant]: sanitized.sizeVariant,
        [sanitized.stepperVariant || 'split']: sanitized.stepperVariant || 'split',
        [sanitized.theme]: sanitized.theme,
      });

      const getCaptionContent = () => html`
        ${this.hasHint && (this.hintMessage || this.hintMessageIcon)
          ? html`
              <div class="hint-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'hint',
                  theme: sanitized.theme,
                  sizeVariant: sanitized.sizeVariant,
                  message: this.hintMessage,
                  icon: this.hintMessageIcon,
                })}
              </div>
            `
          : nothing}
        ${this.hasError && (this.errorMessage || this.errorMessageIcon)
          ? html`
              <div class="error-wrapper">
                ${BlrFormCaptionRenderFunction({
                  variant: 'error',
                  theme: sanitized.theme,
                  sizeVariant: sanitized.sizeVariant,
                  message: this.errorMessage,
                  icon: this.errorMessageIcon,
                })}
              </div>
            `
          : nothing}
      `;

      return html`
        <div class="blr-input-field-number ${sanitized.theme} ${sanitized.sizeVariant}">
          ${this.hasLabel
            ? html`
                <div class="label-wrapper">
                  ${BlrFormLabelRenderFunction({
                    label: this.label,
                    sizeVariant: sanitized.sizeVariant,
                    labelAppendix: this.labelAppendix,
                    forValue: this.inputFieldNumberId,
                    theme: sanitized.theme,
                    hasError: Boolean(this.hasError),
                  })}
                </div>
              `
            : nothing}
          <div class="${wrapperClasses}">
            <div class="${inputAndUnitContainer}">
              <input
                id="${this.inputFieldNumberId}"
                class="${inputClasses}"
                type="number"
                .value=${this.currentValue !== undefined
                  ? this.customFormat(this.currentValue || 0, this.decimals || 0, this.leadingZeros || 0)
                  : ''}
                step="${this.step !== undefined ? this.step : 1}"
                ?disabled="${this.disabled}"
                ?readonly="${this.readonly}"
                ?required="${this.required}"
                @input=${this.handleChange}
                @blur=${this.handleBlur}
                @focus=${this.handleFocus}
                @select=${this.handleSelect}
                placeholder=${this.placeholder || ''}
              />
              ${this.unitPosition === 'prefix' || this.unitPosition === 'suffix'
                ? html`<div class="${unitClasses}">${this.unit}</div>`
                : nothing}
            </div>
            ${!this.readonly ? this.renderMode() : nothing}
          </div>
        </div>

        ${(this.hasHint && this.hintMessage) || (this.hasError && this.errorMessage)
          ? BlrFormCaptionGroupRenderFunction(
              { sizeVariant: sanitized.sizeVariant, theme: sanitized.theme },
              getCaptionContent(),
            )
          : nothing}
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrInputFieldNumber);
}

export type BlrInputFieldNumberType = ElementInterface<BlrInputFieldNumber>;
