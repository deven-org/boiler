/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextButtonType, BlrTextButtonRenderFunction } from './index';
import { IconKeys as PureIconKeys } from '@boiler/icons';
import { ActionSizes, ActionVariants } from '../../globals/constants';
import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Button',
  argTypes: {
    leadingIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    trailingIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
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

export const BlrTextButton = ({
  label,
  onClick,
  onBlur,
  loading,
  disabled,
  buttonId,
  variant,
  size,
  leadingIcon,
  trailingIcon,
  loadingStatus,
  theme,
}: BlrTextButtonType) =>
  html`
    ${BlrTextButtonRenderFunction({
      label,
      onClick,
      onBlur,
      loading,
      disabled,
      buttonId,
      variant,
      size,
      leadingIcon,
      trailingIcon,
      loadingStatus,
      theme,
    })}
  `;

BlrTextButton.storyName = 'BlrTextButton';

BlrTextButton.args = {
  theme: 'Light',
  label: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  leadingIcon: undefined,
  trailingIcon: 'blrChevronDown',
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  variant: 'cta',
  size: 'md',
  loadingStatus: 'Loading',
};
