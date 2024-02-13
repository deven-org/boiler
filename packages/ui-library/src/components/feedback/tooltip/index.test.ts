import '@boiler/ui-library/dist/';

import { BlrTooltipRenderFunction } from './renderFunction';
import type { BlrTooltipType } from '@boiler/ui-library/dist/';

import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTooltipType = {
  message: 'Tooltip text comes here Tooltip text comes here',
  placement: 'right',
};

const testContent = html`<div
  className="blue-box"
  style="height: 200px; width: 200px; background-color: lightblue"
></div>`;

describe('blr-tooltip', () => {
  it('is having a tooltip bubble element', async () => {
    const element = await fixture(BlrTooltipRenderFunction(sampleParams, testContent));

    const tooltip = querySelectorDeep('blr-tooltip-bubble', element.getRootNode() as HTMLElement);

    expect(tooltip).to.exist;
  });

  it('is rendering the tooltip child element', async () => {
    const element = await fixture(BlrTooltipRenderFunction(sampleParams, testContent));
    expect(element.childNodes[1]).to.exist;
  });
});
