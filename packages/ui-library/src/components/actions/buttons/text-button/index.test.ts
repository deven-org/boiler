import { BlrTextButtonType, BlrTextButtonRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTextButtonType = {
  label: 'Button',
  icon: 'blr360',
  hasIcon: true,
  iconPosition: 'leading',
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  variant: 'cta',
  loadingStatus: 'Loading',
  theme: 'Light',
  buttonDisplay: 'inline-block',
};

describe('blr-text-button', () => {
  it('is having a button containing the right className', async () => {
    const element = await fixture(BlrTextButtonRenderFunction(sampleParams));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    const className = button?.className;

    expect(className).to.contain('blr-text-button');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrTextButtonRenderFunction(sampleParams));

    const textButton = querySelectorDeep('.blr-text-button', element.getRootNode() as HTMLElement);
    const className = textButton?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrTextButtonRenderFunction({ ...sampleParams, size: 'sm' }));

    const textButton = querySelectorDeep('.blr-text-button', element.getRootNode() as HTMLElement);
    const className = textButton?.className;

    expect(className).to.contain('sm');
  });

  it('shows loading icon when loading is true', async () => {
    const element = await fixture(
      BlrTextButtonRenderFunction({
        ...sampleParams,
        loading: true,
      })
    );

    const textButton = querySelectorDeep('.blr-text-button', element.getRootNode() as HTMLElement);
    const loader = querySelectorDeep('blr-loader', textButton?.getRootNode() as HTMLElement);

    const className = textButton?.className;

    expect(className).to.contain('loading');
    expect(loader).to.exist;
  });

  it('does not show loading icon when loading is false', async () => {
    const element = await fixture(
      BlrTextButtonRenderFunction({
        ...sampleParams,
        loading: false,
      })
    );

    const textButton = querySelectorDeep('.blr-text-button', element.getRootNode() as HTMLElement);
    const loader = querySelectorDeep('blr-loader', textButton?.getRootNode() as HTMLElement);

    const className = textButton?.className;

    expect(className).not.to.contain('loading');
    expect(loader).not.to.exist;
  });

  it('shows a trailing icon when  iconPosition is "trailing" and hasIcon is true', async () => {
    const element = await fixture(
      BlrTextButtonRenderFunction({
        ...sampleParams,
        hasIcon: true,
        iconPosition: 'trailing',
      })
    );

    const textButton = querySelectorDeep('.blr-text-button', element.getRootNode() as HTMLElement);
    const trailingIcon = querySelectorDeep('blr-icon', textButton?.getRootNode() as HTMLElement);
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
      BlrTextButtonRenderFunction({
        ...sampleParams,
        hasIcon: false,
        iconPosition: 'trailing',
      })
    );

    const textButton = querySelectorDeep('.blr-text-button', element.getRootNode() as HTMLElement);
    const trailingIcon = querySelectorDeep('blr-icon', textButton?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', trailingIcon?.getRootNode() as HTMLElement);

    expect(trailingIcon).not.to.exist;
    expect(svg).not.to.exist;
  });

  it('shows a leading icon when  iconPosition is "leading" and hasIcon is true', async () => {
    const element = await fixture(
      BlrTextButtonRenderFunction({
        ...sampleParams,
        hasIcon: true,
        iconPosition: 'leading',
      })
    );

    const textButton = querySelectorDeep('.blr-text-button', element.getRootNode() as HTMLElement);
    const leadingIcon = querySelectorDeep('blr-icon', textButton?.getRootNode() as HTMLElement);
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
      BlrTextButtonRenderFunction({
        ...sampleParams,
        hasIcon: false,
        iconPosition: 'leading',
      })
    );

    const textButton = querySelectorDeep('.blr-text-button', element.getRootNode() as HTMLElement);
    const leadingIcon = querySelectorDeep('blr-icon', textButton?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', leadingIcon?.getRootNode() as HTMLElement);

    expect(leadingIcon).not.to.exist;
    expect(svg).not.to.exist;
  });

  it('display the button as block when "buttonDisplay" is set as block', async () => {
    const element = await fixture(BlrTextButtonRenderFunction({ ...sampleParams, buttonDisplay: 'block' }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);

    if (button) {
      const buttonCssDisplay = getComputedStyle(button)['display'];
      expect(buttonCssDisplay).to.equal('block');
    }
  });

  it('displays the button as inline-block when "buttonDisplay" is set as inline-block', async () => {
    const element = await fixture(BlrTextButtonRenderFunction({ ...sampleParams, buttonDisplay: 'inline-block' }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);

    if (button) {
      const buttonCssDisplay = getComputedStyle(button)['display'];
      expect(buttonCssDisplay).to.equal('inline-block');
    }
  });

  it('fires blrclick event if clicked and not disabled', async () => {
    const element = await fixture(BlrTextButtonRenderFunction({ ...sampleParams, disabled: false }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrClick', () => {
      fired = true;
    });

    button?.click();

    expect(fired).to.be.true;
  });

  it('doesnt fires blrclick event if clicked and disabled', async () => {
    const element = await fixture(BlrTextButtonRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrClick', () => {
      fired = true;
    });

    button?.click();

    expect(fired).to.be.false;
  });

  it('fires blrfocus event if focused and not disabled', async () => {
    const element = await fixture(BlrTextButtonRenderFunction({ ...sampleParams, disabled: false }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrFocus', () => {
      fired = true;
    });

    button?.focus();

    expect(fired).to.be.true;
  });

  it('doesnt fires blrfocus event if focused and disabled', async () => {
    const element = await fixture(BlrTextButtonRenderFunction({ ...sampleParams, disabled: true }));

    const button = querySelectorDeep('span', element.getRootNode() as HTMLElement);
    let fired = false;

    element.getRootNode()?.addEventListener('blrFocus', () => {
      fired = true;
    });

    button?.focus();

    expect(fired).to.be.false;
  });

  it('fires blrblur event if blurred and not disabled', async () => {
    const element = await fixture(BlrTextButtonRenderFunction({ ...sampleParams, disabled: false }));

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
    const element = await fixture(BlrTextButtonRenderFunction({ ...sampleParams, disabled: true }));

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
