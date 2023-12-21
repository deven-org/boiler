import { html } from 'lit';
import { BlrTooltipBubbleType } from '.';
import { BlrTooltipBubbleRenderFunction } from './renderFunction';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

const sharedStyles = html`
  <style>
    .wrapper {
      margin: 1.25rem;
    }
  </style>
`;

export default {
  title: 'Design System/Web Components/Feedback/Tooltip/TooltipBubble',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
    elevation: {
      description: 'Choose if the component should be elevated.',
      control: { type: 'boolean' },
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
    visible: {
      description: 'Toggles the visibility of the component.',
      control: { type: 'boolean' },
      table: {
        category: 'Appearance',
      },
    },
    static: {
      description:
        'Select if the component position should be static or dynamic when used inside the Tooltip component with Floating UI.',
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
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `
  <Markdown>
  The Tooltip Bubble component, distinguished from the Tooltip counterpart by its independence from the Floating UI library, incorporates essential features such as customizable shape, pointing arrow, message content, and visibility properties, serving as a crucial element primarily consumed by the Tooltip component, along with other components that don't require advanced floating UI features, such as, for example, the Slider component.
  
  - [**Appearance**](#appearance)
    - [**Elevation**](#elevation)  
    - [**Has Arrow**](#has-arrow)
  - [**Content / Settings**](#content--settings)
    - [**Message**](#message)
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

export const TooltipBubble = (params: BlrTooltipBubbleType) => html`<div style="position: relative; height: 200px;">
  ${BlrTooltipBubbleRenderFunction(params)}
</div>`;

const defaultParams: BlrTooltipBubbleType = {
  theme: 'Light',
  elevation: true,
  hasArrow: true,
  message: 'Tooltip text comes here Tooltip text comes here',
  visible: true,
  static: true,
};

TooltipBubble.args = defaultParams;

/**
 * ## Appearance
 * ### Elevation
 * With elevation, the Tooltip component can be given a lifted appearance with subtle shadows or kept flat for a more minimalist design.
 */

export const Elevation = () => {
  return html`
    ${sharedStyles}
    ${TooltipBubble({
      ...defaultParams,
    })}
    ${TooltipBubble({
      ...defaultParams,
      elevation: false,
    })}
  `;
};

Elevation.story = { name: ' ' };

/**
 * The Tooltip component can have a pointing arrow, directing the user's attention to the specific element, or appear as a self-contained box.
 */

export const HasArrow = () => {
  return html`
    ${sharedStyles}
    ${TooltipBubble({
      ...defaultParams,
    })}
    ${TooltipBubble({
      ...defaultParams,
      hasArrow: false,
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
    ${TooltipBubble({
      ...defaultParams,
    })}
  `;
};

Message.story = { name: ' ' };
