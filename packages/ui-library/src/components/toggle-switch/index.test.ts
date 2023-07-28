import { BlrToggleSwitchRenderFunction, BlrToggleSwitchType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrToggleSwitchType = {
  label: 'Toggle Switch Option',
  checkInputId: 'switch',
  disabled: false,
  readonly: false,
  checked: false,
  hasError: false,
  size: 'md',
  errorMessage: 'This is error message',
  showHint: true,
  hintText: 'Field is used for hint',
  hintIcon: 'blrInfoLg',
  variant: 'leading',
  isSelected: false,
  updated: function (): void {
    return;
  },
  handleChange: function (): void {
    return;
  },
};

describe('blr-label-toggleswitch', () => {
  it('is having an input switch containing the right className', async () => {
    const element = await fixture(BlrToggleSwitchRenderFunction(sampleParams));

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const className = input?.className;

    expect(className).to.contain('input-control');
  });
});
