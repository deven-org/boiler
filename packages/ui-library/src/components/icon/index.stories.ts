import { html } from 'lit-html';
import { IconKeys, IconType } from '@boiler/icons';

import './index';
import { BlrIcon as BlrIconClass } from './index';
import { Sizes } from '../../globals/constants';
import { SizesType } from '../../globals/types';

export default {
  title: 'BlrIcon',
  argTypes: {
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
  },
};

const filteredIcons = (icons: string[], size: SizesType) => {
  const formattedSize = size.charAt(0).toUpperCase() + size.slice(1);
  return icons.filter((icon: string) => icon.endsWith(formattedSize));
};

export const BlrIcon = ({ size }: BlrIconClass) =>
  html` <div class="icon-gallery row-fluid">
    <ul class="icon-gallery icon-thumbnails">
      ${filteredIcons(IconKeys, size).map((icon) => {
        return html` <li>
          <span class="icon-tooltip">${icon}</span>
          <blr-icon icon="${icon}" size="${size}" class="icon-gallery-layout"></blr-icon>
        </li>`;
      })}
    </ul>
  </div>`;

BlrIcon.storyName = 'BlrIcon';

BlrIcon.args = {
  size: 'Lg',
};
