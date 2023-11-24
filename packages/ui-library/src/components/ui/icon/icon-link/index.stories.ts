/* eslint-disable no-console */
import { BlrIconLinkType, BlrIconLinkRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, FormSizes } from '../../../../globals/constants';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/UI/Icon',
  argTypes: {
    icon: {
      options: [...PureIconKeys],
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
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
