import { html } from 'lit-html';
import { IconKeys } from '@boiler/icons';
import { BlrIconType } from './index';
import { BlrIconRenderFunction } from './renderFunction';

import { Sizes } from '../../../globals/constants';
import { getIconName } from '../../../utils/get-icon-name';
import { calculateIconName } from '../../../utils/calculate-icon-name';
import { classMap } from 'lit/directives/class-map.js';
import { SizesType } from '../../../globals/types';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 1.25em;
    }
    .label {
      font-family: Source Sans Pro, sans-serif;
      font-weight: 400;
      line-height: 1rem;
      font-size: 2rem;
      text-align: center;
    }
  </style>
`;

// this loads the all components instances and registers their html tags
import '../../../index';

export default {
  title: 'Design System/Web Components/UI/Icon',
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
    ignoreSize: {
      table: {
        category: 'Content / Settings',
      },
    },
    arialabel: {
      name: 'ariaLabel',
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        category: 'Accessibility',
      },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
        An icon component typically displays a small, visually recognizable graphic or symbol that represents a particular function, object, or concept.
- [**Appearance**](#appearance)
 - [**Size Variant**](#size-variant) 
</Markdown>
        `,
      },
    },
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
  theme: 'Light',
  size: 'lg',
  icon: 'blr360Lg',
  ignoreSize: false,
};

Icon.args = defaultParams;

/**
 * ## Appearance
 * ### Size Variant
 * The Checkbox component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-checkbox">
        <h3 class="label">Icon SM</h3>
        ${Icon({
          ...defaultParams,
          size: 'sm',
        })}
        <h3 class="label">Icon MD</h3>
        ${Icon({
          ...defaultParams,
          size: 'md',
        })}
        <h3 class="label">Icon LG</h3>
        ${Icon({
          ...defaultParams,
          size: 'lg',
        })}
      </div>
    </div>
  `;
};
SizeVariant.story = {
  name: ' ',
};
