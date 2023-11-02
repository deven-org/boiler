import { BlrTextareaRenderFunction, BlrTextareaType } from '.';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { getRandomString } from '../../utils/get-random.string';

const sampleParams: BlrTextareaType = {
  textareaId: '#1',
  label: 'Label',
  labelAppendix: '(Optional)',
  size: 'md',
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
  theme: 'Light',
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

    // in html disabled will become an empty string when its true
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
        showHint: true,
        hintIcon: 'blrInfo',
      })
    );

    const textarea = querySelectorDeep('textarea', element.getRootNode() as HTMLElement);
    const formHint = querySelectorDeep('blr-form-hint', textarea?.getRootNode() as HTMLElement);
    const hintIcon = querySelectorDeep('blr-icon', formHint?.getRootNode() as HTMLElement);
    const svg = querySelectorDeep('svg', hintIcon?.getRootNode() as HTMLElement);

    const rect = svg?.getBoundingClientRect();

    expect(rect).have.property('width');
    expect(rect).have.property('height');

    expect(rect?.width).to.be.greaterThan(0);
    expect(rect?.height).to.be.greaterThan(0);
  });
});
