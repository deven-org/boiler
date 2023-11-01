import { BlrSelectType, BlrSelectRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrSelectType = {
  name: 'Text Input',
  hasLabel: true,
  label: 'Label',
  labelAppendix: '(Optional)',
  showTrailingIcon: true,
  size: 'md',
  errorMessage: 'This is error message',
  hintMessage: 'Field is used for hint',
  hintIcon: 'blrInfoLg',
  selectId: 'Peter',
  trailingIcon: 'blrChevronDownLg',
  options: [
    { value: 'uschi', label: 'Uschi', disabled: true },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', selected: true },
    { value: 'dieter', label: 'Dieter' },
  ],
  theme: 'Light',
};

describe('blr-select', () => {
  it('is having a select containing the right className', async () => {
    const element = await fixture(BlrSelectRenderFunction(sampleParams));

    const select = querySelectorDeep('select', element.getRootNode() as HTMLElement);
    const className = select?.className;

    expect(className).to.contain('blr-form-select');
  });
});
