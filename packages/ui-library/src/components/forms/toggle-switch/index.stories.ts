/* eslint-disable no-console */
import { BlrToggleSwitchRenderFunction, BlrToggleSwitchType } from './index';
import { PureIconKeys } from '@boiler/icons';
import { FormSizes, IconPositionVariant } from '../../../globals/constants';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Forms/ToggleSwitch',
  argTypes: {
    size: {
      name: 'sizeVariant',
      description: 'Choose size of the component.',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    hasHint: {
      description: 'Choose if component has a hint message.',
      options: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    hintMessage: {
      description: 'Enter string used used as hint message.',
      if: { arg: 'hasHint', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    hintIcon: {
      name: 'hintMessageIcon',
      description: 'Select an icon which is displayed in front of the hint message.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasHint', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    variant: {
      options: IconPositionVariant,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    showStateLabel: {
      description: 'Choose if component has a label.',
      table: {
        category: 'Content / Settings',
      },
    },
    label: {
      description: 'Enter string used as label text.',
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'showStateLabel', eq: true },
    },
    onLabel: {
      description: 'Enter string used as on label text.',
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'showStateLabel', eq: true },
    },
    offLabel: {
      description: 'Enter string used as off label text.',
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'showStateLabel', eq: true },
    },
    toggleOnIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    toggleOffIcon: {
      options: [undefined, ...PureIconKeys],
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
  size: 'md',
  showStateLabel: true,
  label: 'Toggle Switch Option',
  onLabel: 'On',
  offLabel: 'Off',
  checkInputId: 'switch',
  disabled: false,
  readonly: false,
  checked: false,
  hasHint: true,
  hintMessage: 'Field is used for hint',
  hintIcon: 'blrInfo',
  variant: 'leading',
  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
};

BlrToggleSwitch.args = args;
