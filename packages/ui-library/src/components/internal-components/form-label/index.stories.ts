/* eslint-disable no-console */
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { FormSizes, LabelVariants } from '../../../globals/constants';
import { BlrFormLabelRenderFunction, BlrFormLabelType } from './index';

export default {
  title: 'Design System/Web Components/Internal Components/FormLabel',
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
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125225&mode=dev',
    },
    viewMode: 'docs',
  },
};

export const BlrFormLabel = (params: BlrFormLabelType) => BlrFormLabelRenderFunction(params);

BlrFormLabel.storyName = 'FormLabel';

const args: BlrFormLabelType = {
  theme: 'Light',
  labelText: 'Test',
  labelAppendix: 'added',
  labelSize: 'md',
  forValue: 'Richard',
  variant: 'label',
};

BlrFormLabel.args = args;
