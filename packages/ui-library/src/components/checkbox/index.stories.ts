/* eslint-disable no-console */
import { html } from 'lit';

import { BlrCheckboxRenderFunction, BlrCheckboxType } from './index';

import { InputSizes } from '../../globals/constants';
import './index';
import { getIconName } from '../../utils/get-icon-name';
import { IconKeys } from '@boiler/icons';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    size: {
      options: InputSizes,
      control: { type: 'select' },
    },
    errorIcon: {
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    hintIcon: {
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
    },
  },
};

export const BlrCheckbox = ({
  label,
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
}: BlrCheckboxType) =>
  html`
    ${BlrCheckboxRenderFunction({
      label,
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
    })}
  `;

BlrCheckbox.storyName = 'BlrCheckbox';

const logEventType = (event: Event) => {
  console.log('storybook:story:logEventType', event.type);
};

BlrCheckbox.args = {
  label: 'Checkbox Option',
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
