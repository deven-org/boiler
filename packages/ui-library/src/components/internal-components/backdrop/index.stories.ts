import { html } from 'lit-html';
import { BlrBackdrop as BlrBackdropClass } from './index';
import { FeedbackVariants, FormSizes } from '../../../globals/constants';

import './index';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Internal Components',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    variant: {
      options: FeedbackVariants,
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

export const BlrBackdrop = ({ theme }: BlrBackdropClass) =>
html` <blr-overlay .theme=${theme}></blr-overlay>`;

BlrBackdrop.storyName = 'BlrBackdrop';

BlrBackdrop.args = {
  theme: 'Light',
  size: 'md',
  variant: 'default',
  isOpen: false
};
