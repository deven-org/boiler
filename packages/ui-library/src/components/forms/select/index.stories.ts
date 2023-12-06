/* eslint-disable no-console */
import { BlrSelectRenderFunction, BlrSelectType } from './index';
import { FormSizes } from '../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Forms/Select',
  argTypes: {
    // Appearance
    size: {
      name: 'sizeVariant',
      description: 'Choose size of the component.',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    // Content / Settings
    hasLabel: {
      description: 'Choose if component has a label.',
      control: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    label: {
      description: 'Enter string used as label text.',
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'hasLabel', eq: true },
    },
    labelAppendix: {
      description:
        'Enter string used as an appendix to the label. Use this to inform the user if this field is required or not.',
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'hasLabel', eq: true },
    },

    //todo follow property has to be added to component
    hasIcon: {
      description: 'Choose if component has an icon.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'boolean' },
      table: { category: 'Content / Settings' },
    },
    icon: {
      description: 'Select an icon which is displayed inside of the input.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasIcon', eq: true },
      table: { category: 'Content / Settings' },
    },
    hasHint: {
      description: 'Choose if component has a hint message.',
      control: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    hintMessage: {
      description: 'Enter string used used as hint message.',
      if: { arg: 'hasHint', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    hintIcon: {
      name: 'hintMessageIcon',
      description: 'Select an icon which is displayed in front of the hint message.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'hasHint', eq: true },
    },
    options: {
      name: 'children (options)',
      description:
        'Enter an array containing information about the label, value and disabled prop for all options that are part of the select.',
      control: 'array',
      options: [
        { value: '0', label: 'Option 1', selected: false, disabled: true },
        { value: '1', label: 'Option 2', selected: false, disabled: false },
        { value: '2', label: 'Option 3', selected: true, disabled: false },
        { value: '4', label: 'Option 4', selected: false, disabled: false },
      ],
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
    // todo currently missing on the component
    readonly: {
      name: 'readonly',
      description: 'Choose if component is readonly. The user can select but not change the value of this component.',
      defaultValue: false,
      control: { type: 'boolean' },
      table: {
        category: 'States',
      },
    },
    required: {
      description: 'Choose if the component must hold a value after an interaction or a submit.',
      defaultValue: false,
      table: {
        category: 'States',
      },
    },
    // Validation
    hasError: {
      name: 'hasError',
      description: 'Choose if component has an error.',
      defaultValue: false,
      table: {
        category: 'Validation',
      },
    },
    errorMessage: {
      name: 'errorMessage',
      description: 'Enter string used used as error message.',
      table: {
        category: 'Validation',
      },
      if: { arg: 'hasError', eq: true },
    },
    errorIcon: {
      name: 'errorMessageIcon',
      description: 'Select an icon which is displayed in front of the error message.',
      table: {
        category: 'Validation',
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
        category: 'Accessibility',
      },
    },
    //Technical attributes
    selectId: {
      name: 'selectId',
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
    // Events
    onChange: {
      action: 'onChange',
      description: 'Fires when the value changes.',
      table: {
        category: 'Events',
      },
    },
    onFocus: {
      action: 'onFocus',
      description: 'Fires when the component is focused.',
      table: {
        category: 'Events',
      },
    },
    onBlur: {
      action: 'onBlur',
      description: 'Fires when the component lost focus.',
      table: {
        category: 'Events',
      },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrSelect = (params: BlrSelectType) => BlrSelectRenderFunction(params);

BlrSelect.storyName = 'Select';

const args: BlrSelectType = {
  arialabel: 'Select',
  theme: 'Light',
  name: 'select',
  hasHint: false,
  hintMessage: 'This is a hint message',
  hintIcon: 'blrInfo',
  label: 'Label',
  labelAppendix: '(Optional)',
  size: 'md',
  hasError: false,
  errorMessage: 'This is an error message',
  errorIcon: 'blrInfo',
  disabled: false,
  required: false,
  selectId: 'Peter',
  icon: 'blrChevronDown',
  options: [
    { value: 'uschi', label: 'Uschi', disabled: true },
    { value: '1', label: 'Option 1' },
    { value: '2', label: 'Option 2', selected: true },
    { value: 'dieter', label: 'Dieter' },
  ],
  onChange: (event: Event) => console.log(event.type),
};

BlrSelect.args = args;
