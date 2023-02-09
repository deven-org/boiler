import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconMapping, IconType } from '../../foundation/icons';
import { style } from './css';
@customElement('boiler-text-button')
export class BoilerTextButton extends LitElement {
  static styles = style;

  @property() label = 'Button Label';
  @property() onClick: HTMLButtonElement['onclick'];
  @property() icon?: IconType;

  render() {
    return html`<button class="boiler-text-button" @click="${this.onClick}">
      <span>${this.label}</span>
      ${this.icon && IconMapping[this.icon]}
    </button>`;
  }
}
