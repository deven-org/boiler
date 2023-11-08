import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { FormSizes } from '../../../globals/constants';
import { BlrFormCaptionGroupRenderFunction, BlrFormCaptionGroupType } from './index';

export default {
  title: 'Design System/Web Components/Internal Components/FormCaptionGroup',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrFormCaptionGroup = ({
  theme,
  size,
  showHint,
  hintText,
  hintIcon,
  hasError,
  errorMessage,
  errorIcon,
}: BlrFormCaptionGroupType) =>
  BlrFormCaptionGroupRenderFunction({ theme, size, showHint, hintText, hintIcon, hasError, errorMessage, errorIcon });

BlrFormCaptionGroup.storyName = 'FormCaptionGroup';

const args: BlrFormCaptionGroupType = {
  theme: 'Light',
  size: 'md',
  showHint: true,
  hintText: 'This is a hint',
  hintIcon: 'blrInfo',
  hasError: true,
  errorMessage: 'This is an error message',
  errorIcon: 'blrInfo',
};

BlrFormCaptionGroup.args = args;
