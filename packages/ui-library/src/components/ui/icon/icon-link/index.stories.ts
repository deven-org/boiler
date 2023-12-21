/* eslint-disable no-console */
import { BlrIconLinkType, BlrIconLinkRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, ActionSizes } from '../../../../globals/constants';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/UI/Icon',
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

BlrIconLink.storyName = 'IconLink';

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
  loadingStatus: 'Loading',
};

BlrIconLink.args = args;
