import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './css';

// needs to be replaced with tokens for text-input
// import { action } from '../../foundation/semantic-tokens/action';
// import { textButton } from '../../foundation/component-tokens/action';

@customElement('blr-text-input')
export class BlrTextInput extends LitElement {
  static styles = [styleCustom];

  @property() disabled?: boolean;

  render() {
    const classes = {};

    return html`<input type="text" ?disabled="${this.disabled}"></input>`;
  }
}
