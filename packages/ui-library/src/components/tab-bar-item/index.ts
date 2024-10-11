/* eslint-disable lit/binding-positions */
import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { staticStyles } from './index.css.js';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { staticActionStyles } from '../../foundation/semantic-tokens/action.css.js';
import { IconPositionVariant, TabContentVariantType, FormSizesType, SizesType } from '../../globals/types.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { getComponentConfigToken } from '../../utils/get-component-config-token.js';
import { BlrIconRenderFunction } from '../icon/renderFunction.js';
import { createBlrBlurEvent, createBlrChangeEvent, createBlrFocusEvent } from '../../globals/events.js';
import { LitElementCustom } from '../../utils/lit/element.js';
import { SignalHub } from '../../utils/lit/signals.js';

const TAG_NAME = 'blr-tab-bar-item';

/**
 * @fires blrFocus BlrTabBarItem received focus
 * @fires blrBlur BlrTabBarItem lost focus
 */

export class BlrTabBarItem extends LitElementCustom implements PublicReactiveProperties {
  public declare signals: SignalHub<PublicReactiveProperties>;
  static styles = [staticStyles, staticActionStyles];

  @property() accessor iconPosition: IconPositionVariant = 'leading';
  @property() accessor tabContent: TabContentVariantType = 'labelOnly';
  @property() accessor size: FormSizesType | undefined = 'md';
  @property() accessor disabled = false;
  @property() accessor selected: boolean = false;
  @property() accessor label = '';
  @property() accessor icon: string | undefined;
  @property() accessor theme: ThemeType = 'Light_value';

  @state() protected accessor selectedTabIndex: number | undefined;

  protected handleFocus = (event: FocusEvent, isDisabled: boolean) => {
    if (!isDisabled) {
      this.dispatchEvent(createBlrFocusEvent({ originalEvent: event }));
    }
  };

  protected handleBlur = (event: FocusEvent, isDisabled: boolean) => {
    if (!isDisabled) {
      this.dispatchEvent(createBlrBlurEvent({ originalEvent: event }));
    }
  };

  protected handleSelect(event: Event, isDisabled: boolean) {
    if (!isDisabled) {
      this.selected = true;
      this.dispatchEvent(createBlrChangeEvent({ originalEvent: event, changedValue: this.label }));
    }
  }

  protected render() {
    if (this.size) {
      const iconSizeVariant = getComponentConfigToken([
        'cmp',
        'tabbar',
        'tab',
        'icon',
        'sizevariant',
        this.size,
      ]) as SizesType;

      const navListItemContainer = classMap({
        'disabled': this.disabled,
        'nav-item-container': true,
        [this.size || 'md']: this.size || 'md',
        [this.iconPosition]: this.iconPosition,
        [this.theme]: this.theme,
      });

      const navListItemClasses = classMap({
        'disabled': this.disabled,
        'nav-item': true,
        [this.size || 'md']: this.size || 'md',
        [this.iconPosition]: this.iconPosition,
        'selected': this.selected,
      });
      const navListItemUnderline = classMap({
        'nav-item-underline': true,
        'selected': this.selected,
      });

      return html` <li class="${navListItemContainer}" role="presentation">
        <div class="nav-item-content-wrapper">
          <p
            id=${`#tab-${this.label}`}
            role="tab"
            aria-controls=${`panel-${this.label}`}
            class="${navListItemClasses}"
            @focus=${(e: FocusEvent) => this.handleFocus(e, this.disabled)}
            @blur=${(e: FocusEvent) => this.handleBlur(e, this.disabled)}
            @click=${(e: Event) => this.handleSelect(e, this.disabled)}
            @keydown=${(event: KeyboardEvent) => {
              if (event.code === 'Space') {
                this.handleSelect(event, this.disabled);
              }
            }}
            tabindex=${this.disabled ? '-1' : 0}
          >
            ${this.tabContent !== 'labelOnly' && this.icon // TODO: Make the this.tabContent !== 'labelOnly' logic work
              ? BlrIconRenderFunction(
                  {
                    icon: calculateIconName(this.icon!, iconSizeVariant),
                    sizeVariant: iconSizeVariant,
                  },
                  {
                    'aria-hidden': true,
                  },
                )
              : nothing}
            ${this.tabContent !== 'iconOnly'
              ? html` <label class="blr-semantic-action ${this.theme} ${this.size}" name="${this.label}"
                  >${this.label}</label
                >`
              : nothing}
          </p>
        </div>
        <div class="${navListItemUnderline}"></div>
      </li>`;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrTabBarItem);
}

export type BlrTabBarItemType = PublicReactiveProperties;

export type PublicReactiveProperties = {
  iconPosition: string;
  tabContent: string;
  size?: string;
  disabled: boolean;
  selected: boolean;
  label: string;
  icon?: string;
  theme: ThemeType;
};
