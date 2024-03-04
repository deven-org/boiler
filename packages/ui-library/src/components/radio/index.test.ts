import '@boiler/ui-library/dist/';

import { BlrRadioRenderFunction, RadioTagName } from './renderFunction';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';
import { BlrRadioType } from '.';
import { FormCaptionTagName } from '../form-caption/renderFunction';

const sampleParams: BlrRadioType = {
  checked: false,
  disabled: false,
  name: 'Default Name',
  optionId: 'testId',
  label: 'harald',
  required: false,
  readonly: false,
  hasHint: true,
  hasError: false,
  theme: 'Light',
};

describe(`${RadioTagName}`, () => {
  it('is having a radio containing the right className', async () => {
    const element = await fixture(BlrRadioRenderFunction(sampleParams));

    const radio = querySelectorDeep('input[type="radio"]', element.getRootNode() as HTMLElement);
    const className = radio?.className;

    expect(className).to.contain('input-control');
  });

  it('is shows adjacent caption components in caption group slot', async () => {
    const element = await fixture(
      BlrRadioRenderFunction({
        ...sampleParams,
        hasHint: true,
        hintIcon: 'blrInfo',
        hasError: true,
        errorIcon: 'blrErrorFilled',
      })
    );

    const labelWrapper = querySelectorDeep('.label-wrapper', element.getRootNode() as HTMLElement);
    const captionWrapper = querySelectorDeep('.caption-wraper', labelWrapper?.getRootNode() as HTMLElement);
    const formCaptions = querySelectorAllDeep(`${FormCaptionTagName}`, captionWrapper?.getRootNode() as HTMLElement);

    const formCaptionHint = querySelectorDeep('.blr-form-caption', formCaptions[0] as HTMLElement);
    const hintClassName = formCaptionHint?.className;

    const formCaptionError = querySelectorDeep('.blr-form-caption', formCaptions[1] as HTMLElement);
    const errorClassName = formCaptionError?.className;

    expect(hintClassName).to.contain('hint');
    expect(errorClassName).to.contain('error');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrRadioRenderFunction(sampleParams));

    const radioGroup = querySelectorDeep('.blr-radio', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrRadioRenderFunction({ ...sampleParams, size: 'sm' }));

    const radioGroup = querySelectorDeep('.blr-radio', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('sm');
  });

  it('has a error state if hasError is true', async () => {
    const element = await fixture(
      BlrRadioRenderFunction({
        ...sampleParams,
        hasError: true,
      })
    );

    const radio = querySelectorDeep('input[type="radio"]', element.getRootNode() as HTMLElement);
    const className = radio?.className;

    expect(className).to.contain('error');
  });

  it('does not have a error state if hasError is false', async () => {
    const element = await fixture(
      BlrRadioRenderFunction({
        ...sampleParams,
        hasError: false,
      })
    );

    const radio = querySelectorDeep('input[type="radio"]', element.getRootNode() as HTMLElement);
    const className = radio?.className;

    expect(className).not.to.contain('error');
  });
});
