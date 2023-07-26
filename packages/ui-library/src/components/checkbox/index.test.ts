import { BlrCheckboxType, BlrCheckboxRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrCheckboxType = {
  label: 'Checkbox Option',
  checkInputId: 'Checky',
  disabled: false,
  checked: false,
  indeterminate: false,
  readonly: false,
  hasError: false,
  size: 'md',
  handleChange: () => null,
  errorMessage: 'This is a sample error message',
  errorIcon: undefined,
  showHint: false,
  hintMessage: 'This is a sample hint',
  hintIcon: undefined,
};

describe('blr-checkbox', () => {
  it('is having a checkbox containing the right className', async () => {
    const element = await fixture(BlrCheckboxRenderFunction(sampleParams));

    const checkbox = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const className = checkbox?.className;

    expect(className).to.contain('blr-checkbox-element');
  });
});
