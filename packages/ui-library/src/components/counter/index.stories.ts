/* eslint-disable no-console */
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { CounterVariants, FormSizes } from '../../globals/constants';
import { html } from 'lit-html';
import { BlrCounterType } from './index';
import { BlrCounterRenderFunction } from './renderFunction';

// this loads the all components instances and registers their html tags
import '../../index';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .wrapper {
      padding: 1.25em;
    }
  </style>
`;

export default {
  title: 'Components/Counter',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    variant: {
      description: 'Choose variant of the component.',
      options: CounterVariants,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    sizeVariant: {
      description: 'Choose size of the component.',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    value: {
      description: 'Enter the value the component should hold.',
      table: {
        category: 'Content / Settings',
      },
    },
    maxValue: {
      description: 'Enter the max value the component should be able to hold.',
      table: {
        category: 'Content / Settings',
      },
    },
    arialabel: {
      name: 'ariaLabel',
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    badges: ['Draft'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A126743&mode=dev',
    },
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
Counter provides a visual representation of a numeric quantity and typically includes buttons or controls that allow users to increment or decrement the value.
- [**Appearance**](#appearance)
 - [**Variant**](#variant) 
 - [**Size Variant**](#size-variant) 

The Counter is intended to be used when creating new components. Currently it is used like this in the following components:

 - [**Text Area**](?path=/docs/components-text-area--docs)

It is not intended to use the Counter directly when creating new applications.
</Markdown>`,
      },
    },
  },
};

export const BlrCounter = (params: BlrCounterType) => BlrCounterRenderFunction(params);
BlrCounter.storyName = 'Counter';
const defaultParams: BlrCounterType = {
  theme: 'Light',
  variant: 'neutral',
  sizeVariant: 'md',
  value: 3,
  maxValue: 100,
};
BlrCounter.args = defaultParams;

/**
 * ## Appearance
 *
 * ### Variant
 * The Counter component comes in 3 variants: default, warn and error.
 */
export const Variant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="wrapper">
        ${BlrCounterRenderFunction({
          ...defaultParams,
        })}
      </div>
      <div class="wrapper">
        ${BlrCounterRenderFunction({
          ...defaultParams,
          variant: 'warn',
        })}
      </div>
      <div class="wrapper">
        ${BlrCounterRenderFunction({
          ...defaultParams,
          variant: 'error',
        })}
      </div>
    </div>
  `;
};
Variant.story = { name: ' ' };
/**
 * The Counter component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    ${FormSizes.map(
      (size) =>
        html`<div class="wrapper">
          ${BlrCounterRenderFunction({
            ...defaultParams,
            sizeVariant: size,
          })}
        </div>`
    )}
  `;
};
