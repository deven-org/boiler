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
  theme: 'Light',
  hasLabel: true,
};

describe('blr-checkbox', () => {
  it('is having a checkbox containing the right className', async () => {
    const element = await fixture(BlrCheckboxRenderFunction(sampleParams));

    const checkbox = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const className = checkbox?.className;

    expect(className).to.contain('input-control');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrCheckboxRenderFunction(sampleParams));

    const checkbox = querySelectorDeep('div.blr-checkbox', element.getRootNode() as HTMLElement);
    const className = checkbox?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrCheckboxRenderFunction({ ...sampleParams, size: 'sm' }));

    const checkbox = querySelectorDeep('div.blr-checkbox', element.getRootNode() as HTMLElement);
    const className = checkbox?.className;

    expect(className).to.contain('sm');
  });

  it('has a error state if hasError is true', async () => {
    const element = await fixture(
      BlrCheckboxRenderFunction({
        ...sampleParams,
        hasError: true,
      })
    );

    const checkbox = querySelectorDeep('div.blr-checkbox', element.getRootNode() as HTMLElement);
    const className = checkbox?.className;

    expect(className).to.contain('error');
  });

  it('does not have a error state if hasError is false', async () => {
    const element = await fixture(
      BlrCheckboxRenderFunction({
        ...sampleParams,
        hasError: false,
      })
    );

    const checkbox = querySelectorDeep('div.blr-checkbox', element.getRootNode() as HTMLElement);
    const className = checkbox?.className;

    expect(className).not.to.contain('error');
  });
});
