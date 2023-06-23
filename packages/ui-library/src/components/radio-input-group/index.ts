import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { radio } from '../../foundation/semantic-tokens/radioInput.css';
import { InputSizesType, RadioOption } from '../../globals/types';

@customElement('blr-radio-group')
export class BlrRadioGroup extends LitElement {
  static styles = [styleCustom, radio];

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

  protected render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`disabled`]: this.disabled || false,
      [`readonly`]: this.readonly || false,
      [`error-input`]: this.invalid || false,
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
                id=${id}
                type="radio"
                name=${this.label}
                value=${option.value}
                label=${option.label}
                ?disabled=${this.disabled}
                ?readonly=${this.readonly}
                ?aria-disabled=${this.disabled}
                ?invalid=${this.invalid}
                ?aria-invalid=${this.invalid}
              />
              <label for=${id} invalid="${this.invalid}">${option.label}</label><br />
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
  ></blr-radio-group>`;
};
