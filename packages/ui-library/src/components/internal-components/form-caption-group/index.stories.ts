import { PureIconKeys } from '@boiler/icons';
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
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'showHint', eq: true },
    },
    hintMessage: {
      if: { arg: 'showHint', eq: true },
    },
    hintArialabel: {
      if: { arg: 'showHint', eq: true },
    },
    errorIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'showError', eq: true },
    },
    errorMessage: {
      if: { arg: 'showError', eq: true },
    },
    errorArialabel: {
      if: { arg: 'showError', eq: true },
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
  hintMessage,
  hintIcon,
  hintArialabel,
  showError,
  errorMessage,
  errorIcon,
  errorArialabel,
}: BlrFormCaptionGroupType) =>
  BlrFormCaptionGroupRenderFunction({
    theme,
    size,
    showHint,
    hintMessage,
    hintIcon,
    hintArialabel,
    showError,
    errorMessage,
    errorIcon,
    errorArialabel,
  });

BlrFormCaptionGroup.storyName = 'FormCaptionGroup';

const args: BlrFormCaptionGroupType = {
  theme: 'Light',
  size: 'md',
  showHint: true,
  hintMessage: 'This is a hint',
  hintIcon: 'blrInfo',
  hintArialabel: 'Form Hint',
  showError: true,
  errorMessage: 'This is an error message',
  errorIcon: 'blrInfo',
  errorArialabel: 'Form Error',
};

BlrFormCaptionGroup.args = args;
