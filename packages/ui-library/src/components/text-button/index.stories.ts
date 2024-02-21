/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTextButtonType } from './index';
import { BlrTextButtonRenderFunction } from './renderFunction';
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
    .stories-textbutton {
      display: flex;
      flex-wrap: wrap;
      flex-direction: column;
      gap: 1rem;
    }
  </style>
`;

const defaultParams: BlrTextButtonType = {
  theme: 'Light',
  variant: 'primary',
  sizeVariant: 'md',
  label: 'Label-text',
  hasIcon: true,
  icon: 'blr360',
  iconPosition: 'leading',
  disabled: false,
  loading: false,
  textButtonId: 'buttonId',
  buttonDisplay: 'inline-block',
};

export default {
  title: 'Components/Text Button',
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
      name: 'label',
      description: 'Enter string used as label text.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Content / Settings',
      },
    },
    hasIcon: {
      name: 'hasIcon',
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
      name: 'icon',
      description: 'Select an icon which is displayed next to the label.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasIcon', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    iconPosition: {
      name: 'iconPosition',
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
      name: 'disabled',
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
    textButtonId: {
      description: 'Unique identifier for this component.',
      table: {
        category: 'Technical Attributes',
      },
    },
    //Accessibility
    arialabel: {
      name: 'ariaLabel',
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        disable: true,
      },
    },
    // Events
    onClick: {
      name: 'onClick',
      description: 'Fires when the component is clicked.',
      action: 'onClick',
      table: {
        category: 'Events',
      },
    },
    onFocus: {
      name: 'onFocus',
      description: 'Fires when the component is focused.',
      action: 'onFocus',
      table: {
        disable: 'true',
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
  },
  parameters: {
    badges: ['Draft'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=705%3A1815&mode=dev',
    },
    viewMode: 'docs',
    docs: {
      description: {
        component: `<markdown>
Text Button represents a clickable button that typically displays text rather than icons or symbols. The main feature of a Text Button is the text label, which communicates the button's action or function to the user.
 
 **NOTE**<br>
 The Text Button component can not be used as a link out of the box and we generally do not recommend to use a button as a link. However, if you still want to use the component as a link, just wrap an <a>-tag around the component, which has a href and a target property.
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

//Main Component for Text Button
export const BlrTextButton = (params: BlrTextButtonType) => BlrTextButtonRenderFunction(params);
BlrTextButton.storyName = 'Text Button';
BlrTextButton.args = defaultParams;

//disabledArgTypesTable to deactivate the controls-Panel for a story in storybook
const argTypesToDisable = [
  'theme',
  'arialabel',
  'variant',
  'sizeVariant',
  'label',
  'hasIcon',
  'iconPosition',
  'icon',
  'loading',
  'disabled',
  'textButtonId',
  'buttonDisplay',
  'onClick',
  'onBlur',
  'onFocus',
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
 * The Text Button component comes in 6 variants: cta, primary, secondary, silent, destructive and encourage.
 */
export const Variant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textbutton">
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          variant: 'cta',
          label: 'Cta',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          variant: 'primary',
          label: 'Primary',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          variant: 'secondary',
          label: 'Secondary',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          variant: 'silent',
          label: 'Silent',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          variant: 'destructive',
          label: 'Destructive',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
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
 * The Text Button component comes in 5 sizes: XS, SM, MD, LG and XL.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textbutton">
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          sizeVariant: 'xs',
          label: 'Button XS',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          sizeVariant: 'sm',
          label: 'Button SM',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          sizeVariant: 'md',
          label: 'Button MD',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          sizeVariant: 'lg',
          label: 'Button LG',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
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
 * Apart from states like rest, hover, pressed and focus, the Text Button component can also be disabled or loading.
 * ### Disabled
 * The Text Button component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textbutton">
        ${BlrTextButtonRenderFunction({
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
 * The Text Button component can display a leading or trailing icon next to the label. For more information have a look at the [Icon](?path=/docs/design-system-web-components-ui-icon--docs) component.
 */

export const Icon = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textbutton">
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          hasIcon: true,
          label: 'Leading icon',
          iconPosition: 'leading',
        })}
        ${BlrTextButtonRenderFunction({
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
 * The Text Button uses the Loader component in its loading state to inform users that the action they have taken is in progress. For more information have a look at the [Loader](?path=/docs/design-system-web-components-feedback-loader--docs) component.
 */
export const Loader = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-textbutton">
        ${BlrTextButtonRenderFunction({
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
