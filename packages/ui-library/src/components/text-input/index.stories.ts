/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextInputRenderFunction, BlrTextInputType } from './index';
import { FormSizes, InputTypes } from '../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

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
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
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
  hasLabel,
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
  theme,
}: BlrTextInputType) =>
  html`
    ${BlrTextInputRenderFunction({
      textInputId,
      type,
      label,
      hasLabel,
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
      theme,
    })}
  `;

BlrTextInput.storyName = 'BlrTextInput';

BlrTextInput.args = {
  theme: 'Light',
  textInputId: 'Input ID',
  label: 'Label',
  hasLabel: true,
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
