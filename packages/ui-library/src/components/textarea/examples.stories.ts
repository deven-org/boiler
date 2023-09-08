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
  minLength: 0,
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
  hintText: 'Rindfleischetikettierungs',

  hasError: false,
  errorMessage: "OMG it's an error",

  isResizeable: true,
};

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
    ${BlrTextareaRenderFunction({
      ...defaultParams,
      theme: 'Light',
    })}
  `;
Example1.storyName = 'Example1';

export const Example2 = () =>
  html`
    ${BlrTextareaRenderFunction({
      ...defaultParams,
      theme: 'Dark',
    })}
  `;
Example2.storyName = 'Example2';
