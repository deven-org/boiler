import { html } from 'lit-html';
import { BlrToolTipRenderFunction, BlrToolTipType } from './index';
import { ToolTipVisibility, ToolTipPosition, ToolTipArrowPosition } from '../../globals/constants';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/BlrToolTip',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
    placement: {
      options: ToolTipPosition,
      control: { type: 'select' },
    },
    visibility: {
      options: ToolTipVisibility,
      control: { type: 'select' },
    },
    toolTipArrow: {
      options: ToolTipArrowPosition,
      control: { type: 'select' },
    },
  },
};

export const BlrToolTip = (params: BlrToolTipType) =>
  html`
    <div
      style="height:500px; display: flex; justify-content: center; flex-direction: row; align-content: center; align-items: center;"
    >
      <p style="padding: 0px 3px; margin: 0px;"></p>
      ${BlrToolTipRenderFunction(params)}
    </div>
  `;

BlrToolTip.storyName = 'BlrToolTip';

const args: BlrToolTipType = {
  theme: 'Light',
  text: 'Tooltip text comes here Tooltip text comes here',
  placement: 'right',
  toolTipArrow: 'middle',
  elevation: true,
  customCss: 'customToolTipCss',
  visibility: 'onLoad',
  itemRenderer: html` <p style="padding: 0px; margin: 0px; border-bottom: 1px dashed #ccc;">tool tip</p> `,
};

BlrToolTip.args = args;
