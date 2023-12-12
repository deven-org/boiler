import { html } from 'lit';
import { BlrTooltipBubbleRenderFunction, BlrTooltipBubbleType } from '.';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';
import { FormSizes } from '../../../../globals/constants';

export default {
  title: 'Design System/Web Components/Feedback/Tooltip/TooltipBubble',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
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
  text: 'Tooltip text comes here Tooltip text comes here',
  size: 'md',
  visible: true,
  static: true,
};

BlrTooltipBubble.args = args;
