/* eslint-disable no-console */
import { BlrNumberInputRenderFunction, BlrNumberInputType } from './index';
import { FormSizes, Units } from '../../../globals/constants';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { PureIconKeys } from '@boiler/icons/icons-optimized/icons';
import { html } from 'lit';
import { action } from '@storybook/addon-actions';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 20px;
    }
  </style>
`;

const defaultParams: BlrNumberInputType = {
  theme: 'Light',
  disabled: false,
  errorIcon: undefined,
  errorMessage: '',
  fractionDigits: 0,
  hasError: false,
  hasLabel: true,
  hintText: 'This is a small hint',
  hintIcon: 'blrInfo',
  label: 'Label-text',
  labelAppendix: '(Appendix)',
  numberInputId: ' ',
  placeholder: 'Placeholder-text',
  prependUnit: false,
  readonly: false,
  required: false,
  showHint: false,
  size: 'md',
  step: 1,
  totalDigits: 0,
  unit: undefined,
  value: undefined,
  stepperVariant: 'vertical',
};

export default {
  title: 'Design System/Web Components/Forms/NumberInput',

  args: {
    disabled: false,
    errorIcon: undefined,
    errorMessage: '',
    fractionDigits: 0,
    hasError: false,
    hasLabel: true,
    hintText: 'This is a small hint',
    hintIcon: 'blrInfo',
    label: 'Label-text',
    labelAppendix: '(Appendix)',
    numberInputId: 'Number Input',
    placeholder: 'Placeholder-text',
    prependUnit: false,
    readonly: false,
    required: false,
    showHint: false,
    size: 'md',
    step: 1,
    theme: 'Light',
    totalDigits: 0,
    unit: undefined,
    value: undefined,
    stepperVariant: 'vertical',
    onChange: () => action('onChange'),
    onFocus: () => action('onFocus'),
    onSelect: () => action('onSelect'),
    onBlur: () => action('onBlur'),
  },
  argTypes: {
    size: {
      name: 'sizeVariant',
      description: ' Choose size of the component. ',
      options: FormSizes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    stepperVariant: {
      name: 'stepperVariant',
      description: ' Choose stepperVariant of the stepper that is used in the component.',
      options: ['split', 'horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
      table: {
        category: 'Appearance',
      },
    },
    placeholder: {
      name: 'placeholder',
      description: 'Enter string used as placeholder text.',
      defaultValue: 'Placeholder-text',
      table: {
        category: 'Content / Settings',
      },
    },
    value: {
      name: 'value',
      description: 'Enter the value the component should have.',
      table: {
        category: 'Content / Settings',
      },
      control: {
        type: 'text',
        label: 'Enter Text',
      },
    },
    fractionDigits: {
      name: 'decimals',
      description: 'Enter how many decimals the value of the component has.',
      table: {
        category: 'Content / Settings',
      },
      control: {
        type: 'number',
      },
    },
    totalDigits: {
      name: 'leadingZeros',
      description: 'Enter how many leadingZeros the value of the component has.',
      table: {
        category: 'Content / Settings',
      },
      control: {
        type: 'number',
      },
    },

    unit: {
      name: 'unit',
      description: 'Enter the unit for the number input.',
      options: [undefined, ...Units],
      control: {
        type: 'select',
      },
      table: {
        category: 'Content / Settings',
      },
    },
    hasUnit: {
      name: 'prependUnit',
      description: 'NumberInput	Content / Settings	hasUnit	Choose if unit is displayed as a prefix or suffix .',

      table: {
        category: 'Content / Settings',
      },
    },
    step: {
      name: 'step',
      description: 'Enter how much the value should change when the steppers buttons are used.',
      control: {
        type: 'number',
      },
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
        'Enter string used as an appendix to the label. Use this to inform the user in case this field is required.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'hasLabel', eq: true },
    },
    showHint: {
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
    hintText: {
      name: 'hintMessage',
      description: 'Enter string used used as hint message.',
      if: { arg: 'showHint', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    hintIcon: {
      name: 'hintMessageIcon',
      description: 'Select an icon which is displayed in front of the hint message.',
      if: { arg: 'showHint', eq: true },
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
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
    errorMessage: {
      name: 'errorMessage',
      description: 'Enter string used used as error message.',
      table: {
        category: 'Validations',
      },
      if: { arg: 'hasError', eq: true },
    },
    errorIcon: {
      name: 'errorMessageIcon',
      description: 'Select an icon which is displayed in front of the error message.',
      table: {
        category: 'Validations',
      },
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasError', eq: true },
    },

    //Technical attributes
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Technical Attributes',
      },
    },
    numberInputId: {
      name: 'numberInputId',
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
      control: { type: 'text', label: 'Number Input' },
    },
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
  },
  // Events
  parameters: {
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
      - [**Appearance**](#appearance)
        - [**Size Variant**](#size-variant)
        - [**Stepper Variant**](#stepper-variant)
      - [**Content / Settings**](#content--settings)
        - [**Placeholder**](#placeholder)
        - [**Has Unit**](#has-unit)
      - [**States**](#states)
        - [**Disabled**](#disabled)
        - [**Readonly**](#readonly)
      - [**Validation**](#validation)
        - [**Required**](#required)
        - [**Has Error**](#has-error)
      - [**Dependencies**](#dependencies)
        - [**Form Label**](#form-label)
        - [**Form Caption Group**](#form-caption-group)
    </Markdown>`,
      },
    },
  },
};

export const BlrNumberInput = (params: BlrNumberInputType) => BlrNumberInputRenderFunction(params);

/**
 *  ## Apperance
 *  ### Size Variant
 * The Number Input component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        labelAppendix: undefined,
        size: 'sm',
        label: 'Number input SM',
        value: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        labelAppendix: undefined,
        size: 'md',
        label: 'Number input MD',
        value: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        labelAppendix: undefined,
        size: 'lg',
        label: 'Number input LG',
        value: undefined,
      })}
    </div>
  `;
};

SizeVariant.story = { name: ' ' };

/**
The Number Input component has 3 stepper variants: vertical, horizontal and split.
 */

export const StepperVariant = () =>
  html`
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        stepperVariant: 'split',
        label: 'vertical',
        labelAppendix: undefined,
        unit: 'kg',
        value: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        stepperVariant: 'horizontal',
        label: 'horizontal',
        labelAppendix: undefined,
        unit: 'kg',
        value: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        stepperVariant: 'vertical',
        label: 'split',
        labelAppendix: undefined,
        unit: 'kg',
        value: undefined,
      })}
    </div>
  `;

/**
 * ## Content / Settings 
 ### Placeholder
 * The Number Input component can display a placeholder text. This is recommended to improve usability.
 */
export const Placeholder = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        size: 'md',
        label: 'With placeholder',
        labelAppendix: undefined,
        value: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        size: 'md',
        label: 'Without placeholder',
        labelAppendix: undefined,
        placeholder: '',
        value: undefined,
      })}
    </div>
  `;
};

Placeholder.story = { name: ' ' };

/**
 * The Number Input component can display a unit either as a prefix or a suffix.
 */
export const HasUnit = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        label: 'No unit',
        unit: undefined,
        labelAppendix: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        label: 'Unit prefix',
        prependUnit: true,
        unit: 'kg',
        labelAppendix: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        label: 'Unit suffix',
        prependUnit: false,
        value: undefined,
        unit: 'kg',
        labelAppendix: undefined,
      })}
    </div>
  `;
};

/**
 * ## States 
 *  Apart from states like rest, hover, pressed and focus, the Number Input component can also be disabled or readonly. The error state is documented under [Validation](#validation).
 * ### Disabled
The Number Input component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
*/
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        label: 'With Disabled',
        disabled: true,
        unit: undefined,
        labelAppendix: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        label: 'Without Disabled',
        disabled: false,
        unit: undefined,
        labelAppendix: undefined,
      })}
    </div>
  `;
};

Disabled.story = { name: ' ' };

/**
 * The Number Input component can display a placeholder text. This is recommended to improve usability.
 */
export const Readonly = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        label: 'With Readonly',
        readonly: true,
        unit: undefined,
        labelAppendix: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        size: 'md',
        label: 'Without Readonly',
        readonly: false,
        unit: undefined,
        labelAppendix: undefined,
      })}
    </div>
  `;
};

/**
 * ## Validation
 * ### Required
 * The Number Input component can be set as required. If set as required, an error should be thrown, when the Number Input component was not filled, before it was submitted. It is recommended to indicate in the label appendix, whether a component is required or not. For more information on the label and label appendix have a look at the [Form Label](#form-label) component in the dependencies section below.
 */
export const Required = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        required: true,
        labelAppendix: 'required',
        unit: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        required: false,
        unit: undefined,
        labelAppendix: 'not required',
      })}
    </div>
  `;
};

Required.story = { name: ' ' };

/**
 * The Number Input component can be set to have an error. An error can be displayed after submitting a wrong value, after leaving/deselecting the Number Input or in case the Number Input was set as required and has not been filled before submitting. For more information on the error message have a look at the [Form Caption Group](#form-caption-group) in the dependencies section below.
 */
export const HasError = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        label: 'With Error',
        hasError: true,
        unit: undefined,
        labelAppendix: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        size: 'md',
        label: 'Without Error',
        hasError: false,
        unit: undefined,
        labelAppendix: undefined,
      })}
    </div>
  `;
};

/**
 * ## Dependencies
 * ### Icon Button
 * The Number Input component makes use of the Icon Button component for increasing or decreasing the value. For more information have a look at the Icon Button [Form Label Component](?path=/docs/design-system-web-components-actions-buttons-iconbutton--docs) component.
 */
export const IconButton = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        unit: 'days',
        labelAppendix: undefined,
      })}
    </div>
  `;
};

IconButton.story = { name: ' ' };

/**
 * The Number Input component can display an optional Form Label component, consisting of a label and a label appendix. For more information have a look at the internal [Form Label Component](?path=/docs/design-system-web-components-internal-components-formlabel--docs) component.
 */
export const FormLabel = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        unit: undefined,
        labelAppendix: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        unit: undefined,
        labelAppendix: '(Appendix)',
      })}
    </div>
  `;
};

/**
 * The Number Input component can display an optional hint message and error message with icons. Both captions can be combined. For more information have a look at the internal [Form Label Caption](?path=/docs/design-system-web-components-internal-components-formHint--docs) component.
 */
export const FormCaptionGroup = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        showHint: true,
        unit: undefined,
        labelAppendix: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        showHint: true,
        unit: undefined,
        hasError: true,
        labelAppendix: undefined,
      })}
    </div>
  `;
};
