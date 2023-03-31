/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

const props = {
  loadingStatus: 'Lo',
  size: 'md',
  variant: 'default',
};

describe('blr-icon-link', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
    <blr-loader
      size=${props.size}
      variant=${props.variant}
      loadingStatus=${props.loadingStatus}
    ></blr-loader>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
