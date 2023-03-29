import { customElement, property } from 'lit/decorators.js';
import { html, LitElement } from 'lit';
import { FormSizesType } from '../../globals/types';
import { styleCustom } from '../textarea/css';
import { classMap } from 'lit/directives/class-map.js';

@customElement('blr-form-label')
export class BlrFormLabel extends LitElement {
  static styles = [styleCustom];
  @property() label: string;
  @property() size?: FormSizesType = 'md';
  @property() required?: boolean;
  @property() disabled?: boolean;

  render() {
    const classes = {
      [`${this.size}`]: this.size,
      disabled: this.disabled,
    };

    return html`
      <label
        class="blr-form-label ${classMap(classes)}"
        size="${this.size}"
        required="${this.required}"
        ?disabled="${this.disabled}"
      >
        ${this.label}
      </label>
    `;
  }
}
