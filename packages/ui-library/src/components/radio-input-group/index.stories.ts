import { html } from 'lit-html';
import { BlrRadioGroupRenderFunction, BlrRadioGroupType } from './index';
import { InputSizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrRadioGroup',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    options: { control: 'array' },
    layout: { control: 'radio', options: ['horizontal', 'vertical'] },
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
    { label: 'Multi-line option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
  layout: 'horizontal',
};
