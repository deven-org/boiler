import { BlrTextareaRenderFunction, BlrTextareaType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { getRandomString } from '../../../utils/get-random-string';

const sampleParams: BlrTextareaType = {
  theme: 'Light',
  sizeVariant: 'md',
  resize: 'both',
  cols: 40,
  rows: 4,
  placeholder: 'Here is the placeholder',
  value: '',
  minLength: 0,
  maxLength: 140,
  hasLabel: true,
  label: 'Label',
  labelAppendix: '(Optional)',
  value: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  maxLength: 140,
  cols: 20,
  rows: 5,
  errorMessage: "OMG it's an error",
  placeholder: 'Type your message here ..',
  hintText: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  hintIcon: 'blrInfo',
  showHint: true,
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  disabled: false,
  readonly: false,
  required: false,
  hasError: false,
  errorMessage: ' ',
  errorMessageIcon: '',
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

  it('is having a a visible hint icon', async () => {
    const element = await fixture(
      BlrTextareaRenderFunction({
        ...sampleParams,
        hasHint: true,
        hintMessageIcon: 'blrInfo',
      })
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const formHint = querySelectorDeep('blr-form-hint', textarea?.getRootNode() as HTMLElement);
    const hintMessageIcon = querySelectorDeep('blr-icon', formHint?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', hintMessageIcon?.getRootNode() as HTMLElement);

    const rect = svg?.getBoundingClientRect();

    expect(rect).have.property('width');
    expect(rect).have.property('height');

    expect(rect?.width).to.be.greaterThan(0);
    expect(rect?.height).to.be.greaterThan(0);
  });

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
