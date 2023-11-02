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
  sizeVariant: 'md',
  resize: true,
  cols: 40,
  rows: 4,
  placeholder: 'Add a message here',
  value: '',
  minLength: 10,
  maxLength: 140,
  label: 'Label',
  labelAppendix: '',
  hasHint: false,
  hintMessage: 'This is a small hint',
  hintMessageIcon: 'blrInfo',
  arialabel: '',
  name: '',
  hasCounter: false,
  theme: 'Light',
  textareaId: '',
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  shouldFocus: false,

  required: false,
  disabled: false,
  readonly: false,

  hasError: false,
  errorMessage: "OMG it's an error",
  errorMessageIcon: '',
};

//Main Showcase Storybook Textarea
export default {
  title: 'Design System/Web Components/TextArea',
  argTypes: {
    //Appearance
    sizeVariant: {
      name: 'sizeVariant',
      description: ' Choose size of the component. ',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        disable: false,
        category: 'Appearance',
      },
    },
    resize: {
      name: 'resize',
      description: 'Choose if component is resizeable.',
      control: 'boolean',
      table: {
        disable: false,
        category: 'Appearance',
      },
    },
    cols: {
      options: FormSizes,
      control: { type: 'number' },
      name: 'cols',
      description: 'Enter amount of coloumns the component should hold.',
      defaultValue: '20',
      table: {
        disable: false,
        category: 'Appearance',
      },
    },
    rows: {
      options: FormSizes,
      control: { type: 'number' },
      name: 'rows',
      description: 'Enter amount of rows the component should have.',
      defaultValue: '5',
      table: {
        disable: false,
        category: 'Appearance',
      },
    },

    //Content/ Settings
    placeholder: {
      description: 'Enter string used as placeholder text.',
      name: 'placeholder',
      defaultValue: 'Placeholder-text',
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
    },
    value: {
      name: 'value',
      description: 'Enter the value the component should have.',
      defaultValue: '',
      control: {
        type: 'text',
        label: 'Enter Text',
      },
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
    },
    minLength: {
      name: 'minLength',
      description: 'Enter the min allowed length.',
      defaultValue: 0,
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
    },
    maxLength: {
      name: 'maxLength',
      description: 'Enter the max allowed length. Additional input is cut off after the max has been reached.',
      defaultValue: 140,
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
    },
    hasLabel: {
      name: 'hasLabel',
      description: 'Choose if component has a label.',
      defaultValue: true,
      control: { type: 'boolean' },
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
    },
    label: {
      name: 'label',
      description: 'Enter string used as label text.',
      control: {
        type: 'text',
      },
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
      if: { arg: 'hasLabel', eq: true },
    },
    labelAppendix: {
      name: 'labelAppendix',
      description:
        'Enter string used as an appendix to the label. Use this to inform the user in case this field is required.',
      control: {
        type: 'text',
      },
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
      if: { arg: 'hasLabel', eq: true },
    },
    hasHint: {
      name: 'hasHint',
      description: ' Choose if component has a hint message. ',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
    },
    hintMessage: {
      name: 'hintMessage',
      description: 'Enter string used used as hint message.',
      if: { arg: 'hasHint', eq: true },
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
    },
    hintMessageIcon: {
      description: 'Select an icon which is displayed in front of the hint message.',
      if: { arg: 'hasHint', eq: true },
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
    },
    hasCounter: {
      name: 'hasCounter',
      description: 'Choose if component has a counter.',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
    },
    warningLimitType: {
      if: { arg: 'hasCounter', eq: true },
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
      name: 'Warning Limit Type',
      description: 'Choose if warning limit is defined by percentage or amount of characters.',
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
        disable: false,
        category: 'Content/ Settings',
      },
      control: 'number',
      name: 'Warning Limit (Whole Number)',
      description: 'Enter at which amount of characters the warning state is displayed.',
      if: { arg: 'warningLimitType', eq: 'warningLimitInt' },
    },
    // Only enabled if warningLimitType is Percentage
    warningLimitPer: {
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
      control: { type: 'range', min: 1, max: 100, step: 1 },
      name: 'Warning Limit (Percentage)',
      if: { arg: 'warningLimitType', eq: 'warningLimitPer' },
      description: 'Enter at what percentage the warning state is displayed.',
    },

    //States
    disabled: {
      name: 'disabled',
      description:
        'Choose if component is disabled. Prevents the user to select or change the value of this component.   ',
      defaultValue: false,
      table: {
        disable: false,
        category: 'States',
      },
    },
    readonly: {
      name: 'readonly',
      description: 'Choose if component is readonly. The user can select but not change the value of this component.',
      defaultValue: false,
      table: {
        disable: false,
        category: 'States',
      },
    },

    // Validation
    required: {
      name: 'required',
      description: 'Choose if the component must hold a value after an interaction or a submit.',
      defaultValue: false,
      table: {
        disable: false,
        category: 'Validations',
      },
    },
    hasError: {
      name: 'hasError',
      description: 'Choose if component has an error.',
      defaultValue: false,
      table: {
        disable: false,
        category: 'Validations',
      },
    },
    errorMessage: {
      name: 'errorMessage',
      description: 'Enter string used used as error message.',
      table: {
        category: 'Validations',
      },
      if: { arg: 'hasError', eq: true },
    },
    errorMessageIcon: {
      name: 'errorMessageIcon',
      description: 'Select an icon which is displayed in front of the error message.',
      table: {
        disable: false,
        category: 'Validations',
      },
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasError', eq: true },
    },

    //Accessibility
    arialabel: {
      name: 'ariaLabel',
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        disable: false,
        category: 'Accessibility',
      },
    },

    //Technical attributes
    textareaId: {
      name: 'textareaID',
      description: 'Unique identifier for this component.',
      table: {
        disable: false,
        category: 'Technical Attributes',
      },
    },
    name: {
      name: 'name',
      description: 'For a < form > element, the name attribute is used as a reference when the data is submitted. ',
      table: {
        disable: false,
        category: 'Technical Attributes',
      },
    },

    // Events
    onChange: {
      name: 'onChange',
      description: 'Fires when the value changes.',
      action: 'onChange',
      table: {
        disable: false,
        category: 'Events',
      },
    },
    onFocus: {
      name: 'onFocus',
      description: 'Fires when the component is focused.',
      action: 'onFocus',
      table: {
        disable: false,
        category: 'Events',
      },
    },
    onBlur: {
      name: 'onBlur',
      description: 'Fires when the component lost focus.',
      action: 'onBlur',
      table: {
        disable: false,
        category: 'Events',
      },
    },
    onSelect: {
      name: 'onSelect',
      description: 'Fires when some text is selected.',
      action: 'onSelect',
      table: {
        disable: false,
        category: 'Events',
      },
    },

    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      'storybook/story/panel': {
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
        <li> <a href="/docs/design-system-web-components-textarea--docs"><strong>Docs</strong></a></li>
        <li> <a href="/docs/design-system-web-components-textarea--sizes"><strong>Appearance</strong></a>
            <ul>
                <li> <a href="/docs/design-system-web-components-textarea--sizes"><strong>Sizing</strong></a></li>
                <li> <a href="/docs/design-system-web-components-textarea--resize"><strong>Resize</strong></a></li>
            </ul>
        </li>
         <li> <a href="/docs/design-system-web-components-textarea--captions"><strong>Content/ Settings</strong></a>
            <ul>
                <li> <a href="/docs/design-system-web-components-textarea--placeholder"><strong>Placeholder</strong></a>
                </li>
            </ul>
        </li>
         <li> <a href="/docs/design-system-web-components-textarea--disabled"><strong>States</strong></a>
            <ul>
                <li> <a href="/docs/design-system-web-components-textarea--disabled"><strong>Disabled</strong></a>
                </li>
                 <li> <a href="/docs/design-system-web-components-textarea--readonly"><strong>Readonly</strong></a>
                </li>
            </ul>
        </li>
         <li> <a href="/docs/design-system-web-components-textarea--required"><strong>Validation</strong></a>
            <ul>
                <li> <a href="/docs/design-system-web-components-textarea--required"><strong>Required</strong></a>
                </li>
                 <li> <a href="/docs/design-system-web-components-textarea--has-error"><strong>hasError</strong></a>
                </li>
            </ul>
        </li>
         <li> <a href="/docs/design-system-web-components-textarea--captions"><strong>Dependencies</strong></a>
            <ul>
                <li> <a href="/docs/design-system-web-components-textarea--captions"><strong>Caption</strong></a>
                </li>
                 <li> <a href="/docs/design-system-web-components-textarea--label"><strong>Label</strong></a>
                </li>
                <li> <a href="/docs/design-system-web-components-textarea--counter"><strong>Counter</strong></a>
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
  theme,
  sizeVariant,
  resize,
  minLength,
  maxLength,
  cols,
  rows,
  placeholder,
  value,
  hasLabel,
  label,
  labelAppendix,
  hasHint,
  hintMessage,
  hintMessageIcon,
  hasCounter,
  warningLimitType,
  warningLimitInt,
  warningLimitPer,
  disabled,
  readonly,
  required,
  hasError,
  errorMessage,
  errorMessageIcon,
  arialabel,
  textareaId,
  name,
  onChange,
  onFocus,
  onSelect,
}: BlrTextareaType) =>
  html`${sharedStyles}
    <div class="wrapper">
      ${BlrTextareaRenderFunction({
        theme,
        sizeVariant,
        resize,
        minLength,
        maxLength,
        cols,
        rows,
        placeholder,
        value,
        hasLabel,
        label,
        labelAppendix,
        hasHint,
        hintMessage,
        hintMessageIcon,
        hasCounter,
        warningLimitType,
        warningLimitInt,
        warningLimitPer,
        disabled,
        readonly,
        required,
        hasError,
        errorMessage,
        errorMessageIcon,
        arialabel,
        textareaId,
        name,
        onChange,
        onFocus,
        onSelect,
      })}
    </div> `;
BlrTextarea.storyName = 'TextArea';

const args: BlrTextareaType = {
  theme: 'Light',
  sizeVariant: 'md',
  resize: true,
  cols: 40,
  rows: 4,
  placeholder: 'Add a message here',
  value: '',
  minLength: 0,
  maxLength: 140,
  hasLabel: true,
  label: 'Share your feedback',
  labelAppendix: '(optional)',
  hasHint: false,
  hintMessage: 'This is a small hint message',
  hintMessageIcon: 'blrInfo',
  hasCounter: false,
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  disabled: false,
  readonly: false,
  required: false,
  hasError: false,
  errorMessage: ' ',
  errorMessageIcon: undefined,
  arialabel: 'TextArea',
  textareaId: '#674',
  name: 'TextArea',
  onChange: () => action('onChange'),
  onFocus: () => action('onFocus'),
  onSelect: () => action('onSelect'),
  onBlur: () => action('onBlur'),
};
BlrTextarea.args = args;

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
          sizeVariant: 'sm',
          label: 'Text area SM',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          label: 'Text area MD',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'lg',
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
  //manual Code integration
  docs: {
    source: {
      code: '<blr-textarea label="Text area LG" size="lg"></blr-textarea>',
    },
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
          sizeVariant: 'md',
          label: 'Auto resize',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          label: 'Horizontal resize',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          label: 'Vertical resize',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          label: 'None',
          value: '',
          resize: false,
        })}
      </div>
    </div>
  `;
};
Resize.argTypes = {
  size: {
    table: {
      disable: true,
      category: 'Appearance',
    },
  },
};
Resize.parameters = {
  actions: { disable: true },
  addons: { disable: true },
  controls: { disable: true },
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
          sizeVariant: 'md',
          label: 'Has placeholder',
          labelAppendix: '',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
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
          sizeVariant: 'md',
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
          sizeVariant: 'md',
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
          sizeVariant: 'md',
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
          sizeVariant: 'md',
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
          sizeVariant: 'md',
          placeholder: '',
          label: 'A text area with a hint',
          labelAppendix: '',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          placeholder: '',
          label: ' A text area with an error message',
          labelAppendix: '',
          hasError: true,
          hasHint: false,
          errorMessageIcon: 'blrError',
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
          sizeVariant: 'md',
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
          sizeVariant: 'md',
          label: 'Text area with counter',
          labelAppendix: '<appendix>',
          hasCounter: true,
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
