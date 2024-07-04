import '@boiler/ui-library';
import { BlrButtonGroupRenderFunction } from './renderFunction.js';
import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import type { BlrButtonGroupType } from './index.js';
import { BlrButtonTextRenderFunction } from '../button-text/renderFunction.js';

const sampleParams: BlrButtonGroupType = {
  sizeVariant: 'md',
  alignment: 'left',
};

const testContent = BlrButtonTextRenderFunction({
  label: 'Jaok',
  theme: 'Light',
  loading: false,
  variant: 'primary',
  disabled: false,
});

describe('blr-button-group', () => {
  it('is rendering button text inside slot', async () => {
    const element = await fixture(BlrButtonGroupRenderFunction(sampleParams, testContent));
    const checkbox = querySelectorDeep('blr-button-text', element.getRootNode() as HTMLElement);

    expect(checkbox).to.exist;
  });
});
