import { customElement, property } from 'lit/decorators.js';
import { html, LitElement } from 'lit';
import { FormSizesType } from '../../globals/types';
import { styleCustom } from '../textarea/css';
import { classMap } from 'lit/directives/class-map.js';
import { IconType } from '../../foundation/icons';

@customElement('blr-textarea')
export class BlrTextarea extends LitElement {
  static styles = [styleCustom];
  @property() textareaId: string;
  @property() label: string;
  @property() size?: FormSizesType = 'md';
  @property() minLength?: number;
  @property() maxLength?: number;
  @property() errorMessage?: string;
  @property() placeholder?: string;
  @property() required?: boolean;
  @property() disabled?: boolean;
  @property() hintMessage?: string;

  render() {
    const classes = {
      [`${this.size}`]: this.size,
      disabled: this.disabled,
    };

    return html` <label>${this.label}</label>
      <textarea
        class="blr-semantic-action blr-text-area ${classMap(classes)}"
        textareaId="${this.textareaId}"
        size="${this.size}"
        minlength="${this.minLength}"
        maxLenght="${this.maxLength}"
        errorMessage="${this.errorMessage}"
        placeholder="${this.placeholder}"
        required="${this.required}"
        ?disabled="${this.disabled}"
      ></textarea>
      <p><blr-icon name="blr360Lg" aria-hidden></blr-icon>${this.required ? this.errorMessage : this.hintMessage}</p>`;
  }
}
