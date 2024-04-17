import '@boiler/ui-library/dist/';

import { BlrTooltipRenderFunction } from './renderFunction';
import type { BlrTooltipType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTooltipType = {
  message: 'Tooltip text comes here Tooltip text comes here',
  static: true,
};

describe('blr-tooltip', () => {
  it('is having a tooltip element', async () => {
    const element = await fixture(BlrTooltipRenderFunction(sampleParams));

    const tooltip = querySelectorDeep('blr-tooltip', element.getRootNode() as HTMLElement);

    expect(tooltip).to.exist;
  });
});
