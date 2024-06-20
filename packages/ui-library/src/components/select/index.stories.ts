/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrSelectType } from './index.js';
import { BlrSelectRenderFunction } from './renderFunction.js';
import { FormSizes } from '../../globals/constants.js';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';
import '../../index.js';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .stories-select {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1.25em;
    }
  </style>
`;

const defaultParams: BlrSelectType = {
  theme: 'Light',
  sizeVariant: 'md',
  hasLabel: true,
  label: 'Label-text',
  labelAppendix: '(Appendix)',
  icon: 'blrChevronDown',
  hasHint: false,
  hintMessage: 'This is a small hint message',
  hintMessageIcon: 'blrInfo',
  disabled: false,
  required: false,
  hasError: false,
  errorMessage: '',
  errorMessageIcon: undefined,
  arialabel: 'Select',
  selectId: 'selectId',
  name: 'select',
};

export default {
  title: 'Components/Select',
  argTypes: {
    // Appearance
    sizeVariant: {
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
      name: 'hasLabel',
      description: 'Choose if component has a label.',
      defaultValue: true,
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
      if: { arg: 'hasLabel', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    icon: {
      description: 'Select an icon which is displayed inside of the input.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
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
      table: {
        category: 'States',
      },
    },
    // todo currently missing on the component
    required: {
      description: 'Choose if the component must hold a value after an interaction or a submit.',
      control: { type: 'boolean' },
      table: {
        category: 'Validation',
      },
    },

    // Validation
    hasError: {
      description: 'Choose if component has an error.',
      table: {
        category: 'Validation',
      },
    },
    errorMessage: {
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
    selectId: {
      description: 'Unique identifier for this component.',
      table: {
        category: 'Technical Attributes',
      },
    },
    name: {
      description: 'For a < form > element, the name attribute is used as a reference when the data is submitted.',
      table: {
        category: 'Technical Attributes',
      },
    },
    // Events
    blrSelectedValueChange: {
      action: 'blrSelectedValueChange',
      description: 'Fires when the value changes.',
      table: {
        category: 'Events',
      },
    },
    blrFocus: {
      description: 'Fires when the component is focused.',
      action: 'blrFocus',
      table: {
        category: 'Events',
      },
    },
    blrBlur: {
      description: 'Fires when the component lost focus.',
      action: 'blrBlur',
      table: {
        category: 'Events',
      },
    },
  },
  parameters: {
    badges: ['Draft'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125198&mode=dev',
    },
    layout: 'centered',
    viewMode: 'docs',
    docs: {
      description: {
        component: `<markdown>
Select presents users with a list of options from which they can make a single selection. It contains a list of selectable options. These options can be text-based, such as names, items, or categories.
<br>
- [**Appearance**](#appearance)
 - [**Size Variant**](#size-variant)
- [**States**](#states)
 - [**Disabled**](#disabled)
- [**Validation**](#validation)
 - [**Required**](#required)
 - [**Has Error**](#has-error)
- [**Dependencies**](#dependencies)
 - [**Form Label**](#form-label)
 - [**Icon**](#icon)
 - [**Form Caption Group**](#form-caption-group)
</markdown>`,
      },
    },
  },
};

const optionsAsChildren = html`
  <option value="" label="--Please choose an option--"></option>
  <option value="option1" label="Option 1"></option>
  <option value="option2" label="Option 2"></option>
  <option value="option3" label="Option 3"></option>
  <option value="option4" label="Option 4"></option>
  <option value="option5" label="Option 5"></option>
  <option value="option6" label="Option 6"></option>
`;

export const BlrSelect = (params: BlrSelectType) => BlrSelectRenderFunction(params, optionsAsChildren);

BlrSelect.storyName = 'Select';
BlrSelect.args = defaultParams;

//disabledArgTypesTable to deactivate the controls-Panel for a story in storybook
const argTypesToDisable = [
  'theme',
  'sizeVariant',
  'hasIcon',
  'hasLabel',
  'label',
  'labelAppendix',
  'hasHint',
  'hintText',
  'hintMessageIcon',
  'disabled',
  'required',
  'hasError',
  'errorMessage',
  'errorIcon',
  'arialabel',
  'options',
  'selectId',
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
/**
 * ## Appearance
 * ### Size Variant
 * The Select component comes in 5 sizes: SM, MD, LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction(
        {
          ...defaultParams,
          sizeVariant: 'sm',
          label: 'Select SM',
          labelAppendix: '',
        },
        optionsAsChildren
      )}
      ${BlrSelectRenderFunction(
        {
          ...defaultParams,
          sizeVariant: 'md',
          label: 'Select MD',
          labelAppendix: '',
        },
        optionsAsChildren
      )}
      ${BlrSelectRenderFunction(
        {
          ...defaultParams,
          sizeVariant: 'lg',
          label: 'Select LG',
          labelAppendix: '',
        },
        optionsAsChildren
      )}
    </div>
  `;
};
SizeVariant.story = { name: ' ' };
SizeVariant.argTypes = {
  ...disabledArgTypes,
};
/**
 * ## States
 * Apart from states like rest, hover, pressed and focus, the Select component can also be disabled. The error state is documented under [validation](#validation).
 *
 * ### Disabled
 * The Select component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction(
        {
          ...defaultParams,
          disabled: true,
          label: 'Disabled',
          labelAppendix: '',
        },
        optionsAsChildren
      )}
    </div>
  `;
};
Disabled.story = { name: ' ' };
Disabled.argTypes = {
  ...disabledArgTypes,
};

/**
 * ## Validation
 *
 * ### Required
 * The Select component can be set as required. If set as required, an error should be thrown, when the Select component was not filled, before it was submitted. It is recommended to indicate in the label appendix, whether a component is required or not. For more information on the label and label appendix have a look at the [Form Label](#form-label) component in the dependencies section below.
 */
export const Required = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction(
        {
          ...defaultParams,
          required: true,
          label: 'Required',
          labelAppendix: '',
        },
        optionsAsChildren
      )}
    </div>
  `;
};
Required.story = { name: ' ' };
Required.argTypes = {
  ...disabledArgTypes,
};

/**
 * The Select component can be set to have an error. An error can be displayed after submitting a wrong value, after leaving/deselecting the Select or in case the Select was set as required and has not been filled before submitting. For more information on the error message have a look at the [Form Caption Group](#form-caption-group) in the dependencies section below.
 */
export const HasError = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction(
        {
          ...defaultParams,
          hasError: true,
          errorMessageIcon: undefined,
          label: 'Error',
          labelAppendix: '',
        },
        optionsAsChildren
      )}
    </div>
  `;
};
HasError.argTypes = {
  ...disabledArgTypes,
};
/**
 * ## Dependencies
 *
 * ### Form Label
 * The Select component can display an optional Form Label component, consisting of a label and a label appendix. For more information have a look at the internal [Form Label](/docs/components-form-label--docs) component.
 */
export const FormLabel = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction(
        {
          ...defaultParams,
          label: 'With Label',
          labelAppendix: '(with Appendix)',
        },
        optionsAsChildren
      )}
      ${BlrSelectRenderFunction(
        {
          ...defaultParams,
          label: ' ',
          labelAppendix: ' ',
        },
        optionsAsChildren
      )}
    </div>
  `;
};
FormLabel.story = { name: ' ' };
FormLabel.argTypes = {
  ...disabledArgTypes,
};
/**
 * The Select component makes use of the Icon component. For more information have a look at the [Icon](/docs/components-icon--docs) component.
 */

export const Icon = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction(
        {
          ...defaultParams,
          icon: 'blrArrowUp',
          label: 'With Icon',
          labelAppendix: ' ',
        },
        optionsAsChildren
      )}
      ${BlrSelectRenderFunction(
        {
          ...defaultParams,
          icon: undefined,
          label: 'Default Icon',
          labelAppendix: ' ',
        },
        optionsAsChildren
      )}
    </div>
  `;
};
Icon.argTypes = {
  ...disabledArgTypes,
};
/**
 * The Select component can display an optional hint message and error message with or without icons. Both captions can be combined. For more information have a look at the internal [Form Caption Group](/docs/components-form-caption-group--docs) component.
 */
export const FormCaptionGroup = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction(
        {
          ...defaultParams,
          hasHint: true,
          label: 'Hint message',
          labelAppendix: ' ',
        },
        optionsAsChildren
      )}
      ${BlrSelectRenderFunction(
        {
          ...defaultParams,
          icon: undefined,
          label: 'Hint and error message',
          labelAppendix: '',
          hasHint: true,
          hasError: true,
          errorMessage: "OMG it's an error",
          errorMessageIcon: 'blrErrorFilled',
        },
        optionsAsChildren
      )}
    </div>
  `;
};
FormCaptionGroup.argTypes = {
  ...disabledArgTypes,
};
