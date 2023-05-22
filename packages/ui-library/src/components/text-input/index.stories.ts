/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextInput as BlrTextInputClass } from './index';
import { FormSizes, InputTypes } from '../../globals/constants';
import { IconKeys } from '@boiler/icons';
import { action } from '@storybook/addon-actions';
import './index';
import { getIconName } from '../../utils/get-icon-name';

export default {
  title: 'BlrTextInput',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    type: {
      options: InputTypes,
      control: { type: 'select' },
    },
    inputIcon: {
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    hintIcon: {
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
    },
  },
};

export const BlrTextInput = ({
  textInputId,
  label,
  labelAppendix,
  showInputIcon,
  inputIcon,
  type,
  value,
  placeholder,
  disabled,
  size,
  required,
  readonly,
  maxLength,
  pattern,
  errorMessage,
  showHint,
  hintText,
  hintIcon,
  hasError,
}: BlrTextInputClass) =>
  html`
    <blr-text-input
      .textInputId=${textInputId}
      .label=${label}
      .labelAppendix=${labelAppendix}
      .showInputIcon=${showInputIcon}
      .inputIcon=${inputIcon}
      .type=${type}
      .value=${value}
      .placeholder=${placeholder}
      .disabled=${disabled}
      .size=${size}
      .required=${required}
      .readonly=${readonly}
      .onChange=${action('onChange')}
      .onBlur=${action('onBlur')}
      .onFocus=${action('onFocus')}
      .maxLength=${maxLength}
      .pattern=${pattern}
      .errorMessage=${errorMessage}
      .showHint=${showHint}
      .hintText=${hintText}
      .hintIcon=${hintIcon}
      .hasError=${hasError}
      class="example-layout-class"
    ></blr-text-input>
  `;

BlrTextInput.storyName = 'BlrTextInput';

BlrTextInput.args = {
  textInputId: 'Input ID',
  label: 'Label',
  labelAppendix: '(Optional)',
  showInputIcon: true,
  inputIcon: 'blr360',
  type: 'text',
  value: '',
  placeholder: 'Test placeholder',
  disabled: false,
  required: false,
  readonly: false,
  maxLength: '200',
  size: 'md',
  errorMessage: 'This is error message',
  showHint: true,
  hintText: 'Field is used for hint',
  hintIcon: 'blrInfo',
  hasError: false,
};
