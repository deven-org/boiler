import '@boiler/ui-library';

import { BlrButtonIconRenderFunction } from './renderFunction.js';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import type { BlrButtonIconType } from './index.js';
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';

const sampleParams: BlrButtonIconType = {
  arialabel: 'Button',
  icon: 'blrChevronDown',
  loading: false,
  disabled: false,
  buttonIconId: 'button-id',
  variant: 'cta',
  theme: Themes[0],
};

describe('blr-button-icon', () => {
  it('is having a button containing the right className', async () => {
    const element = await fixture(BlrButtonIconRenderFunction(sampleParams));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).to.contain('blr-button-icon');
  });

  /*
  it('is having a visible icon', async () => {
    const element = await fixture(BlrButtonIconRenderFunction(sampleParams));

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

  it('fires blrfocus event if focused and not disabled', async () => {
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, disabled: false }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.addEventListener('blrFocus', () => {
      fired = true;
    });

    // Simulate the focus event
    if (button) {
      button.dispatchEvent(new FocusEvent('focus'));
    }

    expect(fired).to.be.true;
  });

  it('doesnt fires blrfocus event if focused and disabled', async () => {
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrFocus', () => {
      fired = true;
    });

    button?.focus();

    expect(fired).to.be.false;
  });

  it('fires blrblur event if blurred and not disabled', async () => {
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, disabled: false }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    // Attach the listener for the custom blrBlur event
    element.addEventListener('blrBlur', () => {
      fired = true;
    });

    expect(button).to.exist;

    if (button) {
      button.dispatchEvent(new FocusEvent('focus'));
      button.dispatchEvent(new FocusEvent('blur'));
    }

    expect(fired).to.be.true;
  });

  it('doesnt fires blrblur event if blurred and disabled', async () => {
    const element = await fixture(BlrButtonIconRenderFunction({ ...sampleParams, disabled: true }));

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
