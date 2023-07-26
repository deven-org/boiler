/* eslint-disable no-console */
import { IconKeys } from '@boiler/icons';
import { FormSizes, HintVariants } from '../../../globals/constants';
import { BlrFormHintRenderFunction, BlrFormHintType } from './index';

import './index';

export default {
  title: 'Design System/Internal Components',
  argTypes: {
    icon: {
      options: [undefined, IconKeys],
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
    viewMode: 'docs',
  },
};

export const BlrFormHint = ({ message, icon, variant, size, childElement }: BlrFormHintType) =>
  BlrFormHintRenderFunction({ message, icon, variant, size, childElement });

BlrFormHint.storyName = 'BlrFormHint';

BlrFormHint.args = {
  message: 'hallo',
  icon: 'blr360Lg',
  variant: 'hint',
  size: 'sm',
};
