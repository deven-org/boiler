// this loads the all components instances and registers their html tags
import '../../index';
import { html } from 'lit-html';
import { BlrTooltipUsingFloatingUIType } from './index';
import { BlrTooltipUsingFloatingUIRenderFunction } from './renderFunction';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { TooltipPlacement } from '../../globals/constants';

const sharedStyles = html`
  <style>
    .wrapper {
      margin: 1.25rem;
      display: flex;
      flex-direction: column;
      flex-basis: 25%;
    }
    .container {
      height: 100px;
      margin: 30px auto 0;
      width: 200px;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    .tooltip-container {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
    }
    .blue-box {
      height: 50px;
      width: 100px;
      background-color: lightblue;
    }
    .label {
      font-family: Source Sans Pro, sans-serif;
      font-weight: 400;
      line-height: 1rem;
      font-size: 1rem;
      text-align: center;
    }
  </style>
`;

export default {
  title: 'Examples/Tooltip using Floating UI',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    placement: {
      description: 'Select placement of the component to the related element.',
      options: TooltipPlacement,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    offset: {
      description: 'Enter the offset between the tooltip and the related element.',
      control: { type: 'number' },
      table: {
        category: 'Appearance',
      },
    },
    message: {
      description: 'Enter the message the component should have.',
      control: { type: 'text' },
      table: {
        category: 'Content / Settings',
      },
    },
  },

  parameters: {
    badges: ['New'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A126744&mode=dev',
    },
    viewMode: 'docs',
    layout: 'padded',
    docs: {
      description: {
        component: `
  <markdown>
  This example page shows how the [Tooltip](?path=/docs/components-tooltip--docs) component can utilize [Floating UI](https://floating-ui.com/) to place it in reference to another element, which then controls the visibility, the arrow placement or the offset of the tooltip.
  
  - [**Appearance**](#appearance)
    - [**Placement**](#placement)
    - [**Offset**](#offset)
  </markdown>
`,
      },
    },
  },
};

export const TooltipUsingFloatingUI = (params: BlrTooltipUsingFloatingUIType) => html` <div class="container">
  ${BlrTooltipUsingFloatingUIRenderFunction(params, html`<div class="blue-box"></div>`)}
</div>`;

const defaultParams: BlrTooltipUsingFloatingUIType = {
  theme: 'Light',
  placement: 'top',
  offset: 4,
  message: 'Message-text',
};

TooltipUsingFloatingUI.args = defaultParams;

/**
 * ## Appearance
 * ### Placement
 * The Tooltip component can be positioned in any of the following placements: top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, and left-end.
 */

export const Placement = () => {
  const tooltips: BlrTooltipUsingFloatingUIType[] = [
    { ...defaultParams, message: 'Top' },
    { ...defaultParams, placement: 'top-start', message: 'Top-start' },
    { ...defaultParams, placement: 'top-end', message: 'Top-end' },
    { ...defaultParams, placement: 'right', message: 'Right' },
    { ...defaultParams, placement: 'right-start', message: 'Right-start' },
    { ...defaultParams, placement: 'right-end', message: 'Right-end' },
    { ...defaultParams, placement: 'bottom', message: 'Bottom' },
    { ...defaultParams, placement: 'bottom-start', message: 'Bottom-start' },
    { ...defaultParams, placement: 'bottom-end', message: 'Bottom-end' },
    { ...defaultParams, placement: 'left', message: 'Left' },
    { ...defaultParams, placement: 'left-start', message: 'Left-start' },
    { ...defaultParams, placement: 'left-end', message: 'Left-end' },
  ];

  return html`
    ${sharedStyles}

    <div class="tooltip-container">
      ${tooltips.map((tooltip) => html` <div class="wrapper">${TooltipUsingFloatingUI(tooltip)}</div> `)}
    </div>
  `;
};

Placement.story = { name: ' ' };

/**
 * The positioning of the Tooltip component can be adjusted with an offset from the associated element.
 */

export const Offset = () => {
  return html`
    ${sharedStyles}
 
      ${TooltipUsingFloatingUI({
        ...defaultParams,
        offset: 0,
        placement: 'right',
        message: 'Without offset',
      })}
    </div>

    ${TooltipUsingFloatingUI({
      ...defaultParams,
      offset: 50,
      placement: 'right',
      message: 'With offset',
    })}
    
  `;
};
