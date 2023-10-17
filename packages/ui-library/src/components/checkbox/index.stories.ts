/* eslint-disable no-console */
import { html } from 'lit';

import { BlrCheckboxRenderFunction, BlrCheckboxType } from './index';

import { InputSizes } from '../../globals/constants';
import './index';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/BlrCheckbox',
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

export const BlrCheckbox = ({
  label,
  hasLabel,
  checkInputId,
  onBlur,
  onFocus,
  onChange,
  disabled,
  size,
  checked,
  indeterminate,
  readonly,
  hasError,
  errorMessage,
  errorIcon,
  showHint,
  hintIcon,
  hintMessage,
  theme,
}: BlrCheckboxType) =>
  html`
    <blr-checkbox
      label=${label}
      hasLabel=${hasLabel}
      .checkInputId=${checkInputId}
      .onFocus=${onFocus}
      .onBlur=${onBlur}
      .onChange=${onChange}
      .disabled=${disabled}
      .checked=${checked}
      .indeterminate=${indeterminate}
      .readonly=${readonly}
      size=${size}
      .hasError=${hasError}
      .errorMessage=${errorMessage}
      .errorIcon=${errorIcon}
      .showHint=${showHint}
      .hintIcon=${hintIcon}
      .hintMessage=${hintMessage}
      theme=${theme}
    ></blr-checkbox>
  `;

BlrCheckbox.storyName = 'BlrCheckbox';

const logEventType = (event: Event) => {
  console.log('storybook:story:logEventType', event.type);
};

BlrCheckbox.args = {
  theme: 'Light',
  size: 'md',

  hasLabel: true,
  label: 'Checkbox Option',

  hasError: false,
  errorMessage: 'This is a sample error message',
  errorIcon: '',

  showHint: false,
  hintMessage: 'This is a sample hint',
  hintIcon: '',

  checkInputId: 'Checky',
  disabled: false,
  checked: false,
  indeterminate: false,
  readonly: false,

  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
};
