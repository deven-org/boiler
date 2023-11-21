/* eslint-disable no-console */
import { BlrTextButtonType, BlrTextButtonRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionSizes, ActionVariants } from '../../../../globals/constants';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Actions/Buttons/TextButton',
  argTypes: {
    leadingIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasIcon', eq: true },
    },
    trailingIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasIcon', eq: true },
    },
    size: {
      options: ActionSizes,
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
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  hasIcon: true,
  leadingIcon: undefined,
  trailingIcon: 'blr360',
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  loadingStatus: 'Loading',
};

BlrTextButton.args = args;
