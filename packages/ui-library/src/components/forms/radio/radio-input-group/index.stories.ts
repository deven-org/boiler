import { BlrRadioGroupType } from './index';
import { BlrRadioGroupRenderFunction } from './renderFunction';
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
    groupHintIcon: {
      if: { arg: 'hasHint', eq: true },
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
      if: { arg: 'hasHint', eq: true },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
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
  showLegend: true,
  hasHint: true,
  groupHintMessage: 'This is a sample hint message',
  groupHintIcon: 'blrInfo',
  hasError: false,
  groupErrorMessage: '',
  groupErrorIcon: undefined,
  hideLabel: false,
};

BlrRadioGroup.args = args;
