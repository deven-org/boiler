/* eslint-disable no-console */
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { FormSizes } from '../../../globals/constants';
import { BlrFormLabelRenderFunction, BlrFormLabelType } from './index';

import './index';

export default {
  title: 'Design System/Internal Components',
  argTypes: {
    labelSize: {
      options: FormSizes,
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

export const BlrFormLabel = ({ labelText, labelAppendix, labelSize, forValue, theme }: BlrFormLabelType) =>
  BlrFormLabelRenderFunction({ labelText, labelAppendix, labelSize, forValue, theme });

BlrFormLabel.storyName = 'BlrFormLabel';

BlrFormLabel.args = {
  theme: 'Light',
  labelText: 'Test',
  labelAppendix: 'added',
  labelSize: 'md',
  forValue: 'Richard',
};
