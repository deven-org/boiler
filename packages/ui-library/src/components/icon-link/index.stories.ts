/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrIconLinkType, BlrIconLinkRenderFunction } from './index';
import { IconKeys } from '@boiler/icons';
import { FormSizes } from '../../globals/constants';
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
      options: FormSizes,
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
    })}
  `;

BlrIconLink.storyName = 'BlrIconLink';

BlrIconLink.args = {
  ariaLabel: 'Button',
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
