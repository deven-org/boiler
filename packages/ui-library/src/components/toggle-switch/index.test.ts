import '@boiler/ui-library/dist/';

import { BlrToggleSwitchRenderFunction } from './renderFunction';

import { fixture, expect } from '@open-wc/testing';
import { querySelectorDeep } from 'query-selector-shadow-dom';
import { BlrToggleSwitchType } from '.';

const sampleParams: BlrToggleSwitchType = {
  toogleSwitchId: 'switch',
  label: 'Toggle Switch Option',

  disabled: false,
  readonly: false,
  active: false,
  onLabel: 'On',
  offLabel: 'Off',
  hasHint: true,
  hintMessage: 'Field is used for hint',
  hintMessageIcon: 'blrInfo',
  hasStateLabel: 'leading',
  theme: 'Light',
  name: 'Toogle Switch',
};

describe('blr-label-toggleswitch', () => {
  it('is having an input switch containing the right className', async () => {
    const element = await fixture(BlrToggleSwitchRenderFunction(sampleParams));

    const input = querySelectorDeep('input', element.getRootNode() as HTMLElement);
    const className = input?.className;

    expect(className).to.contain('input-control');
  });

  it('has a size md by default', async () => {
    const element = await fixture(BlrToggleSwitchRenderFunction(sampleParams));

    const input = querySelectorDeep('div.blr-label-toggleswitch', element.getRootNode() as HTMLElement);
    const className = input?.className;

    expect(className).to.contain('md');
  });

  it('has a size sm when "size" is set to "sm" ', async () => {
    const element = await fixture(BlrToggleSwitchRenderFunction({ ...sampleParams, sizeVariant: 'sm' }));

    const input = querySelectorDeep('div.blr-label-toggleswitch', element.getRootNode() as HTMLElement);
    const className = input?.className;

    expect(className).to.contain('sm');
  });

  it('shows hint when "hasHint" is true', async () => {
    const element = await fixture(
      BlrToggleSwitchRenderFunction({
        ...sampleParams,
        hasHint: true,
      })
    );

    const hint = querySelectorDeep('blr-form-caption', element.getRootNode() as HTMLElement);

    expect(hint).to.exist;
  });

  it('does not show hint when "hasHint" is false', async () => {
    const element = await fixture(
      BlrToggleSwitchRenderFunction({
        ...sampleParams,
        hasHint: false,
      })
    );

    const hint = querySelectorDeep('blr-form-caption', element.getRootNode() as HTMLElement);

    expect(hint).not.to.exist;
  });
});
