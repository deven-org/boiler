import { BlrFormCaptionGroupRenderFunction, BlrFormCaptionGroupType } from './index';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';

const sampleParams: BlrFormCaptionGroupType = {
  theme: 'Light',
  size: 'md',
  showHint: true,
  hintMessage: 'This is a hint',
  hintIcon: 'blrInfo',
  hintArialabel: 'Form Hint',
  showError: true,
  errorMessage: 'This is an error message',
  errorIcon: 'blrInfo',
  errorArialabel: 'Form Hint',
};

describe('blr-form-caption-group', () => {
  it('renders a <div> element inside Shadow DOM for blr-caption-group', async () => {
    const element = await fixture(BlrFormCaptionGroupRenderFunction(sampleParams));
    const blrCaptionGroup = querySelectorDeep(
      'div.blr-form-caption-group-container ',
      element.getRootNode() as HTMLElement
    );
    expect(blrCaptionGroup).to.exist;
  });

  it('renders a blr-form-caption-group element with new values', async () => {
    const element = await fixture(
      BlrFormCaptionGroupRenderFunction({
        ...sampleParams,
        hintMessage: 'New hint message added',
        errorMessage: 'New error message added',
      })
    );

    const blrCaptionGroupHintLabel = querySelectorDeep(
      'div.blr-form-caption-group-container blr-form-caption div.blr-form-caption.hint .blr-caption-text',
      element.getRootNode() as HTMLElement
    );

    const blrCaptionGroupErrorLabel = querySelectorDeep(
      'div.blr-form-caption-group-container blr-form-caption div.blr-form-caption.error .blr-caption-text',
      element.getRootNode() as HTMLElement
    );

    const blrHintMessage = blrCaptionGroupHintLabel?.textContent;
    const blrErrorMessage = blrCaptionGroupErrorLabel?.textContent;

    expect(blrHintMessage).to.include('New hint message added');
    expect(blrErrorMessage).to.include('New error message added');
  });

  it('renders blr-form-caption-group with an empty block', async () => {
    const element = await fixture(
      BlrFormCaptionGroupRenderFunction({
        ...sampleParams,
        hintMessage: '',
        errorMessage: '',
      })
    );

    const blrCaptionGroupHintLabel = querySelectorDeep(
      'div.blr-form-caption-group-container blr-form-caption div.blr-form-caption.hint .blr-caption-text',
      element.getRootNode() as HTMLElement
    );

    const blrCaptionGroupErrorLabel = querySelectorDeep(
      'div.blr-form-caption-group-container blr-form-caption div.blr-form-caption.error .blr-caption-text',
      element.getRootNode() as HTMLElement
    );

    const blrHintMessage = blrCaptionGroupHintLabel?.textContent;
    const blrErrorMessage = blrCaptionGroupErrorLabel?.textContent;

    expect(blrHintMessage).to.include('');
    expect(blrErrorMessage).to.include('');
  });

  it('renders blr-form-caption-group with hint icon', async () => {
    const element = await fixture(
      BlrFormCaptionGroupRenderFunction({
        ...sampleParams,
        hintIcon: 'blr360',
      })
    );

    const blrCaptionGroupHintWithIcon = querySelectorDeep(
      'div.blr-form-caption-group-container blr-form-caption div.blr-form-caption.hint .blr-icon svg',
      element.getRootNode() as HTMLElement
    );

    expect(blrCaptionGroupHintWithIcon).to.exist;
  });

  it('renders blr-form-caption-group with error icon', async () => {
    const element = await fixture(
      BlrFormCaptionGroupRenderFunction({
        ...sampleParams,
        errorIcon: 'blr360',
      })
    );

    const blrCaptionGroupErrorWithIcon = querySelectorDeep(
      'div.blr-form-caption-group-container blr-form-caption div.blr-form-caption.error .blr-icon svg',
      element.getRootNode() as HTMLElement
    );

    expect(blrCaptionGroupErrorWithIcon).to.exist;
  });

  it('renders blr-form-caption-group with no icon', async () => {
    const element = await fixture(
      BlrFormCaptionGroupRenderFunction({
        ...sampleParams,
        hintIcon: undefined,
        errorIcon: undefined,
      })
    );

    const blrCaptionGroupHintWithoutIcon = querySelectorDeep(
      'div.blr-form-caption-group-container blr-form-caption div.blr-form-caption.hint .blr-icon svg',
      element.getRootNode() as HTMLElement
    );

    const blrCaptionGroupErrorWithoutIcon = querySelectorDeep(
      'div.blr-form-caption-group-container blr-form-caption div.blr-form-caption.error .blr-icon svg',
      element.getRootNode() as HTMLElement
    );

    expect(blrCaptionGroupHintWithoutIcon).not.to.exist;
    expect(blrCaptionGroupErrorWithoutIcon).not.to.exist;
  });

  it('renders a <div> element inside Shadow DOM for blr-form-caption-group when a hint message is provided', async () => {
    const element = await fixture(
      BlrFormCaptionGroupRenderFunction({ ...sampleParams, showHint: true, hintMessage: 'Hint Message' })
    );
    const blrLabel = querySelectorDeep(
      'div.blr-form-caption-group-container blr-form-caption div.blr-form-caption.hint',
      element.getRootNode() as HTMLElement
    );
    expect(blrLabel).to.exist;
  });

  it('renders a <div> element inside Shadow DOM for blr-form-caption-group when an error message is provided', async () => {
    const element = await fixture(
      BlrFormCaptionGroupRenderFunction({ ...sampleParams, showError: true, errorMessage: 'Error Message' })
    );
    const blrLabel = querySelectorDeep(
      'div.blr-form-caption-group-container blr-form-caption div.blr-form-caption.error',
      element.getRootNode() as HTMLElement
    );
    expect(blrLabel).to.exist;
  });
});
