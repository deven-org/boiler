/* eslint-disable lit/binding-positions */
import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { query, state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { staticStyles } from './index.css.js';
import { TAG_NAME } from './renderFunction.js';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { staticActionStyles } from '../../foundation/semantic-tokens/action.css.js';
import {
  OverflowVariantTypeStandard,
  OverflowVariantTypeFullWidth,
  IconPositionVariant,
  TabVariantType,
  TabContentVariantType,
  TabAlignmentVariantType,
  FormSizesType,
  SizesType,
} from '../../globals/types.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { getComponentConfigToken } from '../../utils/get-component-config-token.js';
import { BlrDividerRenderFunction } from '../divider/renderFunction.js';
import { BlrIconRenderFunction } from '../icon/renderFunction.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { BlrTabBarItem } from '../tab-bar-item/index.js';
import { batch, Signal } from '@lit-labs/preact-signals';
import { createBlrSelectedValueChangeEvent } from '../../globals/events.js';

/**
 * @fires blrSelectedValueChange TabBar selected value changed
 */

export class BlrTabBar extends LitElementCustom {
  static styles = [staticStyles, staticActionStyles];

  @query('.blr-tab-bar')
  protected accessor _navList!: HTMLElement;

  @property() accessor overflowVariantStandard!: OverflowVariantTypeStandard;
  @property() accessor overflowVariantFullWidth!: OverflowVariantTypeFullWidth;
  @property() accessor iconPosition: IconPositionVariant = 'leading';
  @property() accessor variant: TabVariantType = 'standard';
  @property() accessor tabContent: TabContentVariantType = 'labelOnly';
  @property() accessor alignment: TabAlignmentVariantType = 'left';
  @property() accessor size: FormSizesType | undefined = 'md';
  @property() accessor showDivider = true;
  @property() accessor theme: ThemeType = 'Light';

  @state() protected accessor _selectedTab: BlrTabBarItem | undefined;
  protected _tabBarElements: BlrTabBarItem[] = [];
  private _tabBarSelectedSignalSubscriptionDisposers: ReturnType<Signal['subscribe']>[] = [];

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

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  protected firstUpdated(...args: Parameters<LitElementCustom['firstUpdated']>): void {
    this.handleSlotChange();
  }

  protected handleTabBarSelectedSignal = (target: BlrTabBarItem, value?: boolean) => {
    const selectedTab: BlrTabBarItem | undefined = value
      ? target
      : target === this._selectedTab && !value
        ? undefined
        : this._selectedTab;

    batch(() => {
      this._tabBarElements?.forEach((tab) => {
        if (tab !== selectedTab) {
          tab.selected = false;
        }
      });
    });

    if (this._selectedTab !== selectedTab) {
      this.dispatchEvent(
        createBlrSelectedValueChangeEvent({ selectedValue: (<BlrTabBarItem>selectedTab)?.label ?? '' }),
      );
      this._selectedTab = selectedTab;
    }
  };

  protected handleSlotChange() {
    // Cleanup signal listeners from previously slotted elements
    this._tabBarSelectedSignalSubscriptionDisposers.forEach((cancelSubscription) => cancelSubscription());
    const slot = this.renderRoot?.querySelector('slot');

    this._tabBarElements = slot?.assignedElements({ flatten: false }) as BlrTabBarItem[];

    // Add signal listeners to newly slotted elements
    this._tabBarElements.forEach((item) => {
      if (item instanceof BlrTabBarItem === false) {
        throw new Error('child component of blr-tab-bar must be blr-tab-bar-item');
      }

      item.theme = this.theme;
      item.size = this.size;
      item.tabContent = this.tabContent;
      item.iconPosition = this.iconPosition;

      this._tabBarSelectedSignalSubscriptionDisposers.push(
        item.signals.selected.subscribe((value) => this.handleTabBarSelectedSignal(item, value)),
      );
    });
  }

  protected handleTabSelect(currentlySelected: string) {
    this._tabBarElements?.forEach((item: BlrTabBarItem) => {
      if (item.label !== currentlySelected && item.selected) {
        item.selected = false;
      }
    });
  }

  protected render() {
    if (this.size) {
      const wrapperClasses = classMap({
        'blr-tab-bar-group': true,
        [this.variant]: this.variant,
        [this.size]: this.size,
        [this.theme]: this.theme,
      });

      const tabBarClasses = classMap({
        'blr-tab-bar': true,
        [this.alignment]: this.alignment,
      });

      const navListClasses = classMap({
        [this.overflowVariantStandard]: this.overflowVariantStandard,
        [this.overflowVariantFullWidth]: this.overflowVariantFullWidth,
        [this.alignment]: this.alignment,
      });

      const buttonIconSizeVariant = getComponentConfigToken([
        'cmp',
        'ButtonIcon',
        'Icon',
        'SizeVariant',
        this.size.toUpperCase(),
      ]).toLowerCase() as SizesType;

      return html` <div class="${wrapperClasses}">
          ${this.overflowVariantStandard === 'buttons'
            ? html`
                <button class="arrow left ${this.size}" @click=${() => this.scrollTab('left', 30, 100)}>
                  ${BlrIconRenderFunction(
                    {
                      icon: calculateIconName('blrChevronLeft', buttonIconSizeVariant),
                      sizeVariant: buttonIconSizeVariant,
                      fillParent: false,
                    },
                    {
                      'aria-hidden': true,
                    },
                  )}
                </button>
              `
            : nothing}
          <div class="${tabBarClasses}">
            <ul class="nav-list ${navListClasses}" role="tablist">
              <slot @slotchange=${this.handleSlotChange}></slot>
            </ul>
          </div>
          ${this.overflowVariantStandard === 'buttons'
            ? html`
                <button class="arrow right ${this.size}" @click=${() => this.scrollTab('right', 30, 100)}>
                  ${BlrIconRenderFunction(
                    {
                      icon: calculateIconName('blrChevronRight', buttonIconSizeVariant),
                      sizeVariant: buttonIconSizeVariant,
                      fillParent: false,
                    },
                    {
                      'aria-hidden': true,
                    },
                  )}
                </button>
              `
            : nothing}
        </div>
        <div class="wrapper-horizontal ${this.overflowVariantStandard} ${this.overflowVariantFullWidth}">
          ${this.showDivider
            ? BlrDividerRenderFunction({
                direction: 'horizontal',
                theme: this.theme,
              })
            : nothing}
        </div>

        ${this._selectedTab
          ? html`<section
              id=${`#panel-${this._selectedTab.getAttribute('label')}`}
              class="panel-wrapper"
              role="tabpanel"
              aria-labelledby="${`${this._selectedTab.getAttribute('label')?.toLowerCase()}-tab`}"
            >
              <p>${this._selectedTab.getAttribute('label')}</p>
            </section>`
          : nothing}`;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrTabBar);
}

export type BlrTabBarType = ElementInterface<BlrTabBar>;
