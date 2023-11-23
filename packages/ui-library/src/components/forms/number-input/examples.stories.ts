/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrNumberInputRenderFunction, BlrNumberInputType } from './index';

const defaultParams: BlrNumberInputType = {
  placeholder: 'Type your message here ..',
  disabled: false,
  variant: 'mode3',
  theme: 'Light',
  size: 'sm',
  numberInputId: 'egal',
  label: 'Hello',
  hasHint: false,
  hintIcon: 'blr360',
  step: 1,
  value: 99,
};

export default {
  title: 'Design System/Web Components/Forms/NumberInput',
  parameters: {
    viewMode: 'story',
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
  },
};

export const Example1 = () =>
  html`
    Default format
    <div style="max-width: 290px;">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
      })}
    </div>
  `;

Example1.storyName = 'Default';

export const Example2 = () =>
  html`
    Percent format
    <div style="max-width: 290px;">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        unit: '%',
        totalDigits: 3,
      })}
    </div>
  `;

Example2.storyName = 'Percent';

export const Example3 = () =>
  html`
    Percent format
    <div style="max-width: 290px;">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        unit: '$',
        prependUnit: true,
        totalDigits: 3,
        fractionDigits: 2,
      })}
    </div>
  `;

Example3.storyName = 'USD';
