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
  OverflowVariantType,
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
  _navList!: Element;

  @queryAll('.nav-list li')
  _navItems!: Element[];

  @property() tabs!: TabType[];
  @property() overflowVariant!: OverflowVariantType;
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

    const setActive = (el: Element) => {
      if (el.parentElement) {
        [...el.parentElement.children].forEach((sib) => sib.classList.remove('active'));
        el.classList.add('active');
      }
    };

    const handleClick = (event: Event) => {
      event.preventDefault();
      this._navItems.forEach((listItem: Element) => listItem.addEventListener('click', () => setActive(listItem)));
    };

    const classes = classMap({
      [`${this.variant}`]: this.variant,
      [`${this.size}`]: this.size,
    });

    const navListClasses = classMap({
      [`${this.overflowVariant}`]: this.overflowVariant,
      [`${this.alignment}`]: this.alignment,
    });

    return html`<style>
        ${dynamicStyles.map((style) => style)}
      </style>
      <div class="blr-tab-bar-group ${classes}">
        ${this.overflowVariant === 'buttons'
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
          <ul class="nav-list ${navListClasses}">
            ${this.tabs.map((tab) => {
              return html`
                <li class="nav-item-container ${classes}">
                  <div class="nav-item-content-wrapper">
                    <a
                      href=${tab.href}
                      class="blr-semantic-action ${this.size} ${this.iconPosition}"
                      @click=${handleClick}
                    >
                      ${this.tabContent !== 'labelOnly'
                        ? BlrIconRenderFunction({
                            icon: calculateIconName(tab.icon, this.size),
                            size: this.size,
                            hideAria: true,
                          })
                        : nothing}
                      ${this.tabContent !== 'iconOnly' ? html` <p>${tab.label}</p>` : nothing}
                    </a>
                  </div>
                  <div class="nav-item-underline"></div>
                </li>
              `;
            })}
          </ul>
        </div>
        ${this.overflowVariant === 'buttons'
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
      <div class="wrapper-horizontal">
        ${this.showDivider
          ? BlrDividerRenderFunction({
              dividerDirectionVariant: 'horizontal',
              addMargin: true,
              theme: this.theme,
            })
          : nothing}
      </div> `;
  }
}

export type BlrTabBarType = Omit<BlrTabBar, keyof LitElement>;

export const BlrTabBarRenderFunction = ({
  _navList,
  _navItems,
  tabs,
  overflowVariant,
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
    .tabs=${tabs}
    .overflowVariant=${overflowVariant}
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
