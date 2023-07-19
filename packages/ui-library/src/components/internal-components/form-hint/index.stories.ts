/* eslint-disable no-console */
import { IconKeys } from '@boiler/icons';
import { FormSizes, HintVariants } from '../../../globals/constants';
import { getIconName } from '../../../utils/get-icon-name';
import { BlrFormHintRenderFunction, BlrFormHintType } from './index';

import './index';

export default {
  title: 'Design System/Internal Components',
  argTypes: {
    icon: {
      options: [undefined, ...getIconName(IconKeys)],
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    variant: {
      options: HintVariants,
      control: { type: 'select' },
    },
  },
  parameters: {
    previewTabs: {
      canvas: { hidden: true },
    },
    viewMode: 'docs',
  },
};

export const BlrFormHint = ({ message, icon, variant, size, childElement }: BlrFormHintType) =>
  BlrFormHintRenderFunction({ message, icon, variant, size, childElement });

BlrFormHint.storyName = 'BlrFormHint';

BlrFormHint.args = {
  message: 'hallo',
  icon: 'blr360',
  variant: 'hint',
  size: 'sm',
};
