/* eslint-disable no-console */
import { BlrToggleSwitchRenderFunction, BlrToggleSwitchType } from './index';
import { PureIconKeys } from '@boiler/icons';
import { FormSizes, IconPositionVariant } from '../../globals/constants';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Forms/ToggleSwitch',
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

export const BlrToggleSwitch = (params: BlrToggleSwitchType) => BlrToggleSwitchRenderFunction(params);

BlrToggleSwitch.storyName = 'ToggleSwitch';

const logEventType = (event: Event) => {
  console.log('storybook:story:logEventType', event.type);
};

const args: BlrToggleSwitchType = {
  theme: 'Light',
  label: 'Toggle Switch Option',
  onLabel: 'On',
  offLabel: 'Off',
  showStateLabel: true,
  checkInputId: 'switch',
  disabled: false,
  readonly: false,
  checked: false,
  size: 'md',
  hintText: 'Field is used for hint',
  hintIcon: 'blrInfo',
  variant: 'leading',
  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
  isSelected: false,
};

BlrToggleSwitch.args = args;
