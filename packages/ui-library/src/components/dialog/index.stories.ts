import { html } from 'lit-html';
import { BlrDialog as BlrDialogClass } from './index';

import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components',
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

export const BlrDialog = ({ theme, isOpen, dialogTitle, dialogDescription }: BlrDialogClass) =>
  html` <blr-dialog
    .theme=${theme}
    .isOpen=${isOpen}
    .dialogTitle=${dialogTitle}
    .dialogDescription=${dialogDescription}
  ></blr-dialog>`;

BlrDialog.storyName = 'BlrDialog';

BlrDialog.args = {
  theme: 'Light',
  isOpen: false,
  dialogTitle: 'Dialog Title',
  dialogDescription: 'Sample Text',
};
