/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

describe('blr-password', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
      <blr-password      
      type="password"
      label="Test Input Name"
      placeholder="Test Placeholder 2"
      disabled="false"
      required="true"
      size="md"
      class="example-layout-class" ></blr-password>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
