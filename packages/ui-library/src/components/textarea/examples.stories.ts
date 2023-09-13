import { html } from 'lit-html';
import { BlrTextareaRenderFunction, BlrTextareaType } from './index';
import './index';

const defaultParams: BlrTextareaType = {
  theme: 'Light',
  textareaId: '#1',
  label: 'Label',
  labelAppendix: '(Optional)',
  size: 'md',
  value: 'Rindfleischetikettierungsüberwachungsaufgabenübertragunsgesetz',
  maxLength: 140,
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  cols: 20,
  rows: 5,

  placeholder: 'Type your message here ..',
  required: false,
  disabled: false,
  readonly: false,

  showHint: true,
  hintIcon: 'blrInfo',
  hintText: 'hint message',

  hasError: false,
  errorMessage: "OMG it's an error",

  isResizeable: true,
};

const fontStyle = html`
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
  </style>
`;

export default {
  title: 'Design System/Web Components/BlrTextarea/Examples',
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
    <div>
      <h3>Default</h3>
      ${fontStyle}
      ${BlrTextareaRenderFunction({
        ...defaultParams,
        theme: 'Light',
      })}
      <h3>Disabled</h3>
      ${BlrTextareaRenderFunction({
        ...defaultParams,
        disabled: true,
      })}
      <h3>HasError</h3>
      ${BlrTextareaRenderFunction({
        ...defaultParams,
        hasError: true,
      })}
    </div>
  `;
Example1.storyName = 'Default';

export const Example2 = () =>
  html`
    ${BlrTextareaRenderFunction({
      ...defaultParams,
      disabled: true,
    })}
  `;
Example2.storyName = 'Disabled';

export const Example3 = () =>
  html`
    ${BlrTextareaRenderFunction({
      ...defaultParams,
      hasError: true,
    })}
  `;
Example3.storyName = 'hasError';
