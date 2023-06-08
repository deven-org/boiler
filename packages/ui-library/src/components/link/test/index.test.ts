/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

describe('blr-link', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
      <blr-link      
      label="Label"
      leadingIcon="blrChevronDown"
      trailingIcon="blrChevronDown"
      buttonId="id"
      disabled="true"
      variant="primary"
      size="md"
      rel="nofollow"
      target="_self"
      class="example-layout-class" ></blr-link>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
