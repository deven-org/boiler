import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { form } from '../../foundation/semantic-tokens/form.css';
import { radio } from '../../foundation/semantic-tokens/radioInput.css';
import { InputSizesType, RadioOption } from '../../globals/types';
import { BlrFormLabel } from '../internal-components/form-label';

@customElement('blr-radio-group')
export class BlrRadioGroup extends LitElement {
  static styles = [styleCustom, form, radio];

  @property() label!: string;
  @property() size: InputSizesType = 'md';
  @property() disabled?: boolean;
  @property() required?: boolean;
  @property() readonly?: boolean;
  @property() invalid?: boolean;
  @property() checked?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() hideLabel!: boolean;
  @property() options!: RadioOption[];
  @property() layout!: boolean;
  @property() showHint = true;

  protected render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`disabled`]: this.disabled || false,
      [`readonly`]: this.readonly || false,
      [`checked`]: this.checked || false,
      [`error-input`]: this.invalid || false,
      [`${this.layout}`]: this.layout,
    });

    const hintClasses = classMap({
      [`${this.size}`]: this.size || 'md',
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
              <div class="radio-wrapper ${classes}">
                <input
                  id=${id}
                  class=${classes}
                  type="radio"
                  name=${option.label || nothing}
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
                  labelText: option.label,
                  labelSize: this.size || 'md',
                  forValue: calculateOptionId(option.label),
                })}
              </div>
              ${this.showHint ? html` <p class="hint ${hintClasses}">${option.hint || nothing}</p> ` : html``}
            </div>
          `;
        })}
      </div>
    `;
  }
}

export type BlrRadioGroupType = Omit<BlrRadioGroup, keyof LitElement>;

export const BlrRadioGroupRenderFunction = ({
  label,
  size,
  disabled,
  required,
  readonly,
  invalid,
  checked,
  onChange,
  onBlur,
  onFocus,
  hideLabel,
  options,
  layout,
  showHint,
}: BlrRadioGroupType) => {
  return html`<blr-radio-group
    class="example-layout-class"
    .label=${label}
    .size=${size}
    .disabled=${disabled}
    .required=${required}
    .readonly=${readonly}
    .invalid=${invalid}
    .checked=${checked}
    @input=${onChange}
    @blur=${onBlur}
    @focus=${onFocus}
    .hideLabel=${hideLabel}
    .options=${options}
    .layout=${layout}
    .showHint=${showHint}
  ></blr-radio-group>`;
};
