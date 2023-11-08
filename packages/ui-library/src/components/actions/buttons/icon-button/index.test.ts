import { BlrIconButtonType, BlrIconButtonRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrIconButtonType = {
  arialabel: 'Button',
  icon: 'blrChevronDown',
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  variant: 'cta',
  size: 'md',
  loadingStatus: 'Loading',
  theme: 'Light',
};

describe('blr-icon-button', () => {
  it('is having a button containing the right className', async () => {
    const element = await fixture(BlrIconButtonRenderFunction(sampleParams));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).to.contain('blr-icon-button');
  });
});
