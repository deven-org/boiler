/* eslint-disable no-console */
import { html } from 'lit';
import { BlrIconButtonType, BlrIconButtonRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, ActionSizes } from '../../../../globals/constants';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .stories-icon-button {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
`;
//Main Showcase Storybook IconButton, main argType Table
export default {
  title: 'Design System/Web Components/Actions/Buttons/Icon Button',
  argTypes: {
    //Appearance
    variant: {
      name: 'variant',
      description: 'Select variant of the component.',
      options: ActionVariants,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    size: {
      options: ActionSizes,
      name: 'sizeVariant',
      description: 'Select size of the component.',
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
    // Content / Settings
    icon: {
      name: 'icon',
      description: 'Select the icon of the component.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      table: {
        category: 'Content / Settings',
      },
    },
    //States
    disabled: {
      name: 'disabled',
      description: 'Choose if component is disabled. Prevents the user to click or focus the component.',
      table: {
        category: 'States',
      },
    },
    loading: {
      name: 'loading',
      description: 'Choose if the component is loading.',
      table: {
        category: 'States',
      },
    },
    //Accessibility
    arialabel: {
      name: 'ariaLabel',
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        category: 'Accessibility',
      },
    },
    //Technical attributes
    buttonId: {
      name: 'buttonId',
      description: 'Unique identifier for this component.',
      table: {
        category: 'Technical Attributes',
      },
    },
    href: {
      name: 'href',
      description: "Enter the link's destination with the href attribute.",
      table: {
        disable: true,
      },
    },
    target: {
      name: 'target',
      description: 'Choose where to open the linked document with the target attribute.',
      table: {
        disable: true,
      },
    },
    // Events
    onChange: {
      name: 'onChange',
      description: 'Fires when the value changes.',
      action: 'onChange',
      table: {
        category: 'Events',
      },
    },
    onFocus: {
      name: 'onFocus',
      description: 'Fires when the component is focused.',
      action: 'onFocus',
      table: {
        category: 'Events',
      },
    },
    onBlur: {
      name: 'onBlur',
      description: 'Fires when the component lost focus.',
      action: 'onBlur',
      table: {
        category: 'Events',
      },
    },
    loadingStatus: {
      table: {
        disable: true,
      },
    },
  },
  parameters: {
    layout: 'centered',
    viewMode: 'docs',
    docs: {
      description: {
        component: `<Markdown>
An icon component typically displays a small, visually recognizable graphic or symbol that represents a particular function, object, or concept.
- [**Appearance**](#appearance)
 - [**Variant**](#variant) 
 - [**Size Variant**](#size-variant) 
- [**States**](#states)
 - [**Disabled**](#disabled) 
- [**Dependencies**](#dependencies)
 - [**Icon**](#icon) 
 - [**Loader**](#loader)  
        </Markdown>`,
      },
    },
  },
};
export const BlrIconButton = (params: BlrIconButtonType) => BlrIconButtonRenderFunction(params);
BlrIconButton.storyName = 'Icon Button';

const defaultParams: BlrIconButtonType = {
  variant: 'primary',
  size: 'md',
  theme: 'Light',
  icon: 'blr360',
  disabled: false,
  loading: false,
  arialabel: 'Icon Button',
  buttonId: 'iconButtonId',
  loadingStatus: 'Loading',
};
BlrIconButton.args = defaultParams;

//Appearance / Variant / SizeVariant
/**
 * ## Appearance
 * ### Variant
 * The Icon Button component comes in 6 variants: cta, primary, secondary, silent, destructive and encourage.
 */
export const Variant = () => {
  return html`
    ${sharedStyles}
    <div class="stories-icon-button">
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        variant: 'primary',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        variant: 'secondary',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        variant: 'cta',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        variant: 'silent',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        variant: 'destructive',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        variant: 'encourage',
      })}
    </div>
  `;
};
// eslint-disable-next-line storybook/no-redundant-story-name
Variant.story = { name: ' ' };
/**
 * The Icon Button component comes in 5 sizes: XS, SM, MD, LG and XL.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="stories-icon-button">
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        size: 'xs',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        size: 'sm',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        size: 'md',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        size: 'lg',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        size: 'xl',
      })}
    </div>
  `;
};
// States Disabled
/**
 * ## States
 * ### Disabled
 * The Icon Button component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="stories-icon-button">
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        disabled: true,
      })}
    </div>
  `;
};
Disabled.story = { name: ' ' };
//Dependencies Icon / Loader
/**
 * ## Dependencies
 * ### Icon
 * The Icon Button component makes use of the Icon component. For more information have a look at the [Icon](/docs/design-system-web-components-ui-icon--docs) component.
 */
export const Icon = () => {
  return html`
    ${sharedStyles}
    <div class="stories-icon-button">
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        icon: 'blr360',
      })}
    </div>
  `;
};
Icon.story = { name: ' ' };

/**
 * The Icon Button uses the Loader component in its loading state to inform users that the action they have taken is in progress. For more information have a look at the [Loader](/docs/design-system-web-components-feedback-loader--docs) component.
 */
export const Loader = () => {
  return html`
    ${sharedStyles}
    <div class="stories-icon-button">
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        loading: true,
      })}
    </div>
  `;
};
