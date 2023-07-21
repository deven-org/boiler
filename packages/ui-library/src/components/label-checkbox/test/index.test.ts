/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

describe('blr-label-checkbox', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
    <blr-label-checkbox
      .label="This is a test label"
      .checkInputId="CheckID"
      .disabled="false"
      .checked="false"
      .indeterminate="false"
      .readonly="false"
      .size="md"
      .hasError="false"
      .errorMessage=="This is an error message"
      .errorIcon="blrInfoSm"
      .showHint="true"
      .hintIcon="false"
      .hintMessage="This is a hint message"
    ></blr-label-checkbox>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
