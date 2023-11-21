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
  showHint: true,
  hintMessage: 'Field is used for hint',
  hintIcon: 'blrInfo',
  selectId: 'Peter',
  trailingIcon: 'blrChevronDown',
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
