import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './css';
import { action } from '../../foundation/semantic-tokens/action';
//import { textInput } from '../../foundation/component-tokens/action';
import { SizesType, InputTypes } from '../../globals/types';

@customElement('blr-text-input')
export class BlrTextInput extends LitElement {
  static styles = [styleCustom, action];

  @property() textInputId: string;
  @property() type: InputTypes;
  @property() inputName?: string;
  @property() inputValue: string;
  @property() placeholder?: string;
  @property() defaultValue?: string;
  @property() disabled?: boolean;
  @property() size?: SizesType = 'md';
  @property() required?: boolean;
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() maxLength: number;
  @property() minLength: number;
  @property() pattern: string;

  render() {
    const classes = {
      [`${this.size}`]: this.size,
      disabled: this.disabled,
    };

    return html`
      <input
        class="blr-text-input ${classMap(classes)}"
        id=${this.textInputId}
        type="${this.type}"
        inputName="${this.inputName}"
        inputValue="${this.inputValue}"
        placeholder="${this.placeholder}"
        defaultValue="${this.defaultValue}"
        ?disabled="${this.disabled}"
        ?required="${this.required}"
        @input="${this.onChange}"
        @blur="${this.onBlur}"
        @focus="${this.onFocus}"
        maxlength="${this.maxLength}"
        minlength="${this.minLength}"
        pattern="${this.pattern}"
      />
    `;
  }
}
