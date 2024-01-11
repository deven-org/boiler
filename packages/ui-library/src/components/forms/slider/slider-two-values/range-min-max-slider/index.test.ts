import { BlrRangeMinMaxSliderRenderFunction } from '@boiler/ui-library/dist/';
import type { BlrRangeMinMaxSliderType } from '@boiler/ui-library/dist/';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep, querySelectorAllDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrRangeMinMaxSliderType = {
  theme: 'Light',
  rangeInputId: 'range-cmpt',
  startValue: 80,
  endValue: 85,
  minValue: 75,
  maxValue: 130,
  units: '$',
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
    const element = await fixture(BlrRangeMinMaxSliderRenderFunction(sampleParams));
    const inputWrapper = querySelectorDeep('.range-wrapper', element.getRootNode() as HTMLElement);
    const textarea = querySelectorDeep('input', inputWrapper?.getRootNode() as HTMLElement);
    const className = textarea?.className;

    expect(className).to.contain('range');
  });

  it('should find two slider for min & max', async () => {
    const element = await fixture(
      BlrRangeMinMaxSliderRenderFunction({
        ...sampleParams,
        rangeInputId: 'range-cmpt',
        startValue: 80,
        endValue: 85,
        minValue: 75,
        maxValue: 130,
        disabled: false,
      })
    );
    const inputWrapper = querySelectorDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const rangeWrapper = querySelectorAllDeep('.range-wrapper', inputWrapper?.getRootNode() as HTMLElement);

    const inputElements = [];

    for (let i = 0; i < rangeWrapper.length; i++) {
      const wrapperElement = rangeWrapper[i];
      const rootNode = wrapperElement.getRootNode() as HTMLElement;
      const inputClassElements = querySelectorAllDeep('.range', rootNode);
      inputElements.push(...inputClassElements);
    }
    inputElements.forEach((inputElement, j) => {
      expect(inputElement).to.exist;
      expect(inputElement).to.have.attr('id', `range-cmpt-${j + 1}`);
    });
  });

  it('should find all buttons for with min & max', async () => {
    const element = await fixture(
      BlrRangeMinMaxSliderRenderFunction({
        ...sampleParams,
        rangeInputId: 'range-cmpt',
        startValue: 80,
        endValue: 85,
        minValue: 75,
        maxValue: 130,
        disabled: false,
      })
    );
    const inputWrapper = querySelectorAllDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const expectedLabels = ['inc_btn_min', 'dec_btn_min', 'inc_btn_max', 'dec_btn_max'];

    const inlineButtonElements = [];

    for (let i = 0; i < inputWrapper.length; i++) {
      const wrapperElement = inputWrapper[i];
      const rootNode = wrapperElement.getRootNode() as HTMLElement;

      const inlineButtonClassElements = querySelectorAllDeep('.blr-icon-button', rootNode);

      // Push the found .inline-legend elements into the array
      inlineButtonElements.push(...inlineButtonClassElements);
    }

    // Process the collected inlineLegendElements array
    inlineButtonElements.forEach((inlineButtonElement, j) => {
      const expectedValue = expectedLabels[j];

      expect(inlineButtonElement).to.exist;
      expect(inlineButtonElement).to.have.attr('aria-label', expectedValue);
    });
  });
});
