/* eslint-disable no-console */
import { html } from 'lit';

import { BlrCheckboxRenderFunction, BlrCheckboxType } from './index';

import { InputSizes } from '../../globals/constants';
import './index';
import { PureIconKeys } from '@boiler/icons';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    errorIcon: {
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
  handleChange,
  theme,
}: BlrCheckboxType) =>
  html`
    ${BlrCheckboxRenderFunction({
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
      handleChange,
      theme,
    })}
  `;

BlrCheckbox.storyName = 'BlrCheckbox';

const logEventType = (event: Event) => {
  console.log('storybook:story:logEventType', event.type);
};

BlrCheckbox.args = {
  theme: 'Light',
  label: 'Checkbox Option',
  hasLabel: true,
  checkInputId: 'Checky',
  disabled: false,
  checked: false,
  indeterminate: false,
  readonly: false,
  hasError: false,
  size: 'md',
  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
  errorMessage: 'This is a sample error message',
  errorIcon: '',
  showHint: false,
  hintMessage: 'This is a sample hint',
  hintIcon: '',
};
