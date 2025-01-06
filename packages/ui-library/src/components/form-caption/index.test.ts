import '@boiler/ui-library';

import { BlrFormCaptionRenderFunction } from './renderFunction.js';
import { BlrFormCaptionType } from './index.js';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';

const sampleParams: BlrFormCaptionType = {
  theme: Themes[0],
  message: 'hallo',
  icon: 'blr360',
  variant: 'hint',
  sizeVariant: 'sm',
};

describe('blr-form-caption', () => {
  it('renders a <div> element inside Shadow DOM for blr-form-caption', async () => {
    const element = await fixture(BlrFormCaptionRenderFunction(sampleParams));
    const blrCaption = querySelectorDeep('div.blr-form-caption', element.getRootNode() as HTMLElement);
    expect(blrCaption).to.exist;
  });

  it('renders a blr-form-caption with new value', async () => {
    const element = await fixture(
      BlrFormCaptionRenderFunction({
        ...sampleParams,
        message: 'New hint message added',
      }),
    );

    const blrCaptionLabel = querySelectorDeep(
      'div.blr-form-caption .blr-caption-text',
      element.getRootNode() as HTMLElement,
    );

    const blrText = blrCaptionLabel?.textContent;
    expect(blrText).to.include('New hint message added');
  });

  it('renders a blr-form-caption with empty block', async () => {
    const element = await fixture(
      BlrFormCaptionRenderFunction({
        ...sampleParams,
        message: '',
      }),
    );

    const blrCaptionLabel = querySelectorDeep(
      'div.blr-form-caption .blr-caption-text',
      element.getRootNode() as HTMLElement,
    );

    const blrText = blrCaptionLabel?.textContent;
    expect(blrText).to.include('');
  });

  /*
  it('renders a blr-form-caption with icon', async () => {
    const element = await fixture(
      BlrFormCaptionRenderFunction({
        ...sampleParams,
        icon: 'blr360',
      })
    );

    const blrCaptionWithIcon = querySelectorDeep(
      'div.blr-form-caption .blr-icon svg',
      element.getRootNode() as HTMLElement
    );

    expect(blrCaptionWithIcon).to.exist;
  });

  it('renders a blr-form-caption with no icon', async () => {
    const element = await fixture(
      BlrFormCaptionRenderFunction({
        ...sampleParams,
        icon: undefined,
      })
    );

    const blrCaptionWithIcon = querySelectorDeep(
      'div.blr-form-caption .blr-icon svg',
      element.getRootNode() as HTMLElement
    );

    expect(blrCaptionWithIcon).not.to.exist;
  });
  */

  it('renders a <div> element inside Shadow DOM for blr-form-caption hint as variant', async () => {
    const element = await fixture(BlrFormCaptionRenderFunction({ ...sampleParams, variant: 'hint' }));
    const blrLabel = querySelectorDeep('div.blr-form-caption.hint', element.getRootNode() as HTMLElement);
    expect(blrLabel).to.exist;
  });

  it('renders a <div> element inside Shadow DOM for blr-form-caption error as variant', async () => {
    const element = await fixture(BlrFormCaptionRenderFunction({ ...sampleParams, variant: 'error' }));
    const blrLabel = querySelectorDeep('div.blr-form-caption.error', element.getRootNode() as HTMLElement);
    expect(blrLabel).to.exist;
  });
});
