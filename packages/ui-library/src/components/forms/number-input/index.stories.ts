/* eslint-disable no-console */
import { BlrNumberInputRenderFunction, BlrNumberInputType } from './index';
import { FormSizes, Units } from '../../../globals/constants';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { PureIconKeys } from '@boiler/icons/icons-optimized/icons';
import { html } from 'lit';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 20px;
    }
  </style>
`;

const defaultParams: BlrNumberInputType = {
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
  prependUnit: true,
  readonly: false,
  required: false,
  showHint: false,
  size: 'md',
  step: 1,
  theme: 'Light',
  totalDigits: 0,
  unit: 'kg',
  value: 0,
  variant: 'mode3',
};

export default {
  title: 'Design System/Web Components/Forms/NumberInput',
  layout: 'padded',
  argTypes: {
    size: {
      name: 'sizeVariant',
      description: ' Choose size of the component. ',
      options: FormSizes,
      control: { type: 'select' },
      table: {
        disable: false,
        category: 'Appearance',
      },
    },
    variant: {
      name: 'stepperVariant',
      description: ' Choose variant of the stepper that is used in the component.',
      options: ['mode1', 'mode2', 'mode3'],
      control: {
        type: 'radio',
        labels: ['vertical', 'horizontal', 'split'],
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
        category: 'Content/ Settings',
      },
    },
    value: {
      name: 'value',
      description: 'Enter the value the component should have.',
      table: {
        category: 'Content/ Settings',
      },
      control: {
        type: 'number',
        label: 'Enter Text',
      },
    },
    fractionDigits: {
      name: 'decimals',
      description: 'Enter how many decimals the value of the component has.',
      table: {
        category: 'Content/ Settings',
      },
      control: {
        type: 'number',
      },
    },
    totalDigits: {
      name: 'leadingZeros',
      description: 'Enter how many leadingZeros the value of the component has.',
      table: {
        category: 'Content/ Settings',
      },
      control: {
        type: 'number',
      },
    },
    unit: {
      name: 'unit',
      description: 'Enter the unit for the number input.',
      options: [Units],
      control: {
        type: 'select',
      },
      table: {
        category: 'Content/ Settings',
      },
    },
    step: {
      name: 'step',
      description: 'Enter how much the value should change when the steppers buttons are used.',
      control: {
        type: 'number',
      },
      table: {
        category: 'Content/ Settings',
      },
    },
    hasLabel: {
      name: 'hasLabel',
      description: 'Choose if component has a label.',
      defaultValue: true,
      control: { type: 'boolean' },
      table: {
        category: 'Content/ Settings',
      },
    },
    label: {
      name: 'label',
      description: 'Enter string used as label text.',
      control: {
        type: 'text',
      },
      table: {
        disable: false,
        category: 'Content/ Settings',
      },
      if: { arg: 'hasLabel', eq: true },
    },

    theme: {
      options: Themes,
      control: { type: 'select' },
    },
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
    previewTabs: {
      'storybook/story/panel': {
        hidden: true,
      },
    },
    docs: {
      //First example for manual code integration
      //canvas: {sourceState: 'shown'},//show code
      //source: {type: 'code'},//additional to previous
      //Second Example
      // source: { code: '<blr-textarea label="Text area LG" size="lg"></blr-textarea>',},
      description: {
        component: `<div>
        <p>Number Input allows users to enter enter numbers into a designated area. Users can interact with the Number Input component by clicking or tapping on it, which activates it for text entry. It often displays a blinking cursor to indicate the current number insertion point.
        </p>
        <ul>
        <li> <a href="#appearance"><strong>Appearance</strong></a>
            <ul>
                <li> <a href="#sizevariant"><strong>sizeVariant</strong></a></li>
                <li> <a href="#stepperVariant"><strong>stepperVariant</strong></a></li>
            </ul>
        </li>
         <li> <a href="#content--settings"><strong>Content/ Settings</strong></a>
            <ul>
                <li> <a href="#placeholder"><strong>placeholder</strong></a>
                </li>
                <li> <a href="#hasUnit"><strong>hasUnit</strong></a>
                </li>
            </ul>
        </li>
         <li> <a href="#states"><strong>States</strong></a>
            <ul>
                <li> <a href="#disabled"><strong>disabled</strong></a>
                </li>
                 <li> <a href="#readonly"><strong>readonly</strong></a>
                </li>
            </ul>
        </li>
         <li> <a href="#validation"><strong>Validation</strong></a>
            <ul>
                <li> <a href="#required"><strong>required</strong></a>
                </li>
                 <li> <a href="#hasError"><strong>hasError</strong></a>
                </li>
            </ul>
        </li>
         <li> <a href="#dependencies"><strong>Dependencies</strong></a>
            <ul>
                <li> <a href="#formLabel"><strong>FormLabel</strong></a>
                </li>
                 <li> <a href="#formCaption"><strong>FormCaption</strong></a>
                </li>
                
            </ul>
        </li>
        </ul>
        </div>`,
      },
    },
  },
};

export const BlrNumberInput = (params: BlrNumberInputType) => BlrNumberInputRenderFunction(params);

BlrNumberInput.storyName = 'Number Input';

const args: BlrNumberInputType = {
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
  theme: 'Light',
  totalDigits: 0,
  unit: 'kg',
  value: 0,
  variant: 'mode3',
};

BlrNumberInput.args = args;

// All Stories
//Appearance Size Story
/**
 * #### sizeVariant
 * The number input component comes in 3 sizes: SM, MD and LG.
 */

export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        theme: 'Light',
        size: 'sm',
        label: 'Number input SM',
        value: 0,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        theme: 'Light',
        size: 'md',
        label: 'Number input MD',
        value: 20,
      })}
    </div>
    <div class="wrapper">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        theme: 'Light',
        size: 'lg',
        label: 'Number input LG',
        value: 40,
      })}
    </div>
  `;
};

SizeVariant.storyName = 'Appearance';

export const Example1 = () =>
  html`
    <div style="max-width: 290px;">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        label: ' Default format',
      })}
    </div>
  `;

Example1.storyName = 'Default';

export const Example2 = () =>
  html`
    <div style="max-width: 290px;">
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        unit: '%',
        label: 'Percent format',
        totalDigits: 3,
      })}
    </div>
  `;

Example2.storyName = 'Percent';

export const Example3 = () =>
  html`
   
      ${BlrNumberInputRenderFunction({
        ...defaultParams,
        unit: '$',
        label: 'Currency format',
        prependUnit: true,
        totalDigits: 3,
        fractionDigits: 2,
      })}
    </div>
  `;

Example3.storyName = 'USD';
