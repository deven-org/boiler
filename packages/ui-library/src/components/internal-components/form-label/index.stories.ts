/* eslint-disable no-console */
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { FormSizes, LabelVariants } from '../../../globals/constants';
import { BlrFormLabelRenderFunction, BlrFormLabelType } from './index';

export default {
  title: 'Design System/Internal Components/BlrFormLabel',
  argTypes: {
    labelSize: {
      options: FormSizes,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
    variant: {
      options: LabelVariants,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrFormLabel = (params: BlrFormLabelType) => BlrFormLabelRenderFunction(params);

BlrFormLabel.storyName = 'BlrFormLabel';

BlrFormLabel.args = {
  theme: 'Light',
  labelText: 'Test',
  labelAppendix: 'added',
  labelSize: 'md',
  forValue: 'Richard',
  variant: 'label',
};
