import { html } from 'lit';

import '../../../index';
import { BlrTooltipBubbleType } from '.';

import { BlrTooltipBubbleRenderFunction } from './renderFunction';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Components/Tooltip/Tooltip Bubble',
  argTypes: {
    theme: {
      options: Themes,
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
    message: {
      description: 'Enter the message the component should have.',
      control: { type: 'text' },
      table: {
        category: 'Content / Settings',
      },
    },
    static: {
      description:
        'Select if the component position should be static or dynamic when used inside the Tooltip component with Floating UI.',
      control: { type: 'boolean' },
      table: {
        category: 'Technical Attributes',
      },
    },
  },

  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A126744&mode=dev',
    },
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `
  <markdown>
  The Tooltip Bubble is a part of the Tooltip component. It incorporates essential features such as shape, pointing arrow, message content, elevation and visibility properties.
  
  - [**Appearance**](#appearance)
    - [**Elevation**](#elevation)  
    - [**Has Arrow**](#has-arrow)

  </markdown>
`,
      },
    },
  },
};

export const TooltipBubble = (params: BlrTooltipBubbleType) => html`<div style="position: relative; height: 100px;">
  ${BlrTooltipBubbleRenderFunction(params)}
</div>`;

const defaultParams: BlrTooltipBubbleType = {
  theme: 'Light',
  elevation: true,
  hasArrow: true,
  visible: true,
  message: 'Message-text',
  static: true,
};

TooltipBubble.args = defaultParams;

/**
 * ## Appearance
* ### Elevation
With elevation, the Tooltip Bubble component can be given a lifted appearance with subtle shadows or kept flat for a more minimalist design. 
 */

export const Elevation = () => {
  return html`
    ${TooltipBubble({
      ...defaultParams,
      message: 'With elevation',
    })}
    ${TooltipBubble({
      ...defaultParams,
      elevation: false,
      message: 'Without elevation',
    })}
  `;
};
Elevation.story = { name: ' ' };

/**
 * The Tooltip Bubble component can have a pointing arrow, directing the user's attention to the specific element, or appear as a self-contained box.
 */

export const HasArrow = () => {
  return html`
    ${TooltipBubble({
      ...defaultParams,
      message: 'With arrow',
    })}
    ${TooltipBubble({
      ...defaultParams,
      hasArrow: false,
      message: 'Without arrow',
    })}
  `;
};
