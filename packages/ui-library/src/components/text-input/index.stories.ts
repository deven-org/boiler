/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextInput as BlrTextInputClass } from './index';
import { Sizes, InputTypes } from '../../globals/constants';
import { IconKeys } from '@boiler/icons';
import { action } from '@storybook/addon-actions';
import './index';

export default {
  title: 'BlrTextInput',
  argTypes: {
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
    type: {
      options: InputTypes,
      control: { type: 'select' },
    },
    hintIcon: {
      options: [undefined, ...IconKeys],
      control: { type: 'select' },
    },
  },
};

export const BlrTextInput = ({
  textInputId,
  label,
  type,
  value,
  placeholder,
  disabled,
  size,
  required,
  maxLength,
  pattern,
  errorMessage,
  hint,
  hintIcon,
  hasError,
}: BlrTextInputClass) =>
  html`
    <blr-text-input
      .textInputId=${textInputId}
      .label=${label}
      .type=${type}
      .value=${value}
      .placeholder=${placeholder}
      .disabled=${disabled}
      .size=${size}
      .required=${required}
      .onChange=${action('onChange')}
      .onBlur=${action('onBlur')}
      .onFocus=${action('onFocus')}
      .maxLength=${maxLength}
      .pattern=${pattern}
      .errorMessage=${errorMessage}
      .hint=${hint}
      .hintIcon=${hintIcon}
      .hasError=${hasError}
      class="example-layout-class"
    ></blr-text-input>
  `;

BlrTextInput.storyName = 'BlrTextInput';

BlrTextInput.args = {
  label: 'Text Input',
  type: 'text',
  value: '',
  placeholder: 'Test placeholder',
  disabled: false,
  required: false,
  maxLength: '200',
  size: 'md',
  errorMessage: 'This is error message',
  hint: 'Field is used for hint',
  hintIcon: 'blr360Sm',
  hasError: false,
};
