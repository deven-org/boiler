/* eslint-disable no-console */
import { html } from 'lit';
import { BlrTextareaRenderFunction, BlrTextareaType } from './index';
import { FormSizes, Resizes } from '../../../globals/constants';

import { action } from '@storybook/addon-actions';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { PureIconKeys } from '@boiler/icons';

// Shared Style inside the Stories
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
  resize: 'none',
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

  required: false,
  disabled: false,
  readonly: false,

  hasError: false,
  errorMessage: "OMG it's an error",
  errorMessageIcon: '',
};

//Main Showcase Storybook Textarea, main argType Table
export default {
  title: 'Design System/Web Components/Forms/TextArea',
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
      description: 'Select if and how the component can be resized.',
      options: Resizes,
      control: { type: 'select' },
      table: {
        disable: false,
        category: 'Appearance',
      },
    },
    cols: {
      options: FormSizes,
      control: { type: 'number' },
      name: 'cols',
      description: 'Enter amount of columns the component should hold.',
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
    //Two examples for Code integration
    docs: {
      //First example for manual code integration
      //canvas: {sourceState: 'shown'},//show code
      //source: {type: 'code'},//additional to previous
      //Second Example
      // source: { code: '<blr-textarea label="Text area LG" size="lg"></blr-textarea>',},
      description: {
        component: `<div>
        <p>Text area allows users to input and edit multiline text. Unlike a simple text input field that is typically used for single-line text, a text area provides a larger space for users to enter and manipulate multiple lines of text. +
                Text area components are used in various contexts where users need to input or edit longer pieces of text, such as comment boxes, message composition in messaging apps, notes, and description fields in forms.
        </p>
        <ul>
        <li> <a href="/docs/design-system-web-components-textarea--docs"><strong>Docs</strong></a></li>
        <li> <a href="#appearance"><strong>Appearance</strong></a>
            <ul>
                <li> <a href="#sizevariant"><strong>sizeVariant</strong></a></li>
                <li> <a href="#resize"><strong>resize</strong></a></li>
            </ul>
        </li>
         <li> <a href="#content--settings"><strong>Content/ Settings</strong></a>
            <ul>
                <li> <a href="#placeholder"><strong>placeholder</strong></a>
                </li>
            </ul>
        </li>
         <li> <a href="#states"><strong>States</strong></a>
            <ul>
                <li> <a href="#disabled"><strong>disabled</strong></a>
                </li>
                 <li> <a href="#readonly"><strong>readonly</strong></a>
                </li>
            </ul>
        </li>
         <li> <a href="#validation"><strong>Validation</strong></a>
            <ul>
                <li> <a href="#required"><strong>required</strong></a>
                </li>
                 <li> <a href="#haserror"><strong>hasError</strong></a>
                </li>
            </ul>
        </li>
         <li> <a href="#dependencies"><strong>Dependencies</strong></a>
            <ul>
                <li> <a href="#dependencies"><strong>Caption</strong></a>
                </li>
                 <li> <a href="#label"><strong>label</strong></a>
                </li>
                <li> <a href="#counter"><strong>Counter</strong></a>
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
export const BlrTextarea = (params: BlrTextareaType) =>
  html`${sharedStyles}
    <div class="wrapper">
      ${BlrTextareaRenderFunction({
        ...params,
      })}
    </div> `;
BlrTextarea.storyName = 'TextArea';

const args: BlrTextareaType = {
  theme: 'Light',
  sizeVariant: 'md',
  resize: 'both',
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

//disabledArgTypesTable to deactivate the controls-Panel for a story in storybook
const argTypesToDisable = [
  'theme',
  'sizeVariant',
  'resize',
  'cols',
  'rows',
  'placeholder',
  'value',
  'minLength',
  'maxLength',
  'hasLabel',
  'label',
  'labelAppendix',
  'hasHint',
  'hintMessage',
  'hintMessageIcon',
  'hasCounter',
  'warningLimitType',
  'warningLimitInt',
  'warningLimitPer',
  'disabled',
  'readonly',
  'required',
  'hasError',
  'arialabel',
  'errorMessage',
  'errorMessageIcon',
  'ariaLabel',
  'textareaId',
  'name',
  'onChange',
  'onFocus',
  'onBlur',
  'onSelect',
];

const generateDisabledArgTypes = (argTypes: string[]) => {
  const disabledArgTypes = {};
  argTypes.forEach((argType: string) => {
    disabledArgTypes[argType] = {
      table: {
        disable: true,
      },
    };
  });
  return disabledArgTypes;
};
const disabledArgTypes = generateDisabledArgTypes(argTypesToDisable);

// All Stories
//Appearance Size Story

/**
 *
 * #### sizeVariant
 * The TextArea component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
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
SizeVariant.argTypes = {
  ...disabledArgTypes,
};
SizeVariant.storyName = 'Appearance';

//Appearance Resize Story
/**
 * #### auto
 * The resize component can be resizeable or not resizeable.
 * #### horizontal/ vertical
 * A text area that lets the user resize the area horizontally or vertically.
 * #### none
 * A text area that does not resize and uses a scroll bar to show overflow text.
 */
export const Resize = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        <div>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            theme: 'Light',
            sizeVariant: 'md',
            label: 'Auto resize',
            value: '',
            resize: 'both',
          })}
        </div>
        <div>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            theme: 'Light',
            sizeVariant: 'md',
            label: 'Horizontal resize',
            value: '',
            resize: 'horizontal',
          })}
        </div>
        <div>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            theme: 'Light',
            sizeVariant: 'md',
            label: 'Vertical resize',
            value: '',
            resize: 'vertical',
          })}
        </div>
        <div>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            theme: 'Light',
            sizeVariant: 'md',
            label: 'None',
            value: '',
            resize: 'none',
          })}
        </div>
      </div>
    </div>
  `;
};

Resize.argTypes = {
  ...disabledArgTypes,
};
Resize.storyName = 'resize';

//Content/ Settings Placeholder
/**
 * The placeholder component can display a placeholder text. This is recommended to improve usability.
 */
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
Placeholder.argTypes = {
  ...disabledArgTypes,
};
Placeholder.storyName = 'Content/ Settings';

// States Disabled
/**
 * Apart from states like Rest, Hover, Pressed and Focus, the TextArea component can also be Disabled or Readonly. The Error state is documented under Validation.
 * #### disabled
 * The TextArea Component in the Disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
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
Disabled.argTypes = {
  ...disabledArgTypes,
};
Disabled.storyName = 'States';

// States Readonly
/**
 * The readonly component in the Readonly state can not be interacted with, but it can still be selected and receive focus.
 */
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
Readonly.argTypes = {
  ...disabledArgTypes,
};
Readonly.storyName = 'readonly';

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
Required.argTypes = {
  ...disabledArgTypes,
};
Required.parameters = {
  backgrounds: {
    default: '',
  },
  docs: {
    description: {
      story:
        '<h3>required</h3><p>The TextArea component can be set as required. If set as required, an error should be thrown, when the TextArea component was not filled, before it was submitted. It is recommended to indicate in the labelAppendix, whether a component is required or not. For more information on the label and appendix have a look at the FormLabel in the <a href="/docs/design-system-web-components-textarea--captions"><strong>Dependencies</strong></a> section below.</p>',
    },
  },
};
Required.storyName = 'Validation';

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
hasError.argTypes = {
  ...disabledArgTypes,
};
hasError.parameters = {
  backgrounds: {
    default: '',
  },
  docs: {
    description: {
      story:
        '<p>The TextArea component can be set to have an error with the hasError property. An error can be displayed after submitting a wrong value, after leaving/deselecting the TextArea or in case the TextArea was set as required and has not been filled before submitting. For more information on the error message have a look at the FormCaption in the <a href="/docs/design-system-web-components-textarea--captions"><strong>Dependencies</strong></a> section below.</p>',
    },
  },
};
hasError.storyName = 'hasError';

//Dependencies Captions
/**
 *
 * #### FormLabel
 * The TextArea component can display an optional FormLabel component, consisting of a label and a label appendix. For more information see <a href="/docs/design-system-web-components-textarea--label"><strong>FormLabel</strong></a> component.
 *
 * #### FormCaptionGroup
 * The TextArea component can display an optional hint text and error message with or without icons. Both captions can be combined. For more information see  <a href="/docs/design-system-web-components-textarea--captions"><strong>FormCaptionGroup</strong></a> component.
 *
 * #### Counter
 * The TextArea component can display an optional counter. The threshold for the warning and error message can be set individually. For more information see <a href="/docs/design-system-web-components-textarea--counter"><strong>Counter</strong></a> component.
 */
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
Captions.argTypes = {
  ...disabledArgTypes,
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
Label.argTypes = {
  ...disabledArgTypes,
};
Label.parameters = {
  backgrounds: {
    default: '',
  },
  docs: {
    description: {
      story:
        '<p>The Text Area can display an optional label component, consisting of a label and a label appendix. For more information review the caption component.</p>',
    },
  },
};
Label.storyName = 'label';

// States Counter
/**
 * The TextArea component can display an optional counter. The threshold for the warning and error message can be set individually. For more information see <a href="/docs/design-system-web-components-textarea--counter"><strong>counter</strong></a> component.
 */
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
Counter.argTypes = {
  ...disabledArgTypes,
};
Counter.parameters = {
  backgrounds: {
    default: '',
  },
};
Counter.storyName = 'counter';
