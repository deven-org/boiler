/* eslint-disable no-console */
import { BlrNumberInputRenderFunction, BlrNumberInputType } from './index';
import { FormSizes } from '../../../globals/constants';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { PureIconKeys } from '@boiler/icons/icons-optimized/icons';

export default {
  title: 'Design System/Web Components/Forms/NumberInput',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    variant: {
      options: ['mode1', 'mode2', 'mode3'],
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
    label: {
      if: { arg: 'hasLabel', eq: true },
    },
    fractionDigits: {
      control: { type: 'text' },
    },
    totalDigits: {
      control: { type: 'text' },
    },
    unit: {
      control: { type: 'text' },
    },
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrNumberInput = (params: BlrNumberInputType) => BlrNumberInputRenderFunction(params);

BlrNumberInput.storyName = 'Component docs';

const args: BlrNumberInputType = {
  unit: 'kg',
  prependUnit: false,
  variant: 'mode3',
  value: 0,
  step: 1,
  fractionDigits: undefined,
  totalDigits: undefined,
  size: 'md',
  theme: 'Light',
  hasLabel: true,
  label: 'Label',
  disabled: false,
  placeholder: 'Enter a number',
  readonly: false,
  required: false,
  hasError: false,
  errorMessage: 'This is error message',
  labelAppendix: '(Optional)',
  showHint: true,
  hintText: 'Field is used for hint',
  hintIcon: 'blrInfo',
};

BlrNumberInput.args = args;
