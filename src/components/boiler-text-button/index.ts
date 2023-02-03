import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconMapping, IconType } from '../../foundation/icons';

@customElement('boiler-text-button')
export class BoilerTextButton extends LitElement {
  static styles = css`
    .boiler-text-button {
      cursor: pointer;
      border: 0;
      padding: 0 var(--boiler-spacing-600);
      height: 40px;
      color: lime;
      height: 40px;
      border-radius: 9999px;
      font-size: 14px;
    }

    .boiler-text-button:hover {
      background: #4b14b8;
    }

    .boiler-text-button:active {
      background: #380f8a;
    }
  `;

  @property() label = 'Button Label';
  @property() onClick: HTMLButtonElement['onclick'];
  @property() icon?: IconType;

  render() {
    return html`<button class="boiler-text-button boiler-chevron-down" @click="${this.onClick}">
      <span>${this.label}</span>
      ${this.icon && IconMapping[this.icon]}
    </button>`;
  }
}
