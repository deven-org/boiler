/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

describe('blr-radio', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
      <blr-radio      
      type="radio"
      radioId="option_1"
      label="Test Input Name"
      disabled="false"
      required="true"
      size="md"
      option="{label:'Test Input Name', value='test'}"
      class="example-layout-class" ></blr-radio>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
