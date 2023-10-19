import { BlrTextButtonGroupType, BlrTextButtonGroupRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTextButtonGroupType = {
  label: 'Button Label',
  leadingIcon: undefined,
  trailingIcon: 'blr360Lg',
  loading: false,
  disabled: false,
  buttonId: 'button-variant-id',
  variant: 'destructive',
  size: 'md',
  loadingStatus: 'Loading',
  theme: 'Light',
  alignment: 'center',
  buttons: [
    {
      label: 'Primary',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-primary-id',
      buttonVariant: 'primary',
      trailingIcon: 'blr360Lg',
      leadingIcon: 'blr360Lg',
      loading: false,
    },
    {
      label: 'CTA',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-cta-id',
      buttonVariant: 'cta',
      trailingIcon: 'blr360Lg',
      leadingIcon: 'blr360Lg',
      loading: false,
    },
    {
      label: 'Silent',
      buttonVariant: 'silent',
      size: 'md',
      loadingStatus: 'Loading',
      disabled: false,
      buttonId: 'button-silent-id',
      trailingIcon: 'blr360Lg',
      leadingIcon: 'blr360Lg',
      loading: false,
    },
  ],
};

describe('blr-text-button-group', () => {
  it('is having a button containing the right className', async () => {
    const element = await fixture(BlrTextButtonGroupRenderFunction(sampleParams));

    const button = querySelectorDeep('button', element.getRootNode() as HTMLButtonElement);

    const className = button?.className;

    expect(className).to.contain('blr-text-button-group');
  });
});
