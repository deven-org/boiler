/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextInputRenderFunction, BlrTextInputType } from './index';
import { FormSizes, InputTypes } from '../../globals/constants';
import { IconKeys } from '@boiler/icons';
import './index';
import { getIconName } from '../../utils/get-icon-name';

export default {
  title: 'Design System/Web Components',
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
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrTextInput = ({
  textInputId,
  type,
  label,
  labelAppendix,
  value,
  placeholder,
  disabled,
  readonly,
  size,
  required,
  onChange,
  onBlur,
  onFocus,
  maxLength,
  pattern,
  hasError,
  errorMessage,
  showInputIcon,
  inputIcon,
  showHint,
  hintText,
  hintIcon,
}: BlrTextInputType) =>
  html`
    ${BlrTextInputRenderFunction({
      textInputId,
      type,
      label,
      labelAppendix,
      value,
      placeholder,
      disabled,
      readonly,
      size,
      required,
      onChange,
      onBlur,
      onFocus,
      maxLength,
      pattern,
      hasError,
      errorMessage,
      showInputIcon,
      inputIcon,
      showHint,
      hintText,
      hintIcon,
    })}
  `;

BlrTextInput.storyName = 'BlrTextInput';

BlrTextInput.args = {
  textInputId: 'Input ID',
  label: 'Label',
  labelAppendix: '(Optional)',
  showInputIcon: true,
  inputIcon: 'blr360Lg',
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
