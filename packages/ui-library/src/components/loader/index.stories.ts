import { BlrLoaderType } from './index';
import { BlrLoaderRenderFunction } from './renderFunction';
import { html } from 'lit-html';
// this loads the all components instances and registers their html tags
import '../../index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { FeedbackVariants, FeedbackSizes } from '../../globals/constants';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .size-container {
      position: relative;
      width: 100px;
      height: 100px;
      margin: 0.5rem;
    }
  </style>
`;

//Default parameters for Loader component
const defaultParams: BlrLoaderType = {
  theme: 'Light',
  variant: 'default',
  sizeVariant: 'md',
};

export default {
  title: 'Components/Loader',
  argTypes: {
    //Appearance
    variant: {
      description: 'Choose variant of the component.',
      options: FeedbackVariants,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    sizeVariant: {
      description: 'Choose size of the component.',
      options: FeedbackSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
  },
  parameters: {
    badges: ['New'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A126742&mode=dev',
    },
    layout: 'centered',
    docs: {
      description: {
        component: `<markdown>
Loader’s primary purpose is to provide feedback to the user that the application has not frozen or become unresponsive but is actively processing data or performing an action.
- [**Appearance**](#appearance)
 - [**Variant**](#variant) 
 - [**Size Variant**](#size-variant) 
</markdown>`,
      },
    },
  },
};

//Main Component for Loader
export const BlrLoader = (params: BlrLoaderType) => BlrLoaderRenderFunction(params);
BlrLoader.storyName = 'Loader';
BlrLoader.args = defaultParams;

// All Stories
//Appearance Variant/ Size Variant
/**
 * ## Appearance
 * ### Variant
 * The Loader component comes in 2 variants: default and inverted. The inverted variant should be used to in cases the default variant does not have a good visibility.
 * #### Variant: Default
 */
export const Variant = () => {
  return html`
    ${sharedStyles}
    ${BlrLoaderRenderFunction({
      ...defaultParams,
      theme: 'Light',
      variant: 'default',
      sizeVariant: 'md',
    })}
  `;
};
Variant.story = { name: ' ' };
/**
 * #### Variant: Inverted
 */
export const Inverted = () => {
  return html`
    ${sharedStyles}
      ${BlrLoaderRenderFunction({
        ...defaultParams,
        variant: 'default',
        sizeVariant: 'md',
      })}
    </div>
  `;
};
Inverted.story = { name: ' ' };
Inverted.parameters = {
  backgrounds: {
    default: 'dark',
    values: [{ name: 'dark', value: 'hsla(216, 9%, 10%, 1)' }],
  },
};

/**
 * The Loader component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    ${FeedbackSizes.map(
      (size) =>
        html`<div class="size-container">
          ${BlrLoaderRenderFunction({
            ...defaultParams,
            sizeVariant: size,
          })}
        </div>`
    )}
  `;
};
