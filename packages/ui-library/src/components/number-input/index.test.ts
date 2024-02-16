import '@boiler/ui-library/dist/';

import { BlrNumberInputRenderFunction } from './renderFunction';
import type { BlrNumberInputType } from '.';

import { fixture, expect, nextFrame, oneEvent } from '@open-wc/testing';
import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';
import { getRandomString } from '../../utils/get-random.string';
import { BlrFocusEvent } from '../../globals/events';

const sampleParams: BlrNumberInputType = {
  placeholder: 'Type your message here ..',
  disabled: false,
  stepperVariant: 'vertical',
  theme: 'Light',
  readonly: true,
  required: true,
  hasLabel: true,
  hasError: true,
  labelAppendix: 'label appendix',
  numberInputId: 'egal',
  label: 'Hello',
  hasHint: false,
  hintIcon: 'blr360',
  errorIcon: 'blrInfo',
  value: 4,
  unit: 'gr',
  decimals: 0,
  leadingZeros: 0,
  stepIncreaseAriaLabel: '+',
  stepDecreaseAriaLabel: '\u2212',
};

describe('blr-number-input', () => {
  it('input is of type "number"', async () => {
    const element = await fixture(BlrNumberInputRenderFunction(sampleParams));

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const type = input?.type;

    expect(type).to.be.equal('number');
  });

  it('is showing random placeholder', async () => {
    const randomString = getRandomString();

    const element = await fixture(
      BlrNumberInputRenderFunction({
        ...sampleParams,
        placeholder: randomString,
      })
    );

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const placeholder = input?.getAttribute('placeholder');

    expect(placeholder).to.be.equal(randomString);
  });

  it('is showing the stepper when unit is undefined and readonly is true', async () => {
    const className = 'custom-stepper-button';

    const element = await fixture(
      BlrNumberInputRenderFunction({
        ...sampleParams,
        unit: undefined,
      })
    );

    const button = querySelectorDeep('button', element.getRootNode() as HTMLElement);
    const classNames = button?.getAttribute('class');

    expect(classNames).to.include(className);
  });

  it('is shows adjacent caption components in caption group slot', async () => {
    const element = await fixture(
      BlrNumberInputRenderFunction({
        ...sampleParams,
        hasHint: true,
        hintIcon: 'blrInfo',
        hasError: true,
        errorIcon: 'blrErrorFilled',
      })
    );

    const captionWrapper = querySelectorDeep('blr-number-input', element.getRootNode() as HTMLElement);
    const formCaptions = querySelectorAllDeep('blr-form-caption', captionWrapper?.getRootNode() as HTMLElement);
    const formCaptionHint = querySelectorDeep('.blr-form-caption', formCaptions[0] as HTMLElement);
    const hintClassName = formCaptionHint?.className;

    const formCaptionError = querySelectorDeep('.blr-form-caption', formCaptions[1] as HTMLElement);
    const errorClassName = formCaptionError?.className;

    expect(hintClassName).to.contain('hint');
    expect(errorClassName).to.contain('error');
  });

  it('has a sizeVariant md by default', async () => {
    const element = await fixture(BlrNumberInputRenderFunction(sampleParams));

    const numberInputWrapper = querySelectorDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const className = numberInputWrapper?.className;

    expect(className).to.contain('md');
  });

  it('has a sizeVariant sm when "sizeVariant" is set to "sm" ', async () => {
    const element = await fixture(BlrNumberInputRenderFunction({ ...sampleParams, sizeVariant: 'sm' }));

    const numberInputWrapper = querySelectorDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const className = numberInputWrapper?.className;

    expect(className).to.contain('sm');
  });

  it('correctly formats the value when leading zeros are set', async () => {
    const element = await fixture(BlrNumberInputRenderFunction({ ...sampleParams, leadingZeros: 2 }));

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const numberValue = input?.value;

    expect(numberValue).to.be.equal('004');
  });

  it('correctly formats the value when decimal places are set', async () => {
    const element = await fixture(BlrNumberInputRenderFunction({ ...sampleParams, decimals: 2 }));

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const numberValue = input?.value;

    expect(numberValue).to.be.equal('4.00');
  });

  for (const stepperVariant of ['split', 'horizontal', 'vertical'] as const) {
    it(`has functional stepper buttons with aria labels - stepperVariant="${stepperVariant}"`, async () => {
      const className = 'custom-stepper-button';
      const stepIncreaseAriaLabel = 'INC';
      const stepDecreaseAriaLabel = 'DEC';
      const step = 5;

      const element = await fixture(
        BlrNumberInputRenderFunction({
          ...sampleParams,
          stepperVariant,
          stepIncreaseAriaLabel,
          stepDecreaseAriaLabel,
          step,
          value: 1,
        })
      );

      const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
      expect(input?.value).to.be.equal('1');
      // We have an initialized input at a chosen value of 1

      const incQuery = `button.${className}[aria-label="${stepIncreaseAriaLabel}"]`;
      const incButtons = querySelectorAllDeep(incQuery, element.getRootNode() as HTMLElement);
      expect(incButtons.length).to.be.equal(1);
      const incButton = incButtons[0];
      // We have exactly 1 stepper button that has our chosen increase aria label

      incButton.click();
      await nextFrame();
      expect(input?.value).to.be.equal('6');
      // Clicking the stepper button with the increase label increases the value by our chosen step (1 + 5 = 6)

      const decQuery = `button.${className}[aria-label="${stepDecreaseAriaLabel}"]`;
      const decButtons = querySelectorAllDeep(decQuery, element.getRootNode() as HTMLElement);
      expect(decButtons.length).to.be.equal(1);
      const decButton = decButtons[0];
      // We have exactly 1 stepper button that has our chosen decrease aria label

      decButton.click();
      await nextFrame();
      expect(input?.value).to.be.equal('1');
      // Clicking the stepper button with the decrease label decreases the value by our chosen step (6 - 5 = 1)
    });
  }

  it('fires blrFocus and blrBlur events', async () => {
    const element = await fixture(
      BlrNumberInputRenderFunction({
        ...sampleParams,
      })
    );

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);

    setTimeout(() => {
      input!.focus();
    });
    const focusEvent: BlrFocusEvent = await oneEvent(element, 'blrFocus');
    expect(focusEvent.detail.originalEvent).to.exist;

    // just finding something else to focus instead, it's not important what
    const stepper = querySelectorDeep('button', element.getRootNode() as HTMLElement);

    setTimeout(() => {
      stepper!.focus();
    });
    const blurEvent: BlrFocusEvent = await oneEvent(element, 'blrBlur');
    expect(blurEvent.detail.originalEvent).to.exist;
  });
});
