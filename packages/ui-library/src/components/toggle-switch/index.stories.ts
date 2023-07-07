/* eslint-disable no-console */
import { html } from 'lit';

import { BlrLabelToggleSwitch as BlrLabelToggleSwitchClass } from './index';

import { FormSizes, WrapperVariant } from '../../globals/constants';
import './index';

export default {
  title: 'BlrLabelToggleSwitch',
  argTypes: {
    size: {
      options: FormSizes,
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
  indeterminate,
  readonly,
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
    .indeterminate=${indeterminate}
    .readonly=${readonly}
    .size=${size}
    .variant=${variant}
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
  indeterminate: false,
  readonly: false,
  hasError: false,
  size: 'md',
  variant: 'leading',
  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
};
