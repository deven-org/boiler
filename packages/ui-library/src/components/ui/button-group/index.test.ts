import '@boiler/ui-library/dist/';

import { BlrButtonGroupRenderFunction } from './renderFunction';
import type { BlrButtonGroupType } from '@boiler/ui-library/dist/';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { BlrTextButtonRenderFunction } from '../../actions/buttons/text-button/renderFunction';

const sampleParams: BlrButtonGroupType = {
  size: 'md',
  alignment: 'left',
};

const testContent = BlrTextButtonRenderFunction({
  label: 'Jaok',
  size: 'md',
  theme: 'Light',
  loading: false,
  variant: 'primary',
  disabled: false,
});

describe('blr-button-group', () => {
  it('is rendering text button inside slot', async () => {
    const element = await fixture(BlrButtonGroupRenderFunction(sampleParams, testContent));
    const checkbox = querySelectorDeep('blr-text-button', element.getRootNode() as HTMLElement);

    expect(checkbox).to.exist;
  });
});
