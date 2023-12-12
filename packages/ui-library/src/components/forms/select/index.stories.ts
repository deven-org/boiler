/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrSelectRenderFunction, BlrSelectType } from './index';
import { FormSizes } from '../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

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
  size: 'md',
  label: 'Label-text',
  labelAppendix: '(Appendix)',
  icon: 'blrChevronDown',
  hasHint: false,
  hintMessage: 'This is a small hint message',
  hintIcon: 'blrInfo',
  disabled: false,
  required: false,
  hasError: false,
  errorMessage: ' ',
  errorIcon: undefined,
  arialabel: 'Select',
  theme: 'Light',
  name: 'select',
  selectId: 'selectId',
  options: [
    { value: '0', label: 'Option 1', selected: false, disabled: true },
    { value: '1', label: 'Option 2', selected: false, disabled: false },
    { value: '2', label: 'Option 3', selected: true, disabled: false },
    { value: '4', label: 'Option 4', selected: false, disabled: false },
  ],
  onChange: (event: Event) => console.log(event.type),
};

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
      table: {
        category: 'States',
      },
    },
    // todo currently missing on the component
    readonly: {
      name: 'readonly',
      description: 'Choose if component is readonly. The user can select but not change the value of this component.',
      control: { type: 'boolean' },
      table: {
        category: 'States',
      },
    },
    required: {
      description: 'Choose if the component must hold a value after an interaction or a submit.',
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
    layout: 'centered',
    viewMode: 'docs',
    docs: {
      description: {
        component: `<Markdown>
Select presents users with a list of options from which they can make a single selection. It contains a list of selectable options. These options can be text-based, such as names, items, or categories.
<br>
- [**Appearance**](#appearance)
 - [**Size Variant**](#size-variant)
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
</Markdown>`,
      },
    },
  },
};

export const BlrSelect = (params: BlrSelectType) => BlrSelectRenderFunction(params);

BlrSelect.storyName = 'Select';
BlrSelect.args = defaultParams;

//disabledArgTypesTable to deactivate the controls-Panel for a story in storybook
const argTypesToDisable = [
  'theme',
  'size',
  'hasIcon',
  'hasLabel',
  'label',
  'labelAppendix',
  'hasHint',
  'hintText',
  'hintIcon',
  'disabled',
  'readonly',
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
    // @ts-expect-error todo
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
      ${BlrSelectRenderFunction({
        ...defaultParams,
        size: 'sm',
        label: 'Select SM',
        labelAppendix: '',
      })}
      ${BlrSelectRenderFunction({
        ...defaultParams,
        size: 'md',
        label: 'Select MD',
        labelAppendix: '',
      })}
      ${BlrSelectRenderFunction({
        ...defaultParams,
        size: 'lg',
        label: 'Select LG',
        labelAppendix: '',
      })}
    </div>
  `;
};
SizeVariant.story = { name: ' ' };
SizeVariant.argTypes = {
  ...disabledArgTypes,
};
/**
 * ## States
 * Apart from states like rest, hover, pressed and focus, the Select component can also be disabled or readonly. The error state is documented under [validation](#validation).
 *
 * ### Disabled
 * The Select component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction({
        ...defaultParams,
        disabled: true,
        label: 'Disabled',
        labelAppendix: '',
      })}
    </div>
  `;
};
Disabled.story = { name: ' ' };
Disabled.argTypes = {
  ...disabledArgTypes,
};
/**
 * The Select component in the readonly state can not be interacted with, but it can still be selected and receive focus.
 */
export const Readonly = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction({
        ...defaultParams,
        label: "Currently doesn't work",
        labelAppendix: '',
      })}
    </div>
  `;
};
Readonly.argTypes = {
  ...disabledArgTypes,
};

/**
 * ## Validation
 *
 * ### Required
 * The Select component can be set as required. If set as required, an error should be thrown, when the Select component was not filled, before it was submitted. It is recommended to indicate in the label appendix, whether a component is required or not. For more information on the label and label appendix have a look at the [Form Label](/docs/design-system-web-components-internal-components-formlabel--docs) component in the dependencies section below.
 */
export const Required = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction({
        ...defaultParams,
        required: true,
        label: 'Required',
        labelAppendix: '',
      })}
    </div>
  `;
};
Required.story = { name: ' ' };
Required.argTypes = {
  ...disabledArgTypes,
};

/**
 * The Select component can be set to have an error. An error can be displayed after submitting a wrong value, after leaving/deselecting the Select or in case the Select was set as required and has not been filled before submitting. For more information on the error message have a look at the [Form Caption Group](/docs/design-system-web-components-internal-components-formcaptiongroup--docs) in the dependencies section below.
 */
export const HasError = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction({
        ...defaultParams,
        hasError: true,
        errorIcon: undefined,
        label: ' ',
        labelAppendix: '',
      })}
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
 * The Select component can display an optional Form Label component, consisting of a label and a label appendix. For more information have a look at the internal [Form Label](/docs/design-system-web-components-internal-components-formlabel--docs) component.
 */
export const FormLabel = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction({
        ...defaultParams,
        label: 'with Label',
        labelAppendix: '(with Appendix)',
      })}
      ${BlrSelectRenderFunction({
        ...defaultParams,
        label: ' ',
        labelAppendix: ' ',
        options: [
          { value: '0', label: 'Option 1', selected: false, disabled: true },
          { value: '1', label: 'Option 2', selected: false, disabled: false },
          { value: '2', label: 'Without Label', selected: true, disabled: false },
          { value: '4', label: 'Option 4', selected: false, disabled: false },
        ],
      })}
    </div>
  `;
};
FormLabel.story = { name: ' ' };
FormLabel.argTypes = {
  ...disabledArgTypes,
};
/**
 * The Select component makes use of the Icon component. For more information have a look at the [Icon](/docs/design-system-web-components-ui-icon--docs) component.
 */

export const Icon = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction({
        ...defaultParams,
        icon: 'blrArrowUp',
        label: 'With Icon',
        labelAppendix: ' ',
      })}
      ${BlrSelectRenderFunction({
        ...defaultParams,
        icon: undefined,
        label: 'Default Icon',
        labelAppendix: ' ',
      })}
    </div>
  `;
};
Icon.argTypes = {
  ...disabledArgTypes,
};
/**
 * The Select component can display an optional hint message and error message with or without icons. Both captions can be combined. For more information have a look at the internal [Form Caption Group](/docs/design-system-web-components-internal-components-formcaptiongroup--docs) component.
 */
export const FormCaptionGroup = () => {
  return html`
    ${sharedStyles}
    <div class="stories-select">
      ${BlrSelectRenderFunction({
        ...defaultParams,
        hasHint: true,
        labelAppendix: ' ',
      })}
      ${BlrSelectRenderFunction({
        ...defaultParams,
        icon: undefined,
        label: 'Hint and error message',
        labelAppendix: '',
        hasHint: true,
        hasError: true,
        errorMessage: "OMG it's an error.",
        errorIcon: 'blrErrorFilled',
      })}
    </div>
  `;
};
FormCaptionGroup.argTypes = {
  ...disabledArgTypes,
};
