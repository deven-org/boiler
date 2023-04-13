import { html } from 'lit-html';
import { BlrRadioInput as BlrRadioInputClass } from './index';
import { Sizes } from '../../globals/constants';
import { action } from '@storybook/addon-actions';
import './index';

export default {
  title: 'BlrRadioInput',
  argTypes: {
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
    options: { control: 'array' },
  },
};

export const BlrRadioInput = ({
  textInputId,
  label,
  value,
  disabled,
  size,
  required,
  errorMessage,
  hasError,
  options,
}: BlrRadioInputClass) =>
  html`
    <blr-radio-input
      .textInputId=${textInputId}
      .label=${label}
      .disabled=${disabled}
      .size=${size}
      .required=${required}
      .onChange=${action('onChange')}
      .onBlur=${action('onBlur')}
      .onFocus=${action('onFocus')}
      .errorMessage=${errorMessage}
      .hasError=${hasError}
      .options=${options}
      class="example-layout-class"
    ></blr-radio-input>
  `;

BlrRadioInput.storyName = 'BlrRadioInput';

BlrRadioInput.args = {
  label: 'Radio Input',
  disabled: false,
  required: false,
  size: 'md',
  errorMessage: 'This is an error message',
  hasError: false,
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
};
