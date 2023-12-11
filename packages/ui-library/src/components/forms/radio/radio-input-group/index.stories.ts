import { BlrRadioGroupType } from './index';
import { BlrRadioGroupRenderFunction } from './renderFunction';
import { InputSizes } from '../../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';
import { html } from 'lit';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 20px;
    }
  </style>
`;

// this loads the all components instances and registers their html tags
import '../../../../index';

export default {
  title: 'Design System/Web Components/Forms/RadioButtonGroup',
  argTypes: {
    size: {
      name: 'sizeVariant',
      description: ' Choose size of the component. ',
      options: InputSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    direction: {
      description: 'Choose direction of the component.',
      table: {
        category: 'Content / Settings',
      },
      options: ['horizontal', 'vertical'],
      control: {
        type: 'radio',
      },
    },
    hasLegend: {
      description: 'Choose if component has a legend. ',
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
    groupErrorIcon: {
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
      name: 'araiaLabel',
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
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Technical Attributes',
      },
    },
  },
  parameters: {
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
        Radio group is used to present users with a set of options where they can select only one choice from the available options. When a radio button is selected, a small dot or indicator usually appears inside the circle to indicate the active choice.      
        - [**Appearance**](#appearance)
          - [**Size Variant**](#size-variant)
          - [**Direction**](#size-variant)
        - [**Content / Settings**](#content--settings)
          - [**Has Legend**](#has-legend)
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125199&mode=dev',
    },
  },
};

export const BlrRadioGroup = (params: BlrRadioGroupType) => BlrRadioGroupRenderFunction(params);

BlrRadioGroup.storyName = 'Radio Group';

const defaultParams: BlrRadioGroupType = {
  size: 'md',
  checked: false,
  options: [
    {
      value: '0',
      label: 'Option 1',
      checked: false,
      errorMessage: 'OMG! An error!',
      hintMessage: 'This is a small hint',
    },
    {
      value: '1',
      label: 'Option 2',
      checked: false,
      errorMessage: 'OMG! An error!',
      hintMessage: 'This is a small hint',
    },
    {
      value: '2',
      label: 'Option 3',
      checked: true,
      errorMessage: 'OMG! An error!',
      hintMessage: 'This is a small hint',
    },
    {
      value: '4',
      label: 'Option 4',
      checked: false,
      errorMessage: 'OMG! An error!',
      hintMessage: 'This is a small hint',
    },
  ],
  hasHint: false,
  groupHintMessage: 'This is a small hint',
  groupHintIcon: 'blrInfo',
  disabled: false,
  readonly: false,
  hasError: false,
  groupErrorMessage: 'This is a sample error message',
  groupErrorIcon: undefined,
  name: 'Radio Group Button',
  errorIcon: 'blr360',
  hideLabel: true,
  required: false,
  theme: 'Light',
};

BlrRadioGroup.args = defaultParams;

/**
 *  ## Apperance
 *  ### Size Variant
 * The Radio component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        size: 'sm',
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        size: 'md',
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        size: 'lg',
      })}
    </div>
  `;
};

SizeVariant.story = { name: ' ' };

/**
 * ## Content / Settings
 * ### Checked
 * The Radio component can be checked or unchecked. The checked state indicates that the Radio component is selected or enabled. The unchecked state indicates that the Radio component is not selected. */

export const Checked = () =>
  html`
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        checked: true,
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        checked: false,
      })}
    </div>
  `;

Checked.story = { name: ' ' };
/**
 * ## States
 *  Apart from states like rest, hover, pressed and focus, the Radio component can also be disabled or readonly. The error state is documented under [Validation](#validation).
 * ### Disabled
 * The Radio component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */

export const Disabled = () => {
  return html`
    ${sharedStyles}
    ${BlrRadioGroup({
      ...defaultParams,
      disabled: true,
    })}
  `;
};

Disabled.story = { name: ' ' };

/**
 * The Radio component in the readonly state can not be interacted with, but it can still be selected and receive focus.
 */
export const Readonly = () => {
  return html`
    ${sharedStyles}
    ${BlrRadioGroup({
      ...defaultParams,
      readonly: true,
    })}
  `;
};

/**
 * ## Validation
 * ### Has error
 * The Radio component can be set as required. If set as required, an error should be thrown, when the Radio component was not filled, before it was submitted. It is recommended to indicate in the label appendix, whether a component is required or not. For more information on the label and label appendix have a look at the [Form Label](#form-label) component in the dependencies section below.
 */

export const HasError = () => {
  return html`
    ${sharedStyles}
    ${BlrRadioGroup({
      ...defaultParams,
      hasError: true,
    })}
  `;
};

HasError.story = { name: ' ' };

/**
 * ## Dependencies
 * ### Form Caption Group
 * The Radio component can display an optional hint message and error message with icons. Both captions can be combined. For more information have a look at the internal [Form Label Caption](?path=/docs/design-system-web-components-internal-components-formlabel--docs) component.
 */
export const FormCaptionGroup = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        hasHint: true,
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        hasError: true,
        errorIcon: 'blr360',
      })}
    </div>
  `;
};

FormCaptionGroup.story = { name: ' ' };
