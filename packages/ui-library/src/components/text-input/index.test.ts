import { BlrTextInputRenderFunction, BlrTextInputType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { getRandomString } from '../../utils/get-random.string';

const sampleParams: BlrTextInputType = {
  textInputId: '#1',
  label: 'Label',
  labelAppendix: '(Optional)',
  size: 'md',
  type: 'text',
  value: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  maxLength: 140,
  errorMessage: "OMG it's an error",
  placeholder: 'Type your message here ..',
  hintText: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  hintIcon: 'blrInfoLg',
  showHint: true,
  hasLabel: true,
  showInputIcon: true,
  inputIcon: 'blr360Lg',
  theme: 'Light',
  errorIcon: 'blr360Lg',
};

describe('blr-text-input', () => {
  it('is having a input containing the right className', async () => {
    const element = await fixture(BlrTextInputRenderFunction(sampleParams));

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const className = input?.className;

    expect(className).to.contain('blr-form-input');
  });

  it('is is showing random placeholder', async () => {
    const randomString = getRandomString();

    const element = await fixture(
      BlrTextInputRenderFunction({
        ...sampleParams,
        placeholder: randomString,
      })
    );

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const placeholder = input?.getAttribute('placeholder');

    expect(placeholder).to.be.equal(randomString);
  });

  it('contains an eye icon when the input type is password', async () => {
    const element = await fixture(
      BlrTextInputRenderFunction({
        ...sampleParams,
        type: 'password',
      })
    );

    const textInputContainer = querySelectorDeep('.blr-input-inner-container', element.getRootNode() as HTMLElement);
    const passwordIcon = querySelectorDeep('blr-icon', textInputContainer?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', passwordIcon?.getRootNode() as HTMLElement);

    const rect = svg?.getBoundingClientRect();

    expect(rect).have.property('width');
    expect(rect).have.property('height');

    expect(rect?.width).to.be.greaterThan(0);
    expect(rect?.height).to.be.greaterThan(0);
  });

  it('hides the label when "hasLabel" is false', async () => {
    const element = await fixture(
      BlrTextInputRenderFunction({
        ...sampleParams,
        hasLabel: false,
      })
    );

    const inputContainer = querySelectorDeep('.blr-input', element.getRootNode() as HTMLElement);
    const label = querySelectorDeep('blr-form-label', inputContainer?.getRootNode() as HTMLElement);

    expect(label).to.not.exist;
  });
});
