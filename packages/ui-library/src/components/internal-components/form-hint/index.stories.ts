/* eslint-disable no-console */
import { PureIconKeys } from '@boiler/icons';
import { FormSizes, HintVariants } from '../../../globals/constants';
import { BlrFormHintRenderFunction, BlrFormHintType } from './index';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Internal Components/BlrFormHint',
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

export const BlrFormHint = (params: BlrFormHintType) => BlrFormHintRenderFunction(params);

BlrFormHint.storyName = 'BlrFormHint';

const args: BlrFormHintType = {
  theme: 'Light',
  message: 'hallo',
  icon: 'blr360',
  variant: 'hint',
  size: 'sm',
};

BlrFormHint.args = args;
