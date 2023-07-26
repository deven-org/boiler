import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { action } from '../../foundation/semantic-tokens/action.css';
import { iconButton } from '../../foundation/component-tokens/action.css';
import { ActionVariantType, FormSizesType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { BlrLoaderRenderFunction } from '../loader';

@customElement('blr-icon-link')
export class BlrIconLink extends LitElement {
  static styles = [styleCustom, action, iconButton];

  @property() arialabel?: string;
  @property() icon?: IconType;
  @property() href?: string;
  @property() target?: string;
  @property() onClick?: HTMLLinkElement['onclick'];
  @property() onBlur?: HTMLLinkElement['onblur'];
  @property() linkId?: string;
  @property() variant: ActionVariantType = 'primary';
  @property() size: FormSizesType = 'md';
  @property() loading!: boolean;
  @property() loadingStatus!: string;

  protected render() {
    const classes = classMap({
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size || 'md',
    });

    const loaderVariant = determineLoaderVariant(this.variant);

    return html`<a
      aria-label=${this.ariaLabel}
      class="blr-semantic-action blr-icon-link blr-icon-button ${classes}"
      href=${this.href}
      loading=${this.loading}
      target=${this.target}
      @click=${this.onClick}
      @blur=${this.onBlur}
      id=${this.linkId || nothing}
    >
      ${this.loading
        ? html`${BlrLoaderRenderFunction({
            size: this.size,
            variant: loaderVariant,
            loadingStatus: this.loadingStatus,
          })}`
        : html`${BlrIconRenderFunction({
            icon: calculateIconName(this.icon, this.size),
            size: this.size,
            hideAria: true,
          })}`}
    </a>`;
  }
}

export type BlrIconLinkType = Omit<BlrIconLink, keyof LitElement>;

export const BlrIconLinkRenderFunction = ({
  arialabel,
  onClick,
  onBlur,
  loading,
  linkId,
  variant,
  size,
  icon,
  href,
  target,
  loadingStatus,
}: BlrIconLinkType) => {
  return html`<blr-icon-link
    .arialabel=${arialabel}
    .onClick=${onClick}
    .onBlur=${onBlur}
    .loading=${loading}
    .linkId=${linkId}
    .variant=${variant}
    .size=${size}
    .icon=${icon}
    .href=${href}
    .target=${target}
    .loadingStatus=${loadingStatus}
  ></blr-icon-link>`;
};
