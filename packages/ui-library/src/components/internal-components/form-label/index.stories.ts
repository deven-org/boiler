/* eslint-disable no-console */
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
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrFormLabel = ({ labelText, labelAppendix, labelSize, forValue }: BlrFormLabelType) =>
  BlrFormLabelRenderFunction({ labelText, labelAppendix, labelSize, forValue });

BlrFormLabel.storyName = 'BlrFormLabel';

BlrFormLabel.args = {
  labelText: 'Test',
  labelAppendix: 'added',
  labelSize: 'md',
  forValue: 'Richard',
};
