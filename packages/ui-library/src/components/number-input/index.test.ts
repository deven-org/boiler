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
  numberInputId: 'egal',
  label: 'Hello',
  showHint: false,
  hintIcon: 'blr360Lg',
  numberFormat: '%2.2f',
};

describe('blr-number-input', () => {
  // it('is having a input containing the right className', async () => {
  //   const element = await fixture(BlrNumberInputRenderFunction(sampleParams));
  //
  //   const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
  //   const className = input?.className;
  //
  //   expect(className).to.contain('blr-form-element');
  // });

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
