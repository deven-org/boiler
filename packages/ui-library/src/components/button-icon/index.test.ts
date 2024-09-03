import '@boiler/ui-library';
import { BlrButtonIconRenderFunction } from './renderFunction.js';
import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import type { BlrButtonIconType } from './index.js';

const sampleParams: BlrButtonIconType = {
  arialabel: 'Button',
  icon: 'blrChevronDown',
  loading: false,
  disabled: false,
  buttonIconId: 'button-id',
  variant: 'cta',
  theme: 'Light',
};

describe('blr-button-icon', () => {
  it('is having a button containing the right className', async () => {
    const element = await fixture(BlrButtonIconRenderFunction(sampleParams));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).to.contain('blr-button-icon');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrButtonIconRenderFunction(sampleParams));

    const buttonIcon = querySelectorDeep('.blr-button-icon', element.getRootNode() as HTMLElement);
    const className = buttonIcon?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, sizeVariant: 'sm' }));

    const buttonIcon = querySelectorDeep('.blr-button-icon', element.getRootNode() as HTMLElement);
    const className = buttonIcon?.className;

    expect(className).to.contain('sm');
  });

  it('shows loading icon when loading is true', async () => {
    const element = await fixture(
      BlrButtonIconRenderFunction({
        ...sampleParams,
        loading: true,
      }),
    );

    const buttonIcon = querySelectorDeep('.blr-button-icon', element.getRootNode() as HTMLElement);
    const loader = querySelectorDeep('blr-loader', buttonIcon?.getRootNode() as HTMLElement);

    expect(loader).to.exist;
  });

  it('does not show loading icon when loading is false', async () => {
    const element = await fixture(
      BlrButtonIconRenderFunction({
        ...sampleParams,
        loading: false,
      }),
    );
    const buttonIcon = querySelectorDeep('.blr-button-icon', element.getRootNode() as HTMLElement);
    const loader = querySelectorDeep('blr-loader', buttonIcon?.getRootNode() as HTMLElement);
    expect(loader).not.to.exist;
  });

  it('has a disabled class in the className when disabled is true', async () => {
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).to.contain('disabled');
  });

  it('does not have a disabled class in the className when disabled is true', async () => {
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, disabled: false }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).not.to.contain('disabled');
  });

  it('fires blrclick event if clicked and not disabled', async () => {
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, disabled: false }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrClick', () => {
      fired = true;
    });

    button?.click();

    expect(fired).to.be.true;
  });

  it('doesnt fires blrclick event if clicked and disabled', async () => {
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrClick', () => {
      fired = true;
    });

    button?.click();

    expect(fired).to.be.false;
  });

  it('fires blrfocus event if focused and not disabled', async function () {
    this.timeout(5000);
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, disabled: false }));
    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);

    const focusPromise = new Promise<void>((resolve) => {
      element.addEventListener('blrFocus', () => resolve());
    });

    button?.dispatchEvent(new FocusEvent('focus'));

    await focusPromise;
    expect(true).to.be.true;
  });

  it('doesnt fire blrfocus event if focused and disabled', async () => {
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrFocus', () => {
      fired = true;
    });

    button?.focus();

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(fired).to.be.false;
  });

  it('fires blrblur event if blurred and not disabled', async function () {
    this.timeout(5000);
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, disabled: false }));
    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);

    const blurPromise = new Promise<void>((resolve) => {
      element.addEventListener('blrBlur', () => resolve());
    });

    button?.dispatchEvent(new FocusEvent('blur'));

    await blurPromise;
    expect(true).to.be.true;
  });

  it('doesnt fire blrblur event if blurred and disabled', async () => {
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrBlur', () => {
      fired = true;
    });

    button?.focus();
    button?.blur();

    await new Promise((resolve) => setTimeout(resolve, 0));

    expect(fired).to.be.false;
  });
});
