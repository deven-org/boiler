/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextareaRenderFunction, BlrTextareaType } from './index';
import { FormSizes } from '../../globals/constants';
import './index';
import { action } from '@storybook/addon-actions';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { PureIconKeys } from '@boiler/icons';

// Shared Style for Story
const sharedStyles = html`
  <style>
    .wrapper {
      display: flex;
      justify-content: center;
    }
    .stories-textarea {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
`;
// Default parameters for Textarea component
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
  value: '',
  maxLength: 140,
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  cols: 20,
  rows: 5,
  shouldFocus: false,

  placeholder: 'Add a message here',
  required: false,
  disabled: false,
  readonly: false,

  showHint: true,
  hintIcon: 'blrInfo',
  hintText: '<This is a small hint>',

  hasError: false,
  errorMessage: "OMG it's an error",

  isResizeable: true,
};

//Main Showcase Storybook Textarea
export default {
  title: 'Design System/Web Components/BlrTextarea',
  argTypes: {
    size: {
      name: 'Size',
      description: ' Description ',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    hintIcon: {
      if: { arg: 'showHint', eq: true },
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      table: {
        category: 'Content/ Settings',
      },
    },
    hintCounter: {
      if: { arg: 'showCounter', eq: true },
      table: {
        category: 'Content/ Settings',
      },
    },
    hintText: {
      if: { arg: 'showHint', eq: true },
      table: {
        category: 'Content/ Settings',
      },
    },
    errorIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasError', eq: true },
    },

    errorMessage: {
      if: { arg: 'hasError', eq: true },
    },

    warningLimitType: {
      name: 'Warning Limit Type',
      options: ['warningLimitInt', 'warningLimitPer'],
      control: {
        type: 'radio',
        labels: {
          warningLimitInt: 'Whole Number',
          warningLimitPer: 'Percentage',
        },
      },
    },
    // Only enabled if warningLimitType is Whole Number
    warningLimitInt: {
      control: 'number',
      name: 'Warning Limit (Whole Number)',
      if: { arg: 'warningLimitType', eq: 'warningLimitInt' },
      description: 'Please provide a whole number',
    },
    // Only enabled if warningLimitType is Percentage
    warningLimitPer: {
      control: { type: 'range', min: 1, max: 100, step: 1 },
      name: 'Warning Limit (Percentage)',
      if: { arg: 'warningLimitType', eq: 'warningLimitPer' },
      description:
        'Please provide a percentage. Warning limit is calculated based on the percentage of the maximum length reached ((maximum length / 100) * percentage value)',
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'story',
    previewTabs: {
      'storybook/docs/panel': {
        hidden: true,
      },
    },
    docs: {
      description: {
        component: ` <div style="background-color: aqua">
        <p>Text area allows users to input and edit multiline text. Unlike a simple text input field that is typically used for single-line text, a text area provides a larger space for users to enter and manipulate multiple lines of text. +
                Text area components are used in various contexts where users need to input or edit longer pieces of text, such as comment boxes, message composition in messaging apps, notes, and description fields in forms.
        </p>
        <ul>
        <li> <a href="/docs/design-system-web-components-blrtextarea--docs"><strong>Docs</strong></a></li>
        <li> <a href="/story/design-system-web-components-blrtextarea--sizes"><strong>Appearance</strong></a>
            <ul>
                <li> <a href="/story/design-system-web-components-blrtextarea--sizes"><strong>Sizing</strong></a></li>
                <li> <a href="/story/design-system-web-components-blrtextarea--sizes"><strong>Resize</strong></a></li>
            </ul>
        </li>
         <li> <a href="/story/design-system-web-components-blrtextarea--sizes"><strong>Content/ Settings</strong></a>
            <ul>
                <li> <a href="/story/design-system-web-components-blrtextarea--sizes"><strong>Placeholder</strong></a>
                </li>
            </ul>
        </li>
        
        </ul>
        wow\`
        </div>`,
      },
    },
  },
};

//Main Component for Textarea
export const BlrTextarea = ({
  textareaId,
  label,
  labelAppendix,
  placeholder,
  required,
  disabled,
  size,
  maxLength,
  warningLimitType,
  warningLimitInt,
  warningLimitPer,
  cols,
  rows,
  errorMessage,
  hintText,
  hintIcon,
  errorIcon,
  hasError,
  onChange,
  onFocus,
  onSelect,
  readonly,
  isResizeable,
  showHint,
  showCounter,
  value,
  theme,
}: BlrTextareaType) =>
  html`
    ${BlrTextareaRenderFunction({
      textareaId,
      label,
      labelAppendix,
      placeholder,
      required,
      disabled,
      size,
      maxLength,
      warningLimitType,
      warningLimitInt,
      warningLimitPer,
      cols,
      rows,
      errorMessage,
      hintText,
      hintIcon,
      errorIcon,
      hasError,
      onChange,
      onFocus,
      onSelect,
      readonly,
      isResizeable,
      showHint,
      showCounter,
      value,
      theme,
    })}
  `;
BlrTextarea.storyName = 'BlrTextarea-Docs';

BlrTextarea.args = {
  theme: 'Light',
  size: 'md',
  textareaId: '#1',
  cols: 45,
  rows: 5,
  minLength: 0,
  maxLength: 140,
  value: '',
  label: 'Label',
  labelAppendix: '(Optional)',
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  placeholder: 'Add a message here',
  required: false,
  disabled: false,
  readonly: false,
  showCounter: true,
  showHint: true,
  hintIcon: 'blrInfo',
  hintText: 'Rindfleischetikettierungs',
  errorIcon: undefined,
  hasError: false,
  errorMessage: ' ',
  isResizeable: true,
  onChange: () => action('onChange'),
  onFocus: () => action('onFocus'),
  onSelect: () => action('onSelect'),
};

// All Stories
//Appearance Size Story
export const Sizes = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'sm',
          label: 'Text area SM',
          value: '',
          cols: 40,
          rows: 5,
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Text area MD',
          value: '',
          cols: 40,
          rows: 5,
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'lg',
          label: 'Text area LG',
          value: '',
          cols: 40,
          rows: 5,
        })}
      </div>
    </div>
  `;
};
Sizes.parameters = {
  backgrounds: {
    default: 'Light',
  },
  docs: {
    description: {
      story: '<h4>Sizes</h4><p>A text area that lets the user resize the area horizontally and vertically.</p>',
    },
  },
};
Sizes.storyName = 'Appearance';

//Appearance Resize Story
export const Resize = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Auto resize',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Horizontal resize',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Vertical resize',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'lg',
          label: 'None',
          value: '',
          isResizeable: false,
        })}
      </div>
    </div>
  `;
};
Resize.story = {
  name: 'Resize',
  parameters: {
    backgrounds: {
      default: 'Light',
    },
    docs: {
      description: {
        story: '<h4>Sizes</h4><p>A text area that lets the user resize the area horizontally and vertically.</p>',
      },
    },
  },
};

//MeinBeispiel12 Story with Storybook background per default dark
export const MeinBeispiel12 = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({ ...defaultParams, theme: 'Dark', shouldFocus: true })}
        ${BlrTextareaRenderFunction({ ...defaultParams, theme: 'Dark', disabled: true })}
        ${BlrTextareaRenderFunction({ ...defaultParams, theme: 'Dark', readonly: true })}
      </div>
    </div>
  `;
};
MeinBeispiel12.story = {
  name: 'test2',
  parameters: {
    backgrounds: {
      default: 'dark',
    },
    docs: {
      description: {
        story: 'another description 1',
      },
    },
  },
};
