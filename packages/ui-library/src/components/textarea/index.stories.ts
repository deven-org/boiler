/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextareaType } from './index';
import { BlrTextareaRenderFunction } from './renderFunction';
import { PureIconKeys } from '@boiler/icons';

// this loads the all components instances and registers their html tags
import '../../index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { FormSizes, Resizes } from '../../globals/constants';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .stories-textarea {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
`;

// Default parameters for Textarea component
const defaultParams: BlrTextareaType = {
  size: 'md',
  isResizeable: 'both',
  cols: 40,
  rows: 4,
  placeholder: 'Placeholder-text',
  value: '',
  minLength: 10,
  maxLength: 140,
  hasLabel: true,
  label: 'Label-text',
  labelAppendix: '(Appendix)',
  hasHint: false,
  hintMessage: 'This is a small hint message',
  hintIcon: 'blrInfo',
  arialabel: 'Text Area',
  name: 'Text Area',
  showCounter: true,
  theme: 'Light',
  textareaId: '#textAreaId',
  warningLimitType: 'warningLimitInt',
  warningLimitInt: 105,
  warningLimitPer: 75,
  required: false,
  disabled: false,
  readonly: false,
  hasError: false,
  errorMessage: '',
  errorIcon: '',
};

//Main Showcase Storybook Textarea, main argType Table
export default {
  title: 'Components/Text Area',
  argTypes: {
    //Appearance
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
    isResizeable: {
      name: 'resize',
      description: 'Select if and how the component can be resized.',
      options: Resizes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    cols: {
      options: FormSizes,
      control: { type: 'number' },
      name: 'cols',
      description: 'Enter amount of columns the component should hold.',
      defaultValue: '20',
      table: {
        category: 'Appearance',
      },
    },
    rows: {
      options: FormSizes,
      control: { type: 'number' },
      name: 'rows',
      description: 'Enter amount of rows the component should have.',
      defaultValue: '5',
      table: {
        category: 'Appearance',
      },
    },

    //Content/ Settings
    placeholder: {
      description: 'Enter string used as placeholder text.',
      defaultValue: 'Placeholder-text',
      table: {
        category: 'Content / Settings',
      },
    },
    value: {
      description: 'Enter the value the component should have.',
      control: {
        type: 'text',
        label: 'Label-text',
      },
      table: {
        category: 'Content / Settings',
      },
    },
    minLength: {
      description: 'Enter the min allowed length.',
      defaultValue: 0,
      table: {
        category: 'Content / Settings',
      },
    },
    maxLength: {
      description: 'Enter the max allowed length. Additional input is cut off after the max has been reached.',
      defaultValue: 140,
      table: {
        category: 'Content / Settings',
      },
    },
    hasLabel: {
      description: 'Choose if component has a label.',
      defaultValue: true,
      control: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    label: {
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
      description:
        ' Enter string used as an appendix to the label. Use this to inform the user if this field is required or not.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'hasLabel', eq: true },
    },
    hasHint: {
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
    showCounter: {
      name: 'hasCounter',
      description: 'Choose if component has a counter.',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Content / Settings',
      },
    },
    warningLimitType: {
      if: { arg: 'showCounter', eq: true },
      table: {
        disable: false,
        category: 'Content / Settings',
      },
      name: 'warningLimitType',
      description: 'Choose if warning limit is defined by percentage or amount of characters.',
      options: ['warningLimitInt', 'warningLimitPer'],
      control: {
        type: 'radio',
        labels: {
          warningLimitInt: 'Whole Number',
          warningLimitPer: 'Percentage',
        },
      },
    },
    // Only enabled if warningLimitType is Whole Number
    warningLimitInt: {
      table: {
        category: 'Content / Settings',
      },
      control: 'number',
      name: 'warningLimitInt',
      description: 'Enter at which amount of characters the warning state is displayed.',
      if: { arg: 'warningLimitType', eq: 'warningLimitInt' },
    },
    // Only enabled if warningLimitType is Percentage
    warningLimitPer: {
      table: {
        disable: false,
        category: 'Content / Settings',
      },
      control: { type: 'range', min: 1, max: 100, step: 1 },
      name: 'warningLimitPer',
      if: { arg: 'warningLimitType', eq: 'warningLimitPer' },
      description: 'Enter at what percentage the warning state is displayed.',
    },

    //States
    disabled: {
      description:
        'Choose if component is disabled. Prevents the user to select or change the value of this component.   ',
      defaultValue: false,
      table: {
        category: 'States',
      },
    },
    readonly: {
      description: 'Choose if component is readonly. The user can select but not change the value of this component.',
      defaultValue: false,
      table: {
        category: 'States',
      },
    },

    // Validation
    required: {
      description: 'Choose if the component must hold a value after an interaction or a submit.',
      defaultValue: false,
      table: {
        category: 'Validation',
      },
    },
    hasError: {
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
    textareaId: {
      name: 'textAreaId',
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
    onSelect: {
      name: 'onSelect',
      description: 'Fires when some text is selected.',
      action: 'onSelect',
      table: {
        category: 'Events',
      },
    },
  },
  parameters: {
    badges: ['Draft'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125197&mode=dev',
    },
    docs: {
      description: {
        component: `<markdown>
Text Area allows users to input and edit multiline text. Unlike a simple Text Input component that is typically used for single-line text, a Text Area provides a larger space for users to enter and manipulate multiple lines of text.
                Text Area components are used in various contexts where users need to input or edit longer pieces of text, such as comment boxes, message composition in messaging apps, notes, and description fields in forms.
- [**Appearance**](#appearance)
 - [**Size Variant**](#size-variant) 
 - [**Resize**](#resize) 
- [**Content / Settings**](#content--settings)
 - [**Placeholder**](#placeholder) 
- [**States**](#states)
 - [**Disabled**](#disabled) 
 - [**Readonly**](#readonly)
- [**Validation**](#validation)
 - [**Required**](#required) 
 - [**Has Error**](#has-error)  
- [**Dependencies**](#dependencies)
 - [**Form Label**](#form-label) 
 - [**Form Caption Group**](#form-caption-group)     
 - [**Counter**](#counter)     
</markdown>
        `,
      },
    },
  },
};

//Main Component for Textarea
export const TextArea = (params: BlrTextareaType) =>
  html`${sharedStyles}
    <div class="wrapper">
      ${BlrTextareaRenderFunction({
        ...params,
      })}
    </div> `;
TextArea.args = defaultParams;

//disabledArgTypesTable to deactivate the controls-Panel for a story in storybook
const argTypesToDisable = [
  'theme',
  'size',
  'isResizeable',
  'cols',
  'rows',
  'placeholder',
  'value',
  'minLength',
  'maxLength',
  'hasLabel',
  'label',
  'labelAppendix',
  'hasHint',
  'hintText',
  'hintIcon',
  'showCounter',
  'warningLimitType',
  'warningLimitInt',
  'warningLimitPer',
  'disabled',
  'readonly',
  'required',
  'hasError',
  'errorMessage',
  'errorIcon',
  'arialabel',
  'textareaId',
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

// All Stories
//Appearance Size/ Resize
/**
 * ## Appearance
 * ### Size Variant
 * The Text Area component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'sm',
          label: 'Text Area SM',
          placeholder: '',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Text Area MD',
          placeholder: '',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'lg',
          label: 'Text Area LG',
          placeholder: '',
          value: '',
        })}
      </div>
    </div>
  `;
};
SizeVariant.argTypes = {
  ...disabledArgTypes,
};
SizeVariant.story = { name: ' ' };

//Appearance Resize Story
/**
 * The Text Area component can be fully resizeable, only horizontally resizeable, only vertically resizeable or not resizeable at all.
 */
export const Resize = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        <div>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            theme: 'Light',
            size: 'md',
            label: 'Auto resize',
            placeholder: '',
            value: '',
            isResizeable: 'both',
          })}
        </div>
        <div>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            theme: 'Light',
            size: 'md',
            label: 'Horizontal resize',
            placeholder: '',
            value: '',
            isResizeable: 'horizontal',
          })}
        </div>
        <div>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            theme: 'Light',
            size: 'md',
            label: 'Vertical resize',
            placeholder: '',
            value: '',
            isResizeable: 'vertical',
          })}
        </div>
        <div>
          ${BlrTextareaRenderFunction({
            ...defaultParams,
            theme: 'Light',
            size: 'md',
            label: 'No resize',
            placeholder: '',
            value: '',
            isResizeable: 'none',
          })}
        </div>
      </div>
    </div>
  `;
};
Resize.argTypes = {
  ...disabledArgTypes,
};

//Content/ Settings Placeholder
/**
 * ## Content / Settings
 * ### Placeholder
 * The Text Area component can display a placeholder text. This is recommended to improve usability.
 */
export const Placeholder = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'With placeholder',
          labelAppendix: '',
          placeholder: 'Add a message here',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Without placeholder',
          labelAppendix: '',
          placeholder: '',
          value: '',
        })}
      </div>
    </div>
  `;
};
Placeholder.argTypes = {
  ...disabledArgTypes,
};
Placeholder.story = { name: ' ' };

// States Disabled
/**
 * ## States
 * Apart from states like rest, hover, pressed and focus, the Text Area component can also be disabled or readonly. The error state is documented under [validation](#validation).
 * ### Disabled
 * The Text Area component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Disabled',
          placeholder: '',
          labelAppendix: '',
          disabled: true,
          value: '',
        })}
      </div>
    </div>
  `;
};
Disabled.argTypes = {
  ...disabledArgTypes,
};
Disabled.story = {
  name: ' ',
};

// States Readonly
/**
 * The Text Area component in the readonly state can not be interacted with, but it can still be selected and receive focus.
 */
export const Readonly = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Readonly',
          placeholder: '',
          readonly: true,
          value: '',
        })}
      </div>
    </div>
  `;
};
Readonly.argTypes = {
  ...disabledArgTypes,
};

// Validation Required Todo add interactive Story with Button to show the State
/**
 * ## Validation
 * ### Required
 * The Text Area component can be set as required. If set as required, an error should be thrown, when the Text Area component was not filled, before it was submitted. It is recommended to indicate in the label appendix, whether a component is required or not. For more information on the label and label appendix have a look at the [Form Label](#form-label) component in the dependencies section below.
 */
export const Required = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Label-text',
          placeholder: '',
          required: true,
          labelAppendix: '(required)',
          value: '',
        })}
      </div>
    </div>
  `;
};
Required.argTypes = {
  ...disabledArgTypes,
};
Required.story = {
  name: ' ',
};

// Validation Has Error Todo add interactive Story with Button to show the State
/**
 * The Text Area component can be set to have an error. An error can be displayed after submitting a wrong value, after leaving/deselecting the Text Area or in case the Text Area was set as required and has not been filled before submitting. For more information on the error message have a look at the [Form Caption Group](#form-caption-group) in the dependencies section below.
 */
export const HasError = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: '',
          hasError: true,
          errorIcon: undefined,
          label: 'Error',
          value: '',
        })}
      </div>
    </div>
  `;
};
HasError.argTypes = {
  ...disabledArgTypes,
};

//Dependencies Captions
/**
 * ## Dependencies
 * ### Form Label
 * The Text Area component can display an optional Form Label component, consisting of a label and a label appendix. For more information have a look at the internal [Form Label](?path=/docs/design-system-web-components-internal-components-formlabel--docs) component.
 */
// States FormLabel
export const FormLabel = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: '',
          label: 'With label',
          labelAppendix: '(with appendix)',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: 'Without label',
          label: ' ',
          labelAppendix: '',
          hasHint: false,
          value: '',
        })}
      </div>
    </div>
  `;
};
FormLabel.argTypes = {
  ...disabledArgTypes,
};
FormLabel.story = {
  name: ' ',
};
/**
 * The Text Area component can display an optional hint message and error message with or without icons. Both captions can be combined. For more information have a look at the internal <a href="/docs/design-system-web-components-internal-components-formcaptiongroup--docs">Form Caption Group</a> component.
 */
export const FormCaptionGroup = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: '',
          label: 'Hint message',
          hasHint: true,
          hintIcon: 'blrInfo',
          labelAppendix: '',
          value: '',
        })}
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          placeholder: '',
          label: 'Hint and error message',
          labelAppendix: '',
          hasError: true,
          errorMessage: "OMG it's an error",
          hasHint: true,
          errorIcon: 'blrErrorFilled',
          value: '',
        })}
      </div>
    </div>
  `;
};
FormCaptionGroup.argTypes = {
  ...disabledArgTypes,
};

// States Counter
/**
 * The Text Area component can display an optional counter. The threshold for the warning and error message can be set individually. For more information have a look at the internal [Counter](?path=/docs/design-system-web-components-internal-components-counter--docs) component.
 */
export const Counter = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textarea">
        ${BlrTextareaRenderFunction({
          ...defaultParams,
          theme: 'Light',
          size: 'md',
          label: 'Counter',
          showCounter: true,
          value: 'This text almost reached the maximum amount of characters.',
          warningLimitType: 'warningLimitInt',
          warningLimitInt: 105,
          warningLimitPer: 75,
        })}
      </div>
    </div>
  `;
};
Counter.argTypes = {
  ...disabledArgTypes,
};
Counter.parameters = {
  backgrounds: {
    default: '',
  },
};
