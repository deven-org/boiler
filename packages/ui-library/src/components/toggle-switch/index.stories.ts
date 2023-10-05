/* eslint-disable no-console */
import { html } from 'lit';

import { BlrToggleSwitchRenderFunction, BlrToggleSwitchType } from './index';
import { IconKeys as PureIconKeys } from '@boiler/icons';
import { FormSizes, IconPositionVariant } from '../../globals/constants';
import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    variant: {
      options: IconPositionVariant,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
};

export const BlrToggleSwitch = ({
  label,
  showLabel,
  onLabel,
  offLabel,
  showStateLabel,
  checkInputId,
  onBlur,
  onFocus,
  onChange,
  disabled,
  readonly,
  size,
  variant,
  checked,
  showHint,
  hintText,
  hintIcon,
  isSelected,
  theme,
}: BlrToggleSwitchType) =>
  html`
    ${BlrToggleSwitchRenderFunction({
      label,
      showLabel,
      onLabel,
      offLabel,
      showStateLabel,
      checkInputId,
      onBlur,
      onFocus,
      onChange,
      disabled,
      readonly,
      size,
      variant,
      checked,
      showHint,
      hintText,
      hintIcon,
      isSelected,
      theme,
    })}
  `;

BlrToggleSwitch.storyName = 'BlrToggleSwitch';

const logEventType = (event: Event) => {
  console.log('storybook:story:logEventType', event.type);
};

BlrToggleSwitch.args = {
  theme: 'Light',
  label: 'Toggle Switch Option',
  showLabel: true,
  onLabel: 'On',
  offLabel: 'Off',
  showStateLabel: true,
  checkInputId: 'switch',
  disabled: false,
  readonly: false,
  checked: false,
  size: 'md',
  showHint: true,
  hintText: 'Field is used for hint',
  hintIcon: 'blrInfo',
  variant: 'leading',
  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
};
