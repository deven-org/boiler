import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom } from './index.css.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { staticActionStyles } from '../../foundation/semantic-tokens/action.css.js';
import {
  IconPositionVariant,
  ActionVariantType,
  ActionSizesType,
  FormSizesType,
  SizesType,
  DisplayType,
} from '../../globals/types.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { determineLoaderVariant } from '../../utils/determine-loader-variant.js';
import { getComponentConfigToken } from '../../utils/get-component-config-token.js';
import { BlrIconRenderFunction } from '../icon/renderFunction.js';
import { BlrLoaderRenderFunction } from '../loader/renderFunction.js';
import { TAG_NAME } from './renderFunction.js';
import {
  BlrBlurEvent,
  BlrClickEvent,
  BlrFocusEvent,
  createBlrBlurEvent,
  createBlrClickEvent,
  createBlrFocusEvent,
} from '../../globals/events.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';

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

  @property() accessor label = 'Button Label';
  @property() accessor icon: SizelessIconType | undefined = undefined;
  @property() accessor iconPosition: IconPositionVariant | undefined = 'leading';
  @property({ type: Boolean }) accessor loading!: boolean;
  @property({ type: Boolean }) accessor disabled!: boolean;
  @property() accessor buttonTextId: string | undefined;
  @property() accessor variant: ActionVariantType = 'primary';
  @property() accessor sizeVariant: ActionSizesType | undefined = 'md';
  @property() accessor buttonDisplay: DisplayType | undefined = 'inline-block';

  @property() accessor theme: ThemeType = Themes[0];

  @state() protected accessor focused = false;

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
        'buttontext',
        'icon',
        'sizevariant',
        this.sizeVariant,
      ]) as SizesType;

      const labelAndIconGroup = html` <div class="${flexContainerClasses}">
        ${this.icon && this.iconPosition === 'leading'
          ? BlrIconRenderFunction(
              {
                icon: calculateIconName(this.icon, iconSizeVariant),
                sizeVariant: iconSizeVariant,
                classMap: iconClasses,
                fillParent: false,
              },
              {
                'aria-hidden': true,
              },
            )
          : nothing}
        <span class="label">${this.label} </span>
        ${this.icon && this.iconPosition === 'trailing'
          ? BlrIconRenderFunction(
              {
                icon: calculateIconName(this.icon, iconSizeVariant),
                sizeVariant: iconSizeVariant,
                classMap: iconClasses,
                fillParent: false,
              },
              {
                'aria-hidden': true,
              },
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

export type BlrButtonTextType = ElementInterface<BlrButtonText>;
