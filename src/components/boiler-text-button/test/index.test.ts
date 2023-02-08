/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect } from '@open-wc/testing';

describe('boiler-text-button', () => {
  it('renders boiler-text-button correctly', async () => {
    const element = await fixture(`
      <boiler-text-button label="Fkoo"></boiler-text-button>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });
});
