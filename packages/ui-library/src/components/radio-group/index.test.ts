import '@boiler/ui-library';

import { BlrRadioGroupRenderFunction } from './renderFunction.js';

import { fixture, expect, aTimeout } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { BlrRadioGroupType } from './index.js';
import { html } from 'lit-html';

const sampleParams: BlrRadioGroupType = {
  theme: 'Light',
  sizeVariant: 'md',
  disabled: false,
  name: 'Default Name',
  required: false,
  hasHint: true,
  groupHintMessage: 'This is a sample hint message',
  groupHintMessageIcon: 'blrInfo',
  hasError: false,
  groupErrorMessage: '',
  groupErrorMessageIcon: undefined,
  direction: 'horizontal',
};

const radioButtonsAsChildren = html`
  <blr-radio label="Option 1"></blr-radio>
  <blr-radio label="Option 2"> </blr-radio>
  <blr-radio label="Option 3"> </blr-radio>
  <blr-radio label="Option 4"> </blr-radio>
`;

describe('blr-radio-group', () => {
  it('is having a radioGroup containing the right className', async () => {
    const element = await fixture(BlrRadioGroupRenderFunction(sampleParams, radioButtonsAsChildren));

    const radioGroup = querySelectorDeep('input[type="radio"]', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('input-control');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrRadioGroupRenderFunction(sampleParams, radioButtonsAsChildren));

    const radioGroup = querySelectorDeep('.blr-radio-group', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(
      BlrRadioGroupRenderFunction({ ...sampleParams, sizeVariant: 'sm' }, radioButtonsAsChildren),
    );

    const radioGroup = querySelectorDeep('.blr-radio-group', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('sm');
  });

  it('has a error state if hasError is true', async () => {
    const element = await fixture(
      BlrRadioGroupRenderFunction(
        {
          ...sampleParams,
          hasError: true,
        },
        radioButtonsAsChildren,
      ),
    );

    const radioGroup = querySelectorDeep('input[type="radio"]', element.getRootNode() as HTMLElement);
    await aTimeout(100);
    const className = radioGroup?.className;
    expect(className).to.contain('error');
  });

  it('does not have a error state if hasError is false', async () => {
    const element = await fixture(
      BlrRadioGroupRenderFunction(
        {
          ...sampleParams,
          hasError: false,
        },
        radioButtonsAsChildren,
      ),
    );

    const radioGroup = querySelectorDeep('input[type="radio"]', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).not.to.contain('error');
  });

  it('has error Icon set to undefined', async () => {
    const element = await fixture(
      BlrRadioGroupRenderFunction({
        ...sampleParams,
        hasHint: false,
        hasError: true,
        errorIcon: undefined,
      }),
    );

    const labelWrapper = querySelectorDeep('.label-wrapper', element.getRootNode() as HTMLElement);
    const captionWrapper = querySelectorDeep('.caption-wraper', labelWrapper?.getRootNode() as HTMLElement);
    const formCaption = querySelectorDeep('.blr-form-caption', captionWrapper?.getRootNode() as HTMLElement);
    const errorMessageIcon = querySelectorDeep('blr-icon', formCaption?.getRootNode() as HTMLElement);
    expect(errorMessageIcon).to.not.exist;
  });
});
