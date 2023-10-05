/* eslint-disable no-console */
import { IconKeys as PureIconKeys } from '@boiler/icons';
import { FormSizes, HintVariants } from '../../../globals/constants';
import { BlrFormHintRenderFunction, BlrFormHintType } from './index';

import './index';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Internal Components',
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
      options: HintVariants,
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

export const BlrFormHint = ({ message, icon, variant, size, childElement, theme }: BlrFormHintType) =>
  BlrFormHintRenderFunction({ message, icon, variant, size, childElement, theme });

BlrFormHint.storyName = 'BlrFormHint';

BlrFormHint.args = {
  theme: 'Light',
  message: 'hallo',
  icon: 'blr360',
  variant: 'hint',
  size: 'sm',
};
