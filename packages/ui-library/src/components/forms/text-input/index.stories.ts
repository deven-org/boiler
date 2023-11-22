/* eslint-disable no-console */
import { BlrTextInputRenderFunction, BlrTextInputType } from './index';
import { FormSizes, InputTypes } from '../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { action } from '@storybook/addon-actions';
import { html } from 'lit';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .wrapper {
      display: flex;
      justify-content: center;
    }
    .stories-textinput {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
`;

export default {
  title: 'Design System/Web Components/Forms/Text Input',
  argTypes: {
    //Appearance
    size: {
      name: 'sizeVariant',
      description: ' Choose size of the component. ',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },

    //Content/Settings
    type: {
      description: ' Select type of the component. ',
      options: InputTypes,
      control: { type: 'select' },
      table: {
        category: 'Content/ Settings',
      },
    },

    placeholder: {
      description: 'Enter string used as placeholder text.',
      name: 'placeholder',
      defaultValue: 'Placeholder-text',
      table: {
        category: 'Content/ Settings',
      },
    },

    value: {
      name: 'value',
      description: 'Enter the value the component should hold.',
      defaultValue: '',
      control: {
        type: 'text',
        label: 'Enter Text',
      },
      table: {
        category: 'Content/ Settings',
      },
    },

    maxLength: {
      name: 'maxLength',
      description: 'Enter the max allowed length. Additional input is cut off after the max has been reached.',
      defaultValue: 200,
      table: {
        category: 'Content/ Settings',
      },
    },
    hasLabel: {
      name: 'hasLabel',
      description: 'Choose if component has a label.',
      defaultValue: true,
      control: { type: 'boolean' },
      table: {
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
        category: 'Content/ Settings',
      },
      if: { arg: 'hasLabel', eq: true },
    },
    // todo it has to be renamed? Checke this
    showInputIcon: {
      description: 'Choose if component has an icon.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'boolean' },
      table: {
        category: 'Content/ Settings',
      },
    },
    // todo it has to be renamed? Checke this
    inputIcon: {
      description: 'Select an icon which is displayed inside of the input.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'showInputIcon', eq: true },
      table: {
        category: 'Content/ Settings',
      },
    },

    // todo renaming from hintText to hasHint in the blrFormRenderFunction, partially solution with name overwriting
    showHint: {
      name: 'hasHint',
      description: ' Choose if component has a hint message. ',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Content/ Settings',
      },
    },
    // todo renaming from hintIcon to hintMessageIcon in the blrFormRenderFunction, partially solution with name overwriting
    hintIcon: {
      name: 'hintMessageIcon',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'showHint', eq: true },
      table: {
        category: 'Content/ Settings',
      },
    },
    // todo renaming from hintText to hasHint in the blrFormRenderFunction, partially solution with name overwriting
    hintText: {
      name: 'hintMessage',
      if: { arg: 'showHint', eq: true },
      table: {
        category: 'Content/ Settings',
      },
    },
    //States
    disabled: {
      name: 'disabled',
      description:
        'Choose if component is disabled. Prevents the user to select or change the value of this component.   ',
      defaultValue: false,
      table: {
        category: 'States',
      },
    },
    readonly: {
      name: 'readonly',
      description: 'Choose if component is readonly. The user can select but not change the value of this component.',
      defaultValue: false,
      table: {
        category: 'States',
      },
    },
    // Validation
    required: {
      name: 'required',
      description: 'Choose if the component must hold a value after an interaction or a submit.',
      defaultValue: false,
      table: {
        category: 'Validations',
      },
    },
    hasError: {
      name: 'hasError',
      description: 'Choose if component has an error.',
      defaultValue: false,
      table: {
        category: 'Validations',
      },
    },
    // todo renaming from errorIcon to errorMessageIcon, partially solution with name overwriting
    errorIcon: {
      name: 'errorMessageIcon',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasError', eq: true },
      table: {
        category: 'Validations',
      },
    },
    errorMessage: {
      if: { arg: 'hasError', eq: true },
      table: {
        category: 'Validations',
      },
    },
    //Accessibility
    arialabel: {
      name: 'ariaLabel',
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        category: 'Accessibility',
      },
    },
    // Events
    onChange: {
      name: 'onChange',
      description: 'Fires when the value changes.',
      action: 'onChange',
      table: {
        category: 'Events',
      },
    },
    onFocus: {
      name: 'onFocus',
      description: 'Fires when the component is focused.',
      action: 'onFocus',
      table: {
        category: 'Events',
      },
    },
    onBlur: {
      name: 'onBlur',
      description: 'Fires when the component lost focus.',
      action: 'onBlur',
      table: {
        category: 'Events',
      },
    },
    onSelect: {
      name: 'onSelect',
      description: 'Fires when some text is selected.',
      action: 'onSelect',
      table: {
        category: 'Events',
      },
    },
    //Technical attributes
    textInputId: {
      name: 'textInputId',
      description: 'Unique identifier for this component.',
      table: {
        category: 'Technical Attributes',
      },
    },
    name: {
      name: 'name',
      description: 'For a < form > element, the name attribute is used as a reference when the data is submitted. ',
      table: {
        category: 'Technical Attributes',
      },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
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
<p>Text Input allows users to enter enter textual information or data into a designated area. Users can interact with the Text Input component by clicking or tapping on it, which activates it for text entry. It often displays a blinking cursor to indicate the current text insertion point.</p>
<ul>
        <li> <a href="/docs/design-system-web-components-forms-textinput--docs"><strong>Docs</strong></a></li>
        <li> <a href="#appearance"><strong>Appearance</strong></a>
            <ul>
                <li> <a href="#size-variant"><strong>Size Variant</strong></a></li>
            </ul>
        </li>
         <li> <a href="#content--settings"><strong>Content/ Settings</strong></a>
            <ul>
                <li> <a href="#type"><strong>Type</strong></a>
                </li>
                <li> <a href="#placeholder"><strong>Placeholder</strong></a>
                </li>
            </ul></li>
        <li> <a href="#states"><strong>States</strong></a>
            <ul>
                <li> <a href="#disabled"><strong>Disabled</strong></a>
                </li>
                <li> <a href="#readonly"><strong>Readonly</strong></a>
                </li>
            </ul></li>
        <li> <a href="#validation"><strong>Validation</strong></a>
            <ul>
                <li> <a href="#required"><strong>Required</strong></a>
                </li>
                <li> <a href="#has-error"><strong>Has Error</strong></a>
                </li>
            </ul></li>
        <li> <a href="#dependencies"><strong>Dependencies</strong></a>
            <ul>
                <li> <a href="#form-label"><strong>Form Label</strong></a>
                </li>
                <li> <a href="#icon"><strong>Icon</strong></a>
                </li>
                <li> <a href="#form-caption"><strong>Form Caption</strong></a>
                </li>
            </ul></li>
        </ul>
</div>`,
      },
    },
  },
};

export const BlrTextInput = (params: BlrTextInputType) => BlrTextInputRenderFunction(params);
BlrTextInput.storyName = 'Text Input';

const args: BlrTextInputType = {
  theme: 'Light',
  size: 'md',
  type: 'text',
  placeholder: 'Add a message here',
  value: '',
  maxLength: 200,
  hasLabel: true,
  label: 'Label',
  labelAppendix: '(Optional)',
  showInputIcon: true,
  inputIcon: 'blr360',
  showHint: false,
  hintText: 'This is a small hint message',
  hintIcon: 'blrInfo',
  disabled: false,
  readonly: false,
  required: false,
  hasError: false,
  errorMessage: '',
  errorIcon: 'blrInfo',
  arialabel: 'TextInput',
  textInputId: 'Input ID',
  name: 'TextInput',
  onChange: () => action('onChange'),
  onFocus: () => action('onFocus'),
  onSelect: () => action('onSelect'),
  onBlur: () => action('onBlur'),
};
BlrTextInput.args = args;
// Default parameters for Textarea component
const defaultParams: BlrTextInputType = {
  size: 'md',
  placeholder: 'Add a message here',
  value: '',
  maxLength: 140,
  label: 'Label',
  labelAppendix: '',
  showHint: false,
  hintText: 'This is a small hint message',
  hintIcon: 'blrInfo',
  arialabel: 'TextInput',
  name: '',
  theme: 'Light',
  textInputId: '',
  hasLabel: true,

  required: false,
  disabled: false,
  readonly: false,

  hasError: false,
  errorMessage: '',
  errorIcon: 'blrInfo',
  type: 'text',
  inputIcon: 'blr360',
  showInputIcon: true,
};

//disabledArgTypesTable to deactivate the controls-Panel for a story in storybook
const argTypesToDisable = [
  'theme',
  'size',
  'isResizeable',
  'placeholder',
  'value',
  'minLength',
  'maxLength',
  'hasLabel',
  'label',
  'labelAppendix',
  'showHint',
  'hintText',
  'hintIcon',
  'type',
  'showInputIcon',
  'textInputId',
  'disabled',
  'readonly',
  'required',
  'hasError',
  'errorMessage',
  'errorIcon',
  'arialabel',
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
 * #### Size Variant
 * The Text Input component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textinput">
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'sm',
          label: 'Text Input SM',
          value: '',
        })}
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Text Input MD',
          value: '',
        })}
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'lg',
          label: 'Text Input LG',
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

//Content/ Settings Type & Placeholder
/**
 * #### Type
 * The Text Input component can have all the types an html input can have, except the number and the unit type, which is covered in the NumberInput component. For more information see NumberInput component [link to NumberInput component].
 */
export const Type = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textinput">
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          type: 'text',
          size: 'md',
          label: 'Enter text',
          labelAppendix: '',
          placeholder: '',
          value: '',
        })}
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          type: 'password',
          size: 'md',
          label: 'Enter password',
          labelAppendix: '',
          placeholder: '',
          value: '',
        })}
      </div>
    </div>
  `;
};
Type.argTypes = {
  ...disabledArgTypes,
};
Type.storyName = 'Content/ Settings';

/**
 * The Text Input component can display a placeholder text. This is recommended to improve usability.
 */
export const Placeholder = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textinput">
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'With placeholder',
          labelAppendix: '',
          value: '',
        })}
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Without placeholder',
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
Placeholder.storyName = 'Placeholder';

// States Disabled
/**
 * Apart from states like Rest, Hover, Pressed and Focus, the Text Input component can also be Disabled or Readonly. The Error state is documented under Validation.
 * #### Disabled
 * The Text Input component in the Disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textinput">
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Disabled Text Input',
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

/**
 * The Text Input component in the Readonly state can not be interacted with, but it can still be selected and receive focus.
 */
export const Readonly = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textinput">
        ${BlrTextInputRenderFunction({
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
Readonly.argTypes = {
  ...disabledArgTypes,
};
Readonly.storyName = 'Readonly';

// Validation Required Todo add interactive Story with Button to show the State
/**
 * #### Required
 * The Text Input component can be set as required. If set as required, an error should be thrown, when the Text Input component was not filled, before it was submitted. It is recommended to indicate in the labelAppendix, whether a component is required or not. For more information on the label and appendix have a look at the FormLabel in the [Dependencies](#dependencies) section below.
 * */
export const Required = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextInputRenderFunction({
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
Required.argTypes = {
  ...disabledArgTypes,
};
Required.parameters = {
  backgrounds: {
    default: '',
  },
};
Required.storyName = 'Validation';

/**
 * The Text Input component can be set to have an error with the Has Error property. An error can be displayed after submitting a wrong value, after leaving/deselecting the Text Input or in case the Text Input was set as required and has not been filled before submitting. For more information on the error message have a look at the FormCaption in the [Dependencies](#dependencies) section below.
 * */
export const hasError = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextInputRenderFunction({
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
hasError.argTypes = {
  ...disabledArgTypes,
};
hasError.parameters = {
  backgrounds: {
    default: '',
  },
};
hasError.storyName = 'Has Error';

//Dependencies Captions
/**
 * #### Form Label
 * The Text Input component can display an optional FormLabel component, consisting of a label and a label appendix. For more information see FormLabel component [link to FormLabel component].
 */
export const FormLabel = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textinput">
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: '',
          label: 'A Text Input with a Form Label',
          labelAppendix: '(appendix)',
          value: '',
        })}
      </div>
    </div>
  `;
};
FormLabel.argTypes = {
  ...disabledArgTypes,
};
FormLabel.storyName = 'Dependencies';
/**
 * The Text Input component can have a trailing clickable icon / icon button. This could be used for example to show or hide the input, when it is used to enter a password. For more information about the Icon component see Icon component [link to Icon component].
 */
export const Icon = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textinput">
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: '',
          label: ' A textinput with an error message',
          labelAppendix: '',
          hasError: true,
          errorMessage: 'This is an error message',
          showHint: false,
          errorIcon: 'blrError',
          value: '',
        })}
      </div>
    </div>
  `;
};
Icon.argTypes = {
  ...disabledArgTypes,
};
Icon.storyName = 'Icon';
/**
 * The Text Input component can display an optional hint text and error message with or without icons. Both captions can be combined. For more information see FormCaption component [link to FormCaption component].
 */
export const FormCaption = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textinput">
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: '',
          label: ' A Text Input without an Input Icon',
          labelAppendix: '',
          showHint: false,
          showInputIcon: false,
          value: '',
        })}
      </div>
    </div>
  `;
};
FormCaption.argTypes = {
  ...disabledArgTypes,
};
FormCaption.storyName = 'Form Caption';
