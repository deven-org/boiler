import { LitElement, html } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './index.css';

@customElement('blr-number-input')
export class BlrNumberInput extends LitElement {
  static styles = [styleCustom];

  @property() variant = 'mode1';

  protected render() {
    return html`<div class="grid ${this.variant}">
      <button class="increment">+</button>
      <button class="decrement">-</button>
      <input class="input" placeholder="0.0000" />
    </div>`;
  }
}

export type BlrNumberInputType = Omit<BlrNumberInput, keyof LitElement>;

export const BlrNumberInputRenderFunction = ({ variant }: BlrNumberInputType) => {
  return html`<blr-number-input .variant=${variant}></blr-number-input>`;
};
