import '@boiler/ui-library/dist/';

import { BlrIconButtonRenderFunction } from './renderFunction';
import type { BlrIconButtonType } from '@boiler/ui-library/dist/';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrIconButtonType = {
  arialabel: 'Button',
  icon: 'blrChevronDown',
  loading: false,
  disabled: false,
  iconButtonId: 'button-id',
  variant: 'cta',
  loadingStatus: 'Loading',
  theme: 'Light',
};

describe('blr-icon-button', () => {
  it('is having a button containing the right className', async () => {
    const element = await fixture(BlrIconButtonRenderFunction(sampleParams));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).to.contain('blr-icon-button');
  });

  /*
  it('is having a visible icon', async () => {
    const element = await fixture(BlrIconButtonRenderFunction(sampleParams));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const icon = querySelectorDeep('blr-icon', button?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', icon?.getRootNode() as HTMLElement);

    const rect = svg?.getBoundingClientRect();

    expect(rect).have.property('width');
    expect(rect).have.property('height');

    expect(rect?.width).to.be.greaterThan(0);
    expect(rect?.height).to.be.greaterThan(0);
  });
  */

  it('has a size md by default', async () => {
    const element = await fixture(BlrIconButtonRenderFunction(sampleParams));

    const iconButton = querySelectorDeep('.blr-icon-button', element.getRootNode() as HTMLElement);
    const className = iconButton?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrIconButtonRenderFunction({ ...sampleParams, sizeVariant: 'sm' }));

    const iconButton = querySelectorDeep('.blr-icon-button', element.getRootNode() as HTMLElement);
    const className = iconButton?.className;

    expect(className).to.contain('sm');
  });

  it('shows loading icon when loading is true', async () => {
    const element = await fixture(
      BlrIconButtonRenderFunction({
        ...sampleParams,
        loading: true,
      })
    );

    const iconButton = querySelectorDeep('.blr-icon-button', element.getRootNode() as HTMLElement);
    const loader = querySelectorDeep('blr-loader', iconButton?.getRootNode() as HTMLElement);

    expect(loader).to.exist;
  });

  it('does not show loading icon when loading is false', async () => {
    const element = await fixture(
      BlrIconButtonRenderFunction({
        ...sampleParams,
        loading: false,
      })
    );
    const iconButton = querySelectorDeep('.blr-icon-button', element.getRootNode() as HTMLElement);
    const loader = querySelectorDeep('blr-loader', iconButton?.getRootNode() as HTMLElement);
    expect(loader).not.to.exist;
  });

  it('has a disabled class in the className when disabled is true', async () => {
    const element = await fixture(BlrIconButtonRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).to.contain('disabled');
  });

  it('does not have a disabled class in the className when disabled is true', async () => {
    const element = await fixture(BlrIconButtonRenderFunction({ ...sampleParams, disabled: false }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).not.to.contain('disabled');
  });

  it('fires blrclick event if clicked and not disabled', async () => {
    const element = await fixture(BlrIconButtonRenderFunction({ ...sampleParams, disabled: false }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrClick', () => {
      fired = true;
    });

    button?.click();

    expect(fired).to.be.true;
  });

  it('doesnt fires blrclick event if clicked and disabled', async () => {
    const element = await fixture(BlrIconButtonRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrClick', () => {
      fired = true;
    });

    button?.click();

    expect(fired).to.be.false;
  });

  it('fires blrfocus event if focused and not disabled', async () => {
    const element = await fixture(BlrIconButtonRenderFunction({ ...sampleParams, disabled: false }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrFocus', () => {
      fired = true;
    });

    button?.focus();

    expect(fired).to.be.true;
  });

  it('doesnt fires blrfocus event if focused and disabled', async () => {
    const element = await fixture(BlrIconButtonRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrFocus', () => {
      fired = true;
    });

    button?.focus();

    expect(fired).to.be.false;
  });

  it('fires blrblur event if blurred and not disabled', async () => {
    const element = await fixture(BlrIconButtonRenderFunction({ ...sampleParams, disabled: false }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrBlur', () => {
      fired = true;
    });

    button?.focus();
    button?.blur();

    expect(fired).to.be.true;
  });

  it('doesnt fires blrblur event if blurred and disabled', async () => {
    const element = await fixture(BlrIconButtonRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrBlur', () => {
      fired = true;
    });

    button?.focus();
    button?.blur();

    expect(fired).to.be.false;
  });
});
