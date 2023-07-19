import { BlrRangeSliderType, BlrRangeSliderRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrRangeSliderType = {
  value: 3,
  steps: 10,
  stepFactor: 1,
  zeroInclusive: true,
  tickFrequency: 1,
};

describe('blr-range-slider', () => {
  it('is having a fieldset containing the right className', async () => {
    const element = await fixture(BlrRangeSliderRenderFunction(sampleParams));

    const fieldset = querySelectorDeep('fieldset', element.getRootNode() as HTMLElement);
    const className = fieldset?.className;

    expect(className).to.contain('range__field');
  });
});
