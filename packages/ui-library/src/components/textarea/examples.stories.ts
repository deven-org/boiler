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
  argTypes: {
    placeholder: {
      name: 'Placeholder',
      description: 'Defines a short hint intended to aid the user with data entry when the component has no value.',
      defaultValue: '',
      control: {
        type: 'text',
        label: 'Enter Text',
      },
    },
  },
};

export const Example1 = () => {
  return html`
    ${fontStyle}
    <style>
      .stories-textarea {
        font-family: 'Source Sans Pro', 'Source Code Pro', sans-serif;
      }
      .container {
        width: 23rem;
        height: 64px;
      }
    </style>
    <div class="stories-textarea">
      <h3>Default</h3>
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
};
Example1.storyName = 'Textarea Examples Light Theme';

export const Example2 = () =>
  html`
    ${fontStyle}
    <style>
      .stories-textarea {
        font-family: 'Source Sans Pro', 'Source Code Pro', sans-serif;
        color: white;
        width: 23rem;
        height: 64px;
      }
    </style>
    <div class="stories-textarea">
      <h3>Default</h3>
      ${BlrTextareaRenderFunction({
        ...defaultParams,
        theme: 'Dark',
      })}
      <h3>Disabled</h3>
      ${BlrTextareaRenderFunction({
        ...defaultParams,
        disabled: true,
        theme: 'Dark',
      })}
      <h3>HasError</h3>
      ${BlrTextareaRenderFunction({
        ...defaultParams,
        hasError: true,
        theme: 'Dark',
      })}
    </div>
  `;
Example2.params = {
  darkMode: {
    current: 'dark',
  },
};
Example2.storyName = 'Textarea Examples Dark Theme';

export const Example3 = () =>
  html`
    ${BlrTextareaRenderFunction({
      ...defaultParams,
      hasError: true,
    })}
  `;
Example3.storyName = 'hasError';

export const InteractivePlaceholder = ({ placeholder }) =>
  html`
    ${fontStyle}
    ${BlrTextareaRenderFunction({
      ...defaultParams,
      placeholder: placeholder,
      value: '',
    })}
  `;

InteractivePlaceholder.storyName = 'Interaktiver Placeholder';
InteractivePlaceholder.args = {
  placeholder: defaultParams.placeholder,
};
