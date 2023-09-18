import { html } from 'lit-html';
import { BlrBlanket as BlrBlanketClass } from './index';
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

export const BlrBlanket = ({ theme }: BlrBlanketClass) => html` <blr-overlay .theme=${theme}></blr-overlay>`;

BlrBlanket.storyName = 'BlrBlanket';

BlrBlanket.args = {
  theme: 'Light',
  size: 'md',
  variant: 'default',
  isOpen: false,
};
