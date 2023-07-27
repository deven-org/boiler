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
    pattern: {
      description: 'Please enter valid RegEx',
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrTextInput = ({
  textInputId,
  label,
  labelAppendix,
  hasLabel,
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
  errorMessage,
  showHint,
  hintText,
  hintIcon,
  hasError,
  pattern,
}: BlrTextInputType) =>
  html`
    ${BlrTextInputRenderFunction({
      textInputId,
      label,
      labelAppendix,
      hasLabel,
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
      errorMessage,
      showHint,
      hintText,
      hintIcon,
      hasError,
      pattern,
    })}
  `;

BlrTextInput.storyName = 'BlrTextInput';

BlrTextInput.args = {
  textInputId: 'Input ID',
  label: 'Label',
  labelAppendix: '(Optional)',
  hasLabel: true,
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
  pattern: '',
};
