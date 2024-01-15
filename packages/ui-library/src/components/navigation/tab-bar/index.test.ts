import '@boiler/ui-library/dist/';

import { BlrTabBarRenderFunction } from './renderFunction';
import type { BlrTabBarType } from '@boiler/ui-library/dist/';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTabBarType = {
  theme: 'Light',
  tabs: [
    {
      label: 'Tab 1',
      icon: 'blr360',
      href: './',
    },
    {
      label: 'Tab 2',
      icon: 'blrInfo',
      href: './',
    },
    {
      label: 'Tab 3',
      icon: 'blrCalendar',
      href: './',
    },
  ],
  overflowVariantStandard: 'wrap',
  overflowVariantFullWidth: 'wrap',
  showDivider: true,
  variant: 'standard',
  tabContent: 'labelAndIcon',
  iconPosition: 'leading',
  alignment: 'left',
};

describe('blr-tab-bar', () => {
  it('is having a tab bar containing the right className', async () => {
    const element = await fixture(BlrTabBarRenderFunction(sampleParams));

    const tabBar = querySelectorDeep('.blr-tab-bar-group', element.getRootNode() as HTMLElement);
    const className = tabBar?.className;

    expect(className).to.contain('blr-tab-bar');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrTabBarRenderFunction(sampleParams));

    const input = querySelectorDeep('.blr-tab-bar-group', element.getRootNode() as HTMLElement);
    const className = input?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrTabBarRenderFunction({ ...sampleParams, size: 'sm' }));

    const input = querySelectorDeep('.blr-tab-bar-group', element.getRootNode() as HTMLElement);
    const className = input?.className;

    expect(className).to.contain('sm');
  });
});
