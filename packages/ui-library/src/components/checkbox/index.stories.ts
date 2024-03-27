/* eslint-disable no-console */
import { BlrCheckboxType } from './index';
import { BlrCheckboxRenderFunction } from './renderFunction';
import { html } from 'lit-html';

import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { InputSizes } from '../../globals/constants';
// this loads the all components instances and registers their html tags
import '../../index';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .stories-checkbox {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
`;

export default {
  title: 'Components/Checkbox',
  argTypes: {
    // Appearance
    sizeVariant: {
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
      description: 'Select an icon which is displayed when checkbox is checked.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'checked', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    indeterminate: {
      description: 'Choose if component is indeterminate.',
      control: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    indeterminatedIcon: {
      description: 'Select an icon which is displayed when checkbox is indeterminate.',
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
    hintMessageIcon: {
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
    errorMessageIcon: {
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
    checkboxId: {
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
    blrCheckedChange: {
      description: 'Fires when the value changes.',

      table: {
        category: 'Events',
      },
    },
    blrFocus: {
      description: 'Fires when the component is focused.',

      table: {
        category: 'Events',
      },
    },
    blrBlur: {
      description: 'Fires when the component lost focus.',

      table: {
        category: 'Events',
      },
    },
  },
  parameters: {
    badges: ['Draft'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125200&mode=dev',
    },
    layout: 'centered',
    docs: {
      //Two examples for Code integration
      //First example for manual code integration
      //canvas: {sourceState: 'shown'},//show code
      //source: {type: 'code'},//additional to previous
      //Second Example
      // source: { code: '<blr-textarea label="Text Area LG" size="lg"></blr-textarea>',},
      description: {
        component: `<markdown>
        Checkbox represents two states: checked (selected) or unchecked (deselected). It is usually accompanied by a text label that describes the option or action associated with the Checkbox.        

- [**Appearance**](#appearance)
 - [**Size Variant**](#size-variant) 
- [**Content / Settings**](#content--settings)
 - [**Checked / Unchecked **](#checked--unchecked) 
 - [**Indeterminate**](#indeterminate)  
- [**States**](#states)
 - [**Disabled**](#disabled) 
 - [**Readonly**](#readonly)
- [**Validation**](#validation)
 - [**Has Error**](#has-error)  
- [**Dependencies**](#dependencies)
 - [**Form-Label**](#form-label) 
 - [**Form Caption Group**](#form-caption-group)     
</markdown>
        `,
      },
    },
  },
};
// Default parameters for Checkbox component
const defaultParams: BlrCheckboxType = {
  theme: 'Light',
  sizeVariant: 'md',
  checked: false,
  checkedIcon: 'blrCheckmark',
  indeterminate: false,
  indeterminatedIcon: 'blrMinus',
  hasLabel: true,
  label: 'Label-text',
  hasHint: false,
  hintMessage: 'This is a small hint message',
  hintMessageIcon: 'blrInfo',
  disabled: false,
  readonly: false,
  hasError: false,
  errorMessage: ' ',
  errorMessageIcon: undefined,
  arialabel: 'checkbox',
  checkboxId: 'checkboxId',
  name: 'checkInputId',
};

export const BlrCheckbox = (params: BlrCheckboxType) => BlrCheckboxRenderFunction(params);
BlrCheckbox.storyName = 'Checkbox';
BlrCheckbox.args = defaultParams;

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
          sizeVariant: 'sm',
        })}
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Size MD',
          sizeVariant: 'md',
        })}
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Size LG',
          sizeVariant: 'lg',
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
 * The Checkbox component can be checked or unchecked. The checked state indicates that the Checkbox component is selected or enabled.
 * The unchecked state indicates that the Checkbox component is not selected.
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
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Unchecked',
          checked: false,
        })}
      </div>
    </div>
  `;
};
Checked.story = {
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
// todo will be implemented with ticket no. #673
// /**
//  * ## Validation
//  *
//  * ### Required
//  * The Checkbox component can be set as required. If set as required, an error should be thrown, when the Checkbox component was not checked, before it was submitted. It is recommended to indicate in the label appendix, whether a component is required or not. For more information on the label and label appendix have a look at the [Form Label](/docs/design-system-web-components-internal-components-formlabel--docs) component in the dependencies section below.
//  */
// export const Required = () => {
//   return html`
//     ${sharedStyles}
//     <div class="wrapper">
//       <div class="stories-checkbox">
//         ${BlrCheckboxRenderFunction({
//           ...defaultParams,
//           label: 'Required',
//         })}
//       </div>
//     </div>
//   `;
// };
// Required.story = {
//   name: ' ',
// };

/**
 * ## Validation
 * ### Has Error
 * The Checkbox component can be set to have an error. An error can be displayed after submitting a wrong value, after leaving/deselecting the Checkbox or in case the Checkbox was set as required and has not been checked before submitting. For more information on the error message have a look at the [Form Caption Group](#form-caption-group) in the dependencies section below.
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
          label: 'Hint message',
          hasHint: true,
        })}
        ${BlrCheckboxRenderFunction({
          ...defaultParams,
          label: 'Hint and error message',
          hasHint: true,
          hasError: true,
          hintMessageIcon: 'blr360',
          errorMessage: "OMG it's an error",
          errorMessageIcon: 'blrErrorFilled',
        })}
      </div>
    </div>
  `;
};
FormCaptionGroup.story = {
  name: ' ',
};
