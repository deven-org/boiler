import { html } from 'lit-html';
import { IconKeys } from '@boiler/icons';

import './index';
import { BlrIcon as BlrIconClass, BlrIconRenderFunction } from './index';
import { Sizes } from '../../../globals/constants';
import { getIconName } from '../../../utils/get-icon-name';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { classMap } from 'lit/directives/class-map.js';

export default {
  title: 'Design System/Internal Components',
  argTypes: {
    size: {
      options: Sizes,
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

const allIcons = getIconName(IconKeys);

export const BlrIcon = ({ size }: BlrIconClass) => {
  const classes = classMap({
    'icon-gallery-layout': true,
  });

  return html`<div class="icon-gallery row-fluid">
    <ul class="icon-gallery icon-thumbnails">
      ${allIcons.map((icon) => {
        return html`<li>
          ${BlrIconRenderFunction({ icon: calculateIconName(icon as string, size), size: size, classMap: classes })}
          <span class="icon-label">${icon}</span>
        </li>`;
      })}
    </ul>
  </div>`;
};

BlrIcon.storyName = 'BlrIcon';

BlrIcon.args = {
  size: 'Lg',
};
