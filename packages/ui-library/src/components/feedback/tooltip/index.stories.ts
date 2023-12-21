// this loads the all components instances and registers their html tags
import '../../../index';
import { html } from 'lit-html';
import { BlrTooltipRenderFunction, BlrTooltipType } from './index';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { TooltipPlacement } from '../../../globals/constants';

const sharedStyles = html`
  <style>
    .wrapper {
      margin: 1.25rem;
    }
  </style>
`;

export default {
  title: 'Design System/Web Components/Feedback/Tooltip',
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
        category: 'Content / Settings',
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
    viewMode: 'docs',
    layout: 'padded',
    docs: {
      description: {
        component: `
  <Markdown>
  Tooltip is triggered by hovering the mouse cursor over the element. It is designed to be unobtrusive and usually consist
  of a short snippet of text. Tooltip component utilizes Floating UI library for granular positioning and interactions
  based on user events.
  
  - [**Appearance**](#appearance)
    - [**Placement**](#placement)
    - [**Elevation**](#elevation)  
    - [**Has Arrow**](#has-arrow)
    - [**Offset**](#offset)
  - [**Content / Settings**](#content--settings)
    - [**Message**](#message)
  - [**Content / Settings**](#content--settings)
    - [**Message**](#message)
  - [**Dependencies**](#dependencies)
    - [**Tooltip Bubble**](#tooltip-bubble)
  </Markdown>
`,
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A126744&mode=dev',
    },
  },
};

export const Tooltip = (params: BlrTooltipType) => html`<div
  style="height: 300px;  margin: 1.25rem; width: 300px; display: flex; justify-content: center; align-items: center; margin: auto;"
>
  ${BlrTooltipRenderFunction(
    params,
    html`<div style="height: 100px; width: 100px; background-color: lightblue"></div>`
  )}
</div>`;

const defaultParams: BlrTooltipType = {
  theme: 'Light',
  placement: 'top',
  elevation: true,
  offset: 4,
  hasArrow: true,
  message: 'Tooltip text comes here Tooltip text comes here',
};

Tooltip.args = defaultParams;

/**
 * ## Appearance
 * ### Placement
 * The Tooltip component can be positioned in any of the following placements: top, top-start, top-end, right, right-start, right-end, bottom, bottom-start, bottom-end, left, left-start, and left-end.
 */

export const Placement = () => {
  return html`
    ${sharedStyles}

    <div class="wrapper">
      ${Tooltip({
        ...defaultParams,
      })}
    </div>
    <div class="wrapper">
      ${Tooltip({
        ...defaultParams,
        placement: 'top-start',
      })}
      <div class="wrapper">
        ${Tooltip({
          ...defaultParams,
          placement: 'top-end',
        })}
      </div>
      <div class="wrapper">
        ${Tooltip({
          ...defaultParams,
          placement: 'right',
        })}
      </div>
      <div class="wrapper">
        ${Tooltip({
          ...defaultParams,
          placement: 'right-start',
        })}
      </div>
      <div class="wrapper">
        ${Tooltip({
          ...defaultParams,
          placement: 'right-end',
        })}
      </div>
      <div class="wrapper">
        ${Tooltip({
          ...defaultParams,
          placement: 'bottom',
        })}
      </div>
      <div class="wrapper">
        ${Tooltip({
          ...defaultParams,
          placement: 'bottom-start',
        })}
      </div>
      <div class="wrapper">
        ${Tooltip({
          ...defaultParams,
          placement: 'bottom-end',
        })}
      </div>
      <div class="wrapper">
        ${Tooltip({
          ...defaultParams,
          placement: 'left',
        })}
      </div>
      <div class="wrapper">
        ${Tooltip({
          ...defaultParams,
          placement: 'left-start',
        })}
      </div>
      <div class="wrapper">
        ${Tooltip({
          ...defaultParams,
          placement: 'left-end',
        })}
      </div>
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
    })}
    ${Tooltip({
      ...defaultParams,
      elevation: false,
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
    })}
    ${Tooltip({
      ...defaultParams,
      hasArrow: false,
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
      })}
    </div>

    ${Tooltip({
      ...defaultParams,
      offset: 20,
      placement: 'right',
    })}
    ${Tooltip({
      ...defaultParams,
      offset: 40,
      placement: 'right',
    })}
  `;
};

/**
 * ## Content / Settings
 * ### Message
 * The Tooltip component can incorporate a message.
 */
export const Message = () => {
  return html`
    ${sharedStyles}
    ${Tooltip({
      ...defaultParams,
    })}
  `;
};

Message.story = { name: ' ' };

/**
 * ## Dependencies
 * ### Tooltip Bubble
 * The Tooltip component makes use of the Tooltip Bubble component. For more information have a look at the [Tooltip Bubble](?path=/docs/design-system-web-components-feedback-tooltip-tooltipbubble--docs) component.
 */

export const TooltipBubble = () => {
  return html`
    ${sharedStyles}
    ${Tooltip({
      ...defaultParams,
    })}
  `;
};

TooltipBubble.story = { name: ' ' };
