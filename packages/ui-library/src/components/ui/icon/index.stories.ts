import { html } from 'lit-html';
import { IconKeys } from '@boiler/icons';

import { BlrIconType } from './index';
import { BlrIconRenderFunction } from './renderFunction';

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
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=947%3A31105&mode=dev',
    },
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
            class: classes,
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
