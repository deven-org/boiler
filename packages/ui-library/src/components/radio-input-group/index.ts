import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { radioInput } from '../../foundation/semantic-tokens/radioInput.css';
import { InputSizesType, RadioOption } from '../../globals/types';
import { BlrFormLabel } from '../form-label';
import { IconType } from '@boiler/icons';

@customElement('blr-radio-input-group')
export class BlrRadioInputGroup extends LitElement {
  static styles = [styleCustom, radioInput];

  @property() textInputId!: string;
  @property() type!: string;
  @property() label!: string;
  @property() value!: string;
  @property() name!: string;
  @property() invalid?: boolean;
  @property() disabled?: boolean;
  @property() readonly?: boolean;
  @property() size!: InputSizesType;
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() errorMessage?: string;
  @property() hideLabel!: boolean;
  @property() options!: RadioOption[];
  @property() layout!: boolean;
  @property() hint?: string;
  @property() hintIcon!: IconType;

  render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`${this.disabled}`]: this.disabled || false,
      [`${this.readonly}`]: this.readonly || false,
      [`error-input`]: this.invalid || false,
      [`${this.layout}`]: this.layout,
    });

    const calculateOptionId = (label: string) => {
      return label.replace(/ /g, '_').toLowerCase();
    };
    return html`
      <fieldset class="blr-radio-input-group ${classes}">
        ${this.hideLabel
          ? ``
          : html`<legend>
              ${BlrFormLabel({ labelText: this.label, labelSize: this.size, forValue: this.textInputId })}
            </legend>`}
        ${this.options &&
        this.options.map((option: RadioOption) => {
          const id = calculateOptionId(option.label);
          return html`
            <div class="blr-radio-input ${classes}">
              <input
                id=${id}
                type="radio"
                name="${this.label}"
                value="${option.value}"
                ?disabled="${this.disabled}"
                ?readonly="${this.readonly}"
                ?aria-disabled="${this.disabled}"
                ?invalid="${this.invalid}"
                ?aria-invalid="${this.invalid}"
              />
              <label for=${id} invalid="${this.invalid}">${option.label}</label><br />
            </div>
          `;
        })}
      </fieldset>
    `;
  }
}
