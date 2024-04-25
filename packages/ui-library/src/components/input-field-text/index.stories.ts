/* eslint-disable no-console */
import { BlrInputFieldTextType } from './index';
import { BlrInputFieldTextRenderFunction } from './renderFunction';
import { FormSizes, InputTypes } from '../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { html } from 'lit-html';

// this loads the all components instances and registers their html tags
import '../../index';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .wrapper {
      display: flex;
      justify-content: center;
    }
    .stories-inputfieldtext {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
`;

export default {
  title: 'Components/Input Field Text',
  argTypes: {
    //Appearance
    sizeVariant: {
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
        category: 'Content / Settings',
      },
    },

    placeholder: {
      description: 'Enter string used as placeholder text.',
      name: 'placeholder',
      defaultValue: 'Placeholder-text',
      table: {
        category: 'Content / Settings',
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
        category: 'Content / Settings',
      },
    },

    maxLength: {
      name: 'maxLength',
      description: 'Enter the max allowed length. Additional input is cut off after the max has been reached.',
      defaultValue: 200,
      table: {
        category: 'Content / Settings',
      },
    },
    hasLabel: {
      name: 'hasLabel',
      description: 'Choose if component has a label.',
      defaultValue: true,
      control: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    label: {
      name: 'label',
      description: 'Enter string used as label text.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'hasLabel', eq: true },
    },
    labelAppendix: {
      name: 'labelAppendix',
      description:
        'Enter string used as an appendix to the label. Use this to inform the user in case this field is required or not.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'hasLabel', eq: true },
    },
    hasIcon: {
      description: 'Choose if component has an icon.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    icon: {
      description: 'Select an icon which is displayed inside of the input.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasIcon', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    hasHint: {
      name: 'hasHint',
      description: ' Choose if component has a hint message. ',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Content / Settings',
      },
    },
    hintMessageIcon: {
      name: 'hintMessageIcon',
      description: 'Select an icon which is displayed in front of the hint message.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasHint', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    hintMessage: {
      name: 'hintMessage',
      description: 'Enter string used used as hint message.',
      if: { arg: 'hasHint', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
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
    required: {
      name: 'required',
      description: 'Choose if the component must hold a value after an interaction or a submit.',
      defaultValue: false,
      table: {
        category: 'Validation',
      },
    },
    hasError: {
      name: 'hasError',
      description: 'Choose if component has an error.',
      defaultValue: false,
      table: {
        category: 'Validation',
      },
    },
    errorMessageIcon: {
      name: 'errorMessageIcon',
      description: 'Select an icon which is displayed in front of the error message.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasError', eq: true },
      table: {
        category: 'Validation',
      },
    },
    errorMessage: {
      description: 'Enter string used used as error message.',
      if: { arg: 'hasError', eq: true },
      table: {
        category: 'Validation',
      },
    },
    arialabel: {
      name: 'ariaLabel',
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        category: 'Accessibility',
      },
    },
    blrTextValueChange: {
      name: 'blrTextValueChange',
      description: 'Fires when the value changes.',
      action: 'blrTextValueChange',
      table: {
        category: 'Events',
      },
    },
    blrSelect: {
      name: 'blrSelect',
      description: 'Fires when some text is selected.',
      action: 'blrSelect',
      table: {
        category: 'Events',
      },
    },
    blrFocus: {
      name: 'blrFocus',
      description: 'Fires when the component is focused.',
      action: 'blrFocus',
      table: {
        category: 'Events',
      },
    },
    blrBlur: {
      name: 'blrBlur',
      description: 'Fires when the component lost focus.',
      action: 'blrBlur',
      table: {
        category: 'Events',
      },
    },
    name: {
      name: 'name',
      description: 'For a < form > element, the name attribute is used as a reference when the data is submitted. ',
      table: {
        category: 'Technical Attributes',
      },
    },
    //Technical attributes
    inputFieldTextId: {
      name: 'inputFieldTextId',
      description: 'Unique identifier for this component.',
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
    badges: ['Draft'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125196&mode=dev',
    },
    viewMode: 'docs',
    previewTabs: {
      'storybook/story/panel': {
        hidden: true,
      },
    },
    docs: {
      description: {
        component: `<markdown>
Input Field Text allows users to enter textual information or data into a designated area. Users can interact with the Input Field Text component by clicking or tapping on it, which activates it for text entry. It often displays a blinking cursor to indicate the current text insertion point.
- [**Appearance**](#appearance)
 - [**Size Variant**](#size-variant) 
- [**Content / Settings**](#content--settings)
 - [**Type**](#type) 
 - [**Placeholder**](#placeholder) 
- [**States**](#states)
 - [**Disabled**](#disabled) 
 - [**Readonly**](#readonly)
- [**Validation**](#validation)
 - [**Required**](#required) 
 - [**Has Error**](#has-error)  
- [**Dependencies**](#dependencies)
 - [**Form Label**](#form-label) 
 - [**Icon**](#icon) 
 - [**Form Caption Group**](#form-caption-group)     
</markdown>
        `,
      },
    },
  },
};

export const BlrInputFieldText = (params: BlrInputFieldTextType) => BlrInputFieldTextRenderFunction(params);
BlrInputFieldText.storyName = 'Input Field Text';

// Default parameters for Input Field Text component
const defaultParams: BlrInputFieldTextType = {
  theme: 'Light',
  sizeVariant: 'md',
  type: 'text',
  placeholder: 'Placeholder-text',
  value: '',
  maxLength: 140,
  hasLabel: true,
  label: 'Label-text',
  labelAppendix: '(Appendix)',
  hasIcon: true,
  icon: 'blr360',
  hasHint: false,
  hintMessage: 'This is a small hint message',
  hintMessageIcon: 'blrInfo',
  disabled: false,
  readonly: false,
  required: false,
  hasError: false,
  errorMessage: '',
  errorMessageIcon: undefined,
  arialabel: 'InputFieldText',
  name: 'InputFieldText',
  inputFieldTextId: 'Input Id',
};

BlrInputFieldText.args = defaultParams;

//disabledArgTypesTable to deactivate the controls-Panel for a story in storybook
const argTypesToDisable = [
  'theme',
  'sizeVariant',
  'type',
  'isResizeable',
  'placeholder',
  'value',
  'minLength',
  'maxLength',
  'hasLabel',
  'label',
  'labelAppendix',
  'hasHint',
  'hintText',
  'hintMessageIcon',
  'hasIcon',
  'inputFieldTextId',
  'disabled',
  'readonly',
  'required',
  'hasError',
  'errorMessage',
  'errorMessageIcon',
  'arialabel',
  'name',
  'blrTextValueChange',
  'blrSelect',
  'blrFocus',
  'blrBlur',
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
 * ## Appearance
 * ### Size Variant
 * The Input Field Text component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-inputfieldtext">
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'sm',
          label: 'Input Field Text SM',
          hasIcon: false,
          placeholder: '',
          value: '',
        })}
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          label: 'Input Field Text MD',
          hasIcon: false,
          placeholder: '',
          value: '',
        })}
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'lg',
          label: 'Input Field Text LG',
          hasIcon: false,
          placeholder: '',
          value: '',
        })}
      </div>
    </div>
  `;
};
SizeVariant.argTypes = {
  ...disabledArgTypes,
};
SizeVariant.story = {
  name: ' ',
};

//Content/ Settings Type & Placeholder
/**
 * ## Content / Settings
 * ### Type
 * The Input Field Text component can have all the types an html input can have, except the number and the unit type, which is covered in the Input Field Number component. For more information have a look at the [Input Field Number](/docs/components-forms-input-field-number--docs) component.
 */
export const Type = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-inputfieldtext">
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          type: 'text',
          sizeVariant: 'md',
          label: 'Enter text',
          hasIcon: false,
          labelAppendix: '',
          placeholder: '',
          value: '',
        })}
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          type: 'password',
          sizeVariant: 'md',
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
Type.story = {
  name: ' ',
};

/**
 * The Input Field Text component can display a placeholder text. This is recommended to improve usability.
 */
export const Placeholder = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-inputfieldtext">
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          label: 'With placeholder',
          placeholder: 'Add a message here',
          hasIcon: false,
          labelAppendix: '',
          value: '',
        })}
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          label: 'Without placeholder',
          labelAppendix: '',
          hasIcon: false,
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

// States Disabled
/**
 * ## States
 * Apart from states like rest, hover, pressed and focus, the Input Field Text component can also be disabled or readonly. The error state is documented under [validation](#validation).
 * ### Disabled
 * The Input Field Text component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-inputfieldtext">
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          label: 'Disabled',
          hasIcon: false,
          placeholder: '',
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
Disabled.story = {
  name: ' ',
};

/**
 * The Input Field Text component in the readonly state can not be interacted with, but it can still be selected and receive focus.
 */
export const Readonly = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-inputfieldtext">
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          label: 'Readonly',
          readonly: true,
          hasIcon: false,
          placeholder: '',
          value: '',
        })}
      </div>
    </div>
  `;
};
Readonly.argTypes = {
  ...disabledArgTypes,
};

// Validation Required Todo add interactive Story with Button to show the State
/**
 * ## Validation
 * ### Required
 * The Input Field Text component can be set as required. If set as required, an error should be thrown, when the Input Field Text component was not filled, before it was submitted. It is recommended to indicate in the label appendix, whether a component is required or not. For more information on the label and label appendix have a look at the [Form Label](#form-label) component in the dependencies section below..
 * */
export const Required = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          placeholder: '',
          label: 'Label-text',
          labelAppendix: '(required)',
          hasIcon: false,
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
Required.story = {
  name: ' ',
};

/**
 * The Input Field Text component can be set to have an error. An error can be displayed after submitting a wrong value, after leaving/deselecting the Input Field Text or in case the Input Field Text was set as required and has not been filled before submitting. For more information on the error message have a look at the [Form Caption Group](#form-caption-group) in the dependencies section below.
 * */
export const HasError = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          hasError: true,
          placeholder: '',
          label: 'Error',
          labelAppendix: '',
          errorMessage: '',
          errorMessageIcon: undefined,
          value: '',
        })}
      </div>
    </div>
  `;
};
HasError.argTypes = {
  ...disabledArgTypes,
};

//Dependencies Captions
/**
 * ## Dependencies
 * ### Form Label
 * The Input Field Text component can display an optional Form Label component, consisting of a label and a label appendix. For more information have a look at the internal [Form Label](?path=/docs/components-form-label--docs) component.
 */
export const FormLabel = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-inputfieldtext">
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          placeholder: '',
          label: 'Label',
          labelAppendix: '(Appendix)',
          hasIcon: false,
          value: '',
        })}
      </div>
    </div>
  `;
};
FormLabel.argTypes = {
  ...disabledArgTypes,
};
FormLabel.story = {
  name: ' ',
};
/**
 * The Input Field Text component can have a trailing clickable Icon / Button Icon component. This could be used for example to show or hide the input, when it is used to enter a password. For more information have a look at the [Icon](?path=/docs/components-icon--docs) component.
 */
export const Icon = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-inputfieldtext">
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          placeholder: '',
          label: 'With Icon',
          labelAppendix: '',
          type: 'password',
          value: 'Password',
        })}
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          placeholder: '',
          label: 'Without Icon',
          hasIcon: false,
          labelAppendix: '',
          value: '',
        })}
      </div>
    </div>
  `;
};
Icon.argTypes = {
  ...disabledArgTypes,
};
/**
 * The Form Caption Group component can display an optional hint message and error message with or without icons. Both captions can be combined. For more information have a look at the internal [Form Caption Group](/docs/components-form-caption-group--docs) component.
 */
export const FormCaptionGroup = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-inputfieldtext">
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          placeholder: '',
          label: 'Hint message',
          labelAppendix: '',
          hasHint: true,
          hasIcon: false,
          value: '',
        })}
        ${BlrInputFieldTextRenderFunction({
          ...defaultParams,
          theme: 'Light',
          sizeVariant: 'md',
          placeholder: '',
          label: ' Hint and error message',
          labelAppendix: '',
          hasHint: true,
          hintMessage: 'This is a small hint',
          hasError: true,
          errorMessage: "OMG it's an error",
          errorMessageIcon: 'blrErrorFilled',
          hasIcon: false,
          value: '',
        })}
      </div>
    </div>
  `;
};
FormCaptionGroup.argTypes = {
  ...disabledArgTypes,
};
