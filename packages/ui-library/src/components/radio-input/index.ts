import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { InputSizesType, RadioOption } from '../../globals/types';
import { form } from '../../foundation/semantic-tokens/form.css';
import { radio } from '../../foundation/semantic-tokens/radioInput.css';
import { BlrFormLabel } from '../internal-components/form-label';

@customElement('blr-radio')
export class BlrRadio extends LitElement {
  static styles = [styleCustom, form, radio];

  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() checked?: boolean;
  @property() size?: InputSizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() invalid?: boolean;
  @property() option!: RadioOption;

  protected render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`disabled`]: this.disabled || false,
      [`readonly`]: this.readonly || false,
      [`checked`]: this.checked || false,
      [`error-input`]: this.invalid || false,
    });

    const inputclasses = classMap({
      [`error`]: this.invalid || false,
      [`error-input`]: this.invalid || false,
    });

    const calculateOptionId = (label: string) => {
      if (label) {
        return label.replace(/ /g, '_').toLowerCase();
      }
    };

    const id = this.option.label ? calculateOptionId(this.option.label) : '';

    return html`
      <div class="blr-radio ${classes}">
        <input
          id=${id || nothing}
          class=${inputclasses}
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
  ></blr-radio>`;
};
