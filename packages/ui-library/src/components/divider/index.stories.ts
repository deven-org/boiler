import { html } from 'lit-html';
import { BlrDividerRenderFunction, BlrDividerType } from './index';
import { DividerVariations } from '../../globals/constants';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/BlrDivider',
  argTypes: {
    dividerDirectionVariant: {
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
  ${params.dividerDirectionVariant === 'vertical'
    ? html`<div style="height: 100px; display: inline-block;">${BlrDividerRenderFunction(params)}</div> `
    : html` <div style="width: 100%; display: inline-block;">${BlrDividerRenderFunction(params)}</div>`}
`;

BlrDivider.storyName = 'BlrDivider';

const args: BlrDividerType = {
  theme: 'Light',
};

BlrDivider.args = args;
