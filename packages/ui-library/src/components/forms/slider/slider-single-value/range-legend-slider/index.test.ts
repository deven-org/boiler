import { BlrRangeLegendSliderRenderFunction } from './renderFunction';
import type { BlrRangeLegendSliderType } from '@boiler/ui-library/dist/';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep, querySelectorAllDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrRangeLegendSliderType = {
  theme: 'Light',
  rangeInputId: 'range-cmpt',
  initialValue: '300 $',
  list: ['100 $', '200 $', '300 $', '400 $', '500 $', '600 $'],
  stepFactor: 1,
  size: 'md',
  btnVariant: 'silent',
  showLegend: true,
  disabled: false,
  incrementIcon: 'blrPlus',
  decrementIcon: 'blrMinus',
  onChange: () => null,
};

describe('blr-range-slider', () => {
  it('is having a slider containing the right className', async () => {
    const element = await fixture(BlrRangeLegendSliderRenderFunction(sampleParams));
    const inputWrapper = querySelectorDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const inputElement = querySelectorDeep('input', inputWrapper?.getRootNode() as HTMLElement);

    const className = inputElement?.className;
    const idName = inputElement?.id;

    expect(className).to.contain('range');
    expect(idName).to.contain('range-cmpt');
  });

  it('is not having a legends', async () => {
    const element = await fixture(
      BlrRangeLegendSliderRenderFunction({
        ...sampleParams,
        showLegend: false,
      })
    );

    const inputWrapper = querySelectorDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const inlineLegendClassElement = querySelectorDeep('.legend-wrapper', inputWrapper?.getRootNode() as HTMLElement);

    // Check if the <p> element exists
    expect(inlineLegendClassElement).not.exist;
  });

  it('is having a legend values correctly', async () => {
    const list = ['100 $', '200 $', '300 $', '400 $', '500 $', '600 $'];

    const element = await fixture(
      BlrRangeLegendSliderRenderFunction({
        ...sampleParams,
        initialValue: '300 $',
      })
    );

    const inputWrapper = querySelectorDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const legendWrapper = querySelectorAllDeep('p.range__numbers', inputWrapper?.getRootNode() as HTMLElement);

    const inlineLegendElements = [];

    for (let i = 0; i < legendWrapper.length; i++) {
      const wrapperElement = legendWrapper[i];
      const rootNode = wrapperElement.getRootNode() as HTMLElement;

      const inlineLegendClassElements = querySelectorAllDeep('.range__point', rootNode);

      inlineLegendElements.push(...inlineLegendClassElements);
    }

    inlineLegendElements.forEach((inlineLegendElement, j) => {
      expect(inlineLegendElement).to.exist;
      expect(inlineLegendElement).shadowDom.to.equal(list[j]);
    });
  });
});
