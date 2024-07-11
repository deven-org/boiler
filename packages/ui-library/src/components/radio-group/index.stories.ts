import { BlrRadioGroupType } from './index.js';
import { BlrRadioGroupRenderFunction } from './renderFunction.js';

import { html } from 'lit';
// this loads the all components instances and registers their html tags
import '../../index.js';
import { action } from '@storybook/addon-actions';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { InputSizes } from '../../globals/constants.js';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 20px;
    }
  </style>
`;

export default {
  title: 'Components/Radio Group',
  argTypes: {
    sizeVariant: {
      name: 'sizeVariant',
      description: ' Choose size of the component.',
      options: InputSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    direction: {
      description: 'Choose direction of the component.',
      defaultParams: 'horizontal',
      table: {
        category: 'Appearance',
      },
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
    },
    hasLegend: {
      description: 'Choose if component has a legend.',
      table: {
        category: 'Content / Settings',
      },
      control: { type: 'boolean' },
    },
    legend: {
      description: 'Enter string used as legend text.',
      control: { type: 'text' },
      table: {
        category: 'Content / Settings',
      },
    },
    hasHint: {
      name: 'hasHint',
      description: ' Choose if component has a hint message. ',
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Content / Settings',
      },
    },
    groupHintMessage: {
      description: 'Enter string used used as hint message.',
      if: { arg: 'hasHint', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    groupHintMessageIcon: {
      description: 'Select an icon which is displayed in front of the hint message.',
      if: { arg: 'hasHint', eq: true },
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      table: {
        category: 'Content / Settings',
      },
    },
    options: {
      name: 'options',
      description:
        'Enter an array containing information about the label, value and disabled prop for all options that are part of the select.',
      control: 'array',
      table: {
        category: 'Content / Settings',
      },
    },
    disabled: {
      name: 'disabled',
      description:
        'Choose if component is disabled. Prevents the user to select or change the value of this component.   ',

      table: {
        category: 'States',
      },
    },
    readonly: {
      name: 'readonly',
      description: 'Choose if component is readonly. The user can select but not change the value of this component.',
      table: {
        category: 'States',
      },
    },
    required: {
      name: 'required',
      description: 'Choose if the component must hold a value after an interaction or a submit.',
      table: {
        category: 'Validations',
      },
    },
    hasError: {
      name: 'hasError',
      description: 'Choose if component has an error.',
      table: {
        category: 'Validations',
      },
    },
    groupErrorMessage: {
      name: 'errorMessage',
      description: 'Enter string used used as error message.',
      table: {
        category: 'Validations',
      },
      if: { arg: 'hasError', eq: true },
    },
    groupErrorMessageIcon: {
      name: 'errorMessageIcon',
      description: 'Select an icon which is displayed in front of the error message.',
      table: {
        category: 'Validations',
      },
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasError', eq: true },
    },
    ariaLabel: {
      name: 'ariaLabel',
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        category: 'Accessibility',
      },
      control: { type: 'text' },
    },
    radioGroupId: {
      name: 'radioGroupId',
      description: 'Unique identifier for this component.',
      table: {
        category: 'Technical Attributes',
      },
    },
    name: {
      description: 'For a < form > element, the name attribute is used as a reference when the data is submitted. ',
      table: {
        category: 'Technical Attributes',
      },
      control: { type: 'text', label: 'Radio' },
    },
    blrChange: {
      description: 'Fires when the value changes.',
      action: 'onChange',
      table: {
        category: 'Events',
      },
    },
    blrFocus: {
      description: 'Fires when the component is focused.',
      action: 'onFocus',
      table: {
        disable: false,
        category: 'Events',
      },
    },
    blrBlur: {
      description: 'Fires when the component lost focus.',
      action: 'onBlur',
      table: {
        disable: false,
        category: 'Events',
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
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125199&mode=dev',
    },
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
        Radio group is used to present users with a set of options where they can select only one choice from the available options. When a radio button is selected, a small dot or indicator usually appears inside the circle to indicate the active choice.      
        - [**Appearance**](#appearance)
          - [**Size Variant**](#size-variant)
      
        - [**Content / Settings**](#content--settings)
          - [**Has Group Label**](#has-group-label)
        - [**States**](#states)
          - [**Disabled**](#disabled)
          - [**Readonly**](#readonly)
        - [**Validation**](#validation)
          - [**Required**](#required)
          - [**Has Error**](#has-error)
        - [**Dependencies**](#dependencies)
          - [**Form Caption Group**](#form-caption-group)
      </Markdown>
      `,
      },
    },
  },
};

const radioButtonsAsChildren = html`
  <blr-radio label="male" value="male" @blrSelectedValueChange=${(e) => e.detail.selectedValue}></blr-radio>
  <blr-radio label="female" value="female" @blrSelectedValueChange=${(e) => e.detail.selectedValue}></blr-radio>
  <blr-radio label="other" value="other" @blrSelectedValueChange=${(e) => e.detail.selectedValue}></blr-radio>
`;
export const BlrRadioGroup = (params: BlrRadioGroupType) => BlrRadioGroupRenderFunction(params, radioButtonsAsChildren);

BlrRadioGroup.storyName = 'Radio Group';

const defaultParams: BlrRadioGroupType & {
  ariaLabel: string;
  radioGroupId: string;
} = {
  theme: 'Light',
  sizeVariant: 'md',
  direction: 'vertical',
  hasLegend: true,
  legend: 'Legend-text',
  hasHint: false,
  groupHintMessage: 'This is a small hint',
  groupHintMessageIcon: 'blrInfo',
  disabled: false,
  readonly: false,
  required: false,
  hasError: false,
  groupErrorMessage: '',
  groupErrorMessageIcon: undefined,
  ariaLabel: 'Radio Group',
  radioGroupId: 'Radio Group',
  name: 'Radio Group ',
  blrFocus: () => action('blrFocus'),
  blrBlur: () => action('blrBlur'),
};

BlrRadioGroup.args = defaultParams;

/**
 *  ## Appearance
 *  ### Size Variant
 * The Radio Group component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        sizeVariant: 'sm',
        legend: 'Radio Group SM',
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        sizeVariant: 'md',
        legend: 'Radio Group MD',
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        sizeVariant: 'lg',
        legend: 'Radio Group LG',
      })}
    </div>
  `;
};

SizeVariant.story = { name: ' ' };

// /**
//  * The Radio Group component can have a horizontal or a vertical direction.
//  *  */
export const Direction = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        direction: 'vertical',
        legend: 'Vertical',
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        direction: 'horizontal',
        legend: 'Horizontal',
      })}
    </div>
  `;
};

/**
 * ## Content / Settings
 * ### Has Group Label
 *The Radio Group component can display a label or no label.
 */

export const HasGroupLabel = () =>
  html`
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        hasLegend: true,
        legend: 'With Group Label',
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        hasLegend: false,
      })}
    </div>
  `;

HasGroupLabel.story = { name: ' ' };

/**
 * ## States
 *  Apart from states like rest, hover, pressed and focus, the Radio Group component can also be disabled or readonly. The error state is documented under [Validation](#validation).
 * ### Disabled
 * The Radio Group component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */

export const Disabled = () => {
  return html`
    ${sharedStyles}
    ${BlrRadioGroup({
      ...defaultParams,
      legend: 'Disabled',
      disabled: true,
    })}
  `;
};

Disabled.story = { name: ' ' };

/**
 * The Radio Group component in the readonly state can not be interacted with, but it can still be selected and receive focus.
 */
export const Readonly = () => {
  return html`
    ${sharedStyles}
    ${BlrRadioGroup({
      ...defaultParams,
      legend: 'Readonly',
      readonly: true,
    })}
  `;
};

/**
 * ## Validation
 * ### Required
 *The Radio Group component can be set as required. If set as required, an error should be thrown, when the Radio Group component was not checked, before it was submitted. It is recommended to indicate in the leged appendix, whether a component is required or not.
 */

export const Required = () => {
  return html`
    ${sharedStyles}
    ${BlrRadioGroup({
      ...defaultParams,
      legend: 'Required',
      required: true,
    })}
  `;
};

Required.story = { name: ' ' };
/**
The Radio Group component can be set to have an error. An error can be displayed after submitting a wrong value, after leaving/deselecting the Radio Group or in case the Radio Group was set as required and has not been checked before submitting. For more information on the error message have a look at the [Form Caption Group](#form-caption-group) in the dependencies section below.
 */
export const HasError = () => {
  return html`
    ${sharedStyles}
    ${BlrRadioGroup({
      ...defaultParams,
      legend: 'Error',
      hasError: true,
    })}
  `;
};

/**
 * ## Dependencies
 * ### Form Caption Group
 * The Radio Group component can display an optional hint message and error message with icons. Both captions can be combined. For more information have a look at the internal [Form Caption Group](?path=/docs/components-form-caption-group--docs) component.
 */
export const FormCaptionGroup = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        legend: 'Hint message',
        hasHint: true,
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        legend: 'Hint and error message',
        errorIcon: 'blr360',
        groupErrorMessage: "OMG it's an error",
        hasHint: true,
        hasError: true,
        groupHintMessageIcon: 'blrErrorFilled',
      })}
    </div>
  `;
};

FormCaptionGroup.story = { name: ' ' };
