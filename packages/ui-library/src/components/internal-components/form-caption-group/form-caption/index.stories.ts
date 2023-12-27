/* eslint-disable no-console */
import { PureIconKeys } from '@boiler/icons';
import { FormSizes, CaptionVariants } from '../../../../globals/constants';
import { BlrFormCaptionType } from './index';
import { BlrFormCaptionRenderFunction } from './renderFunction';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Internal Components/FormCaptionGroup/FormCaption',
  argTypes: {
    icon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    variant: {
      options: CaptionVariants,
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
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125223&mode=dev',
    },
    viewMode: 'docs',
  },
};

export const BlrFormCaption = (params: BlrFormCaptionType) => BlrFormCaptionRenderFunction(params);

BlrFormCaption.storyName = 'FormCaption';

const args: BlrFormCaptionType = {
  theme: 'Light',
  message: 'hallo',
  arialabel: 'Form Hint',
  icon: 'blr360',
  variant: 'hint',
  size: 'sm',
};

BlrFormCaption.args = args;
