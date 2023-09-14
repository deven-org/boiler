import { LitElement, html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property, query, queryAll } from 'lit/decorators.js';
import { styleCustom } from './index.css';
import { formDark, formLight } from '../../foundation/semantic-tokens/form.css';
import { tabBarDark, tabBarLight } from '../../foundation/component-tokens/tab-bar.css';
import {
  FormSizesType,
  TabType,
  TabVariantType,
  OverflowVariantTypeStandard,
  OverflowVariantTypeFullWidth,
  TabAlignmentVariantType,
  IconPositionVariant,
  TabContentVariantType,
} from '../../globals/types';
import { BlrIconRenderFunction } from '../internal-components/icon';
import { IconType } from '@boiler/icons';
import { actionDark, actionLight } from '../../foundation/semantic-tokens/action.css';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { BlrDividerRenderFunction } from '../internal-components/divider';

@customElement('blr-tab-bar')
export class BlrTabBar extends LitElement {
  static styles = [styleCustom];

  @query('.blr-tab-bar')
  _navList!: HTMLElement;

  @queryAll('.nav-list li')
  _navItems!: HTMLElement[];

  @queryAll('slot[name=tab]')
  _navItemsSlots!: HTMLElement[];

  @queryAll('[role=tabpanel]')
  _panels!: HTMLElement[];

  @property() tabs!: TabType[];
  @property() overflowVariantStandard!: OverflowVariantTypeStandard;
  @property() overflowVariantFullWidth!: OverflowVariantTypeFullWidth;
  @property() iconPosition: IconPositionVariant = 'leading';
  @property() icon: IconType = 'blr360Sm';
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

  scrollTab = (direction: string, speed: number, distance: number) => {
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

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="blr-tab-bar-group ${classes}">
        ${this.overflowVariantStandard === 'buttons'
          ? html`
              <button class="arrow left ${this.size}" @click=${() => this.scrollTab('left', 30, 100)}>
                ${BlrIconRenderFunction({
                  icon: calculateIconName('blrChevronLeft', this.size),
                  size: this.size,
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
                            icon: calculateIconName(tab.icon, this.size),
                            size: this.size,
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
                  icon: calculateIconName('blrChevronRight', this.size),
                  size: this.size,
                  hideAria: true,
                })}
              </button>
            `
          : nothing}
      </div>
      <div class="wrapper-horizontal ${this.overflowVariantStandard} ${this.overflowVariantFullWidth}">
        ${this.showDivider
          ? BlrDividerRenderFunction({
              dividerDirectionVariant: 'horizontal',
              size: this.size,
              addMargin: true,
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

export const BlrTabBarRenderFunction = ({
  _navList,
  _navItems,
  _navItemsSlots,
  _panels,
  tabs,
  overflowVariantStandard,
  overflowVariantFullWidth,
  iconPosition,
  variant,
  tabContent,
  alignment,
  size,
  onChange,
  onBlur,
  onFocus,
  icon,
  theme,
  showDivider,
  onClick,
}: BlrTabBarType) => {
  return html`<blr-tab-bar
    .navlist=${_navList}
    .navItems=${_navItems}
    .navItemsSlots=${_navItemsSlots}
    .panels=${_panels}
    .tabs=${tabs}
    .overflowVariantStandard=${overflowVariantStandard}
    .overflowVariantFullWidth=${overflowVariantFullWidth}
    .iconPosition=${iconPosition}
    .showDivider=${showDivider}
    .icon=${icon}
    .variant=${variant}
    .tabContent=${tabContent}
    .alignment=${alignment}
    .size=${size}
    .onChange=${onChange}
    .onBlur=${onBlur}
    .onFocus=${onFocus}
    .theme=${theme}
    .onClick=${onClick}
  ></blr-tab-bar>`;
};
