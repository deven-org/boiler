import { BlrTextButtonType, BlrTextButtonRenderFunction } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrTextButtonType = {
  label: 'Button',
  icon: 'blr360',
  iconPosition: 'leading',
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  variant: 'cta',
  loadingStatus: 'Loading',
  theme: 'Light',
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

  it('shows a trailing icon when icon is selected iconPosition is "trailing"', async () => {
    const element = await fixture(
      BlrTextButtonRenderFunction({
        ...sampleParams,
        iconPosition: 'trailing',
      })
    );

    const textButton = querySelectorDeep('.blr-text-button', element.getRootNode() as HTMLElement);
    const trailingIcon = querySelectorDeep('blr-icon.trailing', textButton?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', trailingIcon?.getRootNode() as HTMLElement);
    const rect = svg?.getBoundingClientRect();

    expect(rect).have.property('width');
    expect(rect).have.property('height');

    expect(rect?.width).to.be.greaterThan(0);
    expect(rect?.height).to.be.greaterThan(0);

    expect(trailingIcon).to.exist;
  });

  it('shows a leading icon when icon is selected and iconPosition is "leading"', async () => {
    const element = await fixture(
      BlrTextButtonRenderFunction({
        ...sampleParams,
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

  it('does not show a icon when icon is undefined', async () => {
    const element = await fixture(
      BlrTextButtonRenderFunction({
        ...sampleParams,
        icon: undefined,
      })
    );

    const textButton = querySelectorDeep('.blr-text-button', element.getRootNode() as HTMLElement);
    const icon = querySelectorDeep('blr-icon', textButton?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', icon?.getRootNode() as HTMLElement);

    expect(icon).not.to.exist;
    expect(svg).not.to.exist;
  });
});
