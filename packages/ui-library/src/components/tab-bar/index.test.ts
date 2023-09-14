import { BlrTabBarRenderFunction, BlrTabBarType } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTabBarType = {
  theme: 'Light',
  tabs: [
    {
      label: 'Tab 1',
      icon: 'blr360Sm',
      href: './',
    },
    {
      label: 'Tab 2',
      icon: 'blrInfoSm',
      href: './',
    },
    {
      label: 'Tab 3',
      icon: 'blrCalendarSm',
      href: './',
    },
  ],
  overflowVariant: 'wrap',
  size: 'md',
  showDivider: true,
  icon: 'blr360Sm',
  variant: 'standard',
  tabContent: 'labelAndIcon',
  iconPosition: 'leading',
  alignment: 'left',
  _navItems: [],
  _navItemsSlots: [],
  _panels: [],
  _navList: document.createElement('ul'),
  scrollTab: () => null,
};

describe('blr-tab-bar', () => {
  it('is having a tab bar containing the right className', async () => {
    const element = await fixture(BlrTabBarRenderFunction(sampleParams));

    const tabBar = querySelectorDeep('.blr-tab-bar-group', element.getRootNode() as HTMLElement);
    const className = tabBar?.className;

    expect(className).to.contain('blr-tab-bar');
  });
});
