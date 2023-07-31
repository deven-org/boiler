import { BlrRadioType, BlrRadioRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrRadioType = {
  checked: false,
  disabled: false,
  name: 'Default Name',
  required: false,
  readonly: false,
  size: 'md',
  option: {
    label: 'Option 1',
    value: 'option1',
    hintMessage: 'This is a sample hint message',
    checked: true,
    errorMessage: 'This is a sample error message',
  },
  showHint: true,
  hasError: false,
  theme: 'Light',
};

describe('blr-radio', () => {
  it('is having a radio containing the right className', async () => {
    const element = await fixture(BlrRadioRenderFunction(sampleParams));

    const radio = querySelectorDeep('input[type="radio"]', element.getRootNode() as HTMLElement);
    const className = radio?.className;

    expect(className).to.contain('input-control');
  });
});
