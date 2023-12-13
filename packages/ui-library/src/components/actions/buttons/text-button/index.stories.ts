/* eslint-disable no-console */
import { html } from 'lit';
import { BlrTextButtonType, BlrTextButtonRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionSizes, ActionVariants, IconPositionVariant, ButtonDisplayOptions } from '../../../../globals/constants';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

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
  size: 'md',
  label: 'Label-text',
  hasIcon: true,
  iconPosition: 'leading',
  icon: 'blr360',
  loading: false,
  disabled: false,
  buttonId: 'buttonId',
  loadingStatus: 'Loading',
  buttonDisplay: 'inline-block',
};

export default {
  title: 'Design System/Web Components/Actions/Buttons/Text Button',
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
      name: 'sizeVariant',
      description: 'Choose size  of the component.',
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
      options: ButtonDisplayOptions,
      control: { type: 'select' },
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
      description: 'Select an icon which is displayed inside of the input.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasIcon', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    iconPosition: {
      name: 'iconPosition',
      description: 'Choose the position of the icons within the tabs.',
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
        'Choose if component is disabled. Prevents the user to select or change the value of this component.   ',
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
      name: 'textButtonId',
      description: 'Unique identifier for this component.',
      table: {
        category: 'Technical Attributes',
      },
    },
    href: {
      name: 'href',
      description: "Enter the link's destination with the href attribute.",
      table: {
        category: 'Technical Attributes',
      },
    },
    target: {
      name: 'target',
      description: 'Choose where to open the linked document with the target attribute.',
      table: {
        category: 'Technical Attributes',
      },
    },
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
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: `<Markdown>
Text Button represents a clickable button that typically displays text rather than icons or symbols. The main feature of a Text Button is the text label, which communicates the button's action or function to the user.
<br>
- [**Appearance**](#appearance)
 - [**Variant**](#variant)
 - [**Size-Variant**](#size-variant)
- [**States**](#states)
 - [**Disabled**](#disabled)
- [**Dependencies**](#disabled)
 - [**Icon**](#icon)
 - [**Loader**](#loader)
</Markdown>`,
      },
    },
  },
};

//Main Component for Text Button
export const BlrTextButton = (params: BlrTextButtonType) => BlrTextButtonRenderFunction(params);
BlrTextButton.storyName = 'Text Button';
const args: BlrTextButtonType = {
  theme: 'Light',
  variant: 'primary',
  size: 'md',
  label: 'Label-text',
  hasIcon: true,
  iconPosition: 'leading',
  icon: 'blr360',
  loading: false,
  disabled: false,
  buttonId: 'buttonId',
  loadingStatus: 'Loading',
  buttonDisplay: 'inline-block',
};
BlrTextButton.args = args;

//disabledArgTypesTable to deactivate the controls-Panel for a story in storybook
const argTypesToDisable = [
  'theme',
  'arialabel',
  'variant',
  'size',
  'label',
  'hasIcon',
  'iconPosition',
  'icon',
  'loading',
  'disabled',
  'buttonId',
  'loadingStatus',
  'buttonDisplay',
  'onClick',
  'onBlur',
  'onFocus',
  'href',
  'target',
];
const generateDisabledArgTypes = (argTypes: string[]) => {
  const disabledArgTypes = {};
  argTypes.forEach((argType: string) => {
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
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
          variant: 'primary',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          variant: 'secondary',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          variant: 'cta',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          variant: 'silent',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          variant: 'destructive',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          variant: 'encourage',
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
          size: 'xs',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          size: 'sm',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          size: 'md',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          size: 'lg',
          hasIcon: false,
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          size: 'xl',
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
          iconPosition: 'leading',
        })}
        ${BlrTextButtonRenderFunction({
          ...defaultParams,
          hasIcon: true,
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
//Button as link
/**
 *     Button as link
 * The Text Button component can not be used as a link out of the box and we generally do not recommend to use a button as a link. However, if you still want to use the component as a link, just wrap an <a>-tag around the component, which has a href and a target property.
 */
