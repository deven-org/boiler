import '@boiler/ui-library/dist/';

import { BlrTooltipRenderFunction, TooltipTagName } from './renderFunction';
import type { BlrTooltipType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { html } from 'lit';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { TooltipBubbleTagName } from '../tooltip-bubble/renderFunction';

const sampleParams: BlrTooltipType = {
  message: 'Tooltip text comes here Tooltip text comes here',
  placement: 'right',
};

const testContent = html`<div
  className="blue-box"
  style="height: 200px; width: 200px; background-color: lightblue"
></div>`;

describe(`${TooltipTagName}`, () => {
  it('is having a tooltip bubble element', async () => {
    const element = await fixture(BlrTooltipRenderFunction(sampleParams, testContent));

    const tooltip = querySelectorDeep(`${TooltipBubbleTagName}`, element.getRootNode() as HTMLElement);

    expect(tooltip).to.exist;
  });

  it('is rendering the tooltip child element', async () => {
    const element = await fixture(BlrTooltipRenderFunction(sampleParams, testContent));
    expect(element.childNodes[1]).to.exist;
  });
});
