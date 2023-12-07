import { BlrLoaderType, BlrLoaderRenderFunction } from './index';
import { FeedbackSizes, FeedbackVariants } from '../../../globals/constants';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { html } from 'lit';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .size-container {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100px;
      height: 100px;
      margin: 0.5rem;
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
BlrLoader.args = defaultParams;

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
    ${BlrLoaderRenderFunction({
      ...defaultParams,
      variant: 'default',
      size: 'md',
      theme: 'Light',
      loadingStatus: 'Loading',
    })}
  `;
};
Variant.story = { name: ' ' };

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
            size: size,
          })}
        </div>`
    )}
  `;
};
