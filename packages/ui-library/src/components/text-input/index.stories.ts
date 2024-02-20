/* eslint-disable no-console */
import { BlrTextInputType } from './index';
import { BlrTextInputRenderFunction } from './renderFunction';
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
    .stories-textinput {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
`;

export default {
  title: 'Components/Text Input',
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
    // todo it has to be renamed? Checke this
    showInputIcon: {
      description: 'Choose if component has an icon.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    // todo it has to be renamed? Checke this
    inputIcon: {
      description: 'Select an icon which is displayed inside of the input.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'showInputIcon', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },

    // todo renaming from hintText to hasHint in the blrFormRenderFunction, partially solution with name overwriting
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
    // todo renaming from hintIcon to hintMessageIcon in the blrFormRenderFunction, partially solution with name overwriting
    hintIcon: {
      name: 'hintMessageIcon',
      description: 'Select an icon which is displayed in front of the hint message.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasHint', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    // todo renaming from hintText to hasHint in the blrFormRenderFunction, partially solution with name overwriting
    hintMessage: {
      name: 'hintMessage',
      description: 'Enter string used used as hint message.',
      if: { arg: 'hasHint', eq: true },
      table: {
        category: 'Content / Settings',
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
    // todo renaming from errorIcon to errorMessageIcon, partially solution with name overwriting
    errorIcon: {
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
Text Input allows users to enter textual information or data into a designated area. Users can interact with the Text Input component by clicking or tapping on it, which activates it for text entry. It often displays a blinking cursor to indicate the current text insertion point.
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

export const BlrTextInput = (params: BlrTextInputType) => BlrTextInputRenderFunction(params);
BlrTextInput.storyName = 'Text Input';

// Default parameters for Text Input component
const defaultParams: BlrTextInputType = {
  size: 'md',
  placeholder: 'Placeholder-text',
  value: '',
  maxLength: 140,
  label: 'Label-text',
  labelAppendix: '(Appendix)',
  hasHint: false,
  hintMessage: 'This is a small hint message',
  hintIcon: 'blrInfo',
  arialabel: 'TextInput',
  name: 'TextInput',
  theme: 'Light',
  textInputId: 'Input Id',
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

BlrTextInput.args = defaultParams;

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
  'hasHint',
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
  'blrTextValueChange',
  'blrSelect',
  'blrFocus',
  'blrBlur',
];

const generateDisabledArgTypes = (argTypes: string[]) => {
  const disabledArgTypes = {};
  argTypes.forEach((argType: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
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
          showInputIcon: false,
          placeholder: '',
          value: '',
        })}
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Text Input MD',
          showInputIcon: false,
          placeholder: '',
          value: '',
        })}
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'lg',
          label: 'Text Input LG',
          showInputIcon: false,
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
 * The Text Input component can have all the types an html input can have, except the number and the unit type, which is covered in the Number Input component. For more information have a look at the [Number Input](/docs/design-system-web-components-forms-number-input--docs) component.
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
          showInputIcon: false,
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
Type.story = {
  name: ' ',
};

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
          placeholder: 'Add a message here',
          showInputIcon: false,
          labelAppendix: '',
          value: '',
        })}
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Without placeholder',
          labelAppendix: '',
          showInputIcon: false,
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
 * Apart from states like rest, hover, pressed and focus, the Text Input component can also be disabled or readonly. The error state is documented under [validation](#validation).
 * ### Disabled
 * The Text Input component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
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
          label: 'Disabled',
          showInputIcon: false,
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
 * The Text Input component in the readonly state can not be interacted with, but it can still be selected and receive focus.
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
          showInputIcon: false,
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
 * The Text Input component can be set as required. If set as required, an error should be thrown, when the Text Input component was not filled, before it was submitted. It is recommended to indicate in the label appendix, whether a component is required or not. For more information on the label and label appendix have a look at the [Form Label](#form-label) component in the dependencies section below..
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
          placeholder: '',
          label: 'Label-text',
          labelAppendix: '(required)',
          showInputIcon: false,
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
 * The Text Input component can be set to have an error. An error can be displayed after submitting a wrong value, after leaving/deselecting the Text Input or in case the Text Input was set as required and has not been filled before submitting. For more information on the error message have a look at the [Form Caption Group](#form-caption-group) in the dependencies section below.
 * */
export const HasError = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          hasError: true,
          placeholder: '',
          label: 'Error',
          labelAppendix: '',
          errorMessage: '',
          errorIcon: undefined,
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
 * The Text Input component can display an optional Form Label component, consisting of a label and a label appendix. For more information have a look at the internal [Form Label](?path=/docs/design-system-web-components-internal-components-formlabel--docs) component.
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
          label: 'Label',
          labelAppendix: '(Appendix)',
          showInputIcon: false,
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
 * The Text Input component can have a trailing clickable Icon / Icon Button component. This could be used for example to show or hide the input, when it is used to enter a password. For more information have a look at the [Icon](?path=/docs/design-system-web-components-ui-icon--docs) component.
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
          label: 'With Icon',
          labelAppendix: '',
          type: 'password',
          value: 'Password',
        })}
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: '',
          label: 'Without Icon',
          showInputIcon: false,
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
 * The Form Caption Group component can display an optional hint message and error message with or without icons. Both captions can be combined. For more information have a look at the internal [Form Caption Group](/docs/design-system-web-components-internal-components-formcaptiongroup--docs) component.
 */
export const FormCaptionGroup = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textinput">
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: '',
          label: 'Hint message',
          labelAppendix: '',
          hasHint: true,
          showInputIcon: false,
          value: '',
        })}
        ${BlrTextInputRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: '',
          label: ' Hint and error message',
          labelAppendix: '',
          hasHint: true,
          hasError: true,
          errorMessage: "OMG it's an error",
          errorIcon: 'blrErrorFilled',
          showInputIcon: false,
          value: '',
        })}
      </div>
    </div>
  `;
};
FormCaptionGroup.argTypes = {
  ...disabledArgTypes,
};
