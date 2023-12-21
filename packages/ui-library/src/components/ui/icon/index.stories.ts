import { html } from 'lit-html';
import { IconKeys } from '@boiler/icons';

import { BlrIconType, BlrIconRenderFunction } from './index';
import { Sizes } from '../../../globals/constants';
import { getIconName } from '../../../utils/get-icon-name';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { classMap } from 'lit/directives/class-map.js';
import { SizesType } from '../../../globals/types';

export default {
  title: 'Design System/Web Components/UI/Icon',
  argTypes: {
    size: {
      options: Sizes,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

const allIcons = getIconName(IconKeys);

export const BlrIcon = (params: BlrIconType) => {
  const classes = classMap({
    'icon-gallery-layout': true,
  });

  return html`<div class="icon-gallery row-fluid">
    <ul class="icon-gallery icon-thumbnails">
      ${allIcons.map((icon) => {
        return html`<li>
          ${BlrIconRenderFunction({
            icon: calculateIconName(icon as string, params.size as SizesType),
            size: params.size,
            classMap: classes,
          })}
          <span class="icon-label">${icon}</span>
        </li>`;
      })}
    </ul>
  </div>`;
};

BlrIcon.storyName = 'Icon';

const args: BlrIconType = {
  size: 'lg',
  ignoreSize: false,
};

BlrIcon.args = args;
