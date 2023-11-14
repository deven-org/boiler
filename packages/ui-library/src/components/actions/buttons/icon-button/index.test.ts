import { BlrIconButtonType, BlrIconButtonRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrIconButtonType = {
  arialabel: 'Button',
  icon: 'blrChevronDownLg',
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

  it('is having a a visible icon', async () => {
    const element = await fixture(BlrIconButtonRenderFunction(sampleParams));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const icon = querySelectorDeep('blr-icon', button?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', icon?.getRootNode() as HTMLElement);

    const rect = svg?.getBoundingClientRect();

    expect(rect).have.property('width');
    expect(rect).have.property('height');

    expect(rect?.width).to.be.greaterThan(0);
    expect(rect?.height).to.be.greaterThan(0);
  });
});
