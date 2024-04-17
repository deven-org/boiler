import '@boiler/ui-library/dist/';

import { BlrTooltipUsingFloatingUIRenderFunction } from './renderFunction';
import type { BlrTooltipUsingFloatingUIType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTooltipUsingFloatingUIType = {
  message: 'Tooltip text comes here Tooltip text comes here',
  placement: 'right',
};

const testContent = html`<div
  className="blue-box"
  style="height: 200px; width: 200px; background-color: lightblue"
></div>`;

describe('blr-tooltip', () => {
  it('is having a tooltip element', async () => {
    const element = await fixture(BlrTooltipUsingFloatingUIRenderFunction(sampleParams, testContent));

    const tooltip = querySelectorDeep('blr-tooltip', element.getRootNode() as HTMLElement);

    expect(tooltip).to.exist;
  });

  it('is rendering the tooltip child element', async () => {
    const element = await fixture(BlrTooltipUsingFloatingUIRenderFunction(sampleParams, testContent));
    expect(element.childNodes[1]).to.exist;
  });
});
