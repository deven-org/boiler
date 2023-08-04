import { BlrIconLinkType, BlrIconLinkRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrIconLinkType = {
  arialabel: 'Button',
  loading: false,
  icon: 'blr360Lg',
  linkId: 'link-id',
  variant: 'cta',
  size: 'md',
  href: '#',
  target: '_self',
  loadingStatus: 'Loading',
  theme: 'Light',
};

describe('blr-icon-link', () => {
  it('is having a a containing the right className', async () => {
    const element = await fixture(BlrIconLinkRenderFunction(sampleParams));

    const a = querySelectorDeep('a', element.getRootNode() as HTMLElement);
    const className = a?.className;

    expect(className).to.contain('blr-icon-link');
  });
});
