// this loads the all components instances and registers their html tags
import '../../index.js';
import { html } from 'lit-html';
import { BlrTooltipType } from './index.js';
import { BlrTooltipRenderFunction } from './renderFunction.js';
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { TooltipPlacement } from '../../globals/constants.js';

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
  title: 'Components/Tooltip',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    placement: {
      description:
        'Select preferred placement of the component to the related element. If the preferred placement is not in the viewport, the component will adjust the placement on its own.',
      options: TooltipPlacement,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    elevation: {
      description: 'Choose if the component should be elevated.',
      control: { type: 'boolean' },
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
    hasArrow: {
      description: 'Choose if component has an arrow, pointing to the related element.',
      control: { type: 'boolean' },
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
  Tooltip is triggered by hovering the mouse cursor over the element. It is designed to be unobtrusive and usually consist
  of a short snippet of text. Tooltip component utilizes [Floating UI](https://floating-ui.com/) library for granular positioning and interactions
  based on user events.
  
  - [**Appearance**](#appearance)
    - [**Placement**](#placement)
    - [**Elevation**](#elevation)  
    - [**Has Arrow**](#has-arrow)
    - [**Offset**](#offset)
  </markdown>
`,
      },
    },
  },
};

export const Tooltip = (params: BlrTooltipType) => html` <div class="container">
  ${BlrTooltipRenderFunction(params, html`<div class="blue-box"></div>`)}
</div>`;

const defaultParams: BlrTooltipType = {
  theme: 'Light',
  placement: 'top',
  elevation: true,
  hasArrow: true,
  offset: 4,
  message: 'Message-text',
};

Tooltip.args = defaultParams;

/**
 * ## Appearance
 * ### Placement
 * The Tooltip component can be positioned in any of the following placements: top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, and left-end. Via the placement prop you can select your preferred placement, which the component will display when the viewport allows it. If the preferred placement is not in the viewport, the component will adjust the placement on its own.
 */

export const Placement = () => {
  const tooltips: BlrTooltipType[] = [
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
      ${tooltips.map((tooltip) => html` <div class="wrapper">${Tooltip(tooltip)}</div> `)}
    </div>
  `;
};

Placement.story = { name: ' ' };

/**
With elevation, the Tooltip component can be given a lifted appearance with subtle shadows or kept flat for a more minimalist design. 
 */

export const Elevation = () => {
  return html`
    ${sharedStyles}
    ${Tooltip({
      ...defaultParams,
      message: 'With elevation',
    })}
    ${Tooltip({
      ...defaultParams,
      elevation: false,
      message: 'Without elevation',
    })}
  `;
};

/**
 * The Tooltip component can have a pointing arrow, directing the user's attention to the specific element, or appear as a self-contained box.
 */

export const HasArrow = () => {
  return html`
    ${sharedStyles}
    ${Tooltip({
      ...defaultParams,
      message: 'With arrow',
    })}
    ${Tooltip({
      ...defaultParams,
      hasArrow: false,
      message: 'Without arrow',
    })}
  `;
};

/**
 * The positioning of the Tooltip component can be adjusted with an offset from the associated element.
 */

export const Offset = () => {
  return html`
    ${sharedStyles}
 
      ${Tooltip({
        ...defaultParams,
        offset: 0,
        placement: 'right',
        message: 'Without offset',
      })}
    </div>

    ${Tooltip({
      ...defaultParams,
      offset: 50,
      placement: 'right',
      message: 'With offset',
    })}
    
  `;
};
