import { LitElement, html } from 'lit';
import classnames from 'classnames';
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
  @property() variant?: 'primary' | 'secondary' | 'cta' = 'primary';

  render() {
    const classes = classnames('blr-semantic-action', `blr-semantic-action-${this.variant}`, 'blr-text-button');
    return html`<button
      class=${classes}
      @click="${this.onClick}"
      @blur="${this.onBlur}"
      ?disabled="${this.disabled}"
      id=${this.buttonId}
    >
      <span>${this.label}</span>
      ${this.icon && IconMapping[this.icon]}
    </button>`;
  }
}
