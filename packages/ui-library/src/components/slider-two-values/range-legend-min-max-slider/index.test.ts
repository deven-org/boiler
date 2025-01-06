import '@boiler/ui-library';

import { BlrRangeLegendMinMaxSliderRenderFunction } from './renderFunction.js';
import type { BlrRangeLegendMinMaxSliderType } from './index.js';

import { expect, fixture } from '@open-wc/testing';
import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';
import { Themes } from '../../../foundation/_tokens-generated/index.themes.js';

const sampleParams: BlrRangeLegendMinMaxSliderType = {
  theme: Themes[0],
  rangeInputId: 'range-legend-cmpt',
  startValue: '200$',
  endValue: '400$',
  size: 'lg',
  list: ['100$', '200$', '300$', '400$', '500$'],
  stepFactor: 1,
  btnVariant: 'primary',
  incrementIcon: 'blrPlus',
  decrementIcon: 'blrMinus',
  onChange: () => null,
};

describe('blr-range-legend-min-max-slider', () => {
  it('is having two sliders containing the right className', async () => {
    const element = await fixture(BlrRangeLegendMinMaxSliderRenderFunction(sampleParams));
    const inputWrapper = querySelectorDeep('.range-wrapper', element.getRootNode() as HTMLElement);
    const textareas = querySelectorAllDeep('input', inputWrapper?.getRootNode() as HTMLElement);
    const classNameInputOne = textareas[0]?.className;
    const classNameInputTwo = textareas[1]?.className;

    expect(classNameInputOne).to.contain('range');
    expect(classNameInputTwo).to.contain('range');
  });

  it('properly renders legend', async () => {
    const element = await fixture(BlrRangeLegendMinMaxSliderRenderFunction(sampleParams));
    const inputWrapper = querySelectorDeep('.range-wrapper', element.getRootNode() as HTMLElement);
    const rangeNumbersElement = querySelectorDeep('.range__numbers', inputWrapper?.getRootNode() as HTMLElement);
    const allRangePoints = querySelectorAllDeep(
      '.range__point',
      rangeNumbersElement?.getRootNode() as HTMLParagraphElement,
    );

    allRangePoints.forEach((point, i) => {
      expect(point).to.exist;
      expect(point.textContent).to.equal(sampleParams.list[i]);
    });
    expect(allRangePoints.length).to.equal(sampleParams.list.length);
  });
});
