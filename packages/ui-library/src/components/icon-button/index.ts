import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '../../foundation/icons';
import { styleCustom } from './css';
import { action } from '../../foundation/semantic-tokens/action';
import { iconButton } from '../../foundation/component-tokens/action';
import { BlrLoader } from '../loader';
import { ActionVariants, SizesType } from '../../globals/types';

@customElement('blr-icon-button')
export class BlrIconButton extends LitElement {
  static styles = [styleCustom, action, iconButton];

  @property() arialabel: string;
  @property() iconName: IconType;
  @property() onClick: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
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
      aria-label="${this.ariaLabel}"
      class="blr-semantic-action blr-icon-button ${classMap(classes)}"
      @click="${this.onClick}"
      @blur="${this.onBlur}"
      ?disabled="${this.disabled}"
      id=${this.buttonId}
    >
      ${this.loading
        ? html`<blr-loader .size="${this.size}" .variant="${this.variant}"></blr-loader>`
        : html` <blr-icon name="${this.iconName}" aria-hidden></blr-icon> `}
    </button>`;
  }
}
