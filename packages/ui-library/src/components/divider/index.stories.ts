import { html } from 'lit-html';
import { BlrDividerRenderFunction, BlrDividerType } from './index';
import { DividerVariations } from '../../globals/constants';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/UI/Divider',
  argTypes: {
    directionVariant: {
      options: DividerVariations,
      control: { type: 'select' },
    },
    theme: {
      options: Themes,
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

export const BlrDivider = (params: BlrDividerType) => html`
  <div style="width: 100%; height: 100px; display: inline-block;">${BlrDividerRenderFunction(params)}</div>
`;

BlrDivider.storyName = 'BlrDivider';

const args: BlrDividerType = {
  directionVariant: 'horizontal',
  theme: 'Light',
};

BlrDivider.args = args;
