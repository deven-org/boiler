/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrNumberInputRenderFunction, BlrNumberInputType } from './index';
import './index';

const defaultParams: BlrNumberInputType = {
  placeholder: 'Type your message here ..',
  disabled: false,
  variant: 'mode2',
  theme: 'Light',
  size: 'sm',
  numberInputId: 'egal',
  label: 'Hello',
  showHint: false,
  hintIcon: 'blr360Lg',
  numberFormat: '%f',
  value: 10.99999999,
};

export default {
  title: 'Design System/Web Components/BlrNumberInput/NumberFormat Examples',
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
    ${BlrNumberInputRenderFunction({
      ...defaultParams,
    })}
  `;

Example1.storyName = 'Default (%f)';

export const Example2 = () =>
  html`
    1 place after decimal point
    ${BlrNumberInputRenderFunction({
      ...defaultParams,
      numberFormat: '%.1f',
    })}
  `;

Example2.storyName = '1 decimal (%.1f)';

export const Example3 = () =>
  html`
    1 place after decimal point
    ${BlrNumberInputRenderFunction({
      ...defaultParams,
      numberFormat: '%.2f',
    })}
  `;

Example3.storyName = '2 decimal (%.2f)';

export const Example4 = () =>
  html`
    5 zeroes padded from the left
    ${BlrNumberInputRenderFunction({
      ...defaultParams,
      numberFormat: '%05d',
    })}
  `;

Example4.storyName = '5 zeroes padded from the left (%05d)';
