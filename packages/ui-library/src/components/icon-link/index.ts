import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '../../foundation/icons';
import { styleCustom } from './css';
import { action } from '../../foundation/semantic-tokens/action';
import { iconButton } from '../../foundation/component-tokens/action';
import { ActionVariants, SizesType } from '../../globals/types';

@customElement('blr-icon-link')
export class BlrIconLink extends LitElement {
  static styles = [styleCustom, action, iconButton];

  @property() arialabel: string;
  @property() iconName: IconType;
  @property() loading: boolean;
  @property() href: string;
  @property() target?: string;
  @property() onClick?: HTMLLinkElement['onclick'];
  @property() onBlur?: HTMLLinkElement['onblur'];
  @property() linkId?: string;
  @property() variant: ActionVariants = 'primary';
  @property() size?: SizesType = 'md';
  @property() loadingStatus: string;

  render() {
    const classes = {
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size,
    };

    return html`<a
      aria-label="${this.ariaLabel}"
      class="blr-semantic-action blr-icon-link blr-icon-button ${classMap(classes)}"
      href="${this.href}"
      loading=${this.loading}
      target="${this.target}"
      @click="${this.onClick}"
      @blur="${this.onBlur}"
      id=${this.linkId}
    >
      ${this.loading
        ? html`<blr-loader
            .size="${this.size}"
            .variant="${this.variant}"
            .loadingStatus="${this.loadingStatus}"
          ></blr-loader>`
        : html` <blr-icon name="${this.iconName}" aria-hidden></blr-icon> `}
    </a>`;
  }
}
