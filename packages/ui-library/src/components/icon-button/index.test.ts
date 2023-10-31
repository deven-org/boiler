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
  isLink: false,
  download: false,
};

describe('blr-icon-button', () => {
  it('is having a span tag containing the right className when no link is provided', async () => {
    const element = await fixture(BlrIconButtonRenderFunction(sampleParams));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).to.contain('blr-icon-button');
  });

  it('is having an anchor tag containing the right className when a link is provided', async () => {
    const element = await fixture(BlrIconButtonRenderFunction({ ...sampleParams, isLink: true }));

    const button = querySelectorDeep('a', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).to.contain('blr-icon-button');
  });
});
