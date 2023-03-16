import { html } from 'lit-html';
import { BlrIconLink as BlrIconLinkClass } from './index';
import { IconKeys } from '../../foundation/icons';
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
  linkId,
  variant,
  size,
  iconName,
  href,
  target,
}: BlrIconLinkClass) =>
  html`
    <blr-icon-link
      .ariaLabel=${ariaLabel}
      .iconName=${iconName}
      .linkId=${linkId}
      .onClick=${onClick}
      .onBlur=${onBlur}
      .variant=${variant}
      .size=${size}
      .target=${target}
      .href=${href}
      class="example-layout-class"
    ></blr-icon-link>
  `;

BlrIconLink.storyName = 'BlrIconLink';

BlrIconLink.args = {
  ariaLabel: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  iconName: 'blrChevronDownMd',
  linkId: 'button-id',
  variant: 'cta',
  size: 'md',
  href: '#',
  target: '_self',
};
