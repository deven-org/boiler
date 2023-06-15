import { html } from 'lit-html';
import { BlrRadio as BlrRadioClass } from './index';
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
  radioId,
  name,
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
}: BlrRadioClass) =>
  html`
    <blr-radio
      .radioId=${radioId}
      .name=${name}
      .value=${option.value}
      .label=${option.label}
      .disabled=${disabled}
      .checked=${checked}
      .required=${required}
      .readonly=${readonly}
      .invalid=${invalid}
      .size=${size}
      .onChange=${onChange}
      .onBlur=${onBlur}
      .onFocus=${onFocus}
      .option=${option}
      class="example-layout-class"
    ></blr-radio>
  `;

BlrRadio.storyName = 'BlrRadio';

BlrRadio.args = {
  name: 'Radio Input',
  checked: false,
  disabled: false,
  readonly: false,
  invalid: false,
  required: false,
  size: 'md',
  option: { label: 'Option 1', value: 'option1' },
};
