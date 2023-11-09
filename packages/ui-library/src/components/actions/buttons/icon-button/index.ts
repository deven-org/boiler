/* eslint-disable no-console */
import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { actionDark, actionLight } from '../../../../foundation/semantic-tokens/action.css';
import { ActionVariantType, FormSizesType, SizesType } from '../../../../globals/types';
import { determineLoaderVariant } from '../../../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../../../ui/icon';
import { calculateIconName } from '../../../../utils/calculate-icon-name';
import { BlrLoaderRenderFunction } from '../../../feedback/loader';
import { ThemeType } from '../../../../foundation/_tokens-generated/index.themes';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';
import { getComponentConfigToken } from '../../../../utils/get-component-config-token';

const TAG_NAME = 'blr-icon-button';

@customElement(TAG_NAME)
export class BlrIconButton extends LitElement {
  static styles = [styleCustom];

  @property() arialabel?: string;
  @property() icon?: SizelessIconType;
  @property() onClick?: HTMLButtonElement['onclick'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() loading?: boolean;
  @property() disabled!: boolean;
  @property() buttonId?: string;
  @property() variant: ActionVariantType = 'primary';
  @property() size: FormSizesType = 'md';
  @property() loadingStatus!: string;

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
      disabled: this.disabled,
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

    const IconClasses = classMap({
      'disabled-icon-cta': this.disabled && this.variant === 'cta',
      'disabled-icon-primary': this.disabled && this.variant === 'primary',
      'disabled-icon-secondary': this.disabled && this.variant === 'secondary',
      'disabled-icon-destructive': this.disabled && this.variant === 'destructive',
      'disabled-icon-silent': this.disabled && this.variant === 'silent',
      'disabled-icon-encourage': this.disabled && this.variant === 'encourage',
    });

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <span
        aria-label=${this.arialabel || nothing}
        class="blr-semantic-action blr-icon-button ${classes}"
        @click=${this.onClick}
        id=${this.buttonId || nothing}
        tabindex=${this.disabled ? nothing : '0'}
        @focus=${this.handleFocus}
        @blur=${this.handleBlur}
        role=${this.disabled ? nothing : 'button'}
        @keydown=${this.onClick}
      >
        ${this.loading
          ? BlrLoaderRenderFunction({
              size: loaderSizeVariant,
              variant: loaderVariant,
              loadingStatus: this.loadingStatus,
              theme: this.theme,
            })
          : BlrIconRenderFunction({
              icon: calculateIconName(this.icon, iconSizeVariant),
              size: iconSizeVariant,
              hideAria: true,
              classMap: IconClasses,
            })}
      </span> `;
  }
}

export type BlrIconButtonType = Omit<BlrIconButton, keyof LitElement>;

export const BlrIconButtonRenderFunction = (params: BlrIconButtonType) =>
  genericBlrComponentRenderer<BlrIconButtonType>(TAG_NAME, { ...params });
