import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { InputSizesType, RadioOption } from '../../globals/types';
import { form } from '../../foundation/semantic-tokens/form.css';
import { radio } from '../../foundation/semantic-tokens/radioInput.css';
import { BlrFormLabel } from '../internal-components/form-label';
import { BlrFormHint } from '../internal-components/form-hint';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { IconType } from '@boiler/icons';

@customElement('blr-radio')
export class BlrRadio extends LitElement {
  static styles = [styleCustom, form, radio];

  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;
  @property() size: InputSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() invalid?: boolean;
  @property() option!: RadioOption;
  @property() showHint = true;
  @property() hintIcon: IconType = 'blrInfoSm';
  @property() errorMessage?: string;

  protected render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`disabled`]: this.disabled || false,
      [`readonly`]: this.readonly || false,
      [`checked`]: this.checked || this.option.checked || false,
      [`error-input`]: this.invalid || false,
    });

    const calculateOptionId = (label: string) => {
      return label ? label.replace(/ /g, '_').toLowerCase() : '';
    };

    const id = this.option.label ? calculateOptionId(this.option.label) : '';

    return html`
      <div class="blr-radio">
        <div class="radio-wrapper ${classes}">
          <input
            id=${id || nothing}
            class=${classes}
            type="radio"
            name=${this.option.label || nothing}
            value=${this.option.value || nothing}
            ?disabled=${this.disabled}
            ?readonly=${this.readonly}
            ?aria-disabled=${this.disabled}
            ?invalid=${this.invalid}
            ?aria-invalid=${this.invalid}
            ?checked=${this.checked}
            ?required=${this.required}
            @input=${this.onChange}
            @blur=${this.onBlur}
            @focus=${this.onFocus}
            invalid=${this.invalid}
          />
          ${BlrFormLabel({
            labelText: this.option.label,
            labelSize: this.size || 'md',
            forValue: calculateOptionId(this.option.label),
          })}
        </div>
        ${this.showHint
          ? html`
              ${BlrFormHint({
                message: (this.invalid ? this.errorMessage : this.option.hint) || '',
                variant: this.invalid ? 'error' : 'hint',
                size: 'sm',
                iconName: calculateIconName(this.hintIcon, this.size),
              })}
            `
          : html``}
      </div>
    `;
  }
}

export type BlrRadioType = Omit<BlrRadio, keyof LitElement>;

export const BlrRadioRenderFunction = ({
  disabled,
  checked,
  size,
  required,
  readonly,
  onChange,
  onBlur,
  onFocus,
  invalid,
  option,
  showHint,
  hintIcon,
  errorMessage,
}: BlrRadioType) => {
  return html`<blr-radio
    class="example-layout-class"
    .value=${option.value}
    .label=${option.label}
    .disabled=${disabled}
    .checked=${checked}
    .required=${required}
    .readonly=${readonly}
    .invalid=${invalid}
    .size=${size}
    .onChange=${onChange}
    .onBlur=${onBlur}
    .onFocus=${onFocus}
    .option=${option}
    .showHint=${showHint}
    .hintIcon=${hintIcon}
    .errorMessage=${errorMessage}
  ></blr-radio>`;
};
