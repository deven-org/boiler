import { BlrRadioGroupRenderFunction, BlrRadioGroupType } from './index';
import { InputSizes } from '../../../../globals/constants';
import { getIconName } from '../../../../utils/get-icon-name';
import { IconKeys } from '@boiler/icons';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Forms/RadioGroup',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    options: { control: 'array' },
    layout: { control: 'select', options: ['horizontal', 'vertical'] },
    groupHintIcon: {
      if: { arg: 'showHint', eq: true },
      options: [undefined, ...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    groupErrorIcon: {
      if: { arg: 'hasError', eq: true },
      options: [undefined, ...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    groupErrorMessage: {
      if: { arg: 'hasError', eq: true },
    },
    groupHintMessage: {
      if: { arg: 'showHint', eq: true },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
};

export const BlrRadioGroup = (params: BlrRadioGroupType) => BlrRadioGroupRenderFunction(params);

BlrRadioGroup.storyName = 'RadioGroup';

const args: BlrRadioGroupType = {
  theme: 'Light',
  disabled: false,
  name: 'Default Name',
  required: false,
  readonly: false,
  size: 'md',
  options: [
    { label: 'Multi-line option 1', value: 'option1', hintMessage: 'Hint 1', errorMessage: 'Error Message 1' },
    { label: 'Option 2', value: 'option2', hintMessage: 'Hint 2', errorMessage: 'Error Message 2' },
    { label: 'Option 3', value: 'option3', hintMessage: 'Hint 3', errorMessage: 'Error Message 3' },
  ],
  layout: true,
  showLegend: true,
  showHint: true,
  groupHintMessage: 'This is a sample hint message',
  groupHintIcon: 'blrInfo',
  hasError: false,
  groupErrorMessage: '',
  groupErrorIcon: undefined,
  hideLabel: false,
  showGroupErrorMessage: false,
};

BlrRadioGroup.args = args;
