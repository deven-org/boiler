/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

describe('blr-text-input', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
      <blr-text-input      
      type="text"
      textInputId="text-Input-id"
      inputName="Test Input Name"
      placeholder="Test Placeholder 2"
      defaultValue="Test defaultValue"
      disabled="false"
      required="true"
      size="md"
      maxLength="200"
      minLength="50"
      pattern=""
      class="example-layout-class" ></blr-text-input>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
