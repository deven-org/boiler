import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { property, state } from 'lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { staticActionStyles } from '../../foundation/semantic-tokens/action.css';
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
import {
  BlrBlurEvent,
  BlrClickEvent,
  BlrFocusEvent,
  createBlrBlurEvent,
  createBlrClickEvent,
  createBlrFocusEvent,
} from '../../globals/events';
import { LitElementCustom } from '../../utils/lit-element-custom';

export type BlrButtonTextEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrClick?: (event: BlrClickEvent) => void;
};

/**
 * @fires blrFocus Button received focus
 * @fires blrBlur Button lost focus
 * @fires blrClick Button was clicked
 */
export class BlrButtonText extends LitElementCustom {
  static styles = [styleCustom, staticActionStyles];

  @property() label = 'Button Label';
  @property() icon?: SizelessIconType;
  @property() iconPosition?: IconPositionVariant = 'leading';
  @property({ type: Boolean }) loading!: boolean;
  @property({ type: Boolean }) disabled!: boolean;
  @property() buttonTextId?: string;
  @property() variant: ActionVariantType = 'primary';
  @property() sizeVariant?: ActionSizesType = 'md';
  @property() buttonDisplay?: ButtonDisplayType = 'inline-block';

  @property() theme: ThemeType = 'Light';

  @state() protected focused = false;

  protected handleFocus = (event: FocusEvent) => {
    if (!this.disabled) {
      this.focused = true;
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent) => {
    if (!this.disabled) {
      this.focused = false;
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  protected handleClick = (event: MouseEvent | KeyboardEvent) => {
    if (!this.disabled) {
      this.dispatchEvent(createBlrClickEvent({ originalEvent: event }));
    }
  };

  protected render() {
    if (this.sizeVariant && this.buttonDisplay) {
      const classes = classMap({
        'blr-semantic-action': true,
        'blr-button-text': true,
        [this.variant]: this.variant,
        [this.sizeVariant]: this.sizeVariant,
        'disabled': this.disabled,
        'loading': this.loading,
        [this.buttonDisplay]: this.buttonDisplay,
        [this.theme]: this.theme,
      });

      const iconClasses = classMap({
        'icon': true,
        'leading-icon-class': this.iconPosition === 'leading',
        'trailing-icon-class': this.iconPosition === 'trailing',
      });

      const flexContainerClasses = classMap({
        'flex-container': true,
        [this.sizeVariant]: this.sizeVariant,
        [this.theme]: this.theme,
      });

      const focusLayerClasses = classMap({
        'focus-layer': true,
        [this.theme]: this.theme,
      });

      focusLayerClasses;

      const loaderVariant = determineLoaderVariant(this.variant);

      const loaderSizeVariant = getComponentConfigToken([
        'sem',
        'buttons',
        'loader',
        'sizevariant',
        this.sizeVariant,
      ]).toLowerCase() as FormSizesType;

      const iconSizeVariant = getComponentConfigToken([
        'cmp',
        'ButtonText',
        'Icon',
        'SizeVariant',
        this.sizeVariant.toUpperCase(),
      ]).toLowerCase() as SizesType;

      const labelAndIconGroup = html` <div class="${flexContainerClasses}">
        ${this.iconPosition === 'leading'
          ? BlrIconRenderFunction(
              {
                icon: calculateIconName(this.icon, iconSizeVariant),
                sizeVariant: iconSizeVariant,
                classMap: iconClasses,
                fillParent: false,
              },
              {
                'aria-hidden': true,
              }
            )
          : nothing}
        <span class="label">${this.label} </span>
        ${this.iconPosition === 'trailing'
          ? BlrIconRenderFunction(
              {
                icon: calculateIconName(this.icon, iconSizeVariant),
                sizeVariant: iconSizeVariant,
                classMap: iconClasses,
                fillParent: false,
              },
              {
                'aria-hidden': true,
              }
            )
          : nothing}
      </div>`;

      return html`
        <span
          class="${classes}"
          aria-disabled=${this.disabled ? 'true' : nothing}
          aria-label=${this.label}
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
          id=${this.buttonTextId || nothing}
        >
          ${this.focused && !this.loading ? html`<span class="${focusLayerClasses}"></span>` : nothing}
          ${this.loading
            ? html`
                ${BlrLoaderRenderFunction({
                  sizeVariant: loaderSizeVariant,
                  variant: loaderVariant,
                  theme: this.theme,
                })}
                ${labelAndIconGroup}
              `
            : labelAndIconGroup}
        </span>
      `;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrButtonText);
}

export type BlrButtonTextType = Omit<BlrButtonText, keyof LitElementCustom> & BlrButtonTextEventHandlers;
