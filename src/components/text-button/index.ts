import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconMapping, IconType } from '../../foundation/icons';
import { styleCustom } from './css';
import { action } from '../../foundation/semantic-tokens/action';

@customElement('blr-text-button')
export class BlrTextButton extends LitElement {
  static styles = [styleCustom, action];

  @property() label = 'Button Label';
  @property() onClick: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() icon?: IconType;
  @property() disabled?: boolean;
  @property() buttonId?: string;
  @property() variant: 'primary' | 'secondary' | 'cta' | 'silent' | 'destructive' | 'encourage' = 'primary';
  @property() size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' = 'md';

  render() {
    const classes = { [`${this.variant}`]: this.variant, [`${this.size}`]: this.size, disabled: this.disabled };

    return html`<button
      class="blr-semantic-action ${classMap(classes)} blr-text-button"
      @click="${this.onClick}"
      @blur="${this.onBlur}"
      ?disabled="${this.disabled}"
      id=${this.buttonId}
    >
      <span>${this.label}</span>
      ${this.icon && IconMapping[this.icon]('icon')}
    </button>`;
  }
}
