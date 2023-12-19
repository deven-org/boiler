import { BlrTooltipRenderFunction, BlrTooltipType } from './index';

import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit-element';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTooltipType = {
  message: 'Tooltip text comes here Tooltip text comes here',
  placement: 'right',
};

const testContent = html`<div style="height: 200px; width: 200px; background-color: lightblue"></div>`;

describe('blr-tooltip', () => {
  it('is having a tooltip bubble element', async () => {
    const element = await fixture(BlrTooltipRenderFunction(sampleParams, testContent));

    const tooltip = querySelectorDeep('blr-tooltip-bubble', element.getRootNode() as HTMLElement);

    expect(tooltip).to.exist;
  });
});
