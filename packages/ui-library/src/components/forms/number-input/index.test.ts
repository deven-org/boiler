import { BlrNumberInputRenderFunction, BlrNumberInputType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';
import { getRandomString } from '../../../utils/get-random.string';

const sampleParams: BlrNumberInputType = {
  placeholder: 'Type your message here ..',
  disabled: false,
  variant: 'mode1',
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
  fractionDigits: 0,
  totalDigits: 0,
};

describe('blr-number-input', () => {
  it('input is of type "number"', async () => {
    const element = await fixture(BlrNumberInputRenderFunction(sampleParams));

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const type = input?.type;

    expect(type).to.be.equal('number');
  });

  it('is is showing random placeholder', async () => {
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

  it('has a size md by default', async () => {
    const element = await fixture(BlrNumberInputRenderFunction(sampleParams));

    const numberInputWrapper = querySelectorDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const className = numberInputWrapper?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrNumberInputRenderFunction({ ...sampleParams, size: 'sm' }));

    const numberInputWrapper = querySelectorDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const className = numberInputWrapper?.className;

    expect(className).to.contain('sm');
  });
});
