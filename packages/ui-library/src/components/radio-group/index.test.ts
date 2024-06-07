import '@boiler/ui-library/dist/';

import { BlrRadioGroupRenderFunction } from './renderFunction';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { BlrRadioGroupType } from '.';
import { PropertyValueMap } from 'lit';

const sampleParams: BlrRadioGroupType = {
  theme: 'Light',
  sizeVariant: 'md',
  disabled: false,
  name: 'Default Name',
  required: false,
  readonly: false,
  options: [
    { label: 'Multi-line option 1', value: 'option1', hintMessage: 'Hint 1', errorMessage: 'Error Message 1' },
    { label: 'Option 2', value: 'option2', hintMessage: 'Hint 2', errorMessage: 'Error Message 2' },
    { label: 'Option 3', value: 'option3', hintMessage: 'Hint 3', errorMessage: 'Error Message 3' },
  ],
  hasHint: true,
  groupHintMessage: 'This is a sample hint message',
  groupHintMessageIcon: 'blrInfo',
  hasError: false,
  groupErrorMessage: '',
  groupErrorMessageIcon: undefined,
  direction: 'horizontal',
  checked: false,
  hasLegend: false,
  legend: '',
  willUpdate: function (changedProperties: PropertyValueMap<any> | Map<PropertyKey, unknown>): void {
    throw new Error('Function not implemented.');
  },
};

describe('blr-radio-group', () => {
  it('is having a radioGroup containing the right className', async () => {
    const element = await fixture(BlrRadioGroupRenderFunction(sampleParams));

    const radioGroup = querySelectorDeep('input[type="radio"]', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('input-control');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrRadioGroupRenderFunction(sampleParams));

    const radioGroup = querySelectorDeep('.blr-radio-group', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrRadioGroupRenderFunction({ ...sampleParams, sizeVariant: 'sm' }));

    const radioGroup = querySelectorDeep('.blr-radio-group', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('sm');
  });

  it('has a error state if hasError is true', async () => {
    const element = await fixture(
      BlrRadioGroupRenderFunction({
        ...sampleParams,
        hasError: true,
      })
    );

    const radioGroup = querySelectorDeep('input[type="radio"]', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('error');
  });

  it('does not have a error state if hasError is false', async () => {
    const element = await fixture(
      BlrRadioGroupRenderFunction({
        ...sampleParams,
        hasError: false,
      })
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
      })
    );

    const labelWrapper = querySelectorDeep('.label-wrapper', element.getRootNode() as HTMLElement);
    const captionWrapper = querySelectorDeep('.caption-wraper', labelWrapper?.getRootNode() as HTMLElement);
    const formCaption = querySelectorDeep('.blr-form-caption', captionWrapper?.getRootNode() as HTMLElement);
    const errorMessageIcon = querySelectorDeep('blr-icon', formCaption?.getRootNode() as HTMLElement);
    expect(errorMessageIcon).to.not.exist;
  });
});
