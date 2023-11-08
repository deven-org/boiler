import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { formDark, formLight } from '../../../foundation/semantic-tokens/form.css';
import { tabBarDark, tabBarLight } from '../../../foundation/component-tokens/tab-bar.css';
import {
  FormSizesType,
  TabType,
  TabVariantType,
  OverflowVariantTypeStandard,
  OverflowVariantTypeFullWidth,
  TabAlignmentVariantType,
  IconPositionVariant,
  TabContentVariantType,
  SizesType,
} from '../../../globals/types';
import { BlrIconRenderFunction } from '../../ui/icon';
import { actionDark, actionLight } from '../../../foundation/semantic-tokens/action.css';
import { ThemeType } from '../../../foundation/_tokens-generated/index.themes';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { BlrDividerRenderFunction } from '../../ui/divider';
import { getComponentConfigToken } from '../../../utils/get-component-config-token';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

const TAG_NAME = 'blr-tab-bar';

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

  @property() tabs!: TabType[];
  @property() overflowVariantStandard!: OverflowVariantTypeStandard;
  @property() overflowVariantFullWidth!: OverflowVariantTypeFullWidth;
  @property() iconPosition: IconPositionVariant = 'leading';
  @property() variant: TabVariantType = 'standard';
  @property() tabContent: TabContentVariantType = 'labelOnly';
  @property() alignment: TabAlignmentVariantType = 'left';
  @property() size: FormSizesType = 'md';
  @property() onChange?: HTMLElement['oninput'];
  @property() onBlur?: HTMLElement['blur'];
  @property() onFocus?: HTMLElement['focus'];
  @property() showDivider = true;
  @property() onClick?: HTMLButtonElement['onclick'];

  @property() theme: ThemeType = 'Light';

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

  protected render() {
    const dynamicStyles =
      this.theme === 'Light' ? [formLight, actionLight, tabBarLight] : [formDark, actionDark, tabBarDark];

    const setActive = (tabIndex: number) => {
      const selectedTab = this._navItems[tabIndex];
      selectedTab.setAttribute('aria-selected', 'true');
      if (selectedTab.parentElement) {
        [...selectedTab.parentElement.children].forEach((sib) => sib.classList.remove('active'));
        selectedTab.classList.add('active');
      }
      if (!selectedTab.classList.contains('disabled')) {
        this._panels.forEach((panel) => {
          panel.classList.remove('active');
          panel.setAttribute('hidden', '');
        });
        this._panels[tabIndex].classList.add('active');
        this._panels[tabIndex].removeAttribute('hidden');
      }
    };

    const handleSelect = (event: Event, label: string) => {
      event.preventDefault();
      const navLabels = Object.values(this._navItemsSlots).map((nav) => nav.innerText);
      const index = navLabels.indexOf(label);
      this._navItems.forEach((listItem: Element) => listItem.addEventListener('click', () => setActive(index)));
    };

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
                ${BlrIconRenderFunction({
                  icon: calculateIconName('blrChevronLeft', iconButtonSizeVariant),
                  size: iconButtonSizeVariant,
                  hideAria: true,
                })}
              </button>
            `
          : nothing}
        <div class="blr-tab-bar ${this.alignment}">
          <ul class="nav-list ${navListClasses}" role="tablist">
            ${this.tabs.map((tab) => {
              return html`
                <li
                  class="nav-item-container ${this.variant} ${this.size} ${tab.disabled ? `disabled` : ``}"
                  role="presentation"
                >
                  <div class="nav-item-content-wrapper">
                    <a
                      id=${`${tab.label.toLowerCase()} tab`}
                      role="tab"
                      href=${`#${tab.href}`}
                      aria-controls=${tab.label.toLowerCase()}
                      class="${this.size} ${this.iconPosition} ${tab.disabled ? `disabled` : ``}"
                      @click=${(e: Event) => handleSelect(e, tab.label)}
                    >
                      ${this.tabContent !== 'labelOnly'
                        ? BlrIconRenderFunction({
                            icon: calculateIconName(tab.icon, iconSizeVariant),
                            size: iconSizeVariant,
                            hideAria: true,
                          })
                        : nothing}
                      ${this.tabContent !== 'iconOnly'
                        ? html` <slot class="blr-semantic-action ${this.size}" name="tab">${tab.label}</slot>`
                        : nothing}
                    </a>
                  </div>
                  <div class="nav-item-underline"></div>
                </li>
              `;
            })}
          </ul>
        </div>
        ${this.overflowVariantStandard === 'buttons'
          ? html`
              <button class="arrow right ${this.size}" @click=${() => this.scrollTab('right', 30, 100)}>
                ${BlrIconRenderFunction({
                  icon: calculateIconName('blrChevronRight', iconButtonSizeVariant),
                  size: iconButtonSizeVariant,
                  hideAria: true,
                })}
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
      ${this.tabs.map((tab) => {
        return html` <section
          id=${tab.href}
          class="panel-wrapper"
          role="tabpanel"
          aria-labelledby="${`${tab.label.toLowerCase()} tab`}"
          hidden
        >
          <p>${tab.label}</p>
        </section>`;
      })}`;
  }
}

export type BlrTabBarType = Omit<BlrTabBar, keyof LitElement>;

export const BlrTabBarRenderFunction = (params: BlrTabBarType) =>
  genericBlrComponentRenderer<BlrTabBarType>(TAG_NAME, { ...params });
