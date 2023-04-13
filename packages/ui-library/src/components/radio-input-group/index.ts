import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { radioInput } from '../../foundation/semantic-tokens/radioInputTemp.css';
import { RadioOption, SizesType } from '../../globals/types';
import { BlrFormLabel } from '../form-label';

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
  @property() size?: SizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() hideLabel!: boolean;
  @property() options!: RadioOption[];

  render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`${this.disabled}`]: this.disabled || false,
      [`error-input`]: this.invalid || false,
    });

    const inputclasses = classMap({
      [`error`]: this.hasError || false,
      [`error-input`]: this.hasError || false,
    });

    const calculateOptionId = (label: string) => {
      return label.replace(/ /g, '_').toLowerCase();
    };

    const showErrorMessage = () => {
      if (this.hasError && this.errorMessage) {
        return html`<legend class="blr-radio-input error-message">
          ${BlrFormLabel({ labelText: this.errorMessage })}
        </legend>`;
      } else {
        return;
      }
    };

    return html`
      <fieldset class="blr-input ${classes}">
        ${this.hideLabel ? `` : html`<legend>${BlrFormLabel({ labelText: this.label })}</legend>`}
        ${this.options &&
        this.options.map((option: RadioOption) => {
          const id = calculateOptionId(option.label);
          return html`
            <div class="blr-radio-input ${classes}">
              <input
                id=${id}
                class="${inputclasses}"
                type="radio"
                name="${this.label}"
                value="${option.value}"
                ?disabled="${this.disabled}"
                ?aria-disabled="${this.disabled}"
                invalid="${this.invalid}"
                ?aria-invalid="${this.invalid}"
              />
              <label for=${id} invalid="${this.invalid}">${this.label}</label><br />
            </div>
          `;
        })}
      </fieldset>
      ${showErrorMessage()}
    `;
  }
}
