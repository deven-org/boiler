import '@boiler/ui-library/dist/';

import { BlrRangeSliderRenderFunction } from './renderFunction';
import type { BlrRangeSliderType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep, querySelectorAllDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrRangeSliderType = {
  theme: 'Light',
  rangeInputId: 'range-id',
  initialValue: 80,
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
    const element = await fixture(BlrRangeSliderRenderFunction(sampleParams));
    const inputWrapper = querySelectorDeep('.range-wrapper', element.getRootNode() as HTMLElement);
    const textarea = querySelectorDeep('input', inputWrapper?.getRootNode() as HTMLElement);
    const className = textarea?.className;

    expect(className).to.contain('range');
  });

  it('is is disabled when attribute disabled is set', async () => {
    const element = await fixture(
      BlrRangeSliderRenderFunction({
        ...sampleParams,
        disabled: true,
      })
    );

    const textarea = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const disabled = textarea?.getAttribute('disabled');

    // in html disabled will become an empty string when its true
    expect(disabled).to.be.equal('');
  });

  it('is is disabled when attribute disabled is set', async () => {
    const element = await fixture(
      BlrRangeSliderRenderFunction({
        ...sampleParams,
        disabled: false,
      })
    );

    const textarea = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const disabled = textarea?.getAttribute('disabled');

    // in html disabled will become null when its false
    expect(disabled).to.be.equal(null);
  });

  it('is not having a legends', async () => {
    const element = await fixture(
      BlrRangeSliderRenderFunction({
        ...sampleParams,
        showLegend: false,
      })
    );

    const inputWrapper = querySelectorDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const inlineLegendClassElement = querySelectorDeep('.inline-legend', inputWrapper?.getRootNode() as HTMLElement);

    // Check if the <p> element exists
    expect(inlineLegendClassElement).not.exist;
  });

  it('should find all legends with min & max values', async () => {
    const element = await fixture(
      BlrRangeSliderRenderFunction({
        ...sampleParams,
        initialValue: 80,
        minValue: 75,
        maxValue: 130,
        disabled: false,
      })
    );

    const inputWrapper = querySelectorAllDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const expectedLabels = [75, 130];

    const inlineLegendElements = [];

    for (let i = 0; i < inputWrapper.length; i++) {
      const wrapperElement = inputWrapper[i];
      const rootNode = wrapperElement.getRootNode() as HTMLElement;

      const inlineLegendClassElements = querySelectorAllDeep('.inline-legend', rootNode);

      // Push the found .inline-legend elements into the array
      inlineLegendElements.push(...inlineLegendClassElements);
    }

    // Process the collected inlineLegendElements array
    inlineLegendElements.forEach((inlineLegendElement, j) => {
      // Assuming that the text content of .inline-legend elements is the expected value
      const expectedValue = expectedLabels[j];

      // Assert that the expected value exists in the text content of the element
      expect(inlineLegendElement).to.exist;
      expect(inlineLegendElement).to.have.text(`${expectedValue} $`);
    });
  });

  it('should find all buttons for with min & max', async () => {
    const element = await fixture(
      BlrRangeSliderRenderFunction({
        ...sampleParams,
        initialValue: 80,
        minValue: 75,
        maxValue: 130,
        disabled: false,
      })
    );

    const inputWrapper = querySelectorAllDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const expectedLabels = ['dec_btn', 'inc_btn'];

    const inlineButtonElements = [];

    for (let i = 0; i < inputWrapper.length; i++) {
      const wrapperElement = inputWrapper[i];
      const rootNode = wrapperElement.getRootNode() as HTMLElement;

      const inlineButtonClassElements = querySelectorAllDeep('.blr-button-icon', rootNode);

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
