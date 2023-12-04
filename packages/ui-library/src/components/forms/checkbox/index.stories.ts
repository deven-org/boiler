/* eslint-disable no-console */
import { BlrCheckboxRenderFunction, BlrCheckboxType } from './index';

import { InputSizes } from '../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Forms/Checkbox',
  argTypes: {
    // Appearance
    size: {
      name: 'sizeVariant',
      description: 'Choose size of the component.',
      options: InputSizes,
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
    //Content/ Settings
    checked: {
      description: 'Choose if component is checked.',
      control: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    checkedIcon: {
      description: '',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'checked', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    indeterminate: {
      description: 'Choose if component is checked.',
      control: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    indeterminatedIcon: {
      description: 'Choose if component is indeterminate.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'indeterminate', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
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
    checkInputId: {
      name: 'checkInputId',
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
  },
  parameters: {
    layout: 'centered',
    docs: {
      //Two examples for Code integration
      //First example for manual code integration
      //canvas: {sourceState: 'shown'},//show code
      //source: {type: 'code'},//additional to previous
      //Second Example
      // source: { code: '<blr-textarea label="Text Area LG" size="lg"></blr-textarea>',},
      description: {
        component: `<Markdown>
Checkbox represents two states: checked (selected) or unchecked (deselected), it  is usually accompanied by text labels thatdescribe the option or action associated with the Checkbox.        
- [**Appearance**](#appearance)
 - [**Size Variant**](#size-variant) 
- [**Content / Settings**](#content--settings)
 - [**Checked**](#checked) 
 - [**Unchecked**](#unchecked) 
 - [**Indeterminate**](#Indeterminate)  
- [**States**](#states)
 - [**Disabled**](#disabled) 
 - [**Readonly**](#readonly)
- [**Validation**](#validation)
 - [**Has Error**](#has-error)  
- [**Dependencies**](#dependencies)
 - [**Form-Label**](#form-label) 
 - [**Form Caption Group**](#form-caption-group)     
</Markdown>
        `,
      },
    },
  },
};

export const BlrCheckbox = (params: BlrCheckboxType) => BlrCheckboxRenderFunction(params);
BlrCheckbox.storyName = 'Checkbox';

const logEventType = (event: Event) => {
  console.log('storybook:story:logEventType', event.type);
};

const args: BlrCheckboxType = {
  theme: 'Light',
  size: 'md',

  hasLabel: true,
  label: 'Checkbox Option',

  hasError: false,
  errorMessage: 'This is a sample error message',
  errorIcon: undefined,

  hasHint: false,
  hintMessage: 'This is a sample hint',
  hintIcon: undefined,
  name: 'checkInputId',
  checkInputId: 'checkInputId',
  disabled: false,
  checked: false,
  indeterminate: false,
  readonly: false,
  arialabel: 'check Input',

  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
};
BlrCheckbox.args = args;
