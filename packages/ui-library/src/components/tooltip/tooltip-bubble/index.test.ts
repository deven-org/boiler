import '@boiler/ui-library/dist/';

import { BlrTooltipBubbleRenderFunction } from './renderFunction';
import type { BlrTooltipBubbleType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTooltipBubbleType = {
  message: 'Tooltip text comes here Tooltip text comes here',
  static: true,
};

describe('blr-tooltip-bubble', () => {
  it('is having a tooltip bubble element', async () => {
    const element = await fixture(BlrTooltipBubbleRenderFunction(sampleParams));

    const tooltip = querySelectorDeep('blr-tooltip-bubble', element.getRootNode() as HTMLElement);

    expect(tooltip).to.exist;
  });
});
