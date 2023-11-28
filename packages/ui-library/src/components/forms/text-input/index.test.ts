import { BlrTextInputRenderFunction, BlrTextInputType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { getRandomString } from '../../../utils/get-random.string';

const sampleParams: BlrTextInputType = {
  theme: 'Light',
  size: 'md',
  type: 'text',
  placeholder: 'Placeholder-text',
  value: '',
  maxLength: 200,
  hasLabel: true,
  label: 'Label',
  labelAppendix: '(Appendix)',
  showInputIcon: true,
  inputIcon: 'blr360',
  showHint: false,
  hintText: 'This is a small hint message',
  hintIcon: 'blrInfo',
  disabled: false,
  readonly: false,
  required: false,
  hasError: false,
  errorMessage: '',
  errorIcon: 'blrInfo',
  arialabel: 'TextInput',
  textInputId: 'Input Id',
  name: 'TextInput',
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

  it('has a size md by default', async () => {
    const element = await fixture(BlrTextInputRenderFunction(sampleParams));

    const inputWrapper = querySelectorDeep('.blr-input-wrapper', element.getRootNode() as HTMLElement);
    const className = inputWrapper?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrTextInputRenderFunction({ ...sampleParams, size: 'sm' }));

    const inputWrapper = querySelectorDeep('.blr-input-wrapper', element.getRootNode() as HTMLElement);
    const className = inputWrapper?.className;

    expect(className).to.contain('sm');
  });

  it('has a label if hasLabel is true', async () => {
    const element = await fixture(
      BlrTextInputRenderFunction({
        ...sampleParams,
        hasLabel: true,
      })
    );

    const textInput = querySelectorDeep('.blr-text-input', element.getRootNode() as HTMLElement);
    const label = querySelectorDeep('.blr-form-label', textInput?.getRootNode() as HTMLElement);
    expect(label).to.exist;
  });

  it('does not have a label if hasLabel is false', async () => {
    const element = await fixture(
      BlrTextInputRenderFunction({
        ...sampleParams,
        hasLabel: false,
      })
    );

    const textInput = querySelectorDeep('.blr-text-input', element.getRootNode() as HTMLElement);
    const label = querySelectorDeep('.blr-form-label', textInput?.getRootNode() as HTMLElement);
    expect(label).not.to.exist;
  });
});
