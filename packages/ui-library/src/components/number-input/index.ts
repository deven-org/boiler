import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import {
  stepperComboLight,
  stepperButtonLight,
  stepperComboDark,
  stepperButtonDark,
} from '../../foundation/component-tokens/action.css';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { DividerVariationTypes, FormSizesType, ActionVariantType, SizesType } from '../../globals/types';
import { BlrFormLabelRenderFunction } from '../internal-components/form-label';
import { BlrFormHintRenderFunction } from '../internal-components/form-hint';
import { IconType } from '@boiler/icons';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { BlrDividerRenderFunction } from '../internal-components/divider';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { getComponentConfigToken } from '../../utils/get-component-config-token';

@customElement('blr-number-input')
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export class BlrNumberInput extends LitElement {
  static styles = [styleCustom];

  @property() numberInputId!: string;
  @property() hasLabel = true;
  @property() label!: string;
  @property() labelAppendix?: string;
  @property() value!: string;
  @property() placeholder?: string;
  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() size: FormSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() maxLength?: number;
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() showHint = true;
  @property() spaceBetween = false;
  @property() hintText?: string;
  @property() hintIcon: IconType = 'blrInfoSm';

  @property() dividerDirectionVariant: DividerVariationTypes = 'horizontal';
  @property() variant: ActionVariantType = 'silent';

  @property() theme: ThemeType = 'Light';

  @state() protected counter = 0;

  protected stepperUp() {
    this.counter++;
    // eslint-disable-next-line no-console
    console.log('up');

    this.requestUpdate();
  }

  protected stepperDown() {
    this.counter--;
    // eslint-disable-next-line no-console
    console.log('down', this.counter);

    this.requestUpdate();
  }

  protected connectedCallback() {
    super.connectedCallback();
    this.counter = Number(this.value) || 0;
  }

  protected render() {
    const dynamicStyles =
      this.theme === 'Light'
        ? [formLight, stepperComboLight, stepperButtonLight, actionLight]
        : [formDark, stepperComboDark, stepperButtonDark, actionDark];

    const classes = classMap({
      [`${this.size}`]: this.size,
      [`${this.variant}`]: this.variant,
      [`disabled`]: this.disabled || false,
    });

    const inputClasses = classMap({
      [`error`]: this.hasError || false,
      [`error-input`]: this.hasError || false,
      [`${this.size}`]: this.size,
      [`spaceBetween`]: this.spaceBetween || false,
    });

    const stepperButtonClasses = classMap({
      'blr-stepper-button': true,
      'blr-semantic-action': true,
      'silent': true,
      [`${this.size}`]: this.size,
    });

    const stepperComboClasses = classMap({
      'blr-stepper-combo': true,
      'vertical': this.dividerDirectionVariant === 'horizontal',
      'horizontal': this.dividerDirectionVariant === 'vertical',
    });
    //console.log(stepperComboClasses)
    // console.log('StepperButton size for', this.size, getComponentConfigToken('StepperButton', this.size));

    const stepperButtonSize = getComponentConfigToken('StepperButton', this.size).toLocaleLowerCase() as SizesType;

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="blr-number-input ${classes}">
        ${
          this.hasLabel
            ? html`${BlrFormLabelRenderFunction({
                labelText: this.label,
                labelSize: this.size,
                labelAppendix: this.labelAppendix,
                forValue: this.numberInputId,
                theme: this.theme,
              })}`
            : nothing
        }
        <div class="blr-input-inner-container">
          ${html`<input
            class="blr-form-element ${inputClasses}"
            id=${this.numberInputId || nothing}
            type="number"
            value=${this.counter.toFixed(2)}
            placeholder=${this.placeholder || nothing}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?required=${this.required}
            @input=${this.onChange}
            @blur=${this.onBlur}
            @focus=${this.onFocus}
            maxlength=${this.maxLength}
            hasError=${this.hasError}
            dividerDirectionVariant=${this.dividerDirectionVariant}
            variant=${this.variant}
          />`}
          
            ${
              this.dividerDirectionVariant === 'horizontal'
                ? this.spaceBetween === false
                  ? html`
                      <div class="blr-number-input-button-wrapper">
                        <div
                          class="blr-stepper-combo vertical ${stepperButtonSize} wrapper-${this
                            .dividerDirectionVariant}"
                        >
                          <button class=${stepperButtonClasses} @click=${this.stepperUp}>
                            ${BlrIconRenderFunction({
                              icon: calculateIconName('blrChevronUp', stepperButtonSize),
                              name: 'up',
                              size: stepperButtonSize,
                              hideAria: true,
                              disablePointerEvents: true,
                            })}
                          </button>

                          ${BlrDividerRenderFunction({
                            dividerDirectionVariant: this.dividerDirectionVariant,
                          })}

                          <button class=${stepperButtonClasses} @click=${this.stepperDown}>
                            ${BlrIconRenderFunction({
                              icon: calculateIconName('blrChevronDown', stepperButtonSize),
                              name: 'down',
                              size: stepperButtonSize,
                              hideAria: true,
                              disablePointerEvents: true,
                            })}
                          </button>
                        </div>
                      </div>
                    `
                  : html`
                      <div class="left">
                        <button class=${stepperButtonClasses} @click=${this.stepperDown}>
                          ${BlrIconRenderFunction({
                            icon: calculateIconName('blrMinus', this.size),
                            name: 'up',
                            size: stepperButtonSize,
                            hideAria: true,
                            disablePointerEvents: true,
                          })}
                        </button>
                      </div>

                      <div class="right">
                        <button class=${stepperButtonClasses} @click=${this.stepperUp}>
                          ${BlrIconRenderFunction({
                            icon: calculateIconName('blrPlus', this.size),
                            name: 'down',
                            size: stepperButtonSize,
                            hideAria: true,
                            disablePointerEvents: true,
                          })}
                        </button>
                      </div>
                    `
                : html`
                    <div class="blr-number-input-button-wrapper">
                      <div class="wrapper-${this.dividerDirectionVariant}">
                        <button class=${stepperButtonClasses} @click=${this.stepperDown}>
                          ${BlrIconRenderFunction({
                            icon: calculateIconName('blrMinus', this.size),
                            name: 'up',
                            size: stepperButtonSize,
                            hideAria: true,
                            disablePointerEvents: true,
                          })}
                        </button>

                        ${BlrDividerRenderFunction({
                          dividerDirectionVariant: this.dividerDirectionVariant,
                        })}

                        <button class=${stepperButtonClasses} @click=${this.stepperUp}>
                          ${BlrIconRenderFunction({
                            icon: calculateIconName('blrPlus', this.size),
                            name: 'down',
                            size: stepperButtonSize,
                            hideAria: true,
                            disablePointerEvents: true,
                          })}
                        </button>
                      </div>
                    </div>
                  `
            }
          </div>
        </div>
        ${
          this.showHint
            ? html`
                ${BlrFormHintRenderFunction({
                  message: this.hasError ? this.errorMessage : this.hintText,
                  variant: this.hasError ? 'error' : 'hint',
                  icon: calculateIconName(this.hintIcon, this.size),
                  size: 'sm',
                  theme: this.theme,
                })}
              `
            : nothing
        }
      </div>
    `;
  }
}

export type BlrNumberInputType = Omit<BlrNumberInput, keyof LitElement>;

export const BlrNumberInputRenderFunction = ({
  numberInputId,
  hasLabel,
  label,
  labelAppendix,
  value,
  placeholder,
  disabled,
  readonly,
  size,
  required,
  onChange,
  onBlur,
  onFocus,
  maxLength,
  hasError,
  errorMessage,
  showHint,
  hintText,
  hintIcon,
  dividerDirectionVariant,
  spaceBetween,
  variant,
  theme,
}: BlrNumberInputType) => {
  return html`<blr-number-input
    .numberInputId=${numberInputId}
    .hasLabel=${hasLabel}
    .label=${label}
    .labelAppendix=${labelAppendix}
    .value=${value}
    .placeholder=${placeholder}
    .disabled=${disabled}
    .readonly=${readonly}
    .size=${size}
    .required=${required}
    .onChange=${onChange}
    .onBlur=${onBlur}
    .onFocus=${onFocus}
    .maxLength=${maxLength}
    .errorMessage=${errorMessage}
    .showHint=${showHint}
    .hintText=${hintText}
    .hintIcon=${hintIcon}
    .hasError=${hasError}
    .spaceBetween=${spaceBetween}
    .dividerDirectionVariant=${dividerDirectionVariant}
    .variant=${variant}
    .theme=${theme}
  ></blr-number-input>`;
};
