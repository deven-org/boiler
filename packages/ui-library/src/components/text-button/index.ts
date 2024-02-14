import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property, state } from 'lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { actionLight, actionDark } from '../../foundation/semantic-tokens/action.css';
import {
  IconPositionVariant,
  ActionVariantType,
  ActionSizesType,
  ButtonDisplayType,
  FormSizesType,
  SizesType,
} from '../../globals/types';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { determineLoaderVariant } from '../../utils/determine-loader-variant';
import { getComponentConfigToken } from '../../utils/get-component-config-token';
import { BlrIconRenderFunction } from '../icon/renderFunction';
import { BlrLoaderRenderFunction } from '../loader/renderFunction';
import { TAG_NAME } from './renderFunction';

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
  @property() buttonDisplay?: ButtonDisplayType = 'inline-block';

  // these are not triggered directly but allows us to map it internally and bve typesafe
  @property() blrFocus?: () => void;
  @property() blrBlur?: () => void;
  @property() blrClick?: () => void;

  @property() theme: ThemeType = 'Light';

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
        'Actions',
        this.size.toUpperCase(),
        'Loader',
      ]).toLowerCase() as FormSizesType;

      const iconSizeVariant = getComponentConfigToken([
        'SizeVariant',
        'Actions',
        'TextButton',
        this.size.toUpperCase(),
        'Icon',
      ]).toLowerCase() as SizesType;

      const labelAndIconGroup = html` <div class="${flexContainerClasses}">
        ${this.hasIcon && this.iconPosition === 'leading'
          ? BlrIconRenderFunction(
              {
                icon: calculateIconName(this.icon, iconSizeVariant),
                sizeVariant: iconSizeVariant,
                classMap: iconClasses,
              },
              {
                'aria-hidden': true,
              }
            )
          : nothing}
        <span class="label">${this.label} </span>
        ${this.hasIcon && this.iconPosition === 'trailing'
          ? BlrIconRenderFunction(
              {
                icon: calculateIconName(this.icon, iconSizeVariant),
                sizeVariant: iconSizeVariant,
                classMap: iconClasses,
              },
              {
                'aria-hidden': true,
              }
            )
          : nothing}
      </div>`;

      return html`<style>
          ${dynamicStyles.map((style) => style)}
        </style>
        <span
          class="${classes}"
          aria-disabled=${this.disabled ? 'true' : nothing}
          @click="${this.handleClick}"
          tabindex=${this.disabled ? nothing : '0'}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          role="button"
          @keydown=${(event: KeyboardEvent) => {
            if (event.code === 'Space') {
              this.handleClick(event);
            }
          }}
          id=${this.buttonId || nothing}
        >
          ${this.focused && !this.loading ? html`<span class="focus-layer"></span>` : nothing}
          ${this.loading
            ? html`
                ${BlrLoaderRenderFunction({
                  size: loaderSizeVariant,
                  variant: loaderVariant,
                  theme: this.theme,
                })}
                ${labelAndIconGroup}
              `
            : labelAndIconGroup}
        </span> `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrTextButton);
}

export type BlrTextButtonType = Omit<BlrTextButton, keyof LitElement>;
