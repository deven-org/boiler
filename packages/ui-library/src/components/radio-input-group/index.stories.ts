import { html } from 'lit-html';
import { BlrRadioGroupRenderFunction, BlrRadioGroupType } from './index';
import { InputSizes } from '../../globals/constants';
import './index';
import { getIconName } from '../../utils/get-icon-name';
import { IconKeys } from '@boiler/icons';

export default {
  title: 'BlrRadio',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    options: { control: 'array' },
    layout: { control: 'select', options: ['horizontal', 'vertical'] },
    hintIcon: {
      options: [undefined, ...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    errorIcon: {
      options: [undefined, ...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    groupErrorIcon: {
      options: [undefined, ...getIconName(IconKeys)],
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
  hintIcon,
  hideLabel,
  groupErrorMessage,
  groupErrorIcon,
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
      hintIcon,
      hideLabel,
      groupErrorMessage,
      groupErrorIcon,
    })}
  `;
BlrRadioGroup.storyName = 'BlrRadioGroup';

BlrRadioGroup.args = {
  disabled: false,
  name: 'Default Name',
  hasError: false,
  required: false,
  readonly: false,
  size: 'md',
  options: [
    { label: 'Multi-line option 1', value: 'option1', hintMessage: 'Hint 1', errorMessage: 'Error Message 1' },
    { label: 'Option 2', value: 'option2', hintMessage: 'Hint 2', errorMessage: 'Error Message 2' },
    { label: 'Option 3', value: 'option3', hintMessage: 'Hint 3', errorMessage: 'Error Message 3' },
  ],
  layout: 'horizontal',
  showHint: true,
  hintIcon: '',
  groupErrorMessage: 'This is a sample error message',
  groupErrorIcon: '',
};
