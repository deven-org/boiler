/* eslint-disable no-console */
import { BlrTextButtonType, BlrTextButtonRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionSizes, ActionVariants, IconPositionVariant, ButtonDisplayOptions } from '../../../../globals/constants';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Actions/Buttons/TextButton',
  argTypes: {
    icon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasIcon', eq: true },
    },
    iconPosition: {
      options: IconPositionVariant,
      control: { type: 'select' },
      if: { arg: 'hasIcon', eq: true },
    },
    size: {
      options: ActionSizes,
      control: { type: 'select' },
    },
    buttonDisplay: {
      options: ButtonDisplayOptions,
      control: { type: 'select' },
    },
    variant: {
      options: ActionVariants,
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

export const BlrTextButton = (params: BlrTextButtonType) => BlrTextButtonRenderFunction(params);

BlrTextButton.storyName = 'TextButton';

const args: BlrTextButtonType = {
  theme: 'Light',
  variant: 'cta',
  size: 'md',
  label: 'Button',
  hasIcon: true,
  iconPosition: 'leading',
  icon: 'blr360',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  loadingStatus: 'Loading',
};

BlrTextButton.args = args;
