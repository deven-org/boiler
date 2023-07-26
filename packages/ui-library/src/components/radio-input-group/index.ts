import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { form } from '../../foundation/semantic-tokens/form.css';
import { radio } from '../../foundation/component-tokens/radio.css';
import { InputSizesType, RadioOption } from '../../globals/types';
import { BlrFormLabelInline } from '../form-label-inline';
import { BlrFormHint } from '../internal-components/form-hint';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { IconType } from '@boiler/icons';

@customElement('blr-radio-group')
export class BlrRadioGroup extends LitElement {
  static styles = [styleCustom, form, radio];

  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;
  @property() name?: string;
  @property() size: InputSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() hasError?: boolean;
  @property() errorIcon?: IconType;
  @property() hideLabel!: boolean;
  @property() options!: RadioOption[];
  @property() layout!: boolean;
  @property() showHint = true;
  @property() hintIcon: IconType = 'blrInfoSm';
  @property() errorMessage?: string;
  @property() groupErrorMessage?: string;
  @property() groupErrorIcon?: IconType;

  protected render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`disabled`]: this.disabled || false,
      [`readonly`]: this.readonly || false,
      [`checked`]: this.checked || false,
      [`error`]: this.hasError || false,
      [`${this.layout}`]: this.layout,
    });

    const calculateOptionId = (label: string) => {
      return label.replace(/ /g, '_').toLowerCase();
    };

    return html`
      <div class="blr-radio-group ${classes}">
        ${this.options &&
        this.options.map((option: RadioOption) => {
          const id = calculateOptionId(option.label);
          return html`
            <div class="blr-radio ${classes}">
              <input
                id=${id || nothing}
                class="${classes} input-control"
                type="radio"
                name=${this.name}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?aria-disabled=${this.disabled}
                ?invalid=${this.hasError}
                ?aria-invalid=${this.hasError}
                ?checked=${this.checked}
                ?required=${this.required}
                @input=${this.onChange}
                @blur=${this.onBlur}
                @focus=${this.onFocus}
              />
              <div class="label-wrapper">
                ${option.label
                  ? html`${BlrFormLabelInline({ labelText: option.label, forValue: this.id, labelSize: this.size })}`
                  : nothing}
                ${this.showHint
                  ? html`
                      <div class="hint-wrapper">
                        ${BlrFormHint({
                          message: option.hintMessage,
                          variant: 'hint',
                          size: this.size,
                          iconName: this.hintIcon ? calculateIconName(this.hintIcon, this.size) : '',
                        })}
                      </div>
                    `
                  : html``}
                ${this.hasError
                  ? html`
                      <div class="error-wrapper">
                        ${BlrFormHint({
                          message: option.errorMessage,
                          variant: 'error',
                          size: this.size,
                          iconName: this.errorIcon ? calculateIconName(this.errorIcon, this.size) : '',
                        })}
                      </div>
                    `
                  : html``}
              </div>
            </div>
          `;
        })}
        <div class="group-error">
          ${this.hasError
            ? html`
                ${BlrFormHint({
                  message: this.groupErrorMessage || '',
                  variant: 'error',
                  size: 'sm',
                  iconName: this.groupErrorIcon ? calculateIconName(this.groupErrorIcon, this.size) : '',
                })}
              `
            : html``}
        </div>
      </div>
    `;
  }
}

export type BlrRadioGroupType = Omit<BlrRadioGroup, keyof LitElement>;

export const BlrRadioGroupRenderFunction = ({
  disabled,
  checked,
  size,
  name,
  required,
  readonly,
  onChange,
  onBlur,
  onFocus,
  hasError,
  errorIcon,
  options,
  layout,
  showHint,
  hintIcon,
  hideLabel,
  groupErrorMessage,
  groupErrorIcon,
}: BlrRadioGroupType) => {
  return html`<blr-radio-group
    class="example-layout-class"
    .disabled=${disabled}
    .checked=${checked}
    .size=${size}
    .name=${name}
    .required=${required}
    .readonly=${readonly}
    @input=${onChange}
    @blur=${onBlur}
    @focus=${onFocus}
    .hasError=${hasError}
    .errorIcon=${errorIcon}
    .options=${options}
    .layout=${layout}
    .showHint=${showHint}
    .hintIcon=${hintIcon}
    .hideLabel=${hideLabel}
    .groupErrorMessage=${groupErrorMessage}
    .groupErrorIcon=${groupErrorIcon}
  ></blr-radio-group>`;
};
