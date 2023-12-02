import { BlrLoaderType, BlrLoaderRenderFunction } from './index';
import { FeedbackSizes, FeedbackVariants } from '../../../globals/constants';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { html } from 'lit';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .wrapper {
      display: flex;
      justify-content: center;
    }
    .stories-loader {
      /*display: flex;*/
      /*flex-wrap: wrap;*/
      /*flex-direction: column;*/
      /*gap: 1rem;*/
    }
    .size-container {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px; /* oder eine andere passende Größe */
      height: 100px; /* oder eine andere passende Größe */
      margin: 0.5rem; /* Abstand zwischen den Containern */
    }
  </style>
`;

//Default parameters for Loader component
const defaultParams: BlrLoaderType = {
  variant: 'default',
  size: 'md',
  theme: 'Light',
  loadingStatus: 'Loading',
};

export default {
  title: 'Design System/Web Components/Feedback/Loader',
  argTypes: {
    //Appearance
    variant: {
      options: FeedbackVariants,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    size: {
      name: 'sizeVariant',
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
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
Loader’s primary purpose is to provide feedback to the user that the application has not frozen or become unresponsive but is actively processing data or performing an action.
- [**Appearance**](#appearance)
 - [**Variant**](#variant) 
 - [**Size Variant**](#size-variant) 
</Markdown>`,
      },
    },
  },
};

//Main Component for Loader
export const BlrLoader = (params: BlrLoaderType) => BlrLoaderRenderFunction(params);
BlrLoader.storyName = 'Loader';
const args: BlrLoaderType = {
  variant: 'default',
  size: 'md',
  theme: 'Light',
  loadingStatus: 'Loading',
};
BlrLoader.args = args;

// All Stories
//Appearance Variant/ Size Variant
/**
 * ## Appearance
 * ###  Variant
 * The Loader component comes in 2 variants: default and inverted. The inverted variant should be used to in cases the default variant does not have a good visibility.
 */
export const Variant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-loader">
        <div>
          ${BlrLoaderRenderFunction({
            ...defaultParams,
            variant: 'default',
            size: 'md',
            theme: 'Light',
            loadingStatus: 'Loading',
          })}
        </div>
      </div>
    </div>
  `;
};
Variant.story = { name: ' ' };

/**
 * ###  Size Variant
 * The Loader component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-loader">
        ${FeedbackSizes.map(
          (size) =>
            html`<div class="size-container">
              ${BlrLoaderRenderFunction({
                ...defaultParams,
                size: size,
              })}
            </div>`
        )}
      </div>
    </div>
  `;
};
SizeVariant.story = { name: 'Size Variant' };
SizeVariant.story = { name: ' ' };
