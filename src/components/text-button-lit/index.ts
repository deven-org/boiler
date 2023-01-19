import { LitElement, html, css } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('text-button-lit')
export class SimpleGreeting extends LitElement {
  // Define scoped styles right with your component, in plain CSS
  static styles = css`
    :host {
      color: var(--example-color);
    }

    .text {
      padding: var(--example-spacing);
      background: lime;
    }
  `;

  // Declare reactive properties
  @property()
  name?: string = 'World';

  testFunction() {
    const test = 'Test';
    console.log(test);
  }

  // Render the UI as a function of component state
  render() {
    return html`<p class="text">Hello, ${this.name}!</p>`;
  }
}
