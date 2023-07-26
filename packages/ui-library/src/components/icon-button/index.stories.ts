/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrIconButtonType, BlrIconButtonRenderFunction } from './index';
import { IconKeys } from '@boiler/icons';
import { Sizes } from '../../globals/constants';
import './index';
import { getIconName } from '../../utils/get-icon-name';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    icon: {
      options: [undefined, ...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
    variant: {
      options: ['cta', 'primary', 'secondary', 'silent', 'destructive', 'encourage'],
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
    })}
  `;

BlrIconButton.storyName = 'BlrIconButton';

BlrIconButton.args = {
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
