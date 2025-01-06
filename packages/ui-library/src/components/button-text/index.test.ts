import '@boiler/ui-library/dist/';

import { BlrButtonTextRenderFunction } from './renderFunction';
import type { BlrButtonTextType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrButtonTextType = {
  label: 'Button',
  icon: 'blr360',
  hasIcon: true,
  iconPosition: 'leading',
  loading: false,
  disabled: false,
  buttonTextId: 'button-id',
  variant: 'cta',
  theme: 'Light',
  buttonDisplay: 'inline-block',
};

describe('blr-button-text', () => {
  it('is having a button containing the right className', async () => {
    const element = await fixture(BlrButtonTextRenderFunction(sampleParams));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).to.contain('blr-button-text');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrButtonTextRenderFunction(sampleParams));

    const buttonText = querySelectorDeep('.blr-button-text', element.getRootNode() as HTMLElement);
    const className = buttonText?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrButtonTextRenderFunction({ ...sampleParams, sizeVariant: 'sm' }));

    const buttonText = querySelectorDeep('.blr-button-text', element.getRootNode() as HTMLElement);
    const className = buttonText?.className;

    expect(className).to.contain('sm');
  });

  /*
  it('shows loading icon when loading is true', async () => {
    const element = await fixture(
      BlrButtonTextRenderFunction({
        ...sampleParams,
        loading: true,
      })
    );

    const buttonText = querySelectorDeep('.blr-button-text', element.getRootNode() as HTMLElement);
    const loader = querySelectorDeep('blr-loader', buttonText?.getRootNode() as HTMLElement);

    const className = buttonText?.className;

    expect(className).to.contain('loading');
    expect(loader).to.exist;
  });

  it('does not show loading icon when loading is false', async () => {
    const element = await fixture(
      BlrButtonTextRenderFunction({
        ...sampleParams,
        loading: false,
      })
    );

    const buttonText = querySelectorDeep('.blr-button-text', element.getRootNode() as HTMLElement);
    const loader = querySelectorDeep('blr-loader', buttonText?.getRootNode() as HTMLElement);

    const className = buttonText?.className;

    expect(className).not.to.contain('loading');
    expect(loader).not.to.exist;
  });

  it('shows a trailing icon when  iconPosition is "trailing" and hasIcon is true', async () => {
    const element = await fixture(
      BlrButtonTextRenderFunction({
        ...sampleParams,
        hasIcon: true,
        iconPosition: 'trailing',
      })
    );

    const buttonText = querySelectorDeep('.blr-button-text', element.getRootNode() as HTMLElement);
    const trailingIcon = querySelectorDeep('blr-icon', buttonText?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', trailingIcon?.getRootNode() as HTMLElement);
    const rect = svg?.getBoundingClientRect();

    expect(rect).have.property('width');
    expect(rect).have.property('height');

    expect(rect?.width).to.be.greaterThan(0);
    expect(rect?.height).to.be.greaterThan(0);

    expect(trailingIcon).to.exist;
  });

  it('does not show a trailing icon when  iconPosition is "trailing" and hasIcon is true', async () => {
    const element = await fixture(
      BlrButtonTextRenderFunction({
        ...sampleParams,
        hasIcon: false,
        iconPosition: 'trailing',
      })
    );

    const buttonText = querySelectorDeep('.blr-button-text', element.getRootNode() as HTMLElement);
    const trailingIcon = querySelectorDeep('blr-icon', buttonText?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', trailingIcon?.getRootNode() as HTMLElement);

    expect(trailingIcon).not.to.exist;
    expect(svg).not.to.exist;
  });

  it('shows a leading icon when  iconPosition is "leading" and hasIcon is true', async () => {
    const element = await fixture(
      BlrButtonTextRenderFunction({
        ...sampleParams,
        hasIcon: true,
        iconPosition: 'leading',
      })
    );

    const buttonText = querySelectorDeep('.blr-button-text', element.getRootNode() as HTMLElement);
    const leadingIcon = querySelectorDeep('blr-icon', buttonText?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', leadingIcon?.getRootNode() as HTMLElement);
    const rect = svg?.getBoundingClientRect();

    expect(rect).have.property('width');
    expect(rect).have.property('height');

    expect(rect?.width).to.be.greaterThan(0);
    expect(rect?.height).to.be.greaterThan(0);

    expect(leadingIcon).to.exist;
  });

  it('does not show a leading icon when  iconPosition is "leading" and hasIcon is true', async () => {
    const element = await fixture(
      BlrButtonTextRenderFunction({
        ...sampleParams,
        hasIcon: false,
        iconPosition: 'leading',
      })
    );

    const buttonText = querySelectorDeep('.blr-button-text', element.getRootNode() as HTMLElement);
    const leadingIcon = querySelectorDeep('blr-icon', buttonText?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', leadingIcon?.getRootNode() as HTMLElement);

    expect(leadingIcon).not.to.exist;
    expect(svg).not.to.exist;
  });
  */

  it('display the button as block when "buttonDisplay" is set as block', async () => {
    const element = await fixture(BlrButtonTextRenderFunction({ ...sampleParams, buttonDisplay: 'block' }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);

    if (button) {
      const buttonCssDisplay = getComputedStyle(button)['display'];
      expect(buttonCssDisplay).to.equal('block');
    }
  });

  it('displays the button as inline-block when "buttonDisplay" is set as inline-block', async () => {
    const element = await fixture(BlrButtonTextRenderFunction({ ...sampleParams, buttonDisplay: 'inline-block' }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);

    if (button) {
      const buttonCssDisplay = getComputedStyle(button)['display'];
      expect(buttonCssDisplay).to.equal('inline-block');
    }
  });

  it('fires blrclick event if clicked and not disabled', async () => {
    const element = await fixture(BlrButtonTextRenderFunction({ ...sampleParams, disabled: false }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrClick', () => {
      fired = true;
    });

    button?.click();

    expect(fired).to.be.true;
  });

  it('doesnt fires blrclick event if clicked and disabled', async () => {
    const element = await fixture(BlrButtonTextRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrClick', () => {
      fired = true;
    });

    button?.click();

    expect(fired).to.be.false;
  });

  it('fires blrfocus event if focused and not disabled', async () => {
    const element = await fixture(BlrButtonTextRenderFunction({ ...sampleParams, disabled: false }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrFocus', () => {
      fired = true;
    });

    button?.focus();

    expect(fired).to.be.true;
  });

  it('doesnt fires blrfocus event if focused and disabled', async () => {
    const element = await fixture(BlrButtonTextRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrFocus', () => {
      fired = true;
    });

    button?.focus();

    expect(fired).to.be.false;
  });

  it('fires blrblur event if blurred and not disabled', async () => {
    const element = await fixture(BlrButtonTextRenderFunction({ ...sampleParams, disabled: false }));

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
    const element = await fixture(BlrButtonTextRenderFunction({ ...sampleParams, disabled: true }));

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
