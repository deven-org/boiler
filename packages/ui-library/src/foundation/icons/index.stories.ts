import { html } from 'lit-html';
import { IconKeys } from '@boiler/icons';
import { BlrIconType } from '../../components/ui/icon/index';
import { BlrIconRenderFunction } from '../../components/ui/icon/renderFunction';

import { Sizes } from '../../globals/constants';
import { getIconName } from '../../utils/get-icon-name';
import { calculateIconName } from '../../utils/calculate-icon-name';
import { classMap } from 'lit/directives/class-map.js';
import { SizesType } from '../../globals/types';
import { Themes } from '../_tokens-generated/index.themes';

// this loads the all components instances and registers their html tags
import '../../index';

export default {
  title: 'Foundation/Icons',
  argTypes: {
    size: {
      options: Sizes,
      description: 'Select size of the component.',
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    icon: {
      description: 'Select the icon of the component.',
      table: {
        category: 'Content / Settings',
      },
    },
    arialabel: {
      name: 'ariaLabel',
      control: { type: 'text' },
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        category: 'Accessibility',
      },
    },
  },
  parameters: {
    layout: 'centered',
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=947%3A31105&mode=dev',
    },
    viewMode: 'docs',
  },
};

const allIcons = getIconName(IconKeys);

export const Icon = (params: BlrIconType) => {
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

const defaultParams: BlrIconType = {
  size: 'lg',
  icon: 'blr360Lg',
};

Icon.args = defaultParams;
