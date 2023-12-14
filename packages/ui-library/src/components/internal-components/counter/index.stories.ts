/* eslint-disable no-console */
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { CounterVariants, FormSizes } from '../../../globals/constants';
import { BlrCounterRenderFunction, BlrCounterType } from './index';
import { html } from 'lit-html';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .wrapper {
      padding: 1.25em;
    }
  </style>
`;

export default {
  title: 'Design System/Web Components/Internal Components/Counter',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    variant: {
      description: 'Select variant of the component.',
      options: CounterVariants,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    size: {
      name: 'sizeVariant',
      description: 'Choose size of the component.',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    current: {
      name: 'value',
      description: 'Enter the value the component should hold.',
      table: {
        category: 'Content / Settings',
      },
    },
    max: {
      name: 'maxValue',
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
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
Counter provides a visual representation of a numeric quantity and typically includes buttons or controls that allow users to increment or decrement the value.
- [**Appearance**](#appearance)
 - [**Variant**](#variant) 
 - [**Size Variant**](#size-variant) 
</Markdown>`,
      },
    },
  },
};

export const BlrCounter = (params: BlrCounterType) => BlrCounterRenderFunction(params);
BlrCounter.storyName = 'Counter';
const defaultParams: BlrCounterType = {
  theme: 'Light',
  variant: 'default',
  size: 'md',
  current: 3,
  max: 100,
};
BlrCounter.args = defaultParams;

/**
 * ## Appearance
 *
 * ### Variant
 * The Counter component comes in 3 variants: default, warning and error.
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
            size: size,
          })}
        </div>`
    )}
  `;
};
