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
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
    },
  },
};

export const BlrRadioGroup = ({
  label,
  size,
  disabled,
  required,
  readonly,
  invalid,
  checked,
  onChange,
  onBlur,
  onFocus,
  hideLabel,
  options,
  layout,
  showHint,
  hintIcon,
  errorMessage,
}: BlrRadioGroupType) =>
  html`
    ${BlrRadioGroupRenderFunction({
      label,
      size,
      disabled,
      required,
      readonly,
      invalid,
      checked,
      onChange,
      onBlur,
      onFocus,
      hideLabel,
      options,
      layout,
      showHint,
      hintIcon,
      errorMessage,
    })}
  `;
BlrRadioGroup.storyName = 'BlrRadioGroup';

BlrRadioGroup.args = {
  label: 'Radio Input',
  disabled: false,
  invalid: false,
  required: false,
  readonly: false,
  size: 'md',
  checked: false,
  options: [
    { label: 'Multi-line option 1', value: 'option1', hint: 'Hint 1', checked: true },
    { label: 'Option 2', value: 'option2', hint: 'Hint 2' },
    { label: 'Option 3', value: 'option3', hint: 'Hint 3' },
  ],
  layout: 'horizontal',
  showHint: true,
  hintIcon: 'blrInfo',
  errorMessage: 'This is a sample error message',
};