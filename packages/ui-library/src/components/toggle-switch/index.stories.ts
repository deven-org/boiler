/* eslint-disable no-console */
import { html } from 'lit';

import { BlrToggleSwitchRenderFunction, BlrToggleSwitchType } from './index';
import { IconKeys } from '@boiler/icons';

import { getIconName } from '../../utils/get-icon-name';
import { FormSizes, WrapperVariant } from '../../globals/constants';
import './index';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    hintIcon: {
      options: [...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    variant: {
      options: WrapperVariant,
      control: { type: 'select' },
    },
  },
};

export const BlrToggleSwitch = ({
  label,
  checkInputId,
  onBlur,
  onFocus,
  onChange,
  disabled,
  readonly,
  size,
  variant,
  checked,
  errorMessage,
  showHint,
  hintText,
  hintIcon,
  hasError,
  isSelected,
  updated,
  handleChange,
}: BlrToggleSwitchType) =>
  html`
    ${BlrToggleSwitchRenderFunction({
      label,
      checkInputId,
      onBlur,
      onFocus,
      onChange,
      disabled,
      readonly,
      size,
      variant,
      checked,
      errorMessage,
      showHint,
      hintText,
      hintIcon,
      hasError,
      isSelected,
      updated,
      handleChange,
    })}
  `;

BlrToggleSwitch.storyName = 'BlrToggleSwitch';

const logEventType = (event: Event) => {
  console.log('storybook:story:logEventType', event.type);
};

BlrToggleSwitch.args = {
  label: 'Toggle Switch Option',
  checkInputId: 'switch',
  disabled: false,
  readonly: false,
  checked: false,
  hasError: false,
  size: 'md',
  errorMessage: 'This is error message',
  showHint: true,
  hintText: 'Field is used for hint',
  hintIcon: 'blrInfo',
  variant: 'leading',
  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
};
