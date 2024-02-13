/* eslint-disable no-console */
import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, state } from 'lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { actionDark, actionLight } from '../../../foundation/semantic-tokens/action.css';
import { ActionVariantType, ActionSizesType, SizesType, FormSizesType } from '../../../globals/types';
import { determineLoaderVariant } from '../../../utils/determine-loader-variant';
import { BlrIconRenderFunction } from '../../icon/renderFunction';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { BlrLoaderRenderFunction } from '../../loader/renderFunction';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';

import { TAG_NAME } from './renderFunction';

@customElement(TAG_NAME)
export class BlrIconButton extends LitElement {
  static styles = [styleCustom];

  @property() arialabel!: string;
  @property() icon?: SizelessIconType;
  @property() loading?: boolean;
  @property() disabled!: boolean;
  @property() buttonId?: string;
  @property() variant: ActionVariantType = 'primary';
  @property() size?: ActionSizesType = 'md';

  @property() theme: ThemeType = 'Light';

  // these are not triggered directly but allows us to map it internally and bve typesafe
  @property() blrFocus?: () => void;
  @property() blrBlur?: () => void;
  @property() blrClick?: () => void;

  @state() protected focused = false;

  protected handleFocus = (event: Event) => {
    if (!this.disabled) {
      this.focused = true;
      this.dispatchEvent(
        new CustomEvent('blrFocus', { bubbles: true, composed: true, detail: { originalEvent: event } })
      );
    }
  };

  protected handleBlur = (event: Event) => {
    if (!this.disabled) {
      this.focused = false;
      this.dispatchEvent(
        new CustomEvent('blrBlur', { bubbles: true, composed: true, detail: { originalEvent: event } })
      );
    }
  };

  protected handleClick = (event: Event) => {
    if (!this.disabled) {
      this.dispatchEvent(
        new CustomEvent('blrClick', { bubbles: true, composed: true, detail: { originalEvent: event } })
      );
    }
  };

  protected render() {
    if (this.size) {
      const dynamicStyles = this.theme === 'Light' ? [actionLight] : [actionDark];

      const classes = classMap({
        [this.variant]: this.variant,
        [this.size]: this.size,
        disabled: this.disabled,
        loading: this.loading || false,
      });

      const iconClasses = classMap({
        icon: true,
      });

      const loaderVariant = determineLoaderVariant(this.variant);

      const loaderSizeVariant = getComponentConfigToken([
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

      return html`
        <style>
          ${dynamicStyles}
        </style>
        <span
          aria-label=${this.arialabel || nothing}
          class="blr-semantic-action blr-icon-button ${classes}"
          aria-disabled=${this.disabled ? 'true' : nothing}
          @click=${this.handleClick}
          id=${this.buttonId || nothing}
          tabindex=${this.disabled ? nothing : '0'}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          role="button"
          @keydown=${(event: KeyboardEvent) => {
            if (event.code === 'Space') {
              this.handleClick(event);
            }
          }}
        >
          ${this.focused && !this.loading ? html`<span class="focus-layer"></span>` : nothing}
          ${this.loading
            ? BlrLoaderRenderFunction({
                size: loaderSizeVariant,
                variant: loaderVariant,
                theme: this.theme,
              })
            : nothing}
          ${BlrIconRenderFunction(
            {
              icon: calculateIconName(this.icon, iconSizeVariant),
              size: iconSizeVariant,
              classMap: iconClasses,
            },
            {
              'aria-hidden': true,
            }
          )}
        </span>
      `;
    }
  }
}

export type BlrIconButtonType = Omit<BlrIconButton, keyof LitElement>;
