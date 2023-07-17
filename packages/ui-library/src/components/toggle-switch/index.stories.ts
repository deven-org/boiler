/* eslint-disable no-console */
import { html } from 'lit';

import { BlrLabelToggleSwitch as BlrLabelToggleSwitchClass } from './index';
import { IconKeys } from '@boiler/icons';

import { getIconName } from '../../utils/get-icon-name';
import { FormSizes, WrapperVariant } from '../../globals/constants';
import './index';

export default {
  title: 'BlrLabelToggleSwitch',
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

export const BlrLabelToggleSwitch = ({
  label,
  checkInputId,
  onBlur,
  onFocus,
  onChange,
  disabled,
  size,
  variant,
  checked,
  errorMessage,
  showHint,
  hintText,
  hintIcon,
  hasError,
}: BlrLabelToggleSwitchClass) => html`
  <blr-label-toggleswitch
    .label=${label}
    .checkInputId=${checkInputId}
    .onFocus=${onFocus}
    .onBlur=${onBlur}
    .onChange=${onChange}
    .disabled=${disabled}
    .checked=${checked}
    .size=${size}
    .variant=${variant}
    .errorMessage=${errorMessage}
    .showHint=${showHint}
    .hintText=${hintText}
    .hintIcon=${hintIcon}
    .hasError=${hasError}
  ></blr-label-toggleswitch>
`;

BlrLabelToggleSwitch.storyName = 'BlrLabelToggleSwitch';

const logEventType = (event: Event) => {
  console.log('storybook:story:logEventType', event.type);
};

BlrLabelToggleSwitch.args = {
  label: 'Toggle Switch Option',
  checkInputId: 'switch',
  disabled: false,
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
