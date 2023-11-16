import { BlrToolTipType, BlrToolTipRenderFunction } from './index';

import { fixture, expect, html } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrToolTipType = {
  theme: 'Light',
  text: 'Tooltip text comes here Tooltip text comes here',
  placement: 'right',
  toolTipArrow: 'middle',
  elevation: true,
  customCss: 'customToolTipCss',
  visibility: 'onLoad',
  itemRenderer: html` <p style="padding: 0px; margin: 0px; border-bottom: 1px dashed #ccc;">tool tip</p> `,
};

describe('blr-tool-tip', () => {
  it('is having a tooltip containing the right className', async () => {
    const element = await fixture(BlrToolTipRenderFunction(sampleParams));

    const tooltip = querySelectorDeep('div.blr-tooltip', element.getRootNode() as HTMLElement);
    const className = tooltip?.className;

    expect(className).to.contain('blr-tooltip');
  });

  it('has a size sm by default', async () => {
    const element = await fixture(BlrToolTipRenderFunction(sampleParams));

    const tooltip = querySelectorDeep('div.blr-tooltip', element.getRootNode() as HTMLElement);
    const className = tooltip?.className;

    expect(className).to.contain('sm');
  });

  it('has a size md when "size" is set to "md" ', async () => {
    const element = await fixture(BlrToolTipRenderFunction({ ...sampleParams, size: 'md' }));

    const tooltip = querySelectorDeep('div.blr-tooltip', element.getRootNode() as HTMLElement);
    const className = tooltip?.className;

    expect(className).to.contain('md');
  });
});
