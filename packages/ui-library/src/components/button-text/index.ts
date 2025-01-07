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
import { ifDefined } from 'lit/directives/if-defined.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

export type BlrButtonTextEventHandlers = {
  blrFocus?: (event: BlrFocusEvent) => void;
  blrBlur?: (event: BlrBlurEvent) => void;
  blrClick?: (event: BlrClickEvent) => void;
};

const propertySanitizer = makeSanitizer((unsanitized: BlrButtonTextType) => ({
  iconPosition: unsanitized.iconPosition ?? 'leading',
  sizeVariant: unsanitized.sizeVariant ?? 'md',
  buttonDisplay: unsanitized.buttonDisplay ?? 'inline-block',
}));

/**
 * @fires blrFocus Button received focus
 * @fires blrBlur Button lost focus
 * @fires blrClick Button was clicked
 */
export class BlrButtonText extends LitElementCustom {
  private sanitizedController: SanitizationController<
    BlrButtonTextType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();
    this.sanitizedController = new SanitizationController<
      BlrButtonTextType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }
  static styles = [styleCustom, staticActionStyles];

  @property() accessor label = 'Button Label';
  @property() accessor icon: SizelessIconType | undefined;
  @property() accessor iconPosition: IconPositionVariant | undefined;
  @property({ type: Boolean }) accessor loading!: boolean;
  @property({ type: Boolean }) accessor disabled!: boolean;
  @property() accessor buttonTextId: string | undefined;
  @property() accessor variant: ActionVariantType = 'primary';
  @property() accessor sizeVariant: ActionSizesType | undefined;
  @property() accessor buttonDisplay: DisplayType | undefined;

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
    const sanitized = this.sanitizedController.values;
    if (sanitized.sizeVariant && this.buttonDisplay) {
      const classes = classMap({
        'blr-semantic-action': true,
        'blr-button-text': true,
        [this.variant]: this.variant,
        [sanitized.sizeVariant]: sanitized.sizeVariant,
        'disabled': this.disabled,
        'loading': this.loading,
        [sanitized.buttonDisplay]: sanitized.buttonDisplay,
        [this.theme]: this.theme,
      });

      const iconClasses = classMap({
        'icon': true,
        'leading-icon-class': sanitized.iconPosition === 'leading',
        'trailing-icon-class': sanitized.iconPosition === 'trailing',
      });

      const flexContainerClasses = classMap({
        'flex-container': true,
        [sanitized.sizeVariant]: sanitized.sizeVariant,
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
        sanitized.sizeVariant,
      ]).toLowerCase() as FormSizesType;

      const iconSizeVariant = getComponentConfigToken([
        'cmp',
        'buttontext',
        'icon',
        'sizevariant',
        sanitized.sizeVariant,
      ]).toLowerCase() as SizesType;

      const labelAndIconGroup = html` <div class="${flexContainerClasses}">
        ${this.icon && sanitized.iconPosition === 'leading'
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
        ${this.icon && sanitized.iconPosition === 'trailing'
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
          aria-disabled=${this.disabled ? 'true' : 'false'}
          aria-label=${this.label}
          @click="${this.handleClick}"
          tabindex=${ifDefined(this.disabled ? undefined : 0)}
          @focus=${this.handleFocus}
          @blur=${this.handleBlur}
          role="button"
          @keydown=${(event: KeyboardEvent) => {
            if (event.code === 'Space') {
              this.handleClick(event);
            }
          }}
          id="${ifDefined(this.buttonTextId)}"
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
