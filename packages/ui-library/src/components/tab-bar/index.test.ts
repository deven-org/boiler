import '@boiler/ui-library';

import { BlrTabBarRenderFunction } from './renderFunction.js';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';
import { html } from 'lit-html';
import { BlrTabBarType } from './index.js';

const sampleParams: BlrTabBarType = {
  theme: 'Light',
  overflowVariantStandard: 'wrap',
  overflowVariantFullWidth: 'wrap',
  showDivider: true,
  variant: 'standard',
  tabContent: 'labelAndIcon',
  iconPosition: 'leading',
  alignment: 'left',
};

const tabsAsChildren = html`
  <p disabled label="Tab 1" icon="blr360">Tab 1</p>
  <p label="Tab 2" icon="blr360">Tab 2</p>
  <p label="Tab 3" icon="blr360">Tab 3</p>
  <p label="Tab 4" icon="blr360">Tab 4</p>
  <p label="Tab 5" icon="blr360">Tab 5</p>
  <p label="Tab 6" icon="blr360">Tab 6</p>
  <p label="Tab 7" icon="blr360">Tab 7</p>
  <p label="Tab 8" icon="blr360">Tab 8</p>
  <p label="Tab 9" icon="blr360">Tab 9</p>
  <p label="Tab 10" icon="blr360">Tab 10</p>
  <p label="Tab 11" icon="blr360">Tab 11</p>
`;

describe('blr-tab-bar', () => {
  it('is having a tab bar containing the right className', async () => {
    const element = await fixture(BlrTabBarRenderFunction(sampleParams, tabsAsChildren));

    const tabBar = querySelectorDeep('.blr-tab-bar-group', element.getRootNode() as HTMLElement);
    const className = tabBar?.className;

    expect(className).to.contain('blr-tab-bar');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrTabBarRenderFunction(sampleParams, tabsAsChildren));

    const tabBar = querySelectorDeep('.blr-tab-bar-group', element.getRootNode() as HTMLElement);
    const className = tabBar?.className;
    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrTabBarRenderFunction({ ...sampleParams, size: 'sm' }, tabsAsChildren));

    const tabBar = querySelectorDeep('.blr-tab-bar-group', element.getRootNode() as HTMLElement);
    const className = tabBar?.className;
    expect(className).to.contain('sm');
  });

  it('is rendering tabs inside slot', async () => {
    const element = await fixture(BlrTabBarRenderFunction({ ...sampleParams, size: 'sm' }, tabsAsChildren));
    const tabs = querySelectorAllDeep('.nav-item-container', element?.getRootNode() as HTMLElement);
    const tabsLength = tabsAsChildren.strings[0].trim().split('</p>').filter(Boolean).length;
    expect(tabs).to.be.lengthOf(tabsLength);
  });
});
