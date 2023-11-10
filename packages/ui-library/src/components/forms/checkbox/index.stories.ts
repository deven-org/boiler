/* eslint-disable no-console */
import { BlrCheckboxRenderFunction, BlrCheckboxType } from './index';

import { InputSizes } from '../../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Forms/Checkbox',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'showHint', eq: true },
    },
    hintMessage: {
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
    label: {
      if: { arg: 'hasLabel', eq: true },
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

export const BlrCheckbox = (params: BlrCheckboxType) => BlrCheckboxRenderFunction(params);

BlrCheckbox.storyName = 'Checkbox';

const logEventType = (event: Event) => {
  console.log('storybook:story:logEventType', event.type);
};

const args: BlrCheckboxType = {
  theme: 'Light',
  size: 'md',

  hasLabel: true,
  label: 'Checkbox Option',

  hasError: false,
  errorMessage: 'This is a sample error message',
  errorIcon: undefined,

  showHint: false,
  hintMessage: 'This is a sample hint',
  hintIcon: undefined,

  checkInputId: 'Checky',
  disabled: false,
  checked: false,
  indeterminate: false,
  readonly: false,

  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
  handleChange: logEventType,
};

BlrCheckbox.args = args;
