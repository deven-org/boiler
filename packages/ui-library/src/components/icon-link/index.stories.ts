/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrIconLinkType, BlrIconLinkRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, FormSizes } from '../../globals/constants';
import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/UI/Icon',
  argTypes: {
    icon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
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

export const BlrIconLink = ({
  arialabel,
  onClick,
  onBlur,
  loading,
  linkId,
  variant,
  size,
  icon,
  href,
  target,
  loadingStatus,
  theme,
}: BlrIconLinkType) =>
  html`
    ${BlrIconLinkRenderFunction({
      arialabel,
      onClick,
      onBlur,
      loading,
      linkId,
      variant,
      size,
      icon,
      href,
      target,
      loadingStatus,
      theme,
    })}
  `;

BlrIconLink.storyName = 'BlrIconLink';

BlrIconLink.args = {
  theme: 'Light',
  arialabel: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  loading: false,
  icon: 'blr360',
  linkId: 'link-id',
  variant: 'cta',
  size: 'md',
  href: '#',
  target: '_self',
  loadingStatus: 'Loading',
};
