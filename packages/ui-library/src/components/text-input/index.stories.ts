/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextInputRenderFunction, BlrTextInputType } from './index';
import { FormSizes, InputTypes } from '../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Forms/TextInput',
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
      if: { arg: 'showHint', eq: true },
    },
    hintText: {
      if: { arg: 'showHint', eq: true },
    },
    errorIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasError', eq: true },
    },
    errorMessage: {
      if: { arg: 'hasError', eq: true },
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
  maxLength,
  pattern,
  hasError,
  errorMessage,
  errorIcon,
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
      maxLength,
      pattern,
      hasError,
      errorMessage,
      errorIcon,
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
  inputIcon: 'blr360',
  type: 'text',
  value: '',
  size: 'md',
  placeholder: 'Test placeholder',
  disabled: false,
  required: false,
  readonly: false,
  showHint: false,
  hintText: 'This is a hint message',
  hintIcon: 'blrInfo',
  maxLength: '200',
  hasError: false,
  errorMessage: 'This is an error message',
  errorIcon: 'blrInfo',
};
