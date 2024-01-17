import { html } from 'lit-html';
import { Sizes } from '../../../../globals/constants';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';
import '../../../../index';
import { BlrIconRenderFunction } from '../renderFunction';
import { SizesType } from '../../../../globals/types';
import { calculateIconName } from '../../../../utils/calculate-icon-name';
import { PureIconKeys, SizelessIconType } from '@boiler/icons/icons-optimized';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 1.25em;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .label {
      font-family: Source Sans Pro, sans-serif;
      font-weight: 400;
      line-height: 1rem;
      font-size: 1.2rem;
      text-align: center;
      padding-top: 1rem;
    }
  </style>
`;

export default {
  title: 'Design System/Web Components/UI/Icon/Icon',
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
      options: [undefined, ...PureIconKeys],
      defaultValue: 'blr360Lg',
      control: { type: 'select' },
      table: {
        category: 'Content / Settings',
      },
    },
    ignoreSize: {
      description: 'Choose if size of the component should be defined by the parent container.',
      table: {
        category: 'Appearance',
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
        component: `<markdown>
        An icon component typically displays a small, visually recognizable graphic or symbol that represents a particular function, object, or concept.
- [**Appearance**](#appearance)
 - [**Size Variant**](#size-variant) 
</markdown>
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

export const Icon = (params: IconType) => {
  return html`${BlrIconRenderFunction({
    icon: calculateIconName(params.icon, params.size as SizesType),
    size: params.size,
    ignoreSize: params.ignoreSize,
  })}`;
};

type IconType = {
  theme: string;
  size: SizesType;
  icon: SizelessIconType; // Update the type definition for icon
  ignoreSize: boolean;
  arialabel: string;
};
const defaultParams: IconType = {
  theme: 'Light',
  size: 'lg',
  icon: 'blr360',
  ignoreSize: false,
  arialabel: 'Icon',
};

Icon.args = defaultParams;

/**
 * ## Appearance
 * ### Size Variant
 * The Icon component comes in 6 sizes: XXS, XS, SM, MD, LG and XL.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <h3 class="label">Icon XXS</h3>
      ${Icon({
        ...defaultParams,
        size: 'xxs',
      })}
      <h3 class="label">Icon XS</h3>
      ${Icon({
        ...defaultParams,
        size: 'xs',
      })}

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
      <h3 class="label">Icon XL</h3>
      ${Icon({
        ...defaultParams,
        size: 'xl',
      })}
    </div>
  `;
};

SizeVariant.story = {
  name: ' ',
};
