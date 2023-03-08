import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '../../foundation/icons';
import { styleCustom } from './css';
import { action } from '../../foundation/semantic-tokens/action';

// component token needs to be switched with iconButton
import { textButton } from '../../foundation/component-tokens/action';
import { ActionVariants, SizesType } from '../../globals/types';

@customElement('blr-icon-button')
export class BlrIconButton extends LitElement {
  static styles = [styleCustom, action, textButton];

  @property() arialabel: string;
  @property() iconName: IconType;
  @property() onClick: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
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
      class="blr-semantic-action blr-text-button ${classMap(classes)}"
      @click="${this.onClick}"
      @blur="${this.onBlur}"
      ?disabled="${this.disabled}"
      id=${this.buttonId}
    >
      <blr-icon name="${this.iconName}" aria-hidden></blr-icon>
    </button>`;
  }
}
