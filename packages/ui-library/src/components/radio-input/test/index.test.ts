/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

describe('blr-radio', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
    <blr-radio
      .radioId="test-id"
      .label="Option 1"
      .name="Radio Input"
      .value="option1"
      .size="md"
      .errorMessage="This is an error message"
      .hasError="false"
      .options="test"
      class="example-layout-class"
    ></blr-radio>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
