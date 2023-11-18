/* eslint-disable no-console */
import { BlrTextInputRenderFunction, BlrTextInputType } from './index';
import { FormSizes, InputTypes } from '../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Design System/Web Components/Forms/TextInput',
  argTypes: {
    //Appearance
    //todo rename size to sizeVariant
    size: {
      name: 'sizeVariant',
      description: ' Choose size of the component. ',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        disable: false,
        category: 'Appearance',
      },
    },

    //Content/Settings
    type: {
      description: ' Select type of the component. ',
      options: InputTypes,
      control: { type: 'select' },
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
    },

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
      description: 'Enter the value the component should hold.',
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

    maxLength: {
      name: 'maxLength',
      description: 'Enter the max allowed length. Additional input is cut off after the max has been reached.',
      defaultValue: 200,
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
    // todo it has to be renamed? Checke this
    hasIcon: {
      description: 'Choose if component has an icon.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'boolean' },
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
    },
    // todo it has to be renamed? Checke this
    inputIcon: {
      description: 'Select an icon which is displayed inside of the input.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasIcon', eq: true },
      table: {
        disable: false,
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
        disable: false,
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
        disable: false,
        category: 'Content/ Settings',
      },
    },
    // todo renaming from hintText to hasHint in the blrFormRenderFunction, partially solution with name overwriting
    hintText: {
      name: 'hintMessage',
      if: { arg: 'showHint', eq: true },
      table: {
        disable: false,
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
    // todo renaming from errorIcon to errorMessageIcon, partially solution with name overwriting
    errorIcon: {
      name: 'errorMessageIcon',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasError', eq: true },
      table: {
        disable: false,
        category: 'Validations',
      },
    },
    errorMessage: {
      if: { arg: 'hasError', eq: true },
      table: {
        disable: false,
        category: 'Validations',
      },
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
    //Technical attributes
    textInputId: {
      name: 'textInputID',
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
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },

  parameters: {
    viewMode: 'docs',
  },
};

export const BlrTextInput = (params: BlrTextInputType) => BlrTextInputRenderFunction(params);

BlrTextInput.storyName = 'TextInput';

const args: BlrTextInputType = {
  theme: 'Light',
  size: 'md',
  type: 'text',
  placeholder: 'Test placeholder',
  value: '',
  maxLength: 200,
  hasLabel: true,
  label: 'Label',
  labelAppendix: '(Optional)',
  hasIcon: true,
  inputIcon: 'blr360',
  showHint: false,
  hintText: 'This is a hint message',
  hintIcon: 'blrInfo',
  disabled: false,
  readonly: false,
  required: false,
  hasError: false,
  errorMessage: 'This is an error message',
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
