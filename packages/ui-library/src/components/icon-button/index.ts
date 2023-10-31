/* eslint-disable no-console */
import { LitElement, html, nothing } from 'lit';
import { html as htmlLiteral, literal } from 'lit/static-html.js';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { ActionVariantType, FormSizesType, SizesType, TargetType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { BlrLoaderRenderFunction } from '../loader';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';
import { getComponentConfigToken } from '../../utils/get-component-config-token';

const TAG_NAME = 'blr-icon-button';

@customElement(TAG_NAME)
export class BlrIconButton extends LitElement {
  static styles = [styleCustom];

  @property() arialabel?: string;
  @property() icon?: SizelessIconType;
  @property() onClick?: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() loading?: boolean;
  @property() disabled?: boolean;
  @property() buttonId?: string;
  @property() variant: ActionVariantType = 'primary';
  @property() size: FormSizesType = 'md';
  @property() loadingStatus!: string;

  @property() isLink = true;
  @property() href?: string;
  @property() target?: TargetType;
  @property() linkTitle?: string;
  @property() hreflang?: string;
  @property() download = false;

  @property() theme: ThemeType = 'Light';

  protected handleFocus = () => {
    console.log('focused');
  };

  protected handleBlur = () => {
    console.log('blurred');
  };

  protected render() {
    const classes = classMap({
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size || 'md',
    });

    const dynamicStyles = this.theme === 'Light' ? [actionLight] : [actionDark];
    const loaderVariant = determineLoaderVariant(this.variant);

    const loaderSizeVariant = getComponentConfigToken([
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

    const buttonWrapper = this.isLink ? literal`a` : literal`span`;

    return htmlLiteral`<style>
        ${dynamicStyles.map((style) => style)}
      </style>

      <${buttonWrapper}
        aria-label=${this.arialabel || nothing}
        class="blr-semantic-action blr-icon-button ${classes}"
        @click=${this.onClick}
        ?disabled=${this.disabled}
        id=${this.buttonId || nothing}
        tabindex="0"
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        @keydown=${this.onClick}
        href=${this.href || nothing}
        target=${this.target || nothing}
        title=${this.linkTitle || nothing}
        hreflang=${this.hreflang || nothing}
        download=${this.download || nothing}
      >
        ${
          this.loading
            ? html`${BlrLoaderRenderFunction({
                size: loaderSizeVariant,
                variant: loaderVariant,
                loadingStatus: this.loadingStatus,
                theme: this.theme,
              })}`
            : html`${BlrIconRenderFunction({
                icon: calculateIconName(this.icon, iconSizeVariant),
                size: iconSizeVariant,
                hideAria: true,
              })}`
        }
      </${buttonWrapper}> `;
  }
}

export type BlrIconButtonType = Omit<BlrIconButton, keyof LitElement>;

export const BlrIconButtonRenderFunction = (params: BlrIconButtonType) =>
  genericBlrComponentRenderer<BlrIconButtonType>(TAG_NAME, { ...params });
