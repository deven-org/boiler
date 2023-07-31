/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrIconButtonType, BlrIconButtonRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, Sizes } from '../../globals/constants';
import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    icon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    size: {
      options: Sizes,
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

export const BlrIconButton = ({
  arialabel,
  onClick,
  onBlur,
  loading,
  disabled,
  buttonId,
  variant,
  size,
  icon,
  loadingStatus,
  theme,
}: BlrIconButtonType) =>
  html`
    ${BlrIconButtonRenderFunction({
      arialabel,
      onClick,
      onBlur,
      loading,
      disabled,
      buttonId,
      variant,
      size,
      icon,
      loadingStatus,
      theme,
    })}
  `;

BlrIconButton.storyName = 'BlrIconButton';

BlrIconButton.args = {
  theme: 'Light',
  arialabel: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  icon: 'blrChevronDown',
  loading: false,
  disabled: false,
  buttonId: 'button-id',
  variant: 'cta',
  size: 'md',
  loadingStatus: 'Loading',
};
