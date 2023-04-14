import { html } from 'lit-html';
import { IconKeys } from '@boiler/icons';

import './index';
import { BlrIcon as BlrIconClass } from './index';
import { Sizes } from '../../globals/constants';
import { getIconName } from '../../utils/get-icon-name';
import { calculateIconName } from '../../utils/calculate-icon-name';

export default {
  title: 'BlrIcon',
  argTypes: {
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
  },
};

const allIcons = getIconName(IconKeys);

export const BlrIcon = ({ size }: BlrIconClass) =>
  html` <div class="icon-gallery row-fluid">
    <ul class="icon-gallery icon-thumbnails">
      ${allIcons.map((icon) => {
        return html` <li>
          <blr-icon
            icon="${calculateIconName(icon as string, size)}"
            size="${size}"
            class="icon-gallery-layout"
          ></blr-icon>
          <span class="icon-label">${icon}</span>
        </li>`;
      })}
    </ul>
  </div>`;

BlrIcon.storyName = 'BlrIcon';

BlrIcon.args = {
  size: 'Lg',
};
