import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property } from 'lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom as iconLinkStyleCustom } from './index.css';
import { styleCustom as iconButtonStyleCustom } from '../icon-button/index.css';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { actionLight, actionDark } from '../../foundation/semantic-tokens/action.css';
import { ActionVariantType, ActionSizesType, FormSizesType, SizesType } from '../../globals/types';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { BlrIconRenderFunction } from '../icon/renderFunction';
import { BlrLoaderRenderFunction } from '../loader/renderFunction';
import { TAG_NAME } from './renderFunction';

//
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
  @property() size?: ActionSizesType = 'md';
  @property() loading!: boolean;
  @property() theme: ThemeType = 'Light';

  protected render() {
    if (this.size) {
      const classes = classMap({
        [`${this.variant}`]: this.variant,
        [`${this.size}`]: this.size,
      });

      const dynamicStyles = this.theme === 'Light' ? [actionLight] : [actionDark];
      const loaderVariant = determineLoaderVariant(this.variant);

      const loaderSize = getComponentConfigToken([
        'SizeVariant',
        'Actions',
        this.size.toUpperCase(),
        'Loader',
      ]).toLowerCase() as FormSizesType;

      const iconSizeVariant = getComponentConfigToken([
        'SizeVariant',
        'Actions',
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
            ? BlrLoaderRenderFunction({
                size: loaderSize,
                variant: loaderVariant,
                theme: this.theme,
              })
            : BlrIconRenderFunction(
                {
                  icon: calculateIconName(this.icon, iconSizeVariant),
                  size: iconSizeVariant,
                },
                {
                  'aria-hidden': true,
                }
              )}
        </a>`;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrIconLink);
}

export type BlrIconLinkType = Omit<BlrIconLink, keyof LitElement>;
