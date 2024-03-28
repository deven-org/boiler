import '@boiler/ui-library/dist/';

import { BlrCheckboxRenderFunction } from './renderFunction';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';
import type { BlrCheckboxType } from '.';

const sampleParams: BlrCheckboxType = {
  label: 'Checkbox Option',
  checkboxId: 'Checky',
  disabled: false,
  checked: false,
  indeterminate: false,
  readonly: false,
  hasError: false,
  sizeVariant: 'md',
  errorMessage: 'This is a sample error message',
  errorMessageIcon: undefined,
  hasHint: false,
  hintMessage: 'This is a sample hint',
  hintMessageIcon: undefined,
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

  it('is shows adjacent caption components in caption group slot', async () => {
    const element = await fixture(
      BlrCheckboxRenderFunction({
        ...sampleParams,
        hasHint: true,
        hintMessageIcon: 'blrInfo',
        hasError: true,
        errorMessageIcon: 'blrErrorFilled',
      })
    );

    const captionWrapper = querySelectorDeep('.label-wrapper', element.getRootNode() as HTMLElement);
    const formCaptions = querySelectorAllDeep('blr-form-caption', captionWrapper?.getRootNode() as HTMLElement);
    const formCaptionHint = querySelectorDeep('.blr-form-caption', formCaptions[0] as HTMLElement);
    const hintClassName = formCaptionHint?.className;

    const formCaptionError = querySelectorDeep('.blr-form-caption', formCaptions[1] as HTMLElement);
    const errorClassName = formCaptionError?.className;

    expect(hintClassName).to.contain('hint');
    expect(errorClassName).to.contain('error');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrCheckboxRenderFunction(sampleParams));

    const checkbox = querySelectorDeep('div.blr-checkbox', element.getRootNode() as HTMLElement);
    const className = checkbox?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrCheckboxRenderFunction({ ...sampleParams, sizeVariant: 'sm' }));

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
