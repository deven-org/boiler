import '@boiler/ui-library';
import { getRandomString } from '../../utils/get-random.string.js';
import { BlrTextareaRenderFunction } from './renderFunction.js';
import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep, querySelectorAllDeep } from 'query-selector-shadow-dom';
import type { BlrTextareaType } from './index.js';

const sampleParams: BlrTextareaType = {
  theme: 'Light',
  sizeVariant: 'md',
  resize: 'both',
  cols: 40,
  rows: 4,
  value: '',
  minLength: 0,
  maxLength: 140,
  hasLabel: true,
  label: 'Label',
  labelAppendix: '(Optional)',
  errorMessage: "OMG it's an error",
  hintMessage: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  hintMessageIcon: 'blrInfo',
  hasHint: true,
  hasCounter: true,
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  disabled: false,
  readonly: false,
  required: false,
  hasError: false,
  errorMessageIcon: 'blr360',
  arialabel: 'TextArea',
  textAreaId: '#674',
  name: 'TextArea',
  placeholder: 'Placeholder-text',
};

describe('blr-textarea', () => {
  it('is having a textarea containing the right className', async () => {
    const element = await fixture(BlrTextareaRenderFunction(sampleParams));
    const inputWrapper = querySelectorDeep('.input-wrapper', element.getRootNode() as HTMLElement);
    const textarea = querySelectorDeep('textarea', inputWrapper?.getRootNode() as HTMLElement);
    const className = textarea?.className;

    expect(className).to.contain('textarea-input-control');
  });

  it('is is showing random placeholder', async () => {
    const randomString = getRandomString();

    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        placeholder: randomString,
      }),
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const placeholder = textarea?.getAttribute('placeholder');

    expect(placeholder).to.be.equal(randomString);
  });

  it('is doesnt have a placeholder attribute if placeholder is empty', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        placeholder: undefined,
      }),
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const placeholder = textarea?.getAttribute('placeholder');

    expect(placeholder).to.be.equal(null);
  });

  it('is is applying maxLength of 5', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        maxLength: 5,
      }),
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const maxLength = textarea?.getAttribute('maxlength');

    expect(maxLength).to.be.equal('5');
  });

  it('is doesnt have a maxLength attribute if maxLength is empty', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        maxLength: undefined,
      }),
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const maxLength = textarea?.getAttribute('maxlength');

    expect(maxLength).to.be.equal(null);
  });

  it('is is disabled when attribute disabled is set', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        disabled: true,
      }),
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const disabled = textarea?.getAttribute('disabled');

    // in html disabled will become an empty string when it's true
    expect(disabled).to.be.equal('');
  });

  it('has error Icon set to undefined', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        hasHint: false,
        hasError: true,
        errorMessageIcon: undefined,
      }),
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const formCaption = querySelectorDeep('.blr-form-caption', textarea?.getRootNode() as HTMLElement);
    const errorMessageIcon = querySelectorDeep('blr-icon', formCaption?.getRootNode() as HTMLElement);
    expect(errorMessageIcon).to.not.exist;
  });

  it('is is disabled when attribute disabled is set', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        disabled: false,
      }),
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const disabled = textarea?.getAttribute('disabled');

    // in html disabled will become null when its false
    expect(disabled).to.be.equal(null);
  });

  it('is shows adjacent caption components in caption group slot', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        hasHint: true,
        hintMessageIcon: 'blrInfo',
        hasError: true,
        errorMessageIcon: 'blrErrorFilled',
      }),
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const formCaptions = querySelectorAllDeep('blr-form-caption', textarea?.getRootNode() as HTMLElement);
    const formCaptionHint = querySelectorDeep('.blr-form-caption', formCaptions[0] as HTMLElement);
    const hintClassName = formCaptionHint?.className;

    const formCaptionError = querySelectorDeep('.blr-form-caption', formCaptions[1] as HTMLElement);
    const errorClassName = formCaptionError?.className;

    expect(hintClassName).to.contain('hint');
    expect(errorClassName).to.contain('error');
  });

  it('is having a visible hint icon', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        hasHint: true,
        hintMessageIcon: 'blrInfo',
      }),
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const formHint = querySelectorDeep('blr-form-caption', textarea?.getRootNode() as HTMLElement);
    const hintMessageIcon = querySelectorDeep('blr-icon', formHint?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', hintMessageIcon?.getRootNode() as HTMLElement);

    const rect = svg?.getBoundingClientRect();

    expect(rect).have.property('width');
    expect(rect).have.property('height');

    expect(rect?.width).to.be.greaterThan(0);
    expect(rect?.height).to.be.greaterThan(0);
  });

  /*
  We have to take care about the promise,
  the path wont be there after first render, because icons are now lazy loaded

  it('is not having a visible error icon if we pass a wrong key', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        hasError: true,
        errorMessageIcon: 'Peter',
      })
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const formHint = querySelectorDeep('blr-form-caption', textarea?.getRootNode() as HTMLElement);
    const hintMessageIcon = querySelectorDeep('blr-icon', formHint?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('path', hintMessageIcon?.getRootNode() as HTMLElement);

    const rect = svg?.getBoundingClientRect();

    expect(rect).have.property('width');
    expect(rect).have.property('height');

    expect(rect?.width).to.be.greaterThan(0);
    expect(rect?.height).to.be.greaterThan(0);
  });

  it('is having a visible error icon', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        hasError: true,
        errorMessageIcon: 'blrErrorFilled',
      })
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const formHint = querySelectorDeep('blr-form-caption', textarea?.getRootNode() as HTMLElement);
    const hintMessageIcon = querySelectorDeep('blr-icon', formHint?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('path', hintMessageIcon?.getRootNode() as HTMLElement);

    const rect = svg?.getBoundingClientRect();

    expect(rect).have.property('width');
    expect(rect).have.property('height');

    expect(rect?.width).to.be.greaterThan(0);
    expect(rect?.height).to.be.greaterThan(0);
  });
  */

  it('has a size md by default', async () => {
    const element = await fixture(BlrTextareaRenderFunction(sampleParams));

    const textareaWrapper = querySelectorDeep('.textarea-input-control', element.getRootNode() as HTMLElement);
    const className = textareaWrapper?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrTextareaRenderFunction({ ...sampleParams, sizeVariant: 'sm' }));

    const textareaWrapper = querySelectorDeep('.textarea-input-control', element.getRootNode() as HTMLElement);
    const className = textareaWrapper?.className;

    expect(className).to.contain('sm');
  });

  it('is shows a counter when the hasCounter enabled is', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        hasCounter: true,
      }),
    );
    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const hasCounter = textarea?.getAttribute('hasCounter');

    // in html disabled will become an empty string when it's true
    expect(hasCounter).not.to.be.equal('');
  });

  it('is doesnt shows a counter when the hasCounter disabled is', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        hasCounter: false,
      }),
    );
    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const hasCounter = textarea?.getAttribute('hasCounter');

    // in html disabled will become an empty string when it's true
    expect(hasCounter).to.be.equal(null);
  });

  it('should align counter to the right when hasError, hasHint, hintMessage, errorMessage is disabled and hasCounter is enabled', async () => {
    const elementWithoutError = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        hasError: false,
        hasHint: false,
        errorMessage: '',
        hintMessage: '',
        hasCounter: true,
      }),
    );
    const counterContainerWithoutError = querySelectorDeep(
      '.blr-textarea-info-container',
      elementWithoutError.getRootNode() as HTMLElement,
    );

    expect(counterContainerWithoutError?.classList.contains('error')).to.be.false;
    expect(counterContainerWithoutError?.classList.contains('hint')).to.be.false;
    expect(counterContainerWithoutError?.classList.contains('error-message')).to.be.false;
    expect(counterContainerWithoutError?.classList.contains('hint-message')).to.be.false;
    const styleWithoutError = getComputedStyle(counterContainerWithoutError!);
    expect(styleWithoutError.justifyContent).to.equal('right');
  });

  it('should align counter to the right when hasError, hasCounter is enabled and hasHint, errormessage is disabled', async () => {
    const elementWithError = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        hasError: true,
        hasHint: false,
        errorMessage: '',
        hintMessage: '',
        hasCounter: true,
      }),
    );
    const counterContainerWithError = querySelectorDeep(
      '.blr-textarea-info-container',
      elementWithError.getRootNode() as HTMLElement,
    );

    expect(counterContainerWithError?.classList.contains('error')).to.be.true;
    expect(counterContainerWithError?.classList.contains('hint')).to.be.false;
    expect(counterContainerWithError?.classList.contains('error-message')).to.be.false;
    expect(counterContainerWithError?.classList.contains('hint-message')).to.be.false;
    const styleWithError = getComputedStyle(counterContainerWithError!);
    expect(styleWithError.justifyContent).to.equal('right');
  });

  it('should align counter to the right and adds a space between hint message and error message when hasError, hasCounter and hasHint is enabled', async () => {
    const elementWithErrorAndHint = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        hasError: true,
        hasHint: true,
        hasCounter: true,
      }),
    );
    const counterContainerWithErrorAndHint = querySelectorDeep(
      '.blr-textarea-info-container',
      elementWithErrorAndHint.getRootNode() as HTMLElement,
    );

    expect(counterContainerWithErrorAndHint?.classList.contains('error')).to.be.true;
    expect(counterContainerWithErrorAndHint?.classList.contains('hint')).to.be.true;
    const styleWithErrorAndHint = getComputedStyle(counterContainerWithErrorAndHint!);
    expect(styleWithErrorAndHint.justifyContent).to.equal('space-between');
  });
});
