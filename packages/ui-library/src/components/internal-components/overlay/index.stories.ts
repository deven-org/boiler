import { html } from 'lit-html';
import { BlrOverlay as BlrOverlayClass } from './index';

import './index';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Internal Components',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
    backdropColor: {
      control: { type: 'color' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrOverlay = ({ theme, isOpen, modalTitle }: BlrOverlayClass) =>
  html` <blr-overlay .theme=${theme} .isOpen=${isOpen} .modalTitle=${modalTitle}></blr-overlay>`;

BlrOverlay.storyName = 'BlrOverlay';

BlrOverlay.args = {
  theme: 'Light',
  isOpen: false,
  modalTitle: 'Modal Title'
};
