/* eslint-disable no-console */
import { html } from 'lit';
import type { BlrButtonIconType } from './index';
import { BlrButtonIconRenderFunction } from './renderFunction';
import { PureIconKeys } from '@boiler/icons';
// this loads the all components instances and registers their html tags
import '../../index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { ActionVariants, ActionSizes } from '../../globals/constants';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .stories-button-icon {
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
  'buttonIconId',
  'hasError',
  'errorMessage',
  'errorIcon',
  'arialabel',
  'name',
  'blrClick',
  'blrBlur',
  'blrFocus',
];

const generateDisabledArgTypes = (argTypes: string[]) => {
  const disabledArgTypes = {};
  argTypes.forEach((argType: string) => {
    disabledArgTypes[argType] = {
      table: {
        disable: true,
      },
    };
  });
  return disabledArgTypes;
};
const disabledArgTypes = generateDisabledArgTypes(argTypesToDisable);

//Main Showcase Storybook ButtonIcon, main argType Table
export default {
  title: 'Components/Button Icon',
  argTypes: {
    //Appearance
    variant: {
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
      description: 'Select the icon of the component.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      table: {
        category: 'Content / Settings',
      },
    },
    //States
    disabled: {
      description: 'Choose if component is disabled. Prevents the user to click or focus the component.',
      table: {
        category: 'States',
      },
    },
    loading: {
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
    buttonIconId: {
      description: 'Unique identifier for this component.',
      table: {
        category: 'Technical Attributes',
      },
    },
    // Events
    blrClick: {
      description: 'Fires when the component is clicked.',
      action: 'blrClick',
      table: {
        category: 'Events',
      },
    },
    blrFocus: {
      description: 'Fires when the component is focused.',
      action: 'blrFocus',
      table: {
        category: 'Events',
      },
    },
    blrBlur: {
      description: 'Fires when the component lost focus.',
      action: 'blrBlur',
      table: {
        category: 'Events',
      },
    },
  },
  parameters: {
    badges: ['Draft'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A106388&mode=dev',
    },
    layout: 'centered',
    viewMode: 'docs',
    docs: {
      description: {
        component: `<markdown>
Button Icon components are clickable buttons that display an icon or symbol instead of text. They are typically used to represent a specific action or function, such as sharing, printing, or saving.

**NOTE**<br>
The Button Icon component can not be used as a link out of the box and we generally do not recommend to use a button as a link. However, if you still want to use the component as a link, just wrap an <a>-tag around the component, which has a href and a target property.
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
export const BlrButtonIcon = (params: BlrButtonIconType) => BlrButtonIconRenderFunction(params);
BlrButtonIcon.storyName = 'Button Icon';

const defaultParams: BlrButtonIconType = {
  theme: 'Light',
  variant: 'primary',
  sizeVariant: 'md',
  icon: 'blr360',
  disabled: false,
  loading: false,
  arialabel: 'Button Icon',
  buttonIconId: 'buttonIconId',
};
BlrButtonIcon.args = defaultParams;

//Appearance / Variant / SizeVariant
/**
 * ## Appearance
 * ### Variant
 * The Button Icon component comes in 6 variants: cta, primary, secondary, silent, destructive and encourage.
 */
export const Variant = () => {
  return html`
    ${sharedStyles}
    <div class="stories-button-icon">
      ${BlrButtonIconRenderFunction({
        ...defaultParams,
        variant: 'cta',
      })}
      ${BlrButtonIconRenderFunction({
        ...defaultParams,
        variant: 'primary',
      })}
      ${BlrButtonIconRenderFunction({
        ...defaultParams,
        variant: 'secondary',
      })}
      ${BlrButtonIconRenderFunction({
        ...defaultParams,
        variant: 'silent',
      })}
      ${BlrButtonIconRenderFunction({
        ...defaultParams,
        variant: 'destructive',
      })}
      ${BlrButtonIconRenderFunction({
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
 * The Button Icon component comes in 5 sizes: XS, SM, MD, LG and XL.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="stories-button-icon">
      ${BlrButtonIconRenderFunction({
        ...defaultParams,
        sizeVariant: 'xs',
      })}
      ${BlrButtonIconRenderFunction({
        ...defaultParams,
        sizeVariant: 'sm',
      })}
      ${BlrButtonIconRenderFunction({
        ...defaultParams,
        sizeVariant: 'md',
      })}
      ${BlrButtonIconRenderFunction({
        ...defaultParams,
        sizeVariant: 'lg',
      })}
      ${BlrButtonIconRenderFunction({
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
 * The Button Icon component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="stories-button-icon">
      ${BlrButtonIconRenderFunction({
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
 * The Button Icon component makes use of the Icon component. For more information have a look at the [Icon](/docs/components-icon--docs) component.
 */
export const Icon = () => {
  return html`
    ${sharedStyles}
    <div class="stories-button-icon">
      ${BlrButtonIconRenderFunction({
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
 * The Button Icon uses the Loader component in its loading state to inform users that the action they have taken is in progress. For more information have a look at the [Loader](/docs/components-loader--docs) component.
 */
export const Loader = () => {
  return html`
    ${sharedStyles}
    <div class="stories-button-icon">
      ${BlrButtonIconRenderFunction({
        ...defaultParams,
        loading: true,
      })}
    </div>
  `;
};
Loader.argTypes = {
  ...disabledArgTypes,
};
