/* eslint-disable no-console */
import { BlrInputFieldNumberType } from './index';
import { BlrInputFieldNumberRenderFunction } from './renderFunction';
import { FormSizes, Units } from '../../globals/constants';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { PureIconKeys } from '@boiler/icons/icons-optimized';
import { html } from 'lit-html';
import { action } from '@storybook/addon-actions';

// this loads the all components instances and registers their html tags
import '../../index';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 20px;
    }
  </style>
`;

const defaultParams: BlrInputFieldNumberType = {
  theme: 'Light',
  size: 'md',
  stepperVariant: 'vertical',
  placeholder: 'Placeholder-text',
  value: undefined,
  decimals: 0,
  leadingZeros: 0,
  prependUnit: true,
  unit: 'kg',
  step: 1,
  hasLabel: true,
  label: 'Label-text',
  labelAppendix: '(Appendix)',
  hasHint: false,
  hintMessage: 'This is a small hint',
  hintIcon: 'blrInfo',
  disabled: false,
  readonly: false,
  required: false,
  hasError: false,
  errorMessage: '',
  errorIcon: undefined,
  inputFieldNumberId: 'test-id',
  stepIncreaseAriaLabel: '+',
  stepDecreaseAriaLabel: '\u2212',
};

export default {
  title: 'Components/Input Field Number',
  args: {
    ...defaultParams,
    name: 'InputFieldNumber',
    onChange: () => action('onChange'),
    onSelect: () => action('onSelect'),
    onFocus: () => action('onFocus'),
    onBlur: () => action('onBlur'),
  },
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    size: {
      name: 'sizeVariant',
      description: ' Choose size of the component. ',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    stepperVariant: {
      name: 'stepperVariant',
      description: 'Choose stepperVariant of the stepper that is used in the component.',
      options: ['vertical', 'horizontal', 'split'],
      control: {
        type: 'radio',
        labels: {
          vertical: 'Vertical',
          horizontal: 'Horizontal',
          split: 'Split',
        },
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
        type: 'number',
        label: 'Enter Text',
      },
    },
    decimals: {
      name: 'decimals',
      description: 'Enter how many decimals the value of the component has.',
      table: {
        category: 'Content / Settings',
      },
      control: {
        type: 'number',
      },
    },
    leadingZeros: {
      name: 'leadingZeros',
      description: 'Enter how many leading zeros the value of the component has.',
      table: {
        category: 'Content / Settings',
      },
      control: {
        type: 'number',
      },
    },
    prependUnit: {
      name: 'prependUnit',
      description: 'Choose if unit is displayed as a prefix or suffix.',
      table: {
        category: 'Content / Settings',
      },
    },
    unit: {
      name: 'unit',
      description: 'Select a unit which is displayed next to the input.',
      options: [undefined, ...Units],
      control: {
        type: 'select',
      },
      table: {
        category: 'Content / Settings',
      },
    },
    step: {
      name: 'step',
      description: 'Enter how much the value should change when the stepper buttons are used.',
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
      if: { arg: 'hasHint', eq: true },
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
    inputFieldNumberId: {
      name: 'inputFieldNumberId',
      description: 'Unique identifier for this component.',
      table: {
        category: 'Technical Attributes',
      },
    },
    name: {
      name: 'name',
      description: 'For a < form > element, the name attribute is used as a reference when the data is submitted.',
      table: {
        category: 'Technical Attributes',
      },
      control: { type: 'text', label: 'Input Field Number' },
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
    onSelect: {
      name: 'onSelect',
      description: 'Fires when some text is selected.',
      action: 'onSelect',
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
    // Accessibility attributes
    stepIncreaseAriaLabel: {
      name: 'stepIncreaseAriaLabel',
      description: 'Labels the "up" or increase stepper button to assistive technologies, such as screen readers.',
      table: {
        category: 'Accessibility',
      },
      control: { type: 'text', defaultValue: '+' },
    },
    stepDecreaseAriaLabel: {
      name: 'stepDecreaseAriaLabel',
      description:
        'Labels the "down" or decrease stepper button to assistive technologies, such as screen readers.\nNote that the default value is not a hyphen (-) but the minus sign \\u2212 (\u2212).',
      table: {
        category: 'Accessibility',
      },
      control: { type: 'text', defaultValue: '\u2212' },
    },
  },
  parameters: {
    badges: ['Draft'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=7155%3A108301&mode=dev',
    },
    viewMode: 'docs',
    docs: {
      description: {
        component: `<markdown>
      Input Field Number allows users to  enter numbers into a designated area. Users can interact with the Input Field Number component by clicking or tapping on it, which activates it for text entry. It often displays a blinking cursor to indicate the current number insertion point.
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
        - [**Button Icon**](#button-icon)
        - [**Form Label**](#form-label)
        - [**Form Caption Group**](#form-caption-group)
    </markdown>`,
      },
    },
  },
};

export const InputFieldNumber = (params: BlrInputFieldNumberType) => BlrInputFieldNumberRenderFunction(params);

/**
 * ## Appearance
 *  ### Size Variant
 * The Input Field Number component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = (params: BlrInputFieldNumberType) => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        labelAppendix: undefined,
        size: 'sm',
        label: 'Input field number SM',
        value: undefined,
        inputFieldNumberId: 'test-sm',
      })}
    </div>
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        labelAppendix: undefined,
        size: 'md',
        label: 'Input field number MD',
        value: undefined,
        inputFieldNumberId: 'test-md',
      })}
    </div>
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        labelAppendix: undefined,
        size: 'lg',
        label: 'Input field number LG',
        value: undefined,
        inputFieldNumberId: 'test-lg',
      })}
    </div>
  `;
};

SizeVariant.story = { name: ' ' };

/**
The Input Field Number component has 3 stepper variants: vertical, horizontal and split.
 */

export const StepperVariant = (params: BlrInputFieldNumberType) =>
  html`
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        stepperVariant: 'vertical',
        label: 'Vertical',
        labelAppendix: undefined,
        unit: 'kg',
        value: undefined,
        inputFieldNumberId: 'test-vert',
      })}
    </div>
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        stepperVariant: 'horizontal',
        label: 'Horizontal',
        labelAppendix: undefined,
        unit: 'kg',
        value: undefined,
        inputFieldNumberId: 'test-hor',
      })}
    </div>
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        stepperVariant: 'split',
        label: 'Split',
        labelAppendix: undefined,
        unit: 'kg',
        value: undefined,
        inputFieldNumberId: 'test-split',
      })}
    </div>
  `;

/**
 * ## Content / Settings 
 ### Placeholder
 * The Input Field Number component can display a placeholder text. This is recommended to improve usability.
 */
export const Placeholder = (params: BlrInputFieldNumberType) => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        size: 'md',
        label: 'With placeholder',
        labelAppendix: undefined,
        value: undefined,
        inputFieldNumberId: 'test-with',
      })}
    </div>
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        size: 'md',
        label: 'Without placeholder',
        labelAppendix: undefined,
        placeholder: '',
        value: undefined,
        inputFieldNumberId: 'test-without',
      })}
    </div>
  `;
};

Placeholder.story = { name: ' ' };

/**
 * The Input Field Number component can display a unit either as a prefix or a suffix.
 */
export const HasUnit = (params: BlrInputFieldNumberType) => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        label: 'No unit',
        unit: undefined,
        labelAppendix: undefined,
        inputFieldNumberId: 'test-no',
      })}
    </div>
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        label: 'Unit prefix',
        prependUnit: true,
        unit: 'kg',
        labelAppendix: undefined,
        inputFieldNumberId: 'test-kg-pre',
      })}
    </div>
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        label: 'Unit suffix',
        prependUnit: false,
        unit: 'kg',
        labelAppendix: undefined,
        inputFieldNumberId: 'test-kg-suff',
      })}
    </div>
  `;
};

/**
 * ## States 
 *  Apart from states like rest, hover, pressed and focus, the Input Field Number component can also be disabled or readonly. The error state is documented under [validation](#validation).
 * ### Disabled
The Input Field Number component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
*/
export const Disabled = (params: BlrInputFieldNumberType) => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        label: 'Disabled',
        disabled: true,
        labelAppendix: undefined,
        inputFieldNumberId: 'test-disabled',
      })}
    </div>
  `;
};

Disabled.story = { name: ' ' };

/**
 * The Input Field Number component in the readonly state can not be interacted with, but it can still be selected and receive focus.
 */
export const Readonly = (params: BlrInputFieldNumberType) => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        label: 'Readonly',
        readonly: true,
        labelAppendix: undefined,
        decimals: 1,
        value: 20.2,
        inputFieldNumberId: 'test-readonly',
      })}
    </div>
  `;
};

/**
 * ## Validation
 * ### Required
 * The Input Field Number component can be set as required. If set as required, an error should be thrown, when the Input Field Number component was not filled, before it was submitted. It is recommended to indicate in the label appendix, whether a component is required or not. For more information on the label and label appendix have a look at the [Form Label](#form-label) component in the dependencies section below.
 */
export const Required = (params: BlrInputFieldNumberType) => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        required: true,
        labelAppendix: '(required)',
        inputFieldNumberId: 'test-req',
      })}
    </div>
  `;
};

Required.story = { name: ' ' };

/**
 * The Input Field Number component can be set to have an error. An error can be displayed after submitting a wrong value, after leaving/deselecting the Input Field Number or in case the Input Field Number was set as required and has not been filled before submitting. For more information on the error message have a look at the [Form Caption Group](#form-caption-group) in the dependencies section below.
 */
export const HasError = (params: BlrInputFieldNumberType) => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        label: 'Error',
        hasError: true,
        labelAppendix: undefined,
        inputFieldNumberId: 'test-error',
      })}
    </div>
  `;
};

/**
 * ## Dependencies
 * ### Button Icon
 * The Input Field Number component makes use of the Button Icon component for increasing or decreasing the value. For more information have a look at the [Button Icon](?path=/docs/design-system-web-components-actions-buttons-button-icon--docs) component.
 */
export const ButtonIcon = (params: BlrInputFieldNumberType) => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        unit: 'kg',
        labelAppendix: undefined,
        stepperVariant: 'split',
        inputFieldNumberId: 'test-icon',
      })}
    </div>
  `;
};

ButtonIcon.story = { name: ' ' };

/**
 * The Input Field Number component can display an optional Form Label component, consisting of a label and a label appendix. For more information have a look at the internal [Form Label](?path=/docs/design-system-web-components-internal-components-formlabel--docs) component.
 */
export const FormLabel = (params: BlrInputFieldNumberType) => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        placeholder: '',
        label: 'With label',
        labelAppendix: '(with appendix)',
        value: undefined,
        inputFieldNumberId: 'test-label',
      })}
    </div>
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        placeholder: 'Without label',
        label: ' ',
        labelAppendix: '',
        hasHint: false,
        value: undefined,
        inputFieldNumberId: 'test-no-label',
      })}
    </div>
  `;
};

/**
 * The Input Field Number component can display an optional hint message and error message with icons. Both captions can be combined. For more information have a look at the internal [Form Caption Group](?path=/docs/design-system-web-components-internal-components-formcaptiongroup--docs) component.
 */
export const FormCaptionGroup = (params: BlrInputFieldNumberType) => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        hasHint: true,
        label: 'Hint message',
        hintIcon: 'blrInfo',
        labelAppendix: '',
        inputFieldNumberId: 'test-hint',
      })}
    </div>
    <div class="wrapper">
      ${BlrInputFieldNumberRenderFunction({
        ...params,
        label: 'Hint and error message',
        labelAppendix: undefined,
        hasError: true,
        errorMessage: "OMG it's an error",
        hasHint: true,
        errorIcon: 'blrErrorFilled',
        inputFieldNumberId: 'test-hint-error',
      })}
    </div>
  `;
};
