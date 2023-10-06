import { html } from 'lit-html';
import { BlrRadioGroupRenderFunction, BlrRadioGroupType } from './index';
import { InputSizes } from '../../globals/constants';
import './index';
import { getIconName } from '../../utils/get-icon-name';
import { IconKeys } from '@boiler/icons';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Radio',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    options: { control: 'array' },
    layout: { control: 'select', options: ['horizontal', 'vertical'] },
    hintIcon: {
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

export const BlrRadioGroup = ({
  disabled,
  checked,
  size,
  name,
  required,
  readonly,
  onChange,
  onBlur,
  onFocus,
  hasError,
  errorIcon,
  options,
  layout,
  showHint,
  groupHintMessage,
  hintIcon,
  hideLabel,
  showLegend,
  showGroupErrorMessage,
  groupErrorMessage,
  groupErrorIcon,
  theme,
}: BlrRadioGroupType) =>
  html`
    ${BlrRadioGroupRenderFunction({
      disabled,
      checked,
      size,
      name,
      required,
      readonly,
      onChange,
      onBlur,
      onFocus,
      hasError,
      errorIcon,
      options,
      layout,
      showHint,
      groupHintMessage,
      hintIcon,
      hideLabel,
      showLegend,
      showGroupErrorMessage,
      groupErrorMessage,
      groupErrorIcon,
      theme,
    })}
  `;
BlrRadioGroup.storyName = 'BlrRadioGroup';

BlrRadioGroup.args = {
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
  layout: 'horizontal',
  showLegend: true,
  showHint: true,
  groupHintMessage: 'This is a sample hint message',
  hintIcon: 'blrInfo',
  hasError: false,
  groupErrorMessage: 'This is a sample error message',
  groupErrorIcon: undefined,
};
