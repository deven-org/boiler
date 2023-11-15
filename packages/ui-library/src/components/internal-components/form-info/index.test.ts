import { BlrFormInfoRenderFunction, BlrFormInfoType } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrFormInfoType = {
  theme: 'Light',
  size: 'md',
  showHint: true,
  hintText: 'This is a hint',
  hintIcon: 'blrInfo',
  hasError: true,
  errorMessage: 'This is an error message',
  errorIcon: 'blrInfo',
};

describe('blr-form-info', () => {
  it('renders a <div> element inside Shadow DOM for blr-hint', async () => {
    const element = await fixture(BlrFormInfoRenderFunction(sampleParams));
    const blrHint = querySelectorDeep('div.blr-form-info-container', element.getRootNode() as HTMLElement);
    expect(blrHint).to.exist;
  });

  it('renders a blr-form-hint with new value', async () => {
    const element = await fixture(
      BlrFormInfoRenderFunction({
        ...sampleParams,
        hintText: 'New hint message added',
      })
    );

    const blrHintLabel = querySelectorDeep('div.blr-form-hint .blr-caption-text', element.getRootNode() as HTMLElement);

    const blrText = blrHintLabel?.textContent;
    expect(blrText).to.include('New hint message added');
  });

  it('renders a blr-form-hint with empty block', async () => {
    const element = await fixture(
      BlrFormInfoRenderFunction({
        ...sampleParams,
        hintText: '',
      })
    );

    const blrHintLabel = querySelectorDeep('div.blr-form-hint .blr-caption-text', element.getRootNode() as HTMLElement);

    const blrText = blrHintLabel?.textContent;
    expect(blrText).to.include('');
  });

  it('renders a blr-form-hint with icon', async () => {
    const element = await fixture(
      BlrFormInfoRenderFunction({
        ...sampleParams,
        hintIcon: 'blr360',
      })
    );

    const blrHintWithIcon = querySelectorDeep(
      'div.blr-form-hint.hint .blr-icon svg',
      element.getRootNode() as HTMLElement
    );

    expect(blrHintWithIcon).to.exist;
  });

  it('renders a blr-form-hint with no icon', async () => {
    const element = await fixture(
      BlrFormInfoRenderFunction({
        ...sampleParams,
        hintIcon: undefined,
      })
    );

    const blrHintWithIcon = querySelectorDeep(
      'div.blr-form-hint.hint .blr-icon svg',
      element.getRootNode() as HTMLElement
    );

    expect(blrHintWithIcon).not.to.exist;
  });

  it('renders a blr-form-hint with error state when "hasError" is true', async () => {
    const element = await fixture(
      BlrFormInfoRenderFunction({
        ...sampleParams,
        hasError: true,
      })
    );

    const blrErrorHint = querySelectorDeep('div.blr-form-hint.error', element.getRootNode() as HTMLElement);

    expect(blrErrorHint).to.exist;
  });

  it('does not render a blr-form-hint with error state when "hasError" is false', async () => {
    const element = await fixture(
      BlrFormInfoRenderFunction({
        ...sampleParams,
        hasError: false,
      })
    );

    const blrErrorHint = querySelectorDeep('div.blr-form-hint.error', element.getRootNode() as HTMLElement);

    expect(blrErrorHint).not.to.exist;
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrFormInfoRenderFunction(sampleParams));

    const blrFormContainer = querySelectorDeep('div.blr-form-info-container', element.getRootNode() as HTMLElement);
    const className = blrFormContainer?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrFormInfoRenderFunction({ ...sampleParams, size: 'sm' }));

    const blrFormContainer = querySelectorDeep('div.blr-form-info-container', element.getRootNode() as HTMLElement);
    const className = blrFormContainer?.className;

    expect(className).to.contain('sm');
  });
});
