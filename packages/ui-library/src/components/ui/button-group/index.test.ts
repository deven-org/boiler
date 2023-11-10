import { BlrLayoutGroupType, BlrLayoutGroupFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { BlrCheckboxRenderFunction } from '../checkbox';

const sampleParams: BlrLayoutGroupType = {
  label: 'Blub',
};

const testContent = BlrCheckboxRenderFunction({ label: 'Huhu', hasLabel: true, size: 'md', theme: 'Light' });

describe('blr-layout-group', () => {
  it('is rendering checkbox inside slot', async () => {
    const element = await fixture(BlrLayoutGroupFunction(sampleParams, testContent));

    const checkbox = querySelectorDeep('blr-checkbox', element.getRootNode() as HTMLElement);

    expect(checkbox).to.exist;
  });
});
