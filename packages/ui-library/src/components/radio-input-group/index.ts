import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { textInput } from '../../foundation/semantic-tokens/form.css';
import { RadioOption, SizesType } from '../../globals/types';
import { BlrFormLabel } from '../form-label';

@customElement('blr-radio-input-group')
export class BlrRadioInputGroup extends LitElement {
  static styles = [styleCustom, textInput];

  @property() textInputId!: string;
  @property() type!: string;
  @property() label!: string;
  @property() value!: string;
  @property() name!: string;
  @property() disabled?: boolean;
  @property() size?: SizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() hasError?: boolean;
  @property() errorMessage?: string;
  @property() options!: RadioOption[];

  render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      [`disabled`]: this.disabled || false,
    });

    const inputclasses = classMap({
      [`error`]: this.hasError || false,
      [`error-input`]: this.hasError || false,
    });

    const calculateOptionId = (label: string) => {
      return label.replace(/ /g, '_').toLowerCase();
    };

    return html`
      <fieldset class="blr-input ${classes}">
        <legend>${BlrFormLabel({ labelText: this.label })}</legend>
        ${this.options &&
        this.options.map((option: RadioOption) => {
          const id = calculateOptionId(option.label);
          return html`
            <blr-radio-input
              .name="${option.value}"
              .label=${option.label}
              .id=${id}
              .disabled=${this.disabled}
            ></blr-radio-input>
          `;
        })}
      </fieldset>
    `;
  }
}
