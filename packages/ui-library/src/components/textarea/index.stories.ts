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
      font-family: 'Source Sans Pro', 'Source Code Pro', sans-serif;
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
  showCounter: false,
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
  cols: 40,
  rows: 4,
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
    //Appearance
    size: {
      name: 'size',
      description: ' Select size variant of this component ',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    isResizeable: {
      name: 'resize',
      description: 'Choose if the text area is resizeable',
      control: 'boolean',
      table: {
        category: 'Appearance',
      },
    },
    cols: {
      options: FormSizes,
      control: { type: 'number' },
      name: 'cols',
      description: 'Defines the width of the text area',
      defaultValue: '45',
      table: {
        category: 'Appearance',
      },
    },
    rows: {
      options: FormSizes,
      control: { type: 'number' },
      name: 'rows',
      description: 'Defines the height of the text area',
      defaultValue: '5',
      table: {
        category: 'Appearance',
      },
    },
    minLength: {
      name: 'minLength',
      defaultValue: 0,
      table: {
        category: 'Appearance',
      },
    },
    maxLength: {
      name: 'maxLength',
      defaultValue: 140,
      table: {
        category: 'Appearance',
      },
    },

    //Content/ Settings
    placeholder: {
      name: 'placeholder',
      defaultValue: 'Add a message here',
      table: {
        category: 'Content/ Settings',
      },
    },
    value: {
      name: 'value',
      description: 'The text which was entered in the text area',
      defaultValue: '',
      control: {
        type: 'text',
        label: 'Enter Text',
      },
      table: {
        category: 'Content/ Settings',
      },
    },

    //States
    disabled: {
      name: 'disabled',
      defaultValue: false,
      table: {
        category: 'States',
      },
    },
    readonly: {
      name: 'readonly',
      defaultValue: false,
      table: {
        category: 'States',
      },
    },
    // Validation
    required: {
      name: 'required',
      defaultValue: false,
      table: {
        category: 'Validations',
      },
    },
    hasError: {
      name: 'hasError',
      defaultValue: false,
      table: {
        category: 'Validations',
      },
    },
    errorMessage: {
      table: {
        category: 'Validations',
      },
      if: { arg: 'hasError', eq: true },
    },
    errorIcon: {
      table: {
        category: 'Validations',
      },
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasError', eq: true },
    },

    //Dependencies
    hasLabel: {
      name: 'hasLabel',
      description: 'Show or hide the label',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Content/ Settings',
      },
    },
    label: {
      name: 'labelText',
      description: 'The text which is displayed as the text areas label',
      defaultValue: true,
      control: {
        type: 'text',
      },
      table: {
        category: 'Content/ Settings',
      },
      if: { arg: 'hasLabel', eq: true },
    },
    labelAppendix: {
      name: 'labelAppendixText',
      description: 'The text which is displayed after the text label',
      defaultValue: true,
      control: {
        type: 'text',
      },
      table: {
        category: 'Content/ Settings',
      },
      if: { arg: 'hasLabel', eq: true },
    },
    showHint: {
      name: 'hasHint',
      description: 'Show or hide the hint message',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Content/ Settings',
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
    hintText: {
      if: { arg: 'showHint', eq: true },
      table: {
        category: 'Content/ Settings',
      },
    },
    showCounter: {
      name: 'hasCounter',
      description: 'Show or hide a counter which counts the entered characters.',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Content/ Settings',
      },
    },
    warningLimitType: {
      if: { arg: 'showCounter', eq: true },
      table: {
        category: 'Content/ Settings',
      },
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
      table: {
        category: 'Content/ Settings',
      },
      control: 'number',
      name: 'Warning Limit (Whole Number)',
      if: { arg: 'warningLimitType', eq: 'warningLimitInt' },
      description: 'Please provide a whole number',
    },
    // Only enabled if warningLimitType is Percentage
    warningLimitPer: {
      table: {
        category: 'Content/ Settings',
      },
      control: { type: 'range', min: 1, max: 100, step: 1 },
      name: 'Warning Limit (Percentage)',
      if: { arg: 'warningLimitType', eq: 'warningLimitPer' },
      description:
        'Please provide a percentage. Warning limit is calculated based on the percentage of the maximum length reached ((maximum length / 100) * percentage value)',
    },

    // Events
    onChange: {
      name: 'onChange',
      action: 'onChange',
      table: {
        category: 'Events',
      },
    },
    onFocus: {
      name: 'onFocus',
      action: 'onFocus',
      table: {
        category: 'Events',
      },
    },
    onBlur: {
      name: 'onBlur',
      action: 'onBlur',
      table: {
        category: 'Events',
      },
    },
    onSelect: {
      name: 'onSelect',
      action: 'onSelect',
      table: {
        category: 'Events',
      },
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
        component: `<div>
        <p>Text area allows users to input and edit multiline text. Unlike a simple text input field that is typically used for single-line text, a text area provides a larger space for users to enter and manipulate multiple lines of text. +
                Text area components are used in various contexts where users need to input or edit longer pieces of text, such as comment boxes, message composition in messaging apps, notes, and description fields in forms.
        </p>
        <ul>
        <li> <a href="/docs/design-system-web-components-blrtextarea--docs"><strong>Docs</strong></a></li>
        <li> <a href="/story/design-system-web-components-blrtextarea--sizes"><strong>Appearance</strong></a>
            <ul>
                <li> <a href="/story/design-system-web-components-blrtextarea--sizes"><strong>Sizing</strong></a></li>
                <li> <a href="/story/design-system-web-components-blrtextarea--resize"><strong>Resize</strong></a></li>
            </ul>
        </li>
         <li> <a href="/story/design-system-web-components-blrtextarea--placeholder"><strong>Content/ Settings</strong></a>
            <ul>
                <li> <a href="/story/design-system-web-components-blrtextarea--placeholder"><strong>Placeholder</strong></a>
                </li>
            </ul>
        </li>
         <li> <a href="/story/design-system-web-components-blrtextarea--disabled"><strong>States</strong></a>
            <ul>
                <li> <a href="/story/design-system-web-components-blrtextarea--disabled"><strong>Disabled</strong></a>
                </li>
                 <li> <a href="/story/design-system-web-components-blrtextarea--readonly"><strong>Readonly</strong></a>
                </li>
            </ul>
        </li>
         <li> <a href="/story/design-system-web-components-blrtextarea--required"><strong>Validation</strong></a>
            <ul>
                <li> <a href="/story/design-system-web-components-blrtextarea--required"><strong>Required</strong></a>
                </li>
                 <li> <a href="/story/design-system-web-components-blrtextarea--has-error"><strong>hasError</strong></a>
                </li>
            </ul>
        </li>
         <li> <a href="/story/design-system-web-components-blrtextarea--captions"><strong>Dependencies</strong></a>
            <ul>
                <li> <a href="/story/design-system-web-components-blrtextarea--captions"><strong>Caption</strong></a>
                </li>
                 <li> <a href="/story/design-system-web-components-blrtextarea--label"><strong>Label</strong></a>
                </li>
                <li> <a href="/story/design-system-web-components-blrtextarea--counter"><strong>Counter</strong></a>
                </li>
            </ul>
        </li>
        </ul>
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
  html`${sharedStyles}
    <div class="wrapper">
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
    </div> `;
BlrTextarea.storyName = 'BlrTextarea-Docs';

BlrTextarea.args = {
  theme: 'Light',
  size: 'md',

  cols: 40,
  rows: 4,
  minLength: 0,
  maxLength: 140,
  value: '',
  label: 'Share your feedback',
  labelAppendix: 'optional',
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  placeholder: 'Add a message here',
  required: false,
  disabled: false,
  readonly: false,
  showCounter: false,
  showHint: false,
  hintIcon: 'blrInfo',
  hintText: 'This is a small hint message',
  errorIcon: undefined,
  hasError: false,
  errorMessage: ' ',
  isResizeable: true,
  onChange: () => action('onChange'),
  onFocus: () => action('onFocus'),
  onSelect: () => action('onSelect'),
  onBlur: () => action('onBlur'),
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
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Text area MD',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'lg',
          label: 'Text area LG',
          value: '',
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
          size: 'md',
          label: 'None',
          value: '',
          isResizeable: false,
        })}
      </div>
    </div>
  `;
};
Resize.parameters = {
  backgrounds: {
    default: 'Light',
  },
  docs: {
    description: {
      story:
        '<h4>Auto</h4><p>A text area that lets the user resize the area horizontally and vertically.</p><h4>Horizontal/ Vertical</h4><p>A text area that lets the user resize the area horizontally or vertically.</p><h4>None</h4><p>A text area that does not resize and uses a scroll bar to show overflow text.</p>',
    },
  },
};
Resize.storyName = 'Resize';

//Content/ Settings Placeholder
export const Placeholder = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Has placeholder',
          labelAppendix: '',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: "Hasn't placeholder",
          labelAppendix: '',
          placeholder: '',
          value: '',
        })}
      </div>
    </div>
  `;
};
Placeholder.parameters = {
  backgrounds: {
    default: 'Light',
  },
  docs: {
    description: {
      story:
        '<h4>Placeholder</h4><p>The text area can display a placeholder text to improve the usability of this component.</p>',
    },
  },
};
Placeholder.storyName = 'Content/ Settings';

// States Disabled
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Disabled text area',
          labelAppendix: '',
          disabled: true,
          value: '',
        })}
      </div>
    </div>
  `;
};
Disabled.parameters = {
  backgrounds: {
    default: 'Light',
  },
  docs: {
    description: {
      story: '<h4>Disabled</h4><p>A text area that lets the user resize the area horizontally and vertically.</p>',
    },
  },
};
Disabled.storyName = 'States';

// States Readonly
export const Readonly = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Readonly',
          readonly: true,
          value: '',
        })}
      </div>
    </div>
  `;
};
Readonly.parameters = {
  backgrounds: {
    default: 'Light',
  },
  docs: {
    description: {
      story: '<p>A text area that lets the user resize the area horizontally or vertically.</p>',
    },
  },
};
Readonly.storyName = 'Readonly';

// Validation Required Todo add interactive Story with Button to show the State
export const Required = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: 'Please leave a short description',
          label: 'Reason for submission',
          labelAppendix: '(required)',
          value: '',
        })}
      </div>
    </div>
  `;
};
Required.parameters = {
  backgrounds: {
    default: 'Light',
  },
  docs: {
    description: {
      story:
        '<p>A technical description how use validation-patterns</p><h4>Required</h4><p>The text area can be set as a required field. An error will be thrown, if the field was not filled.</p>',
    },
  },
};
Required.storyName = 'Required';

// Validation hasError Todo add interactive Story with Button to show the State
export const hasError = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: 'Please leave a short description',
          label: 'Reason for submission',
          labelAppendix: '(required)',
          value: '',
        })}
      </div>
    </div>
  `;
};
hasError.parameters = {
  backgrounds: {
    default: 'Light',
  },
  docs: {
    description: {
      story: '<p>blabla</p>',
    },
  },
};
hasError.storyName = 'hasError';

//Dependencies Captions
export const Captions = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: '',
          label: 'A text area with a hint',
          labelAppendix: '',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: '',
          label: ' A text area with an error message',
          labelAppendix: '',
          hasError: true,
          showHint: false,
          errorIcon: 'blrError',
          value: '',
        })}
      </div>
    </div>
  `;
};
Captions.parameters = {
  backgrounds: {
    default: 'Light',
  },
  docs: {
    description: {
      story:
        '<h4>Captions</h4><p>The text area can display an additional hint text and error message. Both captions can be combined. For more information review the caption component.</p>',
    },
  },
};
Captions.storyName = 'Dependencies';

// States Label
export const Label = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'This is a label',
          labelAppendix: '(optional)',
          placeholder: '',
          readonly: true,
          value: '',
        })}
      </div>
    </div>
  `;
};
Label.parameters = {
  backgrounds: {
    default: 'Light',
  },
  docs: {
    description: {
      story:
        '<p>The text area can display an optional label component, consisting of a label and a label appendix. For more information review the caption component.</p>',
    },
  },
};
Label.storyName = 'Label';

// States Counter
export const Counter = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Text area with counter',
          labelAppendix: '<appendix>',
          showCounter: true,
          value: 'This text almost reached the maximum amount of characters.',
          warningLimitType: 'warningLimitInt',
          warningLimitInt: 44,
          warningLimitPer: 50,
        })}
      </div>
    </div>
  `;
};
Counter.parameters = {
  backgrounds: {
    default: 'Light',
  },
  docs: {
    description: {
      story:
        '<p>The text area can show an optional counter. The threshold for the warning and error message can be set individually. For more information review the counter component.</p>',
    },
  },
};
Counter.storyName = 'Counter';

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
MeinBeispiel12.parameters = {
  backgrounds: {
    default: 'dark',
  },
  docs: {
    description: {
      story: '<h2>another description 1</h2>',
    },
  },
};
MeinBeispiel12.storyName = 'MeinBeispiel12';
