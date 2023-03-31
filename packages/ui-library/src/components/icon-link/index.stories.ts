/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrIconLink as BlrIconLinkClass } from './index';
import { IconKeys } from '@boiler/icons';
import { Sizes } from '../../globals/constants';
import './index';

export default {
  title: 'BlrIconLink',
  argTypes: {
    iconName: {
      options: [undefined, ...IconKeys],
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
};

export const BlrIconLink = ({
  ariaLabel,
  onClick,
  onBlur,
  loading,
  linkId,
  variant,
  size,
  iconName,
  href,
  target,
  loadingStatus,
}: BlrIconLinkClass) =>
  html`
    <blr-icon-link
      .ariaLabel=${ariaLabel}
      .iconName=${iconName}
      .linkId=${linkId}
      .onClick=${onClick}
      .onBlur=${onBlur}
      .loading=${loading}
      .variant=${variant}
      .size=${size}
      .target=${target}
      .href=${href}
      .loadingStatus=${loadingStatus}
      class="example-layout-class"
    ></blr-icon-link>
  `;

BlrIconLink.storyName = 'BlrIconLink';

BlrIconLink.args = {
  ariaLabel: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  loading: false,
  iconName: 'blr360Md',
  linkId: 'link-id',
  variant: 'cta',
  size: 'md',
  href: '#',
  target: '_self',
  loadingStatus: 'Loading',
};
