import { BlrFormCaptionGroupRenderFunction, BlrFormCaptionGroupType } from './index';
import { html } from 'lit-html';
import { BlrFormCaptionRenderFunction } from './form-caption';
import { FormSizes } from '../../../globals/constants';

export default {
  title: 'Design System/Web Components/Internal Components/FormCaptionGroup',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
  },
  parameters: {
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
