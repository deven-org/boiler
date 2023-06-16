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
      class="example-layout-class" ></blr-select>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
