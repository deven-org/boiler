import '@boiler/ui-library';

import { BlrTabBarRenderFunction } from './renderFunction.js';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { html } from 'lit-html';
import { BlrTabBarType } from './index.js';
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';

const sampleParams: BlrTabBarType = {
  theme: Themes[0],
  overflowVariantStandard: 'wrap',
  overflowVariantFullWidth: 'wrap',
  showDivider: true,
  variant: 'standard',
  tabContent: 'labelAndIcon',
  iconPosition: 'leading',
  alignment: 'left',
};

const tabsAsChildren = html`
  <blr-tab-bar-item disabled label="Tab 1" icon="blr360">Tab 1</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 2" icon="blr360">Tab 2</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 3" icon="blr360">Tab 3</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 4" icon="blr360">Tab 4</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 5" icon="blr360">Tab 5</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 6" icon="blr360">Tab 6</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 7" icon="blr360">Tab 7</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 8" icon="blr360">Tab 8</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 9" icon="blr360">Tab 9</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 10" icon="blr360">Tab 10</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 11" icon="blr360">Tab 11</blr-tab-bar-item>
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
});
