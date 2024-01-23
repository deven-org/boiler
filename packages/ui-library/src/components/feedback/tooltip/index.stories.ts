import { LitElement, html } from 'lit';

import { BlrTooltipType } from './index';
import { BlrTooltipRenderFunction } from './renderFunction';
import { ThemeType, Themes } from '../../../foundation/_tokens-generated/index.themes';
import { TooltipPlacement } from '../../../globals/constants';
import { tooltipPosition } from './tooltip-position';
import { customElement, property, query, state } from 'lit/decorators.js';
import { FormSizesType } from '../../../globals/types';
import { Placement as PlacementType } from '@floating-ui/dom';

// this loads the all components instances and registers their html tags
import '../../../index';
import { BlrTooltipBubbleRenderFunction } from '../../internal-components/tooltip-bubble/renderFunction';

export default {
  title: 'Design System/Web Components/Feedback/Tooltip',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
    placement: {
      options: TooltipPlacement,
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

export const BlrTooltip = (params: BlrTooltipType) => html`<div
  style="height: 400px; width: 400px; display: flex; justify-content: center; align-items: center; margin: auto;"
>
  ${BlrTooltipRenderFunction(
    params,
    html`<div style="height: 200px; width: 200px; background-color: lightblue"></div>`
  )}
</div>`;

export const BlrTooltipVirtualReference = (params: BlrTooltipType) => {
  return html` <div style="height: 400px; width: 400px">
    <virtual-reference
      theme=${params.theme}
      text=${params.message}
      placement=${params.placement}
      hasArrow=${params.hasArrow}
      elevation=${params.elevation}
      offset=${params.offset}
    ></virtual-reference>
  </div>`;
};

BlrTooltip.storyName = 'Tooltip';
BlrTooltipVirtualReference.storyName = 'Tooltip Virtual Reference';

const args: BlrTooltipType = {
  theme: 'Light',
  message: 'Tooltip text comes here Tooltip text comes here',
  placement: 'top',
  hasArrow: true,
  elevation: true,
  offset: 4,
};

BlrTooltip.args = args;
BlrTooltipVirtualReference.args = args;

@customElement('virtual-reference')
export class VirtualReference extends LitElement {
  @property() theme: ThemeType = 'Light';
  @property() size: FormSizesType = 'sm';
  @property() text!: string;
  @property() placement: PlacementType = 'top';
  @property() hasArrow = true;
  @property() elevation = true;
  @property() offset = 4;

  @state() protected visible = false;

  @query('blr-tooltip-bubble')
  protected _tooltipBubble!: HTMLElement;

  protected firstUpdated() {
    this.visible = false;

    document.addEventListener('mousemove', ({ clientX, clientY }) => {
      this.visible = true;

      const virtualReference = {
        getBoundingClientRect() {
          return {
            width: 0,
            height: 0,
            x: clientX,
            y: clientY,
            left: clientX,
            right: clientX,
            top: clientY,
            bottom: clientY,
          };
        },
      };

      tooltipPosition(virtualReference, this._tooltipBubble, this.placement, 4);
    });

    document.addEventListener('mouseleave', () => {
      this.visible = false;
    });
  }

  render() {
    return html`${BlrTooltipBubbleRenderFunction({
      theme: this.theme,
      message: this.text,
      hasArrow: this.hasArrow,
      visible: this.visible,
      elevation: this.elevation,
    })}`;
  }
}
