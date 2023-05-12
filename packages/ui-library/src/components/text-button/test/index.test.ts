/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

describe('blr-text-button', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
      <blr-text-button      
      label="Label"
      leadingIcon="blrChevronDown"
      trailingIcon="blrChevronDown"
      buttonId="id"
      disabled="true"
      variant="primary"
      size="md"
      class="example-layout-class" ></blr-text-button>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
