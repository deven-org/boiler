import { BlrNumberInputRenderFunction, BlrNumberInputType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { getRandomString } from '../../utils/get-random.string';

const sampleParams: BlrNumberInputType = {
  placeholder: 'Type your message here ..',
  disabled: false,
  variant: 'mode1',
  theme: 'Light',
  size: 'sm',
  readonly: true,
  required: true,
  hasLabel: true,
  hasError: true,
  labelAppendix: 'label appendix',
  numberInputId: 'egal',
  label: 'Hello',
  showHint: false,
  hintIcon: 'blr360Lg',
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
});
