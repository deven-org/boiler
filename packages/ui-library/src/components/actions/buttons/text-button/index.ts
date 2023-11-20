import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { actionDark, actionLight } from '../../../../foundation/semantic-tokens/action.css';
import {
  ActionSizesType,
  ActionVariantType,
  SizesType,
  FormSizesType,
  IconPositionVariant,
} from '../../../../globals/types';
import { determineLoaderVariant } from '../../../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../../../ui/icon';
import { calculateIconName } from '../../../../utils/calculate-icon-name';
import { ThemeType } from '../../../../foundation/_tokens-generated/index.themes';
import { BlrLoaderRenderFunction } from '../../../feedback/loader';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';
import { getComponentConfigToken } from '../../../../utils/get-component-config-token';

const TAG_NAME = 'blr-text-button';

@customElement('blr-text-button')
export class BlrTextButton extends LitElement {
  static styles = [styleCustom];

  @property() label = 'Button Label';
  @property() onClick?: HTMLButtonElement['onclick'];
  @property() onFocus?: HTMLButtonElement['onfocus'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() leadingIcon?: SizelessIconType;
  @property() trailingIcon?: SizelessIconType;
  @property() icon?: SizelessIconType;
  @property() loading!: boolean;
  @property() disabled!: boolean;
  @property() buttonId?: string;
  @property() variant: ActionVariantType = 'primary';
  @property() size?: ActionSizesType = 'md';
  @property() loadingStatus!: string;
  @property() hasIcon?: boolean;
  @property() iconPosition?: IconPositionVariant = 'leading';
  @property() innerTabIndex?: number = 0;
  @property() theme: ThemeType = 'Light';

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [actionLight] : [actionDark];

      const classes = classMap({
        'blr-semantic-action': true,
        'blr-text-button': true,
        [this.variant]: this.variant,
        [this.size]: this.size,
        'disabled': this.disabled,
        'loading': this.loading,
      });

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
        <span
          class=${classes}
          id=${this.buttonId || nothing}
          tabindex=${this.disabled ? nothing : this.innerTabIndex}
          role="button"
          aria-disabled=${this.disabled || nothing}
          @click=${this.onClick}
          @focus=${this.onFocus}
          @blur=${this.onBlur}
          @keydown=${this.onClick}
        >
          ${this.loading
            ? BlrLoaderRenderFunction({
                size: loaderSizeVariant,
                variant: determineLoaderVariant(this.variant),
                loadingStatus: this.loadingStatus,
                theme: this.theme,
              })
            : nothing}
          ${this.leadingIcon &&
          BlrIconRenderFunction({
            icon: calculateIconName(this.leadingIcon, iconSizeVariant),
            size: iconSizeVariant,
            hideAria: true,
          })}
          <span class="label">${this.label}</span>
          ${this.trailingIcon &&
          BlrIconRenderFunction({
            icon: calculateIconName(this.trailingIcon, iconSizeVariant),
            size: iconSizeVariant,
            hideAria: true,
          })}
        </span>
      `;
    }
  }
}

export type BlrTextButtonType = Omit<BlrTextButton, keyof LitElement>;

export const BlrTextButtonRenderFunction = (params: BlrTextButtonType) =>
  genericBlrComponentRenderer<BlrTextButtonType>(TAG_NAME, { ...params });
