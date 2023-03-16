/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

describe('blr-icon', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
      <blr-icon name="blrChevronDownMd"></blr-text-button>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
