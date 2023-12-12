import { BlrTooltipBubbleRenderFunction, BlrTooltipBubbleType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTooltipBubbleType = {
  text: 'Tooltip text comes here Tooltip text comes here',
  static: true,
};

describe('blr-tooltip-bubble', () => {
  it('is having a tooltip bubble element', async () => {
    const element = await fixture(BlrTooltipBubbleRenderFunction(sampleParams));

    const tooltip = querySelectorDeep('blr-tooltip-bubble', element.getRootNode() as HTMLElement);

    expect(tooltip).to.exist;
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrTooltipBubbleRenderFunction(sampleParams));

    const container = querySelectorDeep('div.md', element.getRootNode() as HTMLElement);
    const className = container?.className;

    expect(className).to.contain('md');
  });
});
