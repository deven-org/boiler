import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('boiler-text-button')
export class BoilerTextButton extends LitElement {
  static styles = css`
    :host {
      color: var(--example-color);
    }

    .boiler-text-button {
      padding: var(--example-spacing);
      background: lime;
    }
  `;

  @property({ type: String })
  label = 'Button Label';

  render() {
    return html`<button class="boiler-text-button">${this.label}</button>`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'boiler-text-button': BoilerTextButton;
  }
}
