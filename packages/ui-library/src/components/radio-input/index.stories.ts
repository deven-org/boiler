import { html } from 'lit-html';
import { BlrRadio as BlrRadioClass } from './index';
import { InputSizes } from '../../globals/constants';
import { action } from '@storybook/addon-actions';
import './index';

export default {
  title: 'BlrRadio',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    option: { control: 'array' },
    layout: { control: 'radio', options: ['horizontal', 'vertical'] },
  },
};

export const BlrRadio = ({
  radioId,
  value,
  name,
  label,
  disabled,
  checked,
  size,
  required,
  readonly,
  onChange,
  onBlur,
  onFocus,
  hasError,
  option,
}: BlrRadioClass) =>
  html`
    <blr-radio
      .radioId=${radioId}
      .name=${name}
      .value=${option.value}
      .label=${option.label}
      .disabled=${disabled}
      .readonly=${readonly}
      .hasError=${hasError}
      .size=${size}
      .required=${required}
      .onChange=${action('onChange')}
      .onBlur=${action('onBlur')}
      .onFocus=${action('onFocus')}
      .option=${option}
      class="example-layout-class"
    ></blr-radio>
  `;

BlrRadio.storyName = 'BlrRadio';

BlrRadio.args = {
  name: 'Radio Input',
  disabled: false,
  readonly: false,
  invalid: false,
  required: false,
  size: 'md',
  option: { label: 'Option 1', value: 'option1' },
  layout: 'horizontal',
};
