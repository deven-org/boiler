import { html } from 'lit-element';
import { BlrTooltipBubbleRenderFunction, BlrTooltipBubbleType } from '.';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Feedback/Tooltip/TooltipBubble',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
};

export const BlrTooltipBubble = (params: BlrTooltipBubbleType) => html`<div style="position: relative; height: 200px;">
  ${BlrTooltipBubbleRenderFunction(params)}
</div>`;

BlrTooltipBubble.storyName = 'Tooltip Bubble';

const args: BlrTooltipBubbleType = {
  theme: 'Light',
  message: 'Tooltip text comes here Tooltip text comes here',
  visible: true,
  static: true,
};

BlrTooltipBubble.args = args;
