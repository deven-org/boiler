/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

describe('blr-radio', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
      <blr-radio     
      type="radio"
      id="test_input_name"
      value="testInputValue"
      disabled="false"
      required="true"
      size="md"
      option="label: test label"
      class="example-layout-class" ></blr-select>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
