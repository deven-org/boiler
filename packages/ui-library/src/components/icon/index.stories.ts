import { html } from 'lit-html';
import { Sizes } from '../../globals/constants.js';
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';
import '../../index.js';
import { BlrIconRenderFunction } from './renderFunction.js';
import { SizesType } from '../../globals/types.js';
import { calculateIconName } from '../../utils/calculate-icon-name.js';
import { PureIconKeys, SizelessIconType } from '@boiler/icons';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 1.25em;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    .label {
      font-family:
        Source Sans Pro,
        sans-serif;
      font-weight: 400;
      line-height: 1rem;
      font-size: 1.2rem;
      text-align: center;
      padding-top: 1rem;
    }
  </style>
`;

export default {
  title: 'Components/Icon',
  argTypes: {
    sizeVariant: {
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
    fillParent: {
      description: 'Choose if size of the component should be defined by the parent container.',
      table: {
        category: 'Appearance',
      },
    },
  },
  parameters: {
    badges: ['New'],
    layout: 'centered',
    docs: {
      description: {
        component: `<markdown>
        An icon component typically displays a small, visually recognizable graphic or symbol that represents a particular function, object, or concept.

        - [**Appearance**](#appearance)
          - [**Size Variant**](#size-variant)
        
        The Icon is intended to be used when creating new components. Currently, it is used like this in the following components:
        
        - [**Button Text**](?path=/docs/components-button-text--docs)
        - [**Checkbox**](?path=/docs/components-checkbox--docs)
        - [**Form Caption**](?path=/docs/components-form-caption--docs)
        - [**Input Field Text**](?path=/docs/components-input-field-text--docs)
        - [**Input Field Number**](?path=/docs/components-input-field-number--docs)
        - [**Select**](?path=/docs/components-select--docs)
        - [**Tab Bar**](?path=/docs/components-tabbar--docs)
        - [**Toggle Switch**](?path=/docs/components-toggle-switch--docs)
        
        It is not intended to use the Icon directly when creating new applications.
        
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
    icon: calculateIconName(params.icon, params.sizeVariant as SizesType),
    sizeVariant: params.sizeVariant,
    fillParent: params.fillParent,
  })}`;
};

// TODO: fix the type mismatch
type IconType = {
  theme: string;
  sizeVariant: SizesType;
  icon: SizelessIconType; // Update the type definition for icon
  fillParent: boolean;
};
const defaultParams: IconType = {
  theme: Themes[0],
  sizeVariant: 'md',
  icon: 'blr360',
  fillParent: false,
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
        sizeVariant: 'xxs',
      })}
      <h3 class="label">Icon XS</h3>
      ${Icon({
        ...defaultParams,
        sizeVariant: 'xs',
      })}

      <h3 class="label">Icon SM</h3>
      ${Icon({
        ...defaultParams,
        sizeVariant: 'sm',
      })}
      <h3 class="label">Icon MD</h3>
      ${Icon({
        ...defaultParams,
        sizeVariant: 'md',
      })}
      <h3 class="label">Icon LG</h3>
      ${Icon({
        ...defaultParams,
        sizeVariant: 'lg',
      })}
      <h3 class="label">Icon XL</h3>
      ${Icon({
        ...defaultParams,
        sizeVariant: 'xl',
      })}
    </div>
  `;
};

SizeVariant.story = {
  name: ' ',
};
