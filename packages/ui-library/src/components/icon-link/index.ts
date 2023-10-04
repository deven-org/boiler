import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { iconButtonDark, iconButtonLight } from '../../foundation/component-tokens/action.css';
import { ActionVariantType, FormSizesType, SizesType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { BlrLoaderRenderFunction } from '../loader';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { getComponentConfigToken } from '../../utils/get-component-config-token';

@customElement('blr-icon-link')
export class BlrIconLink extends LitElement {
  static styles = [styleCustom];

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

  @property() theme: ThemeType = 'Light';

  protected render() {
    const classes = classMap({
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size || 'md',
    });

    const dynamicStyles = this.theme === 'Light' ? [actionLight, iconButtonLight] : [actionDark, iconButtonDark];
    const loaderVariant = determineLoaderVariant(this.variant);

    const loaderSize = getComponentConfigToken([
      'Action',
      this.size.toUpperCase(),
      'LoaderSize',
    ]).toLowerCase() as FormSizesType;

    const iconSize = getComponentConfigToken([
      'Action',
      'IconButton',
      this.size.toUpperCase(),
      'IconSize',
    ]).toLowerCase() as SizesType;

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <a
        aria-label=${this.arialabel}
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
              size: loaderSize,
              variant: loaderVariant,
              loadingStatus: this.loadingStatus,
              theme: this.theme,
            })}`
          : html`${BlrIconRenderFunction({
              icon: calculateIconName(this.icon, iconSize),
              size: iconSize,
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
  theme,
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
    .theme=${theme}
  ></blr-icon-link>`;
};
