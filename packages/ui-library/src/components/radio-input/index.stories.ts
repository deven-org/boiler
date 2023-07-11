import { html } from 'lit-html';
import { BlrRadioRenderFunction, BlrRadioType } from './index';
import { InputSizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrRadio',
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
  showHint,
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
      showHint,
    })}
  `;

BlrRadio.storyName = 'BlrRadio';

BlrRadio.args = {
  checked: false,
  disabled: false,
  required: false,
  readonly: false,
  size: 'md',
  option: { label: 'Option 1', value: 'option1', hint: 'This is a small hint' },
  showHint: true,
  invalid: false,
  hintIcon: '',
};
