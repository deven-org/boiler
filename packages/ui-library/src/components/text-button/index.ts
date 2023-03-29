import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './css';
import { action } from '../../foundation/semantic-tokens/action.css';
import { textButton } from '../../foundation/component-tokens/action.css';
import { ActionVariants, SizesType } from '../../globals/types';

@customElement('blr-text-button')
export class BlrTextButton extends LitElement {
  static styles = [styleCustom, action, textButton];

  @property() label = 'Button Label';
  @property() onClick!: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() leadingIcon?: IconType;
  @property() trailingIcon?: IconType;
  @property() disabled?: boolean;
  @property() buttonId?: string;
  @property() variant: ActionVariants = 'primary';
  @property() size?: SizesType = 'md';

  render() {
    const classes = classMap({
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size || 'md',
    });

    return html`<button
      class="blr-semantic-action blr-text-button ${classes}"
      @click="${this.onClick}"
      @blur="${this.onBlur}"
      ?disabled="${this.disabled}"
      id=${this.buttonId}
    >
      ${this.leadingIcon && html`<blr-icon name="${this.leadingIcon}" aria-hidden></blr-icon>`}
      <span>${this.label}</span>
      ${this.trailingIcon && html`<blr-icon name="${this.trailingIcon}" aria-hidden></blr-icon>`}
    </button>`;
  }
}
