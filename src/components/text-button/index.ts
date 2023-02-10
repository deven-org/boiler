import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconMapping, IconType } from '../../foundation/icons';
import { style } from './css';

@customElement('blr-text-button')
export class BlrTextButton extends LitElement {
  static styles = style;

  @property() label = 'Button Label';
  @property() onClick: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() icon?: IconType;
  @property() disabled?: boolean;

  render() {
    return html`<button
      class="blr-text-button"
      @click="${this.onClick}"
      @blur="${this.onBlur}"
      ?disabled="${this.disabled}"
    >
      <span>${this.label}</span>
      ${this.icon && IconMapping[this.icon]}
    </button>`;
  }
}
