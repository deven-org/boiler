import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconMapping, IconType } from '../../foundation/icons';

@customElement('boiler-text-button')
export class BoilerTextButton extends LitElement {
  static styles = css`
    .boiler-text-button {
      cursor: pointer;
      border: 0;
      padding: 0 var(--blr-spacing-600);
      height: 40px;
      color: var(--blr-color-progressive-red);
      height: 40px;
      border-radius: 9999px;
      font-size: 14px;
    }

    .boiler-text-button:hover {
      background: var(--blr-color-neon-blue-100);
    }

    .boiler-text-button:active {
      background: var(--blr-color-neon-green-100);
    }
  `;

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
