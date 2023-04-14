import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { action } from '../../foundation/semantic-tokens/action.css';
import { iconButton } from '../../foundation/component-tokens/action.css';
import { ActionVariants, SizesType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';

@customElement('blr-icon-link')
export class BlrIconLink extends LitElement {
  static styles = [styleCustom, action, iconButton];

  @property() arialabel!: string;
  @property() icon!: IconType;
  @property() href!: string;
  @property() target?: string;
  @property() onClick?: HTMLLinkElement['onclick'];
  @property() onBlur?: HTMLLinkElement['onblur'];
  @property() linkId?: string;
  @property() variant: ActionVariants = 'primary';
  @property() size!: SizesType;
  @property() loading!: boolean;
  @property() loadingStatus!: string;

  render() {
    const classes = classMap({
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size || 'md',
    });

    const loaderVariant = determineLoaderVariant(this.variant);

    return html`<a
      aria-label="${this.ariaLabel}"
      class="blr-semantic-action blr-icon-link blr-icon-button ${classes}"
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
            .variant="${loaderVariant}"
            .loadingStatus="${this.loadingStatus}"
          ></blr-loader>`
        : html` <blr-icon icon="${this.icon}" size="${this.size}" aria-hidden></blr-icon> `}
    </a>`;
  }
}
