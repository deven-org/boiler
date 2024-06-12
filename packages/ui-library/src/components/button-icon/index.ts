/* eslint-disable no-console */
import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { SizelessIconType } from '@boiler/icons';
import { styleCustom } from './index.css.js';
import { TAG_NAME } from './renderFunction.js';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { staticActionStyles } from '../../foundation/semantic-tokens/action.css.js';
import { ActionVariantType, ActionSizesType, FormSizesType, SizesType } from '../../globals/types.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { determineLoaderVariant } from '../../utils/determine-loader-variant.js';
import { getComponentConfigToken } from '../../utils/get-component-config-token.js';
import { BlrIconRenderFunction } from '../icon/renderFunction.js';
import { BlrLoaderRenderFunction } from '../loader/renderFunction.js';
import {
  BlrBlurEvent,
  BlrClickEvent,
  BlrFocusEvent,
  createBlrBlurEvent,
  createBlrClickEvent,
  createBlrFocusEvent,
} from '../../globals/events.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';

export type BlrButtonIconEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrClick?: (event: BlrClickEvent) => void;
};

/**
 * @fires blrFocus Button received focus
 * @fires blrBlur Button lost focus
 * @fires blrClick Button was clicked
 */
export class BlrButtonIcon extends LitElementCustom {
  static styles = [styleCustom, staticActionStyles];

  @property() accessor arialabel!: string;
  @property() accessor icon: SizelessIconType | undefined;
  @property() accessor loading: boolean | undefined;
  @property() accessor disabled!: boolean;
  @property() accessor buttonIconId: string | undefined;
  @property() accessor variant: ActionVariantType = 'primary';
  @property() accessor sizeVariant: ActionSizesType | undefined = 'md';

  @property() accessor theme: ThemeType = 'Light';

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
    if (this.sizeVariant) {
      const classes = classMap({
        'blr-semantic-action': true,
        'blr-button-icon': true,
        [this.variant]: this.variant,
        [this.sizeVariant]: this.sizeVariant,
        'disabled': this.disabled,
        'loading': this.loading || false,
        [this.theme]: this.theme,
      });

      const iconClasses = classMap({
        icon: true,
      });

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
        'ButtonIcon',
        'Icon',
        'SizeVariant',
        this.sizeVariant.toUpperCase(),
      ]).toLowerCase() as SizesType;

      return html`
        <span
          aria-label=${this.arialabel || nothing}
          class="${classes}"
          aria-disabled=${this.disabled ? 'true' : nothing}
          @click=${this.handleClick}
          id=${this.buttonIconId || nothing}
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
          ${this.focused && !this.loading ? html`<span class="focus-layer ${this.theme}"></span>` : nothing}
          ${this.loading
            ? BlrLoaderRenderFunction({
                sizeVariant: loaderSizeVariant,
                variant: loaderVariant,
                theme: this.theme,
              })
            : nothing}
          ${BlrIconRenderFunction(
            {
              icon: calculateIconName(this.icon, iconSizeVariant),
              sizeVariant: iconSizeVariant,
              classMap: iconClasses,
              fillParent: false,
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

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrButtonIcon);
}

export type BlrButtonIconType = ElementInterface<BlrButtonIcon>;
