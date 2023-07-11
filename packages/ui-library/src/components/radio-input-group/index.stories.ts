import { html } from 'lit-html';
import { BlrRadioGroupRenderFunction, BlrRadioGroupType } from './index';
import { InputSizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrRadio',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    options: { control: 'array' },
    layout: { control: 'select', options: ['horizontal', 'vertical'] },
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
    { label: 'Multi-line option 1', value: 'option1', hint: 'Hint 1' },
    { label: 'Option 2', value: 'option2', hint: 'Hint 2' },
    { label: 'Option 3', value: 'option3', hint: 'Hint 3' },
  ],
  layout: 'horizontal',
  showHint: true,
};
