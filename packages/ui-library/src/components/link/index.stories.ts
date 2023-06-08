/* eslint-disable no-console */
import { html } from 'lit-html';
import { RelTypes, Sizes, TargetTypes } from '../../globals/constants';
import { IconKeys } from '@boiler/icons';
import { BlrLink as BlrLinkClass } from './index';
import './index';
import { getIconName } from '../../utils/get-icon-name';
import { calculateIconName } from '../../utils/calculate-icon-name';

export default {
  title: 'BlrLink',
  argTypes: {
    leadingIcon: {
      options: [undefined, ...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    trailingIcon: {
      options: [undefined, ...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    rel: {
      options: [undefined, ...RelTypes],
      control: { type: 'select' },
    },
    target: {
      options: [undefined, ...TargetTypes],
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
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  },
};
export const BlrLink = ({
  label,
  ariaLabel,
  onClick,
  onBlur,
  disabled,
  linkId,
  href,
  target,
  rel,
  size,
  leadingIcon,
  loading,
  trailingIcon,
  loadingStatus,
  variant,
}: BlrLinkClass) =>
  html`
    <blr-link
      .label=${label}
      .aria-label="${ariaLabel}"
      .onClick=${onClick}
      .onBlur=${onBlur}
      .disabled=${disabled}
      .linkId=${linkId}
      .href=${href}
      .target=${target}
      .rel=${rel}
      .size=${size}
      .loadingStatus=${loadingStatus}
      .loading=${loading}
      .leadingIcon=${calculateIconName(leadingIcon, size)}
      .trailingIcon=${calculateIconName(trailingIcon, size)}
      .variant=${variant}
      class="example-layout-class"
    >
    </blr-link>
  `;
BlrLink.storyName = 'BlrLink';
BlrLink.args = {
  label: 'Link',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  leadingIcon: undefined,
  trailingIcon: 'blrChevronDown',
  size: 'md',
  iconPosition: 'left',
  loadingStatus: 'Loading',
  loading: false,
  disabled: false,
  variant: 'cta',
  linkId: 'link-id',
  href: '#',
  target: '_self',
  rel: 'nofollow',
};
