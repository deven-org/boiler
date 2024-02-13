import '@boiler/ui-library/dist/';
import { getRandomString } from '../../utils/get-random.string';
import { BlrTextareaRenderFunction } from './renderFunction';
import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep, querySelectorAllDeep } from 'query-selector-shadow-dom';
import { BlrTextareaType } from '.';

const sampleParams: BlrTextareaType = {
  theme: 'Light',
  size: 'md',
  isResizeable: 'both',
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
  hintIcon: 'blrInfo',
  hasHint: true,
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  disabled: false,
  readonly: false,
  required: false,
  hasError: false,
  errorIcon: 'blr360',
  arialabel: 'TextArea',
  textareaId: '#674',
  name: 'TextArea',
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
      })
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
      })
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
      })
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
      })
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
      })
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const disabled = textarea?.getAttribute('disabled');

    // in html disabled will become an empty string when it's true
    expect(disabled).to.be.equal('');
  });

  it('is is disabled when attribute disabled is set', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        disabled: false,
      })
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
        hintIcon: 'blrInfo',
        hasError: true,
        errorIcon: 'blrErrorFilled',
      })
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
        hintIcon: 'blrInfo',
      })
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const formHint = querySelectorDeep('blr-form-caption', textarea?.getRootNode() as HTMLElement);
    const hintIcon = querySelectorDeep('blr-icon', formHint?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', hintIcon?.getRootNode() as HTMLElement);

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
        errorIcon: 'Peter',
      })
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const formHint = querySelectorDeep('blr-form-caption', textarea?.getRootNode() as HTMLElement);
    const hintIcon = querySelectorDeep('blr-icon', formHint?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('path', hintIcon?.getRootNode() as HTMLElement);

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
        errorIcon: 'blrErrorFilled',
      })
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const formHint = querySelectorDeep('blr-form-caption', textarea?.getRootNode() as HTMLElement);
    const hintIcon = querySelectorDeep('blr-icon', formHint?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('path', hintIcon?.getRootNode() as HTMLElement);

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
    const element = await fixture(BlrTextareaRenderFunction({ ...sampleParams, size: 'sm' }));

    const textareaWrapper = querySelectorDeep('.textarea-input-control', element.getRootNode() as HTMLElement);
    const className = textareaWrapper?.className;

    expect(className).to.contain('sm');
  });
});
