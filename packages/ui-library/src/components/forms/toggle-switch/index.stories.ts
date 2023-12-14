/* eslint-disable no-console */
import { BlrToggleSwitchRenderFunction, BlrToggleSwitchType } from './index';
import { PureIconKeys } from '@boiler/icons';
import { FormSizes, IconPositionVariant } from '../../../globals/constants';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Forms/ToggleSwitch',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    hintMessage: {
      if: { arg: 'hasHint', eq: true },
    },
    hintIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasHint', eq: true },
    },
    variant: {
      options: IconPositionVariant,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
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
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125201&mode=dev',
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
  hasHint: true,
  hintMessage: 'Field is used for hint',
  hintIcon: 'blrInfo',
  variant: 'leading',
  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
};

BlrToggleSwitch.args = args;
