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
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    errorIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
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
  hintMessage: 'This is a sample hint message',
  errorMessage: 'This is a sample error message',
  showHint: true,
  hasError: false,
  hintIcon: undefined,
  errorIcon: undefined,
};

BlrRadio.args = args;
