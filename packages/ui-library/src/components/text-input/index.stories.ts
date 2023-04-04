/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextInput as BlrTextInputClass } from './index';
import { Sizes, InputTypes } from '../../globals/constants';
import { IconKeys } from '@boiler/icons';
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
  onChange,
  onBlur,
  onFocus,
  maxLength,
  minLength,
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
      .onChange=${onChange}
      .onBlur=${onBlur}
      .onFocus=${onFocus}
      .maxLength=${maxLength}
      .minLength=${minLength}
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
  value: 'Story book Text Input',
  placeholder: 'Test placeholder',
  onChange: () => console.log('onChange'),
  onBlur: () => console.log('onBlur'),
  onFocus: () => console.log('onFocus'),
  disabled: false,
  required: false,
  textInputId: 'text-input-id',
  maxLength: '200',
  minLength: '50',
  size: 'md',
  pattern: '',
  errorMessage: 'This is error message',
  hint: 'Field is used for hint',
  hintIcon: 'blr360Sm',
  hasError: false,
};
