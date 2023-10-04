import { BlrTextButtonLinkType, BlrTextButtonLinkRenderFunction } from './index';
import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTextButtonLinkType = {
  href: 'google.com',
  target: '_blank',
  label: 'Button',
  leadingIcon: undefined,
  trailingIcon: 'blrChevronDownLg',
  loading: false,
  buttonId: 'button-id',
  variant: 'cta',
  size: 'md',
  loadingStatus: 'Loading',
  theme: 'Light',
};

describe('blr-text-button-link', () => {
  it('is having a button containing the right className', async () => {
    const element = await fixture(BlrTextButtonLinkRenderFunction(sampleParams));

    const anchor = querySelectorDeep('a', element.getRootNode() as HTMLElement);
    const className = anchor?.className;

    expect(className).to.contain('blr-text-button-link');
  });
});
