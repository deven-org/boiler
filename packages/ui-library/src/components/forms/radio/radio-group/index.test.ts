import '@boiler/ui-library/dist/';

import { BlrRadioGroupRenderFunction } from './renderFunction';
import type { BlrRadioGroupType } from '@boiler/ui-library/dist/';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { BlrRadioRenderFunction } from '../renderFunction';
import { html } from 'lit';

const sampleParams: BlrRadioGroupType = {
  theme: 'Light',
  size: 'md',
  disabled: false,
  name: 'Default Name',
  required: false,
  readonly: false,
  showLegend: true,
  hasHint: true,
  hasGroupLabel: true,
  groupHintMessage: 'This is a sample hint message',
  groupHintIcon: 'blrInfo',
  hasError: false,
  groupErrorMessage: '',
  groupErrorIcon: undefined,
  hideLabel: false,
};

const sampleRadioInputs = html`
  ${BlrRadioRenderFunction({
    checked: false,
    disabled: false,
    name: 'Radio 1',
    optionId: 'radio1',
    label: 'harald',
    required: false,
    readonly: false,
    hasHint: true,
    hasError: false,
    theme: 'Light',
  })}
  ${BlrRadioRenderFunction({
    checked: false,
    disabled: false,
    name: 'Radio 2',
    optionId: 'radio2',
    label: 'oscar',
    required: false,
    readonly: false,
    hasHint: true,
    hasError: false,
    theme: 'Light',
  })}
`;

describe('blr-radio-group', () => {
  it('is having a radioGroup containing the right className', async () => {
    const element = await fixture(BlrRadioGroupRenderFunction(sampleParams, sampleRadioInputs));

    const radioGroup = querySelectorDeep('input[type="radio"]', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('input-control');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrRadioGroupRenderFunction(sampleParams, sampleRadioInputs));

    const radioGroup = querySelectorDeep('.blr-radio-group', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('md');
  });

  it('is rendering a radio input inside slot', async () => {
    const element = await fixture(BlrRadioGroupRenderFunction(sampleParams, sampleRadioInputs));
    const radioInput = querySelectorDeep('blr-radio', element.getRootNode() as HTMLElement);

    expect(radioInput).to.exist;
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrRadioGroupRenderFunction({ ...sampleParams, size: 'sm' }, sampleRadioInputs));

    const radioGroup = querySelectorDeep('.blr-radio-group', element.getRootNode() as HTMLElement);
    const className = radioGroup?.className;

    expect(className).to.contain('sm');
  });

  it('has a error state if hasError is true', async () => {
    const element = await fixture(
      BlrRadioGroupRenderFunction(
        {
          ...sampleParams,
          hasError: true,
        },
        sampleRadioInputs
      )
    );

    const legendWrapper = querySelectorDeep('.blr-legend-wrapper', element.getRootNode() as HTMLElement);
    const legend = querySelectorDeep('legend', legendWrapper?.getRootNode() as HTMLElement);
    const className = legend?.className;

    expect(className).to.contain('error');
  });

  it('does not have an error state if hasError is false', async () => {
    const element = await fixture(
      BlrRadioGroupRenderFunction(
        {
          ...sampleParams,
          hasError: false,
        },
        sampleRadioInputs
      )
    );

    const legendWrapper = querySelectorDeep('.blr-legend-wrapper', element.getRootNode() as HTMLElement);
    const legend = querySelectorDeep('legend', legendWrapper?.getRootNode() as HTMLElement);
    const className = legend?.className;

    expect(className).not.to.contain('error');
  });
});
