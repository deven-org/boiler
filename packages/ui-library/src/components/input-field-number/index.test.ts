import '@boiler/ui-library';

import { BlrInputFieldNumberRenderFunction } from './renderFunction.js';
import type { BlrInputFieldNumberType } from './index.js';

import { aTimeout, fixture, expect, oneEvent } from '@open-wc/testing';
import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';
import { getRandomString } from '../../utils/get-random.string.js';
import { BlrFocusEvent } from '../../globals/events.js';
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';

const sampleParams: BlrInputFieldNumberType = {
  placeholder: 'Type your message here ..',
  disabled: false,
  stepperVariant: 'vertical',
  theme: Themes[0],
  readonly: true,
  required: true,
  hasLabel: true,
  hasError: true,
  labelAppendix: 'label appendix',
  inputFieldNumberId: 'egal',
  label: 'Hello',
  hasHint: false,
  hintMessage: 'This is a sample hint',
  hintMessageIcon: 'blr360',
  errorMessageIcon: 'blrInfo',
  errorMessage: "OMG it's an error",
  value: 4,
  unit: 'gr',
  decimals: 0,
  leadingZeros: 0,
  stepIncreaseAriaLabel: '+',
  stepDecreaseAriaLabel: '\u2212',
};

describe('blr-input-field-number', () => {
  it('input is of type "number"', async () => {
    const element = await fixture(BlrInputFieldNumberRenderFunction(sampleParams));

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const type = input?.type;

    expect(type).to.be.equal('number');
  });

  it('is showing random placeholder', async () => {
    const randomString = getRandomString();

    const element = await fixture(
      BlrInputFieldNumberRenderFunction({
        ...sampleParams,
        placeholder: randomString,
      }),
    );

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const placeholder = input?.getAttribute('placeholder');

    expect(placeholder).to.be.equal(randomString);
  });

  it('is showing the stepper when unit is undefined and readonly is true', async () => {
    const className = 'custom-stepper-button';

    const element = await fixture(
      BlrInputFieldNumberRenderFunction({
        ...sampleParams,
        unit: undefined,
      }),
    );

    const button = querySelectorDeep('button', element.getRootNode() as HTMLElement);
    const classNames = button?.getAttribute('class');

    expect(classNames).to.include(className);
  });

  it('is shows adjacent caption components in caption group slot', async () => {
    const element = await fixture(
      BlrInputFieldNumberRenderFunction({
        ...sampleParams,
        hasHint: true,
        hintMessageIcon: 'blrInfo',
        hasError: true,
        errorMessageIcon: 'blrErrorFilled',
      }),
    );

    const captionWrapper = querySelectorDeep('blr-input-field-number', element.getRootNode() as HTMLElement);
    const formCaptions = querySelectorAllDeep('blr-form-caption', captionWrapper?.getRootNode() as HTMLElement);
    const formCaptionHint = querySelectorDeep('.blr-form-caption', formCaptions[0] as HTMLElement);
    const hintClassName = formCaptionHint?.className;

    const formCaptionError = querySelectorDeep('.blr-form-caption', formCaptions[1] as HTMLElement);
    const errorClassName = formCaptionError?.className;

    expect(hintClassName).to.contain('hint');
    expect(errorClassName).to.contain('error');
  });

  it('has error Icon set to undefined', async () => {
    const element = await fixture(
      BlrInputFieldNumberRenderFunction({
        ...sampleParams,
        hasError: true,
        errorMessage: 'error',
        errorMessageIcon: undefined,
      }),
    );

    const formCaption = querySelectorDeep('.blr-form-caption', element?.getRootNode() as HTMLElement);
    const errorIcon = querySelectorDeep('blr-icon', formCaption?.getRootNode() as HTMLElement);
    expect(errorIcon).to.not.exist;
  });

  it('has a sizeVariant md by default', async () => {
    const element = await fixture(BlrInputFieldNumberRenderFunction(sampleParams));

    const inputFieldNumberWrapper = querySelectorDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const className = inputFieldNumberWrapper?.className;

    expect(className).to.contain('md');
  });

  it('has a sizeVariant sm when "sizeVariant" is set to "sm" ', async () => {
    const element = await fixture(BlrInputFieldNumberRenderFunction({ ...sampleParams, sizeVariant: 'sm' }));

    const inputFieldNumberWrapper = querySelectorDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const className = inputFieldNumberWrapper?.className;

    expect(className).to.contain('sm');
  });

  it('correctly formats the value when leading zeros are set', async () => {
    const element = await fixture(BlrInputFieldNumberRenderFunction({ ...sampleParams, leadingZeros: 2 }));

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const numberValue = input?.value;

    expect(numberValue).to.be.equal('004');
  });

  it('correctly formats the value when decimal places are set', async () => {
    const element = await fixture(BlrInputFieldNumberRenderFunction({ ...sampleParams, decimals: 2 }));

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const numberValue = input?.value;

    expect(numberValue).to.be.equal('4.00');
  });

  for (const stepperVariant of ['split', 'horizontal', 'vertical'] as const) {
    it(`has functional stepper buttons with aria labels - stepperVariant="${stepperVariant}"`, async function () {
      this.timeout(10000);

      const className = 'custom-stepper-button';
      const stepIncreaseAriaLabel = 'INC';
      const stepDecreaseAriaLabel = 'DEC';
      const step = 5;

      const element = await fixture(
        BlrInputFieldNumberRenderFunction({
          ...sampleParams,
          stepperVariant,
          stepIncreaseAriaLabel,
          stepDecreaseAriaLabel,
          step,
          value: 1,
        }),
      );

      const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
      expect(input?.value).to.be.equal('1');
      if (!input) throw new Error('Input element not found');

      const incQuery = `button.${className}[aria-label="${stepIncreaseAriaLabel}"]`;
      const incButtons = querySelectorAllDeep(incQuery, element.getRootNode() as HTMLElement);
      expect(incButtons.length).to.be.equal(1);
      const incButton = incButtons[0];
      if (!incButton) throw new Error('Increase button not found');

      incButton.click();
      await aTimeout(100);
      expect(input.value).to.be.equal('6');

      const decQuery = `button.${className}[aria-label="${stepDecreaseAriaLabel}"]`;
      const decButtons = querySelectorAllDeep(decQuery, element.getRootNode() as HTMLElement);
      expect(decButtons.length).to.be.equal(1);
      const decButton = decButtons[0];
      if (!decButton) throw new Error('Decrease button not found');

      decButton.click();
      await aTimeout(100);
      expect(input.value).to.be.equal('1');
    });
  }

  it('fires blrFocus and blrBlur events', async function () {
    this.timeout(10000);

    const element = await fixture(
      BlrInputFieldNumberRenderFunction({
        ...sampleParams,
      }),
    );

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    if (!input) throw new Error('Input element not found');

    const focusEvent = new Event('focus', { bubbles: true });
    const focusPromise = oneEvent(element, 'blrFocus');
    input.dispatchEvent(focusEvent);
    const focusResult: BlrFocusEvent = await focusPromise;
    expect(focusResult.detail.originalEvent).to.exist;

    const stepper = querySelectorDeep('button', element.getRootNode() as HTMLElement);
    if (!stepper) throw new Error('Stepper button not found');

    const blurEvent = new Event('blur', { bubbles: true });
    const blurPromise = oneEvent(element, 'blrBlur');
    input.dispatchEvent(blurEvent);
    const blurResult: BlrFocusEvent = await blurPromise;
    expect(blurResult.detail.originalEvent).to.exist;
  });
});
