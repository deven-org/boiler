import { LitElement, html, nothing } from 'lit';
import { customElement, property, state } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { classMap } from 'lit-html/directives/class-map.js';

@customElement('blr-number-input')
export class BlrNumberInput extends LitElement {
  static styles = [styleCustom];

  @property() variant = 'mode1';
  @property() disabled?: boolean;

  @state() protected isFocused = false;

  protected handleFocus = () => {
    this.isFocused = true;
  };

  protected handleBlur = () => {
    this.isFocused = false;
  };

  protected render() {
    const wrapperClasses = classMap({
      'input-wrapper': true,
      'focus': this.isFocused || false,
      'disabled': this.disabled || false,
      [`${this.variant || 'mode1'}`]: this.variant || 'mode1',
    });

    return html`<div class="${wrapperClasses}">
      <button class="increment">+</button>
      <button class="decrement">-</button>
      <input type="number" disabled=${this.disabled || nothing} @focus=${this.handleFocus} @blur=${this.handleBlur} />
    </div>`;
  }
}

export type BlrNumberInputType = Omit<BlrNumberInput, keyof LitElement>;

export const BlrNumberInputRenderFunction = ({ variant, disabled }: BlrNumberInputType) => {
  return html`<blr-number-input .variant=${variant} .disabled=${disabled}></blr-number-input>`;
};
