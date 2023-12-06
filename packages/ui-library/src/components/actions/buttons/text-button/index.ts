/* eslint-disable no-console */
import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { actionDark, actionLight } from '../../../../foundation/semantic-tokens/action.css';
import {
  ActionSizesType,
  ActionVariantType,
  SizesType,
  FormSizesType,
  IconPositionVariant,
  ButtonDisplayType,
} from '../../../../globals/types';
import { determineLoaderVariant } from '../../../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../../../ui/icon';
import { calculateIconName } from '../../../../utils/calculate-icon-name';
import { ThemeType } from '../../../../foundation/_tokens-generated/index.themes';
import { BlrLoaderRenderFunction } from '../../../feedback/loader';
import { genericBlrComponentRenderer } from '../../../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-text-button';
import { getComponentConfigToken } from '../../../../utils/get-component-config-token';

@customElement('blr-text-button')
export class BlrTextButton extends LitElement {
  static styles = [styleCustom];

  @property() label = 'Button Label';
  @property() icon?: SizelessIconType;
  @property({ type: Boolean }) hasIcon?: boolean;
  @property() iconPosition?: IconPositionVariant = 'leading';
  @property({ type: Boolean }) loading!: boolean;
  @property({ type: Boolean }) disabled!: boolean;
  @property() buttonId?: string;
  @property() variant: ActionVariantType = 'primary';
  @property() size?: ActionSizesType = 'md';
  @property() loadingStatus!: string;
  @property() buttonDisplay?: ButtonDisplayType = 'inline-block';

  @property() theme: ThemeType = 'Light';

  @state() protected focused = false;

  protected handleFocus = () => {
    if (!this.disabled) {
      this.focused = true;
      this.dispatchEvent(new Event('blrfocus', { bubbles: true, composed: true }));
    }
  };

  protected handleBlur = () => {
    if (!this.disabled) {
      this.focused = false;
      this.dispatchEvent(new Event('blrblur', { bubbles: true, composed: true }));
    }
  };

  protected handleClick = () => {
    if (!this.disabled) {
      this.dispatchEvent(new Event('blrclick', { bubbles: true, composed: true }));
    }
  };

  protected render() {
    if (this.size && this.buttonDisplay) {
      const dynamicStyles = this.theme === 'Light' ? [actionLight] : [actionDark];

      const classes = classMap({
        'blr-semantic-action': true,
        'blr-text-button': true,
        [this.variant]: this.variant,
        [`${this.size}`]: this.size,
        'disabled': this.disabled,
        'loading': this.loading,
        [this.buttonDisplay]: this.buttonDisplay,
      });

      const iconClasses = classMap({
        'icon': true,
        'leading-icon-class': this.iconPosition === 'leading',
        'trailing-icon-class': this.iconPosition === 'trailing',
      });

      const flexContainerClasses = classMap({
        'flex-container': true,
        [`${this.size}`]: this.size,
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

      const labelAndIconGroup = html` <div class="${flexContainerClasses}">
        ${this.hasIcon && this.iconPosition === 'leading'
          ? BlrIconRenderFunction({
              icon: calculateIconName(this.icon, iconSizeVariant),
              size: iconSizeVariant,
              hideAria: true,
              classMap: iconClasses,
            })
          : nothing}
        <span class="label">${this.label} </span>
        ${this.hasIcon && this.iconPosition === 'trailing'
          ? BlrIconRenderFunction({
              icon: calculateIconName(this.icon, iconSizeVariant),
              size: iconSizeVariant,
              hideAria: true,
              classMap: iconClasses,
            })
          : nothing}
      </div>`;

      return html`<style>
          ${dynamicStyles.map((style) => style)}
        </style>
        <span
          class="${classes}"
          @click="${this.handleClick}"
          tabindex=${this.disabled ? nothing : '0'}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          role=${this.disabled ? nothing : 'button'}
          @keydown=${(event: KeyboardEvent) => {
            if (event.code === 'Space') {
              this.handleClick();
            }
          }}
          id=${this.buttonId || nothing}
        >
          ${this.focused ? html`<span class="focus-layer"></span>` : nothing}
          ${this.loading
            ? html`
                ${BlrLoaderRenderFunction({
                  size: loaderSizeVariant,
                  variant: loaderVariant,
                  loadingStatus: this.loadingStatus,
                  theme: this.theme,
                })}
                ${labelAndIconGroup}
              `
            : labelAndIconGroup}
        </span> `;
    }
  }
}

export type BlrTextButtonType = Omit<BlrTextButton, keyof LitElement>;

export const BlrTextButtonRenderFunction = (params: BlrTextButtonType) =>
  genericBlrComponentRenderer<BlrTextButtonType>(TAG_NAME, { ...params });
