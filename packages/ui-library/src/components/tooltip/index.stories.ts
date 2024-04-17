import { html } from 'lit';

import '../../index';
import { BlrTooltipType } from '.';

import { BlrTooltipRenderFunction } from './renderFunction';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

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
    badges: ['New'],
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
  Tooltip is triggered by hovering the mouse cursor over the element. It is designed to be unobtrusive and usually consist of a short snippet of text. To make this work technically the tooltip component can be combined with [Floating UI](https://floating-ui.com/) like shown on the example page [Tooltip using Floating UI](?path=/docs/examples-tooltip-using-floating-ui--docs).
  
  - [**Appearance**](#appearance)
    - [**Elevation**](#elevation)  
    - [**Has Arrow**](#has-arrow)

  </markdown>
`,
      },
    },
  },
};

export const Tooltip = (params: BlrTooltipType) => html`<div style="position: relative; height: 100px;">
  ${BlrTooltipRenderFunction(params)}
</div>`;

const defaultParams: BlrTooltipType = {
  theme: 'Light',
  elevation: true,
  hasArrow: true,
  visible: true,
  message: 'Message-text',
  static: true,
};

Tooltip.args = defaultParams;

/**
 * ## Appearance
* ### Elevation
With elevation, the Tooltip component can be given a lifted appearance with subtle shadows or kept flat for a more minimalist design. 
 */

export const Elevation = () => {
  return html`
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
Elevation.story = { name: ' ' };

/**
 * The Tooltip component can have a pointing arrow, directing the user's attention to the specific element, or appear as a self-contained box. [Floating UI](https://floating-ui.com/) can also be utilized to change the direction of the arrow and always point to the referenced element like shown on the example page [Tooltip using Floating UI](?path=/docs/examples-tooltip-using-floating-ui--docs).
 */

export const HasArrow = () => {
  return html`
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
