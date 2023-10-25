import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom as iconLinkStyleCustom } from './index.css';
import { styleCustom as iconButtonStyleCustom } from '../icon-button/index.css';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { ActionVariantType, FormSizesType, SizesType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { BlrLoaderRenderFunction } from '../loader';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-icon-link';
import { getComponentConfigToken } from '../../utils/get-component-config-token';

@customElement(TAG_NAME)
export class BlrIconLink extends LitElement {
  static styles = [iconLinkStyleCustom, iconButtonStyleCustom];

  @property() arialabel?: string;
  @property() icon?: SizelessIconType;
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

    const dynamicStyles = this.theme === 'Light' ? [actionLight] : [actionDark];
    const loaderVariant = determineLoaderVariant(this.variant);

    const loaderSize = getComponentConfigToken([
      'SizeVariant',
      'Action',
      this.size.toUpperCase(),
      'Loader',
    ]).toLowerCase() as FormSizesType;

    const iconSizeVariant = getComponentConfigToken([
      'SizeVariant',
      'Action',
      'IconButton',
      this.size.toUpperCase(),
      'Icon',
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
              icon: calculateIconName(this.icon, iconSizeVariant),
              size: iconSizeVariant,
              hideAria: true,
            })}`}
      </a>`;
  }
}

export type BlrIconLinkType = Omit<BlrIconLink, keyof LitElement>;

export const BlrIconLinkRenderFunction = (params: BlrIconLinkType) =>
  genericBlrComponentRenderer<BlrIconLinkType>(TAG_NAME, { ...params });
