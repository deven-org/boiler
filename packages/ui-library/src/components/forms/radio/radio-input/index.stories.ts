import { BlrRadioRenderFunction, BlrRadioType } from './index';
import { InputSizes } from '../../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Forms/RadioGroup',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    option: { control: 'array' },
    hintMessage: {
      if: { arg: 'hasHint', eq: true },
    },
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasHint', eq: true },
    },
    errorMessage: {
      if: { arg: 'hasError', eq: true },
    },
    errorIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasError', eq: true },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
};

export const BlrRadio = (params: BlrRadioType) => BlrRadioRenderFunction(params);

BlrRadio.storyName = 'Radio';

const args: BlrRadioType = {
  optionId: 'option_1',
  theme: 'Light',
  checked: false,
  disabled: false,
  name: 'Default Name',
  required: false,
  readonly: false,
  size: 'md',
  label: 'Option 1',
  hasHint: true,
  hintIcon: undefined,
  hintMessage: 'This is a sample hint message',
  hasError: false,
  errorMessage: 'This is a sample error message',
  errorIcon: undefined,
};

BlrRadio.args = args;
