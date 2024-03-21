/* eslint-disable no-console */
import { BlrToggleSwitchType } from './index';
import { BlrToggleSwitchRenderFunction } from './renderFunction';
import { PureIconKeys } from '@boiler/icons';
import { FormSizes } from '../../globals/constants';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { html } from 'lit-html';
import '../../index';

const sharedStyles = html`
  <style>
    .stories-toggle-switch {
      display: flex;
      align-items: center;
      flex-direction: column;
      gap: 1.25em;
    }
  </style>
`;
const logEventType = (event: Event) => {
  console.log('storybook:story:logEventType', event.type);
};

const defaultParams: BlrToggleSwitchType = {
  theme: 'Light',
  sizeVariant: 'md',
  hasStateLabel: false,
  active: false,
  hasLabel: true,

  label: 'Label-text',
  onLabel: 'On-label-text',
  offLabel: 'Off-label-text',
  hasHint: false,
  hintMessage: 'This is a small hint',
  hintMessageIcon: 'blrInfo',
  disabled: false,
  readonly: false,
  arialabel: 'Toggle Switch',
  toogleSwitchId: 'toggle-switchId',
  name: 'toggle-switch-name',
  blrChange: logEventType,
  blrFocus: logEventType,
  blrBlur: logEventType,
};

export default {
  title: 'Components/Toggle Switch',
  argTypes: {
    sizeVariant: {
      description: 'Choose size of the component.',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    hasStateLabel: {
      description: 'Choose if the control has a state label.',
      options: { type: 'boolean' },
      if: { arg: 'hasLabel', eq: true },
      table: {
        category: 'Appearance',
      },
    },
    active: {
      description: 'Choose if component is active.',
      options: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    hasLabel: {
      description: 'Choose if component has a label.',
      options: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    hasHint: {
      description: 'Choose if component has a hint message.',
      options: { type: 'boolean' },
      if: { arg: 'hasLabel', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    hintMessage: {
      description: 'Enter string used used as hint message.',

      table: {
        category: 'Content / Settings',
      },
    },
    hintMessageIcon: {
      name: 'hintMessageIcon',
      description: 'Select an icon which is displayed in front of the hint message.',
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      if: { arg: 'hasHint', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },

    label: {
      description: 'Enter string used as label text.',
      if: { arg: 'hasLabel', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    onLabel: {
      description: 'Enter string used as on label text.',
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'hasStateLabel', eq: true },
    },
    offLabel: {
      description: 'Enter string used as off label text.',
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'hasStateLabel', eq: true },
    },
    disabled: {
      description:
        'Choose if component is disabled. Prevents the user to select or change the value of this component.',
      table: {
        category: 'States',
      },
    },
    toogleSwitchId: {
      description: 'Unique identifier for this component.',
      table: {
        category: 'Technical attributes',
      },
    },
    name: {
      description: 'For a < form > element, the name attribute is used as a reference when the data is submitted.',
      table: {
        category: 'Technical attributes',
      },
    },
    arialabel: {
      name: 'ariaLabel',
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        category: 'Accessibility',
      },
    },
    blrChange: {
      description: 'Fires when the value changes.',
      table: {
        category: 'Events',
      },
    },
    blrFocus: {
      description: 'Fires when the component is focused.',
      table: {
        category: 'Events',
      },
    },
    blrBlur: {
      description: 'Fires when the component lost focus.',
      table: {
        category: 'Events',
      },
    },
    readonly: {
      description: 'Choose if component is readonly. The user can select but not change the value of this component.',
      table: {
        category: 'States',
      },
    },
  },
  parameters: {
    badges: ['Draft'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125201&mode=dev',
    },
    layout: 'centered',
    docs: {
      description: {
        component: `<markdown>
Toggle Switch allows users to choose between two mutually exclusive states, such as on/off or yes/no. It is typically a small, rectangular button with two states, represented by different icons or labels.
They can also be used to control more complex features, such as the state of a system or the availability of a service.
- [**Appearance**](#appearance)
 - [**Size Variant**](#size-variant) 
 - [**Has State Label**](#has-state-label) 
- [**Content / Settings**](#content--settings)
 - [**Checked**](#checked) 
 - [**On Label**](#on-label) 
 - [**Off Label**](#off-label)  
- [**States**](#states)
 - [**Disabled**](#disabled) 
 - [**Readonly**](#readonly)
- [**Dependencies**](#dependencies)
 - [**Form Caption**](#form-caption)  
</markdown>
        `,
      },
    },
  },
};

export const ToggleSwitch = (params: BlrToggleSwitchType) => BlrToggleSwitchRenderFunction(params);
ToggleSwitch.args = defaultParams;

/**
 * ## Appearance
 * ### Size Variant
 * The Toggle Switch component comes in 3 sizes: SM, MD, LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        label: 'Toggle Switch SM',
        hasHint: false,
        sizeVariant: 'sm',
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        label: 'Toggle Switch MD',
        hasHint: false,
        sizeVariant: 'md',
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        label: 'Toggle Switch LG',
        hasHint: false,
        sizeVariant: 'lg',
      })}
    </div>
  `;
};
SizeVariant.story = { name: ' ' };

/**
 * ### Has State Label
 * The Toggle Switch component can have a state label, in which case the whole layout of the component will change so that the label will be placed above the control and a state label will indicate whether the control is active or inactive. If the Toggle Switch component does not have a state label, the control will not have a state label and will be placed right to the component label.
 */
export const HasStateLabel = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasStateLabel: false,
        hasHint: false,
        label: 'Without state label',
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasStateLabel: true,
        label: 'With state label',
        hasHint: false,
        offLabel: 'Off',
        onLabel: 'On',
      })}
    </div>
  `;
};
HasStateLabel.story = { name: ' ' };

/**
 * ## Content / Settings
 * ### Checked
 * The Toggle Switch component can be active or inactive. The active state indicates that the associated function or setting is currently enabled or turned on. The inactive state signifies that the associated function or setting is currently disabled or turned off.
 */
export const Active = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasHint: false,
        label: 'Active',
        hasStateLabel: true,
        active: true,
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasHint: false,
        label: 'Inactive',
        hasStateLabel: true,
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasStateLabel: true,
        active: true,
        hasHint: false,
        hasLabel: true,
        label: 'Active and Inactive state labels',
        offLabel: 'Inactive',
        onLabel: 'Active',
      })}
    </div>
  `;
};
Active.story = { name: ' ' };

/**
 * ### On Label
 * The Toggle Switch component can have an on label that is displayed when the component has a state label and is active.
 */
export const OnLabel = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        active: true,
        hasHint: false,
        label: 'With on label',
        onLabel: 'On',
        offLabel: 'Off',
        hasStateLabel: true,
      })}
    </div>
  `;
};
OnLabel.story = { name: ' ' };

/**
 * ### Off Label
 * The Toggle Switch component can have an off label that is displayed when the component has a state label and is inactive.
 */
export const OffLabel = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasStateLabel: true,
        hasHint: false,
        label: 'With off label',
        offLabel: 'Off',
        onLabel: 'On',

        active: false,
      })}
    </div>
  `;
};
OffLabel.story = { name: ' ' };

/**
 * ## States
 * Apart from states like rest, hover, pressed and focus, the Toggle Switch component can also be disabled or readonly.
 * ### Disabled
 * The Toggle Switch component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasStateLabel: false,
        disabled: true,
        hasHint: false,
        label: 'Disabled',

        onLabel: undefined,
        offLabel: undefined,
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasStateLabel: true,
        disabled: true,
        hasHint: false,
        label: 'Disabled with state label',

        onLabel: 'On Disabled',
        offLabel: 'Off Disabled',
      })}
    </div>
  `;
};
Disabled.story = { name: ' ' };

/**
 * ### Readonly
 * The Toggle Switch component in the readonly state can not be interacted with, but it can still be selected and receive focus.
 */
export const Readonly = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasStateLabel: false,
        readonly: true,
        hasHint: false,
        label: 'Readonly',

        onLabel: undefined,
        offLabel: undefined,
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasStateLabel: true,
        readonly: true,
        hasHint: false,
        label: 'Readonly with state label',

        onLabel: 'On Readonly',
        offLabel: 'Off Readonly',
      })}
    </div>
  `;
};
Readonly.story = { name: ' ' };

/**
 * ## Dependencies
 * ### Form Caption
 * The Toggle Switch component can display an optional hint message with or without icons. For more information have a look at the [Form Caption](/docs/design-system-web-components-internal-components-formcaptiongroup-formcaption--docs) component.
 */
export const FormCaption = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasStateLabel: false,
        hasHint: true,
        hintMessage: 'This is a small hint message',
        hintMessageIcon: 'blrInfo',
        label: 'Hint message',
        offLabel: undefined,
        onLabel: undefined,
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasStateLabel: true,

        hasHint: true,
        hintMessage: 'This is a small hint message',
        hintMessageIcon: 'blrInfo',
        label: 'Hint message with state label',
        offLabel: 'Off',
        onLabel: 'On',
      })}
    </div>
  `;
};
FormCaption.story = { name: ' ' };
