import { html } from 'lit-html';
import { BlrRadioRenderFunction, BlrRadioType } from './index';
import { InputSizes } from '../../globals/constants';
import { action } from '@storybook/addon-actions';
import './index';

export default {
  title: 'BlrRadioInput',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    option: { control: 'array' },
  },
};

export const BlrRadio = ({
  disabled,
  checked,
  size,
  required,
  readonly,
  onChange,
  onBlur,
  onFocus,
  invalid,
  option,
}: BlrRadioType) =>
  html`
    ${BlrRadioRenderFunction({
      disabled,
      checked,
      size,
      required,
      readonly,
      onChange,
      onBlur,
      onFocus,
      invalid,
      option,
    })}
  `;

BlrRadio.storyName = 'BlrRadioInput';

BlrRadio.args = {
  checked: false,
  disabled: false,
  required: false,
  readonly: false,
  size: 'md',
  option: { label: 'Option 1', value: 'option1' },
};
