import { BlrFormCaptionGroupType } from './index';
import { BlrFormCaptionGroupRenderFunction } from './renderFunction';
import { html } from 'lit-html';
import { BlrFormCaptionRenderFunction } from './form-caption/renderFunction';
import { FormSizes } from '../../../globals/constants';

// this loads the all components instances and registers their html tags
import '../../../index';

export default {
  title: 'Design System/Web Components/Internal Components/FormCaptionGroup',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=8273%3A7564&mode=dev',
    },
    viewMode: 'docs',
  },
};

const hintCaption = BlrFormCaptionRenderFunction({
  message: 'This is a hint',
  variant: 'hint',
  icon: 'blrInfo',
  size: 'md',
  theme: 'Light',
  arialabel: 'Form Hint',
});

const errorCaption = BlrFormCaptionRenderFunction({
  message: 'This is an error',
  variant: 'error',
  icon: 'blrInfo',
  size: 'md',
  theme: 'Light',
  arialabel: 'Form Error',
});

const mixedCaptions = html` ${hintCaption} ${errorCaption} `;

export const BlrFormCaptionGroup = (params: BlrFormCaptionGroupType) =>
  BlrFormCaptionGroupRenderFunction(params, mixedCaptions);

const args: BlrFormCaptionGroupType = {
  size: 'md',
};

BlrFormCaptionGroup.args = args;

BlrFormCaptionGroup.storyName = 'FormCaptionGroup';
