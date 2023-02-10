/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect, html } from '@open-wc/testing';

describe('blr-text-button', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
      <blr-text-button label="TextButton Label"></blr-text-button>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });

  it('renders with icon', async () => {
    const element = await fixture(`
      <blr-text-button icon="boilerChevronDownGreen"  label="TextButton Label" ></blr-text-button>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });

  it('works', async () => {
    const el = await fixture(html` <blr-text-button label="TextButton Label"></blr-text-button> `);
    await expect(el).to.be.accessible();
  });
});
