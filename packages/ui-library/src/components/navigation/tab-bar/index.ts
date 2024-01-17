/* eslint-disable lit/binding-positions */
import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, queryAll, state } from 'lit/decorators.js';
import { styleCustom, tabBarDark, tabBarLight } from './index.css';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';

import {
  FormSizesType,
  TabVariantType,
  OverflowVariantTypeStandard,
  OverflowVariantTypeFullWidth,
  TabAlignmentVariantType,
  IconPositionVariant,
  TabContentVariantType,
  SizesType,
} from '../../../globals/types';
import { BlrIconRenderFunction } from '../../ui/icon/renderFunction';
import { actionDark, actionLight } from '../../../foundation/semantic-tokens/action.css';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { BlrDividerRenderFunction } from '../../ui/divider/renderFunction';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';

import { TAG_NAME } from './renderFunction';

@customElement(TAG_NAME)
export class BlrTabBar extends LitElement {
  static styles = [styleCustom];

  @query('.blr-tab-bar')
  protected _navList!: HTMLElement;

  @queryAll('.nav-list li')
  protected _navItems!: HTMLElement[];

  @queryAll('slot[name=tab]')
  protected _navItemsSlots!: HTMLElement[];

  @queryAll('[role=tabpanel]')
  protected _panels!: HTMLElement[];

  @property() overflowVariantStandard!: OverflowVariantTypeStandard;
  @property() overflowVariantFullWidth!: OverflowVariantTypeFullWidth;
  @property() iconPosition: IconPositionVariant = 'leading';
  @property() variant: TabVariantType = 'standard';
  @property() tabContent: TabContentVariantType = 'labelOnly';
  @property() alignment: TabAlignmentVariantType = 'left';
  @property() size?: FormSizesType = 'md';
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() showDivider = true;
  @property() onClick?: HTMLButtonElement['onclick'];

  @property() theme: ThemeType = 'Light';

  @state() protected selectedTabIndex: number | undefined;

  protected _tabBarElements: Element[] | undefined;

  protected scrollTab = (direction: string, speed: number, distance: number) => {
    let scrollAmount = 0;
    const slideTimer = setInterval(() => {
      if (direction === 'left') {
        this._navList.scrollLeft -= 15;
      } else {
        this._navList.scrollLeft += 15;
      }
      scrollAmount += 20;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  };

  protected handleSelect(index: number | undefined) {
    this.selectedTabIndex = index;
  }

  protected handleSlotChange() {
    const slot = this.renderRoot?.querySelector('slot');

    this._tabBarElements = slot?.assignedElements({ flatten: false });
    this.requestUpdate();
  }

  protected render() {
    if (this.size) {
      const dynamicStyles =
        this.theme === 'Light' ? [formLight, actionLight, tabBarLight] : [formDark, actionDark, tabBarDark];

      const classes = classMap({
        [`${this.variant}`]: this.variant,
        [`${this.size}`]: this.size,
      });

      const navListClasses = classMap({
        [`${this.overflowVariantStandard}`]: this.overflowVariantStandard,
        [`${this.overflowVariantFullWidth}`]: this.overflowVariantFullWidth,
        [`${this.alignment}`]: this.alignment,
      });

      const iconSizeVariant = getComponentConfigToken([
        'SizeVariant',
        'Navigation',
        'TabBar',
        'Tab',
        this.size.toUpperCase(),
        'Icon',
      ]) as SizesType;

      const iconButtonSizeVariant = getComponentConfigToken([
        'SizeVariant',
        'Action',
        'IconButton',
        this.size.toUpperCase(),
        'Icon',
      ]).toLowerCase() as SizesType;

      return html`<style>
          ${dynamicStyles.map((style) => style)}
        </style>

        <div class="blr-tab-bar-group ${classes}">
          ${this.overflowVariantStandard === 'buttons'
            ? html`
                <button class="arrow left ${this.size}" @click=${() => this.scrollTab('left', 30, 100)}>
                  ${BlrIconRenderFunction(
                    {
                      icon: calculateIconName('blrChevronLeft', iconButtonSizeVariant),
                      size: iconButtonSizeVariant,
                    },
                    {
                      'aria-hidden': true,
                    }
                  )}
                </button>
              `
            : nothing}
          <div class="blr-tab-bar ${this.alignment}">
            <ul class="nav-list ${navListClasses}" role="tablist">
              <slot @slotchange=${this.handleSlotChange}></slot>
              ${this._tabBarElements?.map((tab: Element, index) => {
                const isDisabled = tab.hasAttribute('disabled') || tab.getAttribute('disabled') === 'true';

                const navListItemClasses = classMap({
                  'disabled': isDisabled,
                  'nav-item': true,
                  [`${this.size}`]: this.size || 'md',
                  [`${this.iconPosition}`]: this.iconPosition,
                  'selected': index === this.selectedTabIndex,
                });

                const navListItemContainer = classMap({
                  'disabled': tab.getAttribute('disabled') === 'true',
                  'nav-item-container': true,
                  [`${this.size}`]: this.size || 'md',
                  [`${this.iconPosition}`]: this.iconPosition,
                });

                const navListItemUnderline = classMap({
                  'nav-item-underline': true,
                  'selected': index === this.selectedTabIndex,
                });

                return html`
                  <li class="${navListItemContainer}" role="presentation">
                    <div class="nav-item-content-wrapper">
                      <a
                        id=${`tab-${index}`}
                        role="tab"
                        href=${`#${tab.getAttribute('href')}`}
                        aria-controls=${`panel-${index}`}
                        class="${navListItemClasses}"
                        @click=${() => {
                          if (isDisabled) {
                            this.handleSelect(index);
                          }
                        }}
                        tabindex=${isDisabled ? '-1' : index}
                      >
                        ${this.tabContent !== 'labelOnly' && tab.hasAttribute('icon')
                          ? BlrIconRenderFunction(
                              {
                                icon: calculateIconName(tab.getAttribute('icon')!, iconSizeVariant),
                                size: iconSizeVariant,
                              },
                              {
                                'aria-hidden': true,
                              }
                            )
                          : nothing}
                        ${this.tabContent !== 'iconOnly'
                          ? html` <label class="blr-semantic-action ${this.size}" name="${tab.getAttribute('label')}"
                              >${tab.getAttribute('label')}</label
                            >`
                          : nothing}
                      </a>
                    </div>
                    <div class="${navListItemUnderline}"></div>
                  </li>
                `;
              })}
            </ul>
          </div>
          ${this.overflowVariantStandard === 'buttons'
            ? html`
                <button class="arrow right ${this.size}" @click=${() => this.scrollTab('right', 30, 100)}>
                  ${BlrIconRenderFunction(
                    {
                      icon: calculateIconName('blrChevronRight', iconButtonSizeVariant),
                      size: iconButtonSizeVariant,
                    },
                    {
                      'aria-hidden': true,
                    }
                  )}
                </button>
              `
            : nothing}
        </div>
        <div class="wrapper-horizontal ${this.overflowVariantStandard} ${this.overflowVariantFullWidth}">
          ${this.showDivider
            ? BlrDividerRenderFunction({
                directionVariant: 'horizontal',
                theme: this.theme,
              })
            : nothing}
        </div>
        ${this._tabBarElements?.map((tab, index) => {
          return index === this.selectedTabIndex
            ? html`<section
                id=${`#${tab.getAttribute('href')}`}
                class="panel-wrapper"
                role="tabpanel"
                aria-labelledby="${`${tab.getAttribute('label')?.toLowerCase()}-tab`}"
              >
                <p>${tab.getAttribute('label')}</p>
              </section>`
            : nothing;
        })}`;
    }
  }
}

export type BlrTabBarType = Omit<BlrTabBar, keyof LitElement>;
