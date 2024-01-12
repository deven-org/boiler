import { BlrSelectRenderFunction } from '@boiler/ui-library/dist/';
import type { BlrSelectType } from '@boiler/ui-library/dist/';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrSelectType = {
  name: 'Text Input',
  label: 'Label',
  labelAppendix: '(Optional)',
  size: 'md',
  errorMessage: 'This is error message',
  hasHint: true,
  hintMessage: 'Field is used for hint',
  hintIcon: 'blrInfo',
  selectId: 'Peter',
  errorIcon: 'blrErrorFilled',

  /*
  options: [
    { value: 'uschi', label: 'Uschi', disabled: true },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', selected: true },
    { value: 'dieter', label: 'Dieter' },
  ],
  */
  theme: 'Light',
};

describe('blr-select', () => {
  it('is having a select containing the right className', async () => {
    const element = await fixture(BlrSelectRenderFunction(sampleParams));

    const select = querySelectorDeep('select', element.getRootNode() as HTMLElement);
    const className = select?.className;

    expect(className).to.contain('blr-form-select');
  });

  it('is shows adjacent caption components in caption group slot', async () => {
    const element = await fixture(
      BlrSelectRenderFunction({
        ...sampleParams,
        hasHint: true,
        hintIcon: 'blrInfo',
        hasError: true,
        errorIcon: 'blrErrorFilled',
      })
    );

    const labelWrapper = querySelectorDeep('.label-wrapper', element.getRootNode() as HTMLElement);
    const captionWrapper = querySelectorDeep('.caption-wraper', labelWrapper?.getRootNode() as HTMLElement);
    const formCaptions = querySelectorAllDeep('blr-form-caption', captionWrapper?.getRootNode() as HTMLElement);

    const formCaptionHint = querySelectorDeep('.blr-form-caption', formCaptions[0] as HTMLElement);
    const hintClassName = formCaptionHint?.className;

    const formCaptionError = querySelectorDeep('.blr-form-caption', formCaptions[1] as HTMLElement);
    const errorClassName = formCaptionError?.className;

    expect(hintClassName).to.contain('hint');
    expect(errorClassName).to.contain('error');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrSelectRenderFunction(sampleParams));

    const selectWrapper = querySelectorDeep('.blr-select-wrapper', element.getRootNode() as HTMLElement);
    const className = selectWrapper?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrSelectRenderFunction({ ...sampleParams, size: 'sm' }));

    const selectWrapper = querySelectorDeep('.blr-select-wrapper', element.getRootNode() as HTMLElement);
    const className = selectWrapper?.className;

    expect(className).to.contain('sm');
  });
});
