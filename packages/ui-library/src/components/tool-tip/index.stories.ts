import { html } from 'lit';

import { BlrToolTipRenderFunction, BlrToolTipType } from './index';
import { FormSizes, ToolTipVisibility, ToolTipPosition, ToolTipArrowPosition } from '../../globals/constants';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
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

export const BlrToolTip = ({
  size,
  theme,
  text,
  toolTipId,
  placement,
  visibility,
  toolTipArrow,
  customCss,
  itemRenderer,
}: BlrToolTipType) =>
  html`
    <div
      style="height:500px; display: flex; justify-content: center; flex-direction: row; align-content: center; align-items: center;"
    >
      <p style="padding: 0px 3px; margin: 0px;"></p>
      ${BlrToolTipRenderFunction({
        size,
        theme,
        text,
        toolTipId,
        placement,
        visibility,
        toolTipArrow,
        customCss,
        itemRenderer,
      })}
    </div>
  `;

BlrToolTip.storyName = 'BlrToolTip';

BlrToolTip.args = {
  theme: 'Light',
  size: 'md',
  text: 'Tooltip text comes here Tooltip text comes here',
  tooldTipId: 'my_text',
  placement: 'top',
  toolTipArrow: 'middle',
  customCss: 'customToolTipCss',
  itemRenderer: html` <p style="padding: 0px; margin: 0px; border-bottom: 1px dashed #ccc;">tool tip</p> `,
};
