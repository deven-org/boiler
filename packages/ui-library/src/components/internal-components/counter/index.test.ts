import { BlrCounterRenderFunction, BlrCounterType } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrCounterType = {
  theme: 'Light',
  variant: 'default',
  current: 3,
  max: 100,
};

describe('blr-counter', () => {
  it('renders a <div> element inside Shadow DOM for blr-counter', async () => {
    const element = await fixture(BlrCounterRenderFunction(sampleParams));
    const blrCounter = querySelectorDeep('div.blr-counter', element.getRootNode() as HTMLElement);
    expect(blrCounter).to.exist;
  });

  it('renders a blr-counter element includes max value', async () => {
    const element = await fixture(BlrCounterRenderFunction(sampleParams));
    const blrCounter = querySelectorDeep('div.blr-counter', element.getRootNode() as HTMLElement);
    const blrText = blrCounter?.textContent;
    expect(blrText).to.include(sampleParams.max);
  });

  it('renders a blr-counter element includes current value', async () => {
    const element = await fixture(BlrCounterRenderFunction(sampleParams));
    const blrCounter = querySelectorDeep('div.blr-counter', element.getRootNode() as HTMLElement);
    const blrText = blrCounter?.textContent;
    expect(blrText).to.include(sampleParams.current);
  });

  it('renders a blr-counter element includes max & current value', async () => {
    const value = `${sampleParams.current} / ${sampleParams.max}`;
    const element = await fixture(BlrCounterRenderFunction(sampleParams));
    const blrCounter = querySelectorDeep('div.blr-counter', element.getRootNode() as HTMLElement);
    const blrText = blrCounter?.textContent;
    expect(blrText).to.include(value);
  });

  it('renders a blr-counter element inside Shadow DOM for warn variant', async () => {
    const element = await fixture(BlrCounterRenderFunction({ ...sampleParams, variant: 'warn' }));
    const blrCounter = querySelectorDeep('div.blr-counter.warn', element.getRootNode() as HTMLElement);
    expect(blrCounter).to.exist;
  });

  it('renders a blr-counter element inside Shadow DOM for warn variant', async () => {
    const element = await fixture(BlrCounterRenderFunction({ ...sampleParams, variant: 'error' }));
    const blrCounter = querySelectorDeep('div.blr-counter.error', element.getRootNode() as HTMLElement);
    expect(blrCounter).to.exist;
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrCounterRenderFunction(sampleParams));

    const blrCounter = querySelectorDeep('div.blr-counter', element.getRootNode() as HTMLElement);
    const className = blrCounter?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrCounterRenderFunction({ ...sampleParams, size: 'sm' }));

    const blrCounter = querySelectorDeep('div.blr-counter', element.getRootNode() as HTMLElement);
    const className = blrCounter?.className;

    expect(className).to.contain('sm');
  });
});
