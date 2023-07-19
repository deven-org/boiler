import { BlrLoaderType, BlrLoaderRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrLoaderType = {
  size: 'md',
  variant: 'default',
  loadingStatus: 'Loading',
};

describe('blr-loader', () => {
  it('is having a statusRole containing the right className', async () => {
    const element = await fixture(BlrLoaderRenderFunction(sampleParams));

    const statusRole = querySelectorDeep('[role="status"]', element.getRootNode() as HTMLElement);
    const className = statusRole?.className;

    expect(className).to.contain('blr-loader');
  });
});
