import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { ActionVariantType, FormSizesType, SizesType } from '../../globals/types';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrLoaderRenderFunction } from '../loader';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-text-button-link';

@customElement(TAG_NAME)
export class BlrTextButtonLink extends LitElement {
  static styles = [styleCustom];

  @property() label = 'Button Label';
  @property() onClick?: HTMLAnchorElement['onclick'];
  @property() onBlur?: HTMLAnchorElement['onblur'];
  @property() leadingIcon?: IconType;
  @property() trailingIcon?: IconType;
  @property() loading!: boolean;
  @property() buttonId?: string;
  @property() variant: ActionVariantType = 'primary';
  @property() size: FormSizesType = 'md';
  @property() loadingStatus!: string;
  @property() href = '';
  @property() target?: string;
  @property() linkId?: string;
  @property() tabIndex: HTMLAnchorElement['tabIndex'] = 0;

  @property() theme: ThemeType = 'Light';

  protected render() {
    const dynamicStyles = this.theme === 'Light' ? [actionLight] : [actionDark];

    const classes = classMap({
      [this.variant]: true,
      [this.size]: true,
    });

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
      'TextButton',
      this.size.toUpperCase(),
      'Icon',
    ]).toLowerCase() as SizesType;

    return html`
      <style>
        ${dynamicStyles}
      </style>
      <a
        class="blr-semantic-action blr-text-button-link ${classes}"
        href=${this.href}
        target=${this.target}
        tabindex=${this.tabIndex}
        @blur=${this.onBlur}
        id=${this.linkId || nothing}
      >
        ${this.loading
          ? BlrLoaderRenderFunction({
              size: loaderSizeVariant,
              variant: loaderVariant,
              loadingStatus: this.loadingStatus,
              theme: this.theme,
            })
          : html`
              ${this.leadingIcon &&
              BlrIconRenderFunction({
                icon: calculateIconName(this.leadingIcon, iconSizeVariant),
                size: iconSizeVariant,
                hideAria: true,
              })}
              ${this.label}
              ${this.trailingIcon &&
              BlrIconRenderFunction({
                icon: calculateIconName(this.trailingIcon, iconSizeVariant),
                size: iconSizeVariant,
                hideAria: true,
              })}
            `}
      </a>
    `;
  }
}

export type BlrTextButtonLinkType = Omit<BlrTextButtonLink, keyof LitElement>;

export const BlrTextButtonLinkRenderFunction = (params: BlrTextButtonLinkType) =>
  genericBlrComponentRenderer<BlrTextButtonLinkType>(TAG_NAME, { ...params });
