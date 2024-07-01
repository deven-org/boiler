import '@boiler/ui-library';

import { BlrSelectRenderFunction } from './renderFunction.js';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorAllDeep, querySelectorDeep } from 'query-selector-shadow-dom';
import { html } from 'lit-html';
import { BlrSelectType } from './index.js';

const sampleParams: BlrSelectType = {
  name: 'Input Field Text',
  label: 'Label',
  labelAppendix: '(Optional)',
  sizeVariant: 'md',
  errorMessage: 'This is error message',
  hasHint: true,
  hintMessage: 'Field is used for hint',
  hintMessageIcon: 'blrInfo',
  selectId: 'Peter',
  errorMessageIcon: 'blrErrorFilled',
  theme: 'Light',
};

const optionsAsChildren = html`
  <option value="" label="--Please choose an option--"></option>
  <option value="option1" label="Option 1"></option>
  <option value="option2" label="Option 2"></option>
  <option value="option3" label="Option 3"></option>
  <option value="option4" label="Option 4"></option>
  <option value="option5" label="Option 5"></option>
  <option value="option6" label="Option 6"></option>
`;

describe('blr-select', () => {
  it('is having a select containing the right className', async () => {
    const element = await fixture(BlrSelectRenderFunction(sampleParams, optionsAsChildren));

    const select = querySelectorDeep('select', element.getRootNode() as HTMLElement);
    const className = select?.className;

    expect(className).to.contain('blr-form-select');
  });

  it('is shows adjacent caption components in caption group slot', async () => {
    const element = await fixture(
      BlrSelectRenderFunction({
        ...sampleParams,
        hasHint: true,
        hintMessageIcon: 'blrInfo',
        hasError: true,
        errorMessageIcon: 'blrErrorFilled',
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

  it('has error Icon set to undefined', async () => {
    const element = await fixture(
      BlrSelectRenderFunction({
        ...sampleParams,
        hasHint: false,
        hasError: true,
        errorMessageIcon: undefined,
      })
    );

    const labelWrapper = querySelectorDeep('.label-wrapper', element?.getRootNode() as HTMLElement);
    const captionWrapper = querySelectorDeep('.caption-wraper', labelWrapper?.getRootNode() as HTMLElement);
    const formCaption = querySelectorDeep('.blr-form-caption', captionWrapper?.getRootNode() as HTMLElement);
    const errorIcon = querySelectorDeep('blr-icon', formCaption?.getRootNode() as HTMLElement);
    expect(errorIcon).to.not.exist;
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrSelectRenderFunction(sampleParams));

    const selectWrapper = querySelectorDeep('.blr-select-wrapper', element.getRootNode() as HTMLElement);
    const className = selectWrapper?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrSelectRenderFunction({ ...sampleParams, sizeVariant: 'sm' }));

    const selectWrapper = querySelectorDeep('.blr-select-wrapper', element.getRootNode() as HTMLElement);
    const className = selectWrapper?.className;

    expect(className).to.contain('sm');
  });

  it('is rendering options inside slot', async () => {
    const element = await fixture(BlrSelectRenderFunction({ ...sampleParams, sizeVariant: 'sm' }, optionsAsChildren));
    const options = querySelectorAllDeep('.blr-select-option', element?.getRootNode() as HTMLElement);
    const optionsLength = optionsAsChildren.strings[0].trim().split('</option>').filter(Boolean).length;
    expect(options).to.be.lengthOf(optionsLength);
  });
});
