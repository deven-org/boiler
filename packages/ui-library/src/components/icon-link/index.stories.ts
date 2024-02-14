/* eslint-disable no-console */
import { BlrIconLinkType } from './index';
import { BlrIconLinkRenderFunction } from './renderFunction';
import { PureIconKeys } from '@boiler/icons/icons-optimized';
// this loads the all components instances and registers their html tags
import '../../index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { ActionSizes, ActionVariants } from '../../globals/constants';

export default {
  title: 'Components/Icon Link',
  argTypes: {
    icon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    size: {
      options: ActionSizes,
      control: { type: 'select' },
    },
    variant: {
      options: ActionVariants,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A106388&mode=dev',
    },
    viewMode: 'docs',
  },
};

export const BlrIconLink = (params: BlrIconLinkType) => BlrIconLinkRenderFunction(params);

BlrIconLink.storyName = 'Icon Link';

const args: BlrIconLinkType = {
  theme: 'Light',
  arialabel: 'Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  loading: false,
  icon: 'blr360',
  linkId: 'link-id',
  variant: 'cta',
  size: 'md',
  href: '#',
  target: '_self',
};

BlrIconLink.args = args;
