import { BlrRadioRenderFunction, BlrRadioType } from './index';
import { InputSizes } from '../../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';
import { html } from 'lit-html';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 1.25em;
    }
  </style>
`;

export default {
  title: 'Design System/Web Components/Forms/Radio',
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
    checked: {
      description: ' Choose if component is checked. ',
      table: {
        category: 'Content / Settings',
      },
      control: { type: 'boolean' },
    },
    label: {
      name: 'label',
      description: 'Enter string used as label text.',
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
    hintMessage: {
      name: 'hintMessage',
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
    ariaLabel: {
      name: 'araiaLabel',
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        category: 'Accessibility',
      },
      control: { type: 'text' },
    },
    optionId: {
      name: 'radioId',
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
        A radio component allows users to select a single option from a list of mutually exclusive choices.
      
        - [**Appearance**](#appearance)
          - [**Size Variant**](#size-variant)
        - [**Content / Settings**](#content--settings)
          - [**Checked**](#checked)
        - [**States**](#states)
          - [**Disabled**](#disabled)
          - [**Readonly**](#readonly)
        - [**Validation**](#validation)
          - [**Has Error**](#has-error)
        - [**Dependencies**](#dependencies)
          - [**Form Caption Group**](#form-caption-group)
      </Markdown>
      `,
      },
    },
  },
};

export const BlrRadio = (params: BlrRadioType) => BlrRadioRenderFunction(params);

BlrRadio.storyName = 'Radio';

const args: BlrRadioType = {
  size: 'md',
  checked: false,
  optionId: 'optionId',
  label: 'Label',
  hasHint: false,
  hintMessage: 'This is a small hint',
  hintIcon: 'blrInfo',
  disabled: false,
  readonly: false,
  hasError: false,
  errorMessage: 'This is a sample error message',
  errorIcon: undefined,
  name: 'Radio Button',
  required: false,
  theme: 'Light',
};

BlrRadio.args = args;

/**
 *  ## Appearance
 *  ### Size Variant
 * The Radio component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrRadio({
        ...args,
        size: 'sm',
      })}
    </div>
    <div class="wrapper">
      ${BlrRadio({
        ...args,
        size: 'md',
      })}
    </div>
    <div class="wrapper">
      ${BlrRadio({
        ...args,
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
      ${BlrRadio({
        ...args,
        checked: true,
      })}
    </div>
    <div class="wrapper">
      ${BlrRadio({
        ...args,
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
    ${BlrRadio({
      ...args,
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
    ${BlrRadio({
      ...args,
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
    ${BlrRadio({
      ...args,
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
      ${BlrRadio({
        ...args,
        hasHint: true,
        hintIcon: undefined,
      })}
    </div>
    <div class="wrapper">
      ${BlrRadio({
        ...args,
        hasError: true,
        errorIcon: 'blr360',
      })}
    </div>
  `;
};

FormCaptionGroup.story = { name: ' ' };
