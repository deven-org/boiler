/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

describe('blr-select', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
      <blr-select      
      type="text"
      textInputId="select-id"
      label="Test Input Name"
      placeholder="Test Placeholder 2"
      defaultValue="Test defaultValue"
      disabled="false"
      required="true"
      size="md"
      maxLength="200"
      minLength="50"
      pattern=""
      class="example-layout-class" ></blr-select>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
