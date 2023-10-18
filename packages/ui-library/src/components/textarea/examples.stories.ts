import { html } from 'lit-html';
import { BlrTextareaRenderFunction, BlrTextareaType } from './index';
import './index';
import { FormSizes } from '../../globals/constants';

const defaultParams: BlrTextareaType = {
  errorIcon: '',
  hint: '',
  pattern: '',
  showCounter: '',
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
  title: 'Design System/Web Components/BlrTextarea/Text area',
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    docs: {
      description: {
        component: ` 
 <div>
        <p>Text area allows users to input and edit multiline text. Unlike a simple text input field that is typically used for single-line text, a text area provides a larger space for users to enter and manipulate multiple lines of text. +
                Text area components are used in various contexts where users need to input or edit longer pieces of text, such as comment boxes, message composition in messaging apps, notes, and description fields in forms.
        </p>
        <ul>
        <li><a href="/story/design-system-web-components-blrtextarea-text-area--mein-beispiel"><strong>Docs</strong></a></li>
        <li>Appearance <a href="/story/design-system-web-components-blrtextarea-text-area--mein-beispiel"><strong>Appearance</strong></a>
            <ul>
                <li><a href="/story/design-system-web-components-blrtextarea-text-area--mein-beispiel">Sizing</a></li>
                <li><a href="/story/design-system-web-components-blrtextarea-text-area--mein-beispiel">Resize</a></li>
            </ul>
        </li>
        <li>Content/ Settings
            <ul>
                <li><a href="/story/design-system-web-components-blrtextarea-text-area--mein-beispiel">Example 1</a>
                </li>
            </ul>
        </li>
        
        </ul>
        wow
        </div>
        
        `,
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
    size: {
      options: FormSizes,
      control: { type: 'radio' },
      name: 'Size',
      description: 'test Size',
      defaultValue: '',
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
        justify-content: center;
        flex-direction: column;
        align-items: flex-start;
        gap: 1rem;
        width: 20rem;
      }
      .column {
        display: flex;
        flex-direction: column;
      }
    </style>
    <div class="wrapper">
      <div class="column">
        <div class="stories-textarea">
          ${renderTextareaExample({
            ...defaultParams,
            storybookLabel: 'Storybook Label 1',
            theme: 'Light',
            size: 'sm',
            label: 'Text area SM',
            cols: 40,
            rows: 5,
          })}
          ${renderTextareaExample({
            ...defaultParams,
            storybookLabel: 'Storybook Label 2',
            theme: 'Light',
            size: 'md',
            label: 'Text area MD',
            cols: 40,
            rows: 5,
          })}
          ${renderTextareaExample({
            ...defaultParams,
            storybookLabel: 'Storybook Label 3',
            theme: 'Light',
            size: 'lg',
            label: 'Text area LG',
            cols: 40,
            rows: 5,
          })}
        </div>
      </div>
    </div>
  `;
};
Example1.parameters = {
  backgrounds: {
    default: 'Light',
  },
  docs: {
    description: {
      story: 'beschreibung2',
    },
  },
};

Example1.storyName = 'Example 1';

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
      .column {
        display: flex;
        flex-direction: column;
      }
    </style>
    <div class="wrapper">
      <div class="column">
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
      <div class="column">
        <p style="text-align: center">Error</p>
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
export const description = ({}) =>
  html`
    ${fontStyle}
    <p>This is a Description</p>
  `;
description.story = {
  name: 'Description',
  parameters: {
    docs: {
      description: {
        story: 'another Description',
      },
    },
  },
};

Example4.storyName = 'Textarea  Light Theme Focus Default';

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
      .column {
        display: flex;
        flex-direction: column;
      }
    </style>
    <div class="wrapper">
      <div class="column">
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
      <div class="column">
        <p style="text-align: center; color: white">Error</p>
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
  (Example2.storyName = 'Textarea  Dark Theme');

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

export const isResizeable = ({ placeholder }) =>
  html`
    ${fontStyle}
    ${BlrTextareaRenderFunction({
      ...defaultParams,
      placeholder: placeholder,
      value: '',
      isResizeable: true,
    })}
  `;
isResizeable.storyName = 'isResizeable';
isResizeable.args = {
  placeholder: defaultParams.placeholder,
  isResizeable: true,
};

export const MeinBeispiel = () =>
  html`
    <div class="stories-textarea">
      ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Rest', theme: 'Dark' })}
      ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Hover', theme: 'Dark' })}
      ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Pressed', theme: 'Dark' })}
      ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Focus', theme: 'Dark', shouldFocus: true })}
      ${renderTextareaExample({ ...defaultParams, storybookLabel: 'Disabled', theme: 'Dark', disabled: true })}
      ${renderTextareaExample({ ...defaultParams, storybookLabel: 'readOnly', theme: 'Dark', readonly: true })}
    </div>
  `;
MeinBeispiel.story = {
  name: 'test2',
  parameters: {
    docs: {
      description: {
        story: 'another description',
      },
    },
  },
};
