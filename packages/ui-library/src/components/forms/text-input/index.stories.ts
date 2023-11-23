/* eslint-disable no-console */
import { BlrTextInputRenderFunction, BlrTextInputType } from './index';
import { FormSizes, InputTypes } from '../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

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
      if: { arg: 'hasHint', eq: true },
    },
    hintMessage: {
      if: { arg: 'hasHint', eq: true },
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

export const BlrTextInput = (params: BlrTextInputType) => BlrTextInputRenderFunction(params);

BlrTextInput.storyName = 'TextInput';

const args: BlrTextInputType = {
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
  hasHint: false,
  hintMessage: 'This is a hint message',
  hintIcon: 'blrInfo',
  maxLength: 200,
  hasError: false,
  errorMessage: 'This is an error message',
  errorIcon: 'blrInfo',
};

BlrTextInput.args = args;
