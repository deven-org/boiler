import { html } from 'lit';
import { BlrTooltipBubbleType } from '.';
import { BlrTooltipBubbleRenderFunction } from './renderFunction';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Feedback/Tooltip/TooltipBubble',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A126744&mode=dev',
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
