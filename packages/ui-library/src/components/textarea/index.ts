import { customElement, property } from 'lit/decorators.js';
import { html, LitElement } from 'lit';
import { FormSizesType } from '../../globals/types';
import { styleCustom } from '../textarea/css';
import { classMap } from 'lit/directives/class-map.js';
import { IconType } from '../../foundation/icons';
import { textarea } from '../../foundation/component-tokens/form';

@customElement('blr-textarea')
export class BlrTextarea extends LitElement {
  static styles = [styleCustom, textarea];
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
  @property() hasError?: boolean;

  render() {
    const classes = {
      [`${this.size}`]: this.size,
      disabled: this.disabled,
    };

    return html` <label>${this.label}</label>
      <textarea
        class="blr-textarea ${classMap(classes)}"
        textareaId="${this.textareaId}"
        size="${this.size}"
        minlength="${this.minLength}"
        maxLenght="${this.maxLength}"
        errorMessage="${this.errorMessage}"
        placeholder="${this.placeholder}"
        required="${this.required}"
        ?disabled="${this.disabled}"
        hasError="${this.hasError}"
      ></textarea>
      <p>
        <blr-icon name="blr360Lg" aria-hidden></blr-icon>${this.required || this.hasError
          ? this.errorMessage
          : this.hintMessage}
      </p>`;
  }
}
