import { BlrFormCaptionRenderFunction, BlrFormCaptionType } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrFormCaptionType = {
  theme: 'Light',
  message: 'hallo',
  icon: 'blr360',
  variant: 'hint',
  size: 'sm',
  arialabel: 'Form Hint',
};

describe('blr-form-caption', () => {
  it('renders a <div> element inside Shadow DOM for blr-hint', async () => {
    const element = await fixture(BlrFormCaptionRenderFunction(sampleParams));
    const blrHint = querySelectorDeep('div.blr-form-caption', element.getRootNode() as HTMLElement);
    expect(blrHint).to.exist;
  });

  it('renders a blr-form-caption with new value', async () => {
    const element = await fixture(
      BlrFormCaptionRenderFunction({
        ...sampleParams,
        message: 'New hint message added',
      })
    );

    const blrHintLabel = querySelectorDeep(
      'div.blr-form-caption .blr-caption-text',
      element.getRootNode() as HTMLElement
    );

    const blrText = blrHintLabel?.textContent;
    expect(blrText).to.include('New hint message added');
  });

  it('renders a blr-form-caption with empty block', async () => {
    const element = await fixture(
      BlrFormCaptionRenderFunction({
        ...sampleParams,
        message: '',
      })
    );

    const blrHintLabel = querySelectorDeep(
      'div.blr-form-caption .blr-caption-text',
      element.getRootNode() as HTMLElement
    );

    const blrText = blrHintLabel?.textContent;
    expect(blrText).to.include('');
  });

  it('renders a blr-form-caption with icon', async () => {
    const element = await fixture(
      BlrFormCaptionRenderFunction({
        ...sampleParams,
        icon: 'blr360',
      })
    );

    const blrHintWithIcon = querySelectorDeep(
      'div.blr-form-caption .blr-icon svg',
      element.getRootNode() as HTMLElement
    );

    expect(blrHintWithIcon).to.exist;
  });

  it('renders a blr-form-caption with no icon', async () => {
    const element = await fixture(
      BlrFormCaptionRenderFunction({
        ...sampleParams,
        icon: undefined,
      })
    );

    const blrHintWithIcon = querySelectorDeep(
      'div.blr-form-caption .blr-icon svg',
      element.getRootNode() as HTMLElement
    );

    expect(blrHintWithIcon).not.to.exist;
  });

  it('renders a <div> element inside Shadow DOM for blr-hint hint as variant', async () => {
    const element = await fixture(BlrFormCaptionRenderFunction({ ...sampleParams, variant: 'hint' }));
    const blrLabel = querySelectorDeep('div.blr-form-caption.hint', element.getRootNode() as HTMLElement);
    expect(blrLabel).to.exist;
  });

  it('renders a <div> element inside Shadow DOM for blr-hint error as variant', async () => {
    const element = await fixture(BlrFormCaptionRenderFunction({ ...sampleParams, variant: 'error' }));
    const blrLabel = querySelectorDeep('div.blr-form-caption.error', element.getRootNode() as HTMLElement);
    expect(blrLabel).to.exist;
  });
});
