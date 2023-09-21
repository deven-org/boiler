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
  shouldFocus: false,

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

interface StorybookTextareaType extends BlrTextareaType {
  storybookLabel: string;
}

const fontStyle = html`
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro&display=swap');
    @import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
  </style>
`;

export default {
  title: 'Design System/Web Components/BlrTextarea/Examples',
  parameters: {
    // backgrounds: {
    //     default: 'light',
    // },
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

const renderTextareaExample = (params: StorybookTextareaType) => html`
  <div class="story-textarea">
    <p>${params.storybookLabel}</p>
    ${BlrTextareaRenderFunction(params)}
  </div>
`;

export const Example1 = () => {
  return html`
    ${fontStyle}
    <style>
      .wrapper {
        font-family: 'Source Sans Pro', 'Source Code Pro', sans-serif;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
      }
      .stories-textarea {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
      }
      .story-textarea {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 20rem;
      }
      .row {
        display: flex;
        flex-direction: column;
      }
    </style>
    <div class="wrapper">
      <div class="row">
        <p style="text-align: center">Default</p>
        <div class="stories-textarea">
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Rest', theme: 'Light' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Hover', theme: 'Light' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Pressed', theme: 'Light' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Focus', theme: 'Light', shouldFocus: true })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Disabled', theme: 'Light', disabled: true })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'readOnly', theme: 'Light', readonly: true })}
        </div>
      </div>
      <div class="row">
        <p style="text-align: center">Default</p>
        <div class="stories-textarea">
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Rest', hasError: true, theme: 'Light' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Hover', hasError: true, theme: 'Light' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Pressed', hasError: true, theme: 'Light' })}
          ${renderTextareaExample({
            ...defaultParams,
            storybookLabel: 'Focus',
            hasError: true,
            theme: 'Light',
            shouldFocus: true,
          })}
        </div>
      </div>
    </div>
  `;
};
Example1.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Example1.storyName = 'Textarea Examples Light Theme Focus Error';

export const Example4 = () => {
  return html`
    ${fontStyle}
    <style>
      .wrapper {
        font-family: 'Source Sans Pro', 'Source Code Pro', sans-serif;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
      }
      .stories-textarea {
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
      }
      .story-textarea {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 20rem;
      }
      .row {
        display: flex;
        flex-direction: column;
      }
    </style>
    <div class="wrapper">
      <div class="row">
        <p style="text-align: center">Default</p>
        <div class="stories-textarea">
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Rest', theme: 'Light' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Hover', theme: 'Light' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Pressed', theme: 'Light' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Focus', theme: 'Light', shouldFocus: true })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Disabled', theme: 'Light', disabled: true })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'readOnly', theme: 'Light', readonly: true })}
        </div>
      </div>
      <div class="row">
        <p style="text-align: center">Default</p>
        <div class="stories-textarea">
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Rest', hasError: true, theme: 'Light' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Hover', hasError: true, theme: 'Light' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Pressed', hasError: true, theme: 'Light' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Focus', hasError: true, theme: 'Light' })}
        </div>
      </div>
    </div>
  `;
};
Example4.parameters = {
  backgrounds: {
    default: 'light',
  },
};

Example4.storyName = 'Textarea Examples Light Theme Focus Default';

export const Example2 = () =>
  html`
    ${fontStyle}
    <style>
      .wrapper {
        font-family: 'Source Sans Pro', 'Source Code Pro', sans-serif;
        display: flex;
        width: 100%;
        flex-wrap: wrap;
      }

      .stories-textarea {
        display: flex;
        color: white;
        flex-wrap: wrap;
        flex-direction: column;
      }

      .story-textarea {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 1rem;
        width: 20rem;
      }
      .row {
        display: flex;
        flex-direction: column;
      }
    </style>
    <div class="wrapper">
      <div class="row">
        <p style="text-align: center; color: white">Default</p>
        <div class="stories-textarea">
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Rest', theme: 'Dark' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Hover', theme: 'Dark' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Pressed', theme: 'Dark' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Focus', theme: 'Dark', shouldFocus: true })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Disabled', theme: 'Dark', disabled: true })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'readOnly', theme: 'Dark', readonly: true })}
        </div>
      </div>
      <div class="row">
        <p style="text-align: center; color: white">Default</p>
        <div class="stories-textarea">
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Rest', hasError: true, theme: 'Dark' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Hover', hasError: true, theme: 'Dark' })}
          ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Pressed', hasError: true, theme: 'Dark' })}
          ${renderTextareaExample({
            ...defaultParams,
            storybookLabel: 'Focus',
            hasError: true,
            theme: 'Dark',
            shouldFocus: true,
          })}
        </div>
      </div>
    </div>
  `;
(Example2.parameters = {
  backgrounds: {
    default: 'dark',
  },
}),
  (Example2.storyName = 'Textarea Examples Dark Theme');

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
