import { BlrCheckboxType, BlrCheckboxRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrCheckboxType = {
  label: 'Checkbox Option',
  checkInputId: 'Checky',
  disabled: false,
  checked: false,
  indeterminate: false,
  readonly: false,
  hasError: false,
  size: 'md',
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


  it('is shows adjacent caption components in caption group slot', async () => {
    const element = await fixture(
      BlrCheckboxRenderFunction({
        ...sampleParams,
        showHint: true,
        hintIcon: 'blrInfo',
        hasError: true,
        errorIcon: 'blrErrorFilled',
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
});
