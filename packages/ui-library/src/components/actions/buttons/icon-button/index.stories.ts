/* eslint-disable no-console */
import { html } from 'lit';
import { BlrIconButtonType, BlrIconButtonRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, ActionSizes } from '../../../../globals/constants';
import { Themes } from '../../../../foundation/_tokens-generated/index.themes';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .wrapper {
      display: flex;
      justify-content: center;
    }
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
      description: 'Choose size of the component.',
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
  },
  parameters: {
    viewMode: 'docs',
    docs: {
      description: {
        component: `<div>
<p>Text Button represents a clickable button that typically displays text rather than icons or symbols. The main feature of a Text Button is the text label, which communicates the button's action or function to the user.
</p>
 <ul>
        <li> <a href="/docs/design-system-web-components-actions-buttons-icon-button--docs"><strong>Docs</strong></a></li>
        <li> <strong>Appearance</strong>
            <ul>
                <li> <a href="#variant"><strong>Variant</strong></a></li>
                <li> <a href="#size-variant"><strong>Size Variant</strong></a></li>
            </ul>
        </li>
         <li> <strong>States</strong>
            <ul>
                <li> <a href="#disabled"><strong>Disabled</strong></a>
                </li>
            </ul>
        </li>
         <li> <strong>Dependencies</strong>
            <ul>
                <li> <a href="#icon"><strong>Icon</strong></a>
                </li>
                 <li> <a href="#loader"><strong>Loader</strong></a>
                </li>
            </ul>
        </li>
        </ul>
        </div>`,
      },
    },
  },
};
export const BlrIconButton = (params: BlrIconButtonType) => BlrIconButtonRenderFunction(params);
BlrIconButton.storyName = 'Icon Button';

const args: BlrIconButtonType = {
  theme: 'Light',
  variant: 'primary',
  size: 'md',
  arialabel: 'Icon Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  icon: 'blr360',
  loading: false,
  disabled: false,
  buttonId: 'iconButtonId',
  loadingStatus: 'Loading',
};
BlrIconButton.args = args;

const defaultParams: BlrIconButtonType = {
  theme: 'Light',
  variant: 'primary',
  size: 'md',
  arialabel: 'Icon Button',
  onClick: () => console.log('onClick'),
  onBlur: () => console.log('onBlur'),
  icon: 'blr360',
  loading: false,
  disabled: false,
  buttonId: 'iconButtonId',
  loadingStatus: 'Loading',
};
//Appearance / Variant / SizeVariant
/**
 * The Icon Button component comes in 6 variants: cta, primary, secondary, silent, destructive and encourage.
 */
export const Variant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
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
    </div>
  `;
};
Variant.storyName = 'Variant';
/**
 * The Icon Button component comes in 5 sizes: XS, SM, MD, LG and XL.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
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
    </div>
  `;
};
// States Disabled
/**
 * Disabled
 * The Icon Button component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-icon-button">
        ${BlrIconButtonRenderFunction({
          ...defaultParams,
          disabled: true,
        })}
      </div>
    </div>
  `;
};

//Dependencies Icon / Loader
/**
 * The Icon Button component makes use of the Icon component. For more information have a look at the [Icon](/docs/design-system-web-components-ui-icon--docs) component.
 */
export const Icon = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-icon-button">
        ${BlrIconButtonRenderFunction({
          ...defaultParams,
          icon: 'blr360',
        })}
      </div>
    </div>
  `;
};
/**
 * The Icon Button uses the Loader component in its loading state to inform users that the action they have taken is in progress. For more information have a look at the [Loader](/docs/design-system-web-components-feedback-loader--docs) component.
 */
export const Loader = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <div class="stories-icon-button">
        ${BlrIconButtonRenderFunction({
          ...defaultParams,
          loading: true,
        })}
      </div>
    </div>
  `;
};
