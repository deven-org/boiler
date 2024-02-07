/* eslint-disable no-console */
import { html } from 'lit';
import type { BlrIconButtonType } from './index';

import { BlrIconButtonRenderFunction } from './renderFunction';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, ActionSizes } from '../../../../globals/constants';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

// this loads the all components instances and registers their html tags
import '../../../../index';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .stories-icon-button {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1.25rem;
    }
  </style>
`;

//disabledArgTypesTable to deactivate the controls-Panel for a story in storybook
const argTypesToDisable = [
  'theme',
  'variant',
  'sizeVariant',
  'icon',
  'disabled',
  'loading',
  'readonly',
  'required',
  'iconButtonId',
  'hasError',
  'errorMessage',
  'errorIcon',
  'arialabel',
  'name',
  'onChange',
  'onFocus',
  'onBlur',
];
const generateDisabledArgTypes = (argTypes: string[]) => {
  const disabledArgTypes = {};
  argTypes.forEach((argType: string) => {
    // @ts-expect-error todo
    disabledArgTypes[argType] = {
      table: {
        disable: true,
      },
    };
  });
  return disabledArgTypes;
};
const disabledArgTypes = generateDisabledArgTypes(argTypesToDisable);

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
    sizeVariant: {
      options: ActionSizes,
      description: 'Select size of the component.',
      control: { type: 'select' },
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
    iconButtonId: {
      description: 'Unique identifier for this component.',
      table: {
        category: 'Technical Attributes',
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
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A106388&mode=dev',
    },
    layout: 'centered',
    viewMode: 'docs',
    docs: {
      description: {
        component: `<markdown>
An icon component typically displays a small, visually recognizable graphic or symbol that represents a particular function, object, or concept.

**NOTE**<br>
The Icon Button component can not be used as a link out of the box and we generally do not recommend to use a button as a link. However, if you still want to use the component as a link, just wrap an <a>-tag around the component, which has a href and a target property.
- [**Appearance**](#appearance)
 - [**Variant**](#variant) 
 - [**Size Variant**](#size-variant) 
- [**States**](#states)
 - [**Disabled**](#disabled) 
- [**Dependencies**](#dependencies)
 - [**Icon**](#icon) 
 - [**Loader**](#loader)  
        </markdown>`,
      },
    },
  },
};
export const BlrIconButton = (params: BlrIconButtonType) => BlrIconButtonRenderFunction(params);
BlrIconButton.storyName = 'Icon Button';

const defaultParams: BlrIconButtonType = {
  theme: 'Light',
  variant: 'primary',
  sizeVariant: 'md',
  icon: 'blr360',
  disabled: false,
  loading: false,
  arialabel: 'Icon Button',
  iconButtonId: 'iconButtonId',
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
        variant: 'cta',
      })}
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
Variant.story = { name: ' ' };
Variant.argTypes = {
  ...disabledArgTypes,
};
/**
 * The Icon Button component comes in 5 sizes: XS, SM, MD, LG and XL.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="stories-icon-button">
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        sizeVariant: 'xs',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        sizeVariant: 'sm',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        sizeVariant: 'md',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        sizeVariant: 'lg',
      })}
      ${BlrIconButtonRenderFunction({
        ...defaultParams,
        sizeVariant: 'xl',
      })}
    </div>
  `;
};
SizeVariant.argTypes = {
  ...disabledArgTypes,
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
Disabled.argTypes = {
  ...disabledArgTypes,
};
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
Icon.argTypes = {
  ...disabledArgTypes,
};

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
Loader.argTypes = {
  ...disabledArgTypes,
};
