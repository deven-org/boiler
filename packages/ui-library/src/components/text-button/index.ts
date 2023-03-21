import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '../../foundation/icons';
import { styleCustom } from './css';
import { action } from '../../foundation/semantic-tokens/action';
import { textButton } from '../../foundation/component-tokens/action';
import { ActionVariants, SizesType } from '../../globals/types';

@customElement('blr-text-button')
export class BlrTextButton extends LitElement {
  static styles = [styleCustom, action, textButton];

  @property() label = 'Button Label';
  @property() onClick: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() leadingIcon?: IconType;
  @property() trailingIcon?: IconType;
  @property() loading: boolean;
  @property() disabled?: boolean;
  @property() buttonId?: string;
  @property() variant: ActionVariants = 'primary';
  @property() size?: SizesType = 'md';

  render() {
    const classes = {
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size,
      disabled: this.disabled,
    };

    return html`<button
      class="blr-semantic-action blr-text-button ${classMap(classes)}"
      @click="${this.onClick}"
      @blur="${this.onBlur}"
      ?disabled="${this.disabled}"
      id=${this.buttonId}
    >
      ${this.loading
        ? html`<blr-loader .size="${this.size}"></blr-loader>`
        : html`
            ${this.leadingIcon && html`<blr-icon name="${this.leadingIcon}" aria-hidden></blr-icon>`}
            <span>${this.label}</span>
            ${this.trailingIcon && html`<blr-icon name="${this.trailingIcon}" aria-hidden></blr-icon>`}
          `}
    </button>`;
  }
}
