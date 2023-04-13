import { html } from 'lit-html';
import { BlrRadioInputGroup as BlrRadioInputGroupClass } from './index';
import { Sizes } from '../../globals/constants';
import { action } from '@storybook/addon-actions';
import './index';

export default {
  title: 'BlrRadioInputGroup',
  argTypes: {
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
    options: { control: 'array' },
  },
};

export const BlrRadioInputGroup = ({
  textInputId,
  label,
  value,
  disabled,
  invalid,
  size,
  required,
  errorMessage,
  hasError,
  hideLabel,
  options,
}: BlrRadioInputGroupClass) =>
  html`
    <blr-radio-input-group
      .textInputId=${textInputId}
      .label=${label}
      .disabled=${disabled}
      .invalid=${invalid}
      .size=${size}
      .required=${required}
      .onChange=${action('onChange')}
      .onBlur=${action('onBlur')}
      .onFocus=${action('onFocus')}
      .errorMessage=${errorMessage}
      .hasError=${hasError}
      .hideLabel=${hideLabel}
      .options=${options}
      class="example-layout-class"
    ></blr-radio-input>
  `;

BlrRadioInputGroup.storyName = 'BlrRadioInputGroup';

BlrRadioInputGroup.args = {
  label: 'Radio Input',
  disabled: false,
  invalid: false,
  required: false,
  size: 'md',
  errorMessage: 'This is an error message',
  hasError: false,
  hideLabel: false,
  options: [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ],
};
