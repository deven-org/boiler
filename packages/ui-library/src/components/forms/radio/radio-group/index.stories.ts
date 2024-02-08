import { BlrRadioGroupType } from './index';
import { BlrRadioGroupRenderFunction } from './renderFunction';
import { InputSizes } from '../../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';
import { html } from 'lit';
// this loads the all components instances and registers their html tags
import '../../../../index';
import { BlrRadioRenderFunction } from '../renderFunction';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 20px;
    }
  </style>
`;

export default {
  title: 'Design System/Web Components/Forms/Radio Group/Radio Group',
  argTypes: {
    size: {
      name: 'sizeVariant',
      description: ' Choose size of the component.',
      options: InputSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    // direction: {
    //   description: 'Choose direction of the component.',
    //   table: {
    //     category: 'Appearance',
    //   },
    //   options: ['horizontal', 'vertical'],
    //   control: {
    //     type: 'radio',
    //   },
    // },
    hasGroupLabel: {
      description: 'Choose if component has a group label. ',
      table: {
        category: 'Content / Settings',
      },
      control: { type: 'boolean' },
    },
    groupLabel: {
      description: 'Enter string used as a group label.',
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
    groupHintIcon: {
      description: 'Select an icon which is displayed in front of the hint message.',
      if: { arg: 'hasHint', eq: true },
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      table: {
        category: 'Content / Settings',
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
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
  },
  parameters: {
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

const sampleRadioInputs = html`
  ${BlrRadioRenderFunction({
    checked: false,
    disabled: false,
    name: 'Radio 1',
    optionId: 'radio1',
    label: 'harald',
    required: false,
    readonly: false,
    hasHint: true,
    hasError: false,
    theme: 'Light',
  })}
  ${BlrRadioRenderFunction({
    checked: false,
    disabled: false,
    name: 'Radio 2',
    optionId: 'radio2',
    label: 'oscar',
    required: false,
    readonly: false,
    hasHint: true,
    hasError: false,
    theme: 'Light',
  })}
`;

export const BlrRadioGroup = (params: BlrRadioGroupType) => BlrRadioGroupRenderFunction(params, sampleRadioInputs);

BlrRadioGroup.storyName = 'Radio Group';

const defaultParams: BlrRadioGroupType & {
  // direction: 'horizontal' | 'vertical';
  ariaLabel: string;
  radioGroupId: string;
} = {
  theme: 'Light',
  size: 'md',
  // direction: 'horizontal',
  hasGroupLabel: true,
  groupLabel: 'Group Label Text',
  hasHint: false,
  groupHintMessage: 'This is a small hint',
  groupHintIcon: 'blrInfo',
  hasError: false,
  groupErrorMessage: '',
  groupErrorIcon: undefined,
  ariaLabel: 'Radio Group',
  radioGroupId: 'Radio Group',
  name: 'Radio Group ',
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
        size: 'sm',
        groupLabel: 'Radio Group SM',
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        size: 'md',
        groupLabel: 'Radio Group MD',
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        size: 'lg',
        groupLabel: 'Radio Group LG',
      })}
    </div>
  `;
};

SizeVariant.story = { name: ' ' };

// /**
//  * The Radio Group component can have a horizontal or a vertical direction.
//  *  */
// export const Direction = () => {
//   return html`
//     ${sharedStyles}
//     <div class="wrapper">
//       ${BlrRadioGroup({
//         ...defaultParams,
//         direction: 'vertical',
//         legend: 'Vertical',
//       })}
//     </div>
//     <div class="wrapper">
//       ${BlrRadioGroup({
//         ...defaultParams,
//         direction: 'horizontal',
//         legend: 'Horizontal',
//       })}
//     </div>
//   `;
// };

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
        hasGroupLabel: true,
        groupLabel: 'With Group Label',
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        hasGroupLabel: false,
      })}
    </div>
  `;

HasGroupLabel.story = { name: ' ' };

/**
The Radio Group component can be set to have an error. An error can be displayed after submitting a wrong value, after leaving/deselecting the Radio Group or in case the Radio Group was set as required and has not been checked before submitting. For more information on the error message have a look at the [Form Caption Group](#form-caption-group) in the dependencies section below.
 */
export const HasError = () => {
  return html`
    ${sharedStyles}
    ${BlrRadioGroup({
      ...defaultParams,
      groupLabel: 'Error',
      hasError: true,
    })}
  `;
};

/**
 * ## Dependencies
 * ### Form Caption Group
 * The Radio Group component can display an optional hint message and error message with icons. Both captions can be combined. For more information have a look at the internal [Form Caption Group](?path=/docs/design-system-web-components-internal-components-formcaptiongroup--docs) component.
 */
export const FormCaptionGroup = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        groupLabel: 'Hint message',
        hasHint: true,
      })}
    </div>
    <div class="wrapper">
      ${BlrRadioGroup({
        ...defaultParams,
        groupLabel: 'Hint and error message',
        errorIcon: 'blr360',
        groupErrorMessage: "OMG it's an error",
        hasHint: true,
        hasError: true,
      })}
    </div>
  `;
};

FormCaptionGroup.story = { name: ' ' };
