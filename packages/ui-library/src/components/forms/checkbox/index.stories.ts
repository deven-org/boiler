/* eslint-disable no-console */
import { BlrCheckboxRenderFunction, BlrCheckboxType } from './index';
import { html } from 'lit-html';
import { InputSizes } from '../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .wrapper {
      display: flex;
      justify-content: center;
    }
    .stories-checkbox {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
`;

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

const args: BlrCheckboxType = {
  theme: 'Light',
  size: 'md',

  hasLabel: true,
  label: 'Label',

  hasError: false,
  errorMessage: 'This is a sample error message',
  errorIcon: undefined,

  hasHint: false,
  hintMessage: 'This is a small hint message',
  hintIcon: undefined,
  name: 'checkInputId',
  checkInputId: 'checkInputId',
  disabled: false,
  checked: false,
  indeterminate: false,
  readonly: false,
  arialabel: 'check Input',
};
BlrCheckbox.args = args;

// Default parameters for Checkbox component
const defaultParams: BlrCheckboxType = {
  theme: 'Light',
  size: 'md',

  hasLabel: true,
  label: 'Label',

  hasError: false,
  errorMessage: 'This is a sample error message',
  errorIcon: undefined,

  hasHint: false,
  hintMessage: 'This is a small hint message',
  hintIcon: undefined,
  name: 'checkInputId',
  checkInputId: 'checkInputId',
  disabled: false,
  checked: false,
  indeterminate: false,
  readonly: false,
  arialabel: 'check Input',
};

// All Stories
//Appearance Size Story
/**
 * ## Appearance
 * ### Size Variant
 * The Checkbox component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-checkbox">
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Size SM',
          size: 'sm',
        })}
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Size MD',
          size: 'md',
        })}
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Size LG',
          size: 'lg',
        })}
      </div>
    </div>
  `;
};
SizeVariant.story = {
  name: ' ',
};

//Content / Settings
/**
 * ## Content / Settings
 * ### Checked
 * The checked state on a Checkbox indicates that the Checkbox is selected or enabled.
 */
export const Checked = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-checkbox">
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Checked',
          checked: true,
        })}
      </div>
    </div>
  `;
};
Checked.story = {
  name: ' ',
};

/**
 *### Unchecked
 * The unchecked state on a Checkbox indicates that the Checkbox is not selected.
 */
export const Unchecked = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-checkbox">
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Unchecked',
          checked: false,
        })}
      </div>
    </div>
  `;
};
Unchecked.story = {
  name: ' ',
};

/**
 * ### Indeterminate
 * An indeterminate Checkbox component is neither checked nor unchecked. It is commonly used to control a group of Checkbox components.
 */
export const Indeterminate = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-checkbox">
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Indeterminate',
          indeterminate: true,
        })}
      </div>
    </div>
  `;
};
Indeterminate.story = {
  name: ' ',
};

/**
 * ## States
 * Apart from states like rest, hover, pressed and focus, the Checkbox component can also be disabled or readonly. The error state is documented under [validation](#validation).
 *
 * ### Disabled
 * The Checkbox component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */

export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-checkbox">
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Disabled',
          disabled: true,
        })}
      </div>
    </div>
  `;
};
Disabled.story = {
  name: ' ',
};

/**
 * ### Readonly
 * The Checkbox component in the readonly state can not be interacted with, but it can still be selected and receive focus.
 */
export const Readonly = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-checkbox">
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Readonly',
          readonly: true,
        })}
      </div>
    </div>
  `;
};
Readonly.story = {
  name: ' ',
};

/**
 * ## Validation
 *
 * ### Required
 * The Checkbox component can be set as required. If set as required, an error should be thrown, when the Checkbox component was not filled, before it was submitted. It is recommended to indicate in the label appendix, whether a component is required or not. For more information on the label and label appendix have a look at the [Form Label](/docs/design-system-web-components-internal-components-formlabel--docs) component in the dependencies section below.
 */
export const Required = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-checkbox">
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Required',
        })}
      </div>
    </div>
  `;
};
Required.story = {
  name: ' ',
};

/**
 * ### Has Error
 * The Checkbox component can be set to have an error. An error can be displayed after submitting a wrong value, after leaving/deselecting the Checkbox or in case the Checkbox was set as required and has not been filled before submitting. For more information on the error message have a look at the [Form Caption Group](/docs/design-system-web-components-internal-components-formcaptiongroup--docs) in the dependencies section below.
 */
export const HasError = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-checkbox">
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Error',
          hasError: true,
          errorMessage: ' ',
        })}
      </div>
    </div>
  `;
};
HasError.story = {
  name: ' ',
};

/**
 * ## Dependencies
 *
 * ### Form Label
 * The Checkbox component can display an optional Form Label component, consisting of a label and a label appendix. For more information have a look at the internal [Form Label](/docs/design-system-web-components-internal-components-formlabel--docs) component.
 */

export const FormLabel = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-checkbox">
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'With a label',
        })}
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          hasLabel: false,
        })}
      </div>
    </div>
  `;
};
FormLabel.story = {
  name: ' ',
};

/**
 * ### Form Caption Group
 * The Checkbox component can display an optional hint message and error message with or without icons. Both captions can be combined. For more information have a look at the internal [Form Caption Group](/docs/design-system-web-components-internal-components-formcaptiongroup--docs) component. If the Checkbox component lacks a label (hasLabel=false), the Form Caption Group should remain hidden.
 */
export const FormCaptionGroup = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-checkbox">
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Form Label',
          hasHint: true,
        })}
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Form Label with a hint and error message',
          hasHint: true,
          hasError: true,
          hintIcon: 'blr360',
          errorIcon: 'blrErrorFilled',
        })}
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Form Label with only a hint and error message',
          hasHint: true,
          hasError: true,
        })}
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Form Label with only a error message',
          hasHint: false,
          hasError: true,
        })}
      </div>
    </div>
  `;
};
FormCaptionGroup.story = {
  name: ' ',
};
