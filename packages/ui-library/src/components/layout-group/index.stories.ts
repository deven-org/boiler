/* eslint-disable no-console */
import { BlrLayoutGroupType, BlrLayoutGroupFunction } from './index';
import { BlrCheckboxRenderFunction } from '../checkbox';

export default {
  title: 'Design System/Web Components/BlrLayoutGroup',
  argTypes: {},
  parameters: {
    viewMode: 'docs',
  },
};

const testContent = BlrCheckboxRenderFunction({ label: 'Huhu', hasLabel: true, size: 'md', theme: 'Light' });

export const BlrLayoutGroup = (params: BlrLayoutGroupType) => BlrLayoutGroupFunction(params, testContent);

BlrLayoutGroup.storyName = 'BlrLayoutGroup';

const args: BlrLayoutGroupType = {
  label: 'Slotty the slotmachine',
};

BlrLayoutGroup.args = args;
