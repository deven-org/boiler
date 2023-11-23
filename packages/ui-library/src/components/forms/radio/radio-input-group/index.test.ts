import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { BlrRadioGroupType, BlrRadioGroupRenderFunction } from './index';

const sampleParams: BlrRadioGroupType = {
  theme: 'Light',
  disabled: false,
  name: 'Default Name',
  required: false,
  readonly: false,
  options: [
    { label: 'Multi-line option 1', value: 'option1', hintMessage: 'Hint 1', errorMessage: 'Error Message 1' },
    { label: 'Option 2', value: 'option2', hintMessage: 'Hint 2', errorMessage: 'Error Message 2' },
    { label: 'Option 3', value: 'option3', hintMessage: 'Hint 3', errorMessage: 'Error Message 3' },
  ],
  layout: 'horizontal',
  showLegend: true,
  showHint: true,
  groupHintMessage: 'This is a sample hint message',
  hintIcon: 'blrInfo',
  hasError: false,
  groupErrorMessage: '',
  groupErrorIcon: undefined,
  hideLabel: false,
  showGroupErrorMessage: false,
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
    const element = await fixture(BlrRadioGroupRenderFunction({ ...sampleParams, size: 'sm' }));

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

  it('has vertical layout if layout is vertical', async () => {
    const element = await fixture(
      BlrRadioGroupRenderFunction({
        ...sampleParams,
        layout: 'vertical',
      })
    );

    const radioGroup = querySelectorDeep('input[type="radio"]', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('vertical');
  });

  it('has vertical layout if layout is horizontal', async () => {
    const element = await fixture(
      BlrRadioGroupRenderFunction({
        ...sampleParams,
        layout: 'horizontal',
      })
    );

    const radioGroup = querySelectorDeep('input[type="radio"]', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('horizontal');
  });
});
