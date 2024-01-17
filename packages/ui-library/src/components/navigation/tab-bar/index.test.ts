import '@boiler/ui-library/dist/';

import { BlrTabBarRenderFunction } from './renderFunction';
import type { BlrTabBarType } from '@boiler/ui-library/dist/';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { html } from 'lit-html';

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
  <a disabled href="./" label="Tab 1" icon="blr360">Tab 1</a>
  <a href="./" label="Tab 2" icon="blrInfo">Tab 2</a>
  <a href="./" label="Tab 3" icon="blrCrop">Tab 3</a>
  <a href="./" label="Tab 4" icon="blrDocumentNew">Tab 4</a>
  <a href="./" label="Tab 5" icon="blrDocumentTwo">Tab 5</a>
  <a href="./" label="Tab 6" icon="blrDownload">Tab 6</a>
  <a href="./" label="Tab 7" icon="blrHeart">Tab 7</a>
  <a href="./" label="Tab 8" icon="blrHome">Tab 8</a>
  <a href="./" label="Tab 9" icon="blrLockClosed">Tab 9</a>
  <a href="./" label="Tab 10" icon="blrMusic">Tab 10</a>
  <a href="./" label="Tab 11" icon="blrPen">Tab 11</a>
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

    const input = querySelectorDeep('.blr-tab-bar-group', element.getRootNode() as HTMLElement);
    const className = input?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrTabBarRenderFunction({ ...sampleParams, size: 'sm' }, tabsAsChildren));

    const input = querySelectorDeep('.blr-tab-bar-group', element.getRootNode() as HTMLElement);
    const className = input?.className;

    expect(className).to.contain('sm');
  });
});
