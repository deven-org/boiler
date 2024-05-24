/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrButtonTextType } from './index';
import { BlrButtonTextRenderFunction } from './renderFunction';
import { PureIconKeys } from '@boiler/icons';
import '../../index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { ActionVariants, ActionSizes, ButtonDisplayOptions, IconPositionVariant } from '../../globals/constants';
// this loads the all components instances and registers their html tags

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .wrapper {
      display: flex;
      justify-content: center;
    }
    .stories-buttontext {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
`;

const defaultParams: BlrButtonTextType = {
  theme: 'Light',
  variant: 'primary',
  sizeVariant: 'md',
  label: 'Label-text',
  hasIcon: true,
  icon: 'blr360',
  iconPosition: 'leading',
  disabled: false,
  loading: false,
  buttonTextId: 'buttonTextId',
  buttonDisplay: 'inline-block',
};

export default {
  title: 'Components/Button Text',
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
      description: 'Select size of the component.',
      options: ActionSizes,
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
    buttonDisplay: {
      description: 'Choose if button should fill its parent container or hug its content.',
      options: ButtonDisplayOptions,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    //Content / Settings
    label: {
      description: 'Enter string used as label text.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Content / Settings',
      },
    },
    hasIcon: {
      description: 'Choose if component has an icon.',
      defaultValue: true,
      control: {
        type: 'boolean',
      },
      table: {
        category: 'Content / Settings',
      },
    },
    icon: {
      description: 'Select an icon which is displayed next to the label.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasIcon', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    iconPosition: {
      description: 'Choose the position of the icon next to the label.',
      options: IconPositionVariant,
      control: { type: 'select' },
      if: { arg: 'hasIcon', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    //States
    disabled: {
      description:
        'Choose if component is disabled. Prevents the user to select or change the value of this component.',
      defaultValue: false,
      table: {
        category: 'States',
      },
    },
    loading: {
      name: 'loading',
      description: 'Choose if the component is loading.',
      defaultValue: false,
      table: {
        category: 'States',
      },
    },
    //Technical attributes
    buttonTextId: {
      description: 'Unique identifier for this component.',
      table: {
        category: 'Technical Attributes',
      },
    },
    // Events
    blrClick: {
      name: 'blrClick',
      description: 'Fires when the component is clicked.',
      action: 'blrClick',
      table: {
        category: 'Events',
      },
    },
    blrFocus: {
      name: 'blrFocus',
      description: 'Fires when the component is focused.',
      action: 'blrFocus',
      table: {
        category: 'Events',
      },
    },
    blrBlur: {
      name: 'blrBlur',
      description: 'Fires when the component lost focus.',
      action: 'blrBlur',
      table: {
        category: 'Events',
      },
    },
  },
  parameters: {
    badges: ['New'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=705%3A1815&mode=dev',
    },
    viewMode: 'docs',
    docs: {
      description: {
        component: `<markdown>
Button Text represents a clickable button that typically displays text rather than icons or symbols. The main feature of a Button Text is the text label, which communicates the button's action or function to the user.
 
 **NOTE**<br>
 The Button Text component can not be used as a link out of the box and we generally do not recommend to use a button as a link. However, if you still want to use the component as a link, just wrap an <a>-tag around the component, which has a href and a target property.
<br>
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

//Main Component for Button Text
export const BlrButtonText = (params: BlrButtonTextType) => BlrButtonTextRenderFunction(params);
BlrButtonText.storyName = 'Button Text';
BlrButtonText.args = defaultParams;

//disabledArgTypesTable to deactivate the controls-Panel for a story in storybook
const argTypesToDisable = [
  'theme',
  'variant',
  'sizeVariant',
  'label',
  'hasIcon',
  'iconPosition',
  'icon',
  'loading',
  'disabled',
  'buttonTextId',
  'buttonDisplay',
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

//All Stories
//Appearance Variant
/**
 * ## Appearance
 * ### Variant
 * The Button Text component comes in 6 variants: cta, primary, secondary, silent, destructive and encourage.
 */
export const Variant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-buttontext">
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          variant: 'cta',
          label: 'Cta',
          hasIcon: false,
        })}
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          variant: 'primary',
          label: 'Primary',
          hasIcon: false,
        })}
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          variant: 'secondary',
          label: 'Secondary',
          hasIcon: false,
        })}
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          variant: 'silent',
          label: 'Silent',
          hasIcon: false,
        })}
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          variant: 'destructive',
          label: 'Destructive',
          hasIcon: false,
        })}
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          variant: 'encourage',
          label: 'Encourage',
          hasIcon: false,
        })}
      </div>
    </div>
  `;
};
Variant.argTypes = {
  ...disabledArgTypes,
};
Variant.story = { name: ' ' };
//Appearance Size Variant
/**
 * The Button Text component comes in 5 sizes: XS, SM, MD, LG and XL.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-buttontext">
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          sizeVariant: 'xs',
          label: 'Button XS',
          hasIcon: false,
        })}
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          sizeVariant: 'sm',
          label: 'Button SM',
          hasIcon: false,
        })}
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          sizeVariant: 'md',
          label: 'Button MD',
          hasIcon: false,
        })}
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          sizeVariant: 'lg',
          label: 'Button LG',
          hasIcon: false,
        })}
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          sizeVariant: 'xl',
          label: 'Button XL',
          hasIcon: false,
        })}
      </div>
    </div>
  `;
};
SizeVariant.argTypes = {
  ...disabledArgTypes,
};

//States
/**
 * ## States
 * Apart from states like rest, hover, pressed and focus, the Button Text component can also be disabled or loading.
 * ### Disabled
 * The Button Text component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-buttontext">
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          disabled: true,
          label: 'Disabled',
          hasIcon: false,
        })}
      </div>
    </div>
  `;
};
Disabled.argTypes = {
  ...disabledArgTypes,
};
Disabled.story = {
  name: ' ',
};
//Dependencies Icon / Loader
/**
 * ## Dependencies
 * ### Icon
 * The Button Text component can display a leading or trailing icon next to the label. For more information have a look at the [Icon](?path=/docs/components-icon--docs) component.
 */

export const Icon = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-buttontext">
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          hasIcon: true,
          label: 'Leading icon',
          iconPosition: 'leading',
        })}
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          hasIcon: true,
          label: 'Trailing icon',
          iconPosition: 'trailing',
        })}
      </div>
    </div>
  `;
};
Icon.argTypes = {
  ...disabledArgTypes,
};
Icon.story = { name: ' ' };
/**
 * The Button Text uses the Loader component in its loading state to inform users that the action they have taken is in progress. For more information have a look at the [Loader](?path=/docs/components-loader--docs) component.
 */
export const Loader = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-buttontext">
        ${BlrButtonTextRenderFunction({
          ...defaultParams,
          loading: true,
        })}
      </div>
    </div>
  `;
};
Loader.argTypes = {
  ...disabledArgTypes,
};
