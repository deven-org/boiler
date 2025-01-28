/* eslint-disable lit/binding-positions */
import { html, nothing } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { query, state } from 'lit/decorators.js';
import { property } from '../../utils/lit/decorators.js';
import { staticStyles } from './index.css.js';
import { TAG_NAME } from './renderFunction.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
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
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

/**
 * @fires blrSelectedValueChange TabBar selected value changed
 */

const propertySanitizer = makeSanitizer((unsanitized: BlrTabBarType) => ({
  overflowVariantStandard: unsanitized.overflowVariantStandard ?? 'default',
  overflowVariantFullWidth: unsanitized.overflowVariantFullWidth ?? 'default',
  iconPosition: unsanitized.iconPosition ?? 'leading',
  variant: unsanitized.variant ?? 'standard',
  tabContent: unsanitized.tabContent ?? 'labelOnly',
  alignment: unsanitized.alignment ?? 'left',
  size: unsanitized.size ?? 'md',
  showDivider: unsanitized.showDivider ?? true,
  theme: unsanitized.theme ?? Themes[0],
}));

export class BlrTabBar extends LitElementCustom {
  private sanitizedController: SanitizationController<
    BlrTabBarType,
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();
    this.sanitizedController = new SanitizationController<
      BlrTabBarType,
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }
  static styles = [staticStyles, staticActionStyles];

  @query('.blr-tab-bar')
  protected accessor _navList!: HTMLElement;

  @property() accessor overflowVariantStandard!: OverflowVariantTypeStandard;
  @property() accessor overflowVariantFullWidth!: OverflowVariantTypeFullWidth;
  @property() accessor iconPosition: IconPositionVariant | undefined;
  @property() accessor variant: TabVariantType | undefined;
  @property() accessor tabContent: TabContentVariantType | undefined;
  @property() accessor alignment: TabAlignmentVariantType | undefined;
  @property() accessor size: FormSizesType | undefined;
  @property({ type: Boolean }) accessor showDivider: boolean | undefined;
  @property() accessor theme: ThemeType | undefined;

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
    const sanitized = this.sanitizedController.values;
    // Cleanup signal listeners from previously slotted elements
    this._tabBarSelectedSignalSubscriptionDisposers.forEach((cancelSubscription) => cancelSubscription());
    const slot = this.renderRoot?.querySelector('slot');

    this._tabBarElements = slot?.assignedElements({ flatten: false }) as BlrTabBarItem[];

    // Add signal listeners to newly slotted elements
    this._tabBarElements.forEach((item) => {
      if (item instanceof BlrTabBarItem === false) {
        throw new Error('child component of blr-tab-bar must be blr-tab-bar-item');
      }

      item.theme = sanitized.theme;
      item.size = sanitized.size;
      item.tabContent = sanitized.tabContent;
      item.iconPosition = sanitized.iconPosition;

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
    const sanitized = this.sanitizedController.values;
    if (sanitized.size) {
      const wrapperClasses = classMap({
        'blr-tab-bar-group': true,
        [sanitized.variant]: sanitized.variant,
        [sanitized.size]: sanitized.size,
        [sanitized.theme]: sanitized.theme,
      });

      const tabBarClasses = classMap({
        'blr-tab-bar': true,
        [sanitized.alignment]: sanitized.alignment,
      });

      const navListClasses = classMap({
        [sanitized.overflowVariantStandard]: sanitized.overflowVariantStandard,
        [sanitized.overflowVariantFullWidth]: sanitized.overflowVariantFullWidth,
        [sanitized.alignment]: sanitized.alignment,
      });

      const buttonIconSizeVariant = getComponentConfigToken([
        'cmp',
        'buttonicon',
        'icon',
        'sizevariant',
        sanitized.size,
      ]) as SizesType;

      return html` <div class="${wrapperClasses}">
          ${sanitized.overflowVariantStandard === 'buttons'
            ? html`
                <button class="arrow left ${sanitized.size}" @click=${() => this.scrollTab('left', 30, 100)}>
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
          ${sanitized.overflowVariantStandard === 'buttons'
            ? html`
                <button class="arrow right ${sanitized.size}" @click=${() => this.scrollTab('right', 30, 100)}>
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
        <div class="wrapper-horizontal ${sanitized.overflowVariantStandard} ${sanitized.overflowVariantFullWidth}">
          ${sanitized.showDivider
            ? BlrDividerRenderFunction({
                direction: 'horizontal',
                theme: sanitized.theme,
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
