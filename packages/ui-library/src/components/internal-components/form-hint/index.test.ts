import { BlrFormHintRenderFunction, BlrFormHintType } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrFormHintType = {
  theme: 'Light',
  message: 'hallo',
  icon: 'blr360',
  variant: 'hint',
};

describe('blr-form-hint', () => {
  it('renders a <div> element inside Shadow DOM for blr-hint', async () => {
    const element = await fixture(BlrFormHintRenderFunction(sampleParams));
    const blrHint = querySelectorDeep('div.blr-form-hint', element.getRootNode() as HTMLElement);
    expect(blrHint).to.exist;
  });

  it('renders a blr-form-hint with new value', async () => {
    const element = await fixture(
      BlrFormHintRenderFunction({
        ...sampleParams,
        message: 'New hint message added',
      })
    );

    const blrHintLabel = querySelectorDeep('div.blr-form-hint .blr-caption-text', element.getRootNode() as HTMLElement);

    const blrText = blrHintLabel?.textContent;
    expect(blrText).to.include('New hint message added');
  });

  it('renders a blr-form-hint with empty block', async () => {
    const element = await fixture(
      BlrFormHintRenderFunction({
        ...sampleParams,
        message: '',
      })
    );

    const blrHintLabel = querySelectorDeep('div.blr-form-hint .blr-caption-text', element.getRootNode() as HTMLElement);

    const blrText = blrHintLabel?.textContent;
    expect(blrText).to.include('');
  });

  it('renders a blr-form-hint with icon', async () => {
    const element = await fixture(
      BlrFormHintRenderFunction({
        ...sampleParams,
        icon: 'blr360',
      })
    );

    const blrHintWithIcon = querySelectorDeep('div.blr-form-hint .blr-icon svg', element.getRootNode() as HTMLElement);

    expect(blrHintWithIcon).to.exist;
  });

  it('renders a blr-form-hint with no icon', async () => {
    const element = await fixture(
      BlrFormHintRenderFunction({
        ...sampleParams,
        icon: undefined,
      })
    );

    const blrHintWithIcon = querySelectorDeep('div.blr-form-hint .blr-icon svg', element.getRootNode() as HTMLElement);

    expect(blrHintWithIcon).not.to.exist;
  });

  it('renders a <div> element inside Shadow DOM for blr-hint hint as variant', async () => {
    const element = await fixture(BlrFormHintRenderFunction({ ...sampleParams, variant: 'hint' }));
    const blrLabel = querySelectorDeep('div.blr-form-hint.hint', element.getRootNode() as HTMLElement);
    expect(blrLabel).to.exist;
  });

  it('renders a <div> element inside Shadow DOM for blr-hint error as variant', async () => {
    const element = await fixture(BlrFormHintRenderFunction({ ...sampleParams, variant: 'error' }));
    const blrLabel = querySelectorDeep('div.blr-form-hint.error', element.getRootNode() as HTMLElement);
    expect(blrLabel).to.exist;
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrFormHintRenderFunction(sampleParams));

    const blrFormHint = querySelectorDeep('div.blr-form-hint', element.getRootNode() as HTMLElement);
    const className = blrFormHint?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrFormHintRenderFunction({ ...sampleParams, size: 'sm' }));

    const blrFormHint = querySelectorDeep('div.blr-form-hint', element.getRootNode() as HTMLElement);
    const className = blrFormHint?.className;

    expect(className).to.contain('sm');
  });
});
