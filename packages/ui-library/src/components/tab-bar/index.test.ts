import '@boiler/ui-library/dist/';

import { BlrTabBarRenderFunction, TabBarTagName } from './renderFunction';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';
import { html } from 'lit-html';
import { BlrTabBarType } from '.';

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
  <p label="Tab 2" icon="blrInfo">Tab 2</p>
  <p label="Tab 3" icon="blrCrop">Tab 3</p>
  <p label="Tab 4" icon="blrDocumentNew">Tab 4</p>
  <p label="Tab 5" icon="blrDocumentTwo">Tab 5</p>
  <p label="Tab 6" icon="blrDownload">Tab 6</p>
  <p label="Tab 7" icon="blrHeart">Tab 7</p>
  <p label="Tab 8" icon="blrHome">Tab 8</p>
  <p label="Tab 9" icon="blrLockClosed">Tab 9</p>
  <p label="Tab 10" icon="blrMusic">Tab 10</p>
  <p label="Tab 11" icon="blrPen">Tab 11</p>
`;

describe(`${TabBarTagName}`, () => {
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
