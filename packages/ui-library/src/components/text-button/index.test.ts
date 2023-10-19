import { BlrTextButtonType, BlrTextButtonRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTextButtonType = {
  label: 'Button',
  leadingIcon: undefined,
  trailingIcon: 'blrChevronDownLg',
  loading: false,
  buttonId: 'button-id',
  variant: 'cta',
  size: 'md',
  loadingStatus: 'Loading',
  theme: 'Light',
};

describe('blr-text-button', () => {
  it('is having a button containing the right className', async () => {
    const element = await fixture(BlrTextButtonRenderFunction(sampleParams));
    const button = querySelectorDeep('span', element.getRootNode() as HTMLSpanElement);
    const className = button?.className;

    expect(className).to.contain('blr-text-button');
  });
});
