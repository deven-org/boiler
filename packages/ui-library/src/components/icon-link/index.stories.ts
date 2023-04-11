/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrIconLink as BlrIconLinkClass } from './index';
import { IconKeys } from '@boiler/icons';
import { Sizes } from '../../globals/constants';
import './index';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { getIconName } from '../../utils/get-icon-name';

export default {
  title: 'BlrIconLink',
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
};

export const BlrIconLink = ({
  ariaLabel,
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
}: BlrIconLinkClass) =>
  html`
    <blr-icon-link
      .ariaLabel=${ariaLabel}
      .icon=${calculateIconName(icon, size)}
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
  icon: 'blr360',
  linkId: 'link-id',
  variant: 'cta',
  size: 'md',
  href: '#',
  target: '_self',
  loadingStatus: 'Loading',
};
