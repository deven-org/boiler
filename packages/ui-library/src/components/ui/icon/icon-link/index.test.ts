import { BlrIconLinkType, BlrIconLinkRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrIconLinkType = {
  arialabel: 'Button',
  loading: false,
  icon: 'blr360',
  linkId: 'link-id',
  variant: 'cta',
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

  it('has a size md by default', async () => {
    const element = await fixture(BlrIconLinkRenderFunction(sampleParams));

    const a = querySelectorDeep('a', element.getRootNode() as HTMLElement);
    const className = a?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrIconLinkRenderFunction({ ...sampleParams, size: 'sm' }));

    const a = querySelectorDeep('a', element.getRootNode() as HTMLElement);
    const className = a?.className;

    expect(className).to.contain('sm');
  });
});
