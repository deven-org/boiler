/* eslint-disable @typescript-eslint/await-thenable */
import '../index';
import { fixture, expect, html } from '@open-wc/testing';

describe('boiler-text-button', () => {
  it('renders correctly', async () => {
    const element = await fixture(`
      <boiler-text-button label="TextButton Label"></boiler-text-button>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });

  it('renders with icon', async () => {
    const element = await fixture(`
      <boiler-text-button icon="boilerChevronDownGreen"  label="TextButton Label" ></boiler-text-button>
    `);

    await expect(element).shadowDom.to.equalSnapshot();
  });

  it('works', async () => {
    const el = await fixture(html` <boiler-text-button label="TextButton Label"></boiler-text-button> `);
    await expect(el).to.be.accessible();
  });
});
