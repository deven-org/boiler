import { BlrTooltipRenderFunction, BlrTooltipType } from './index';

import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTooltipType = {
  text: 'Tooltip text comes here Tooltip text comes here',
  placement: 'right',
};

const testContent = html`<div style="height: 200px; width: 200px; background-color: lightblue"></div>`;

describe('blr-tool-tip', () => {
  it('is having a tooltip containing the right className', async () => {
    const element = await fixture(BlrTooltipRenderFunction(sampleParams, testContent));

    const tooltip = querySelectorDeep('div.blr-tooltip', element.getRootNode() as HTMLElement);
    const className = tooltip?.className;

    expect(className).to.contain('blr-tooltip');
  });

  it('has a size sm by default', async () => {
    const element = await fixture(BlrTooltipRenderFunction(sampleParams, testContent));

    const tooltip = querySelectorDeep('div.blr-tooltip', element.getRootNode() as HTMLElement);
    const className = tooltip?.className;

    expect(className).to.contain('sm');
  });

  it('has a size md when "size" is set to "md" ', async () => {
    const element = await fixture(BlrTooltipRenderFunction({ ...sampleParams, size: 'md' }, testContent));

    const tooltip = querySelectorDeep('div.blr-tooltip', element.getRootNode() as HTMLElement);
    const className = tooltip?.className;

    expect(className).to.contain('md');
  });
});
