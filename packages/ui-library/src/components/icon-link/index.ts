import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { iconButtonDark, iconButtonLight } from '../../foundation/component-tokens/action.css';
import { ActionVariantType, FormSizesType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { BlrLoaderRenderFunction } from '../loader';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

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
              size: this.size,
              variant: loaderVariant,
              loadingStatus: this.loadingStatus,
              theme: this.theme,
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

export const BlrIconLinkRenderFunction = (params: BlrIconLinkType) =>
  genericBlrComponentRenderer<BlrIconLinkType>({ ...params });
