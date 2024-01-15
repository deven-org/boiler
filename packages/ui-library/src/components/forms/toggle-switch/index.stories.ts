/* eslint-disable no-console */
import { BlrToggleSwitchType } from './index';
import { BlrToggleSwitchRenderFunction } from './renderFunction';
import { PureIconKeys } from '@boiler/icons';
import { FormSizes, IconPositionVariant } from '../../../globals/constants';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { html } from 'lit-html';

// Shared Style inside the Stories
const sharedStyles = html`
  <style>
    .stories-toggle-switch {
      display: flex;
      flex-wrap: wrap;
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
  size: 'md',
  checked: false,
  showStateLabel: true,
  label: 'Label-text',
  onLabel: 'On-label-text',
  offLabel: 'Off-label-text',
  hasHint: false,
  hintMessage: 'This is a small hint',
  hintIcon: 'blrInfo',
  disabled: false,
  readonly: false,
  checkInputId: 'toggle-switchId',
  variant: 'trailing',
  name: 'toggle-switch-name',
  onChange: logEventType,
  onFocus: logEventType,
  onBlur: logEventType,
};

export default {
  title: 'Design System/Web Components/Forms/Toggle Switch',
  argTypes: {
    size: {
      name: 'sizeVariant',
      description: 'Choose size of the component.',
      options: FormSizes,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    variant: {
      description: 'Choose if the control has a state label.',
      options: IconPositionVariant,
      control: { type: 'radio' },
      table: {
        category: 'Appearance',
      },
    },
    checked: {
      description: 'Choose if component is active.',
      options: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    hasHint: {
      description: 'Choose if component has a hint message.',
      options: { type: 'boolean' },
      table: {
        category: 'Content / Settings',
      },
    },
    hintMessage: {
      description: 'Enter string used used as hint message.',
      if: { arg: 'hasHint', eq: true },
      table: {
        category: 'Content / Settings',
      },
    },
    hintIcon: {
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
    showStateLabel: {
      description: 'Choose if component has a state label.',
      table: {
        disable: true,
      },
    },
    label: {
      description: 'Enter string used as label text.',
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'showStateLabel', eq: true },
    },
    onLabel: {
      description: 'Enter string used as on label text.',
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'variant', eq: 'leading' },
    },
    offLabel: {
      description: 'Enter string used as off label text.',
      table: {
        category: 'Content / Settings',
      },
      if: { arg: 'variant', eq: 'trailing' },
    },
    disabled: {
      description:
        'Choose if component is disabled. Prevents the user to select or change the value of this component.',
      table: {
        category: 'States',
      },
    },
    checkInputId: {
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
    onChange: {
      description: 'Fires when the value changes.',
      table: {
        category: 'Events',
      },
    },
    onFocus: {
      description: 'Fires when the component is focused.',
      table: {
        category: 'Events',
      },
    },
    onBlur: {
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
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125201&mode=dev',
    },
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
Toggle Switch allows users to choose between two mutually exclusive states, such as on/off or yes/no. It is typically a small, rectangular button with two states, represented by different icons or labels.
They can also be used to control more complex features, such as the state of a system or the availability of a service.
- [**Appearance**](#appearance)
 - [**Size Variant**](#size-variant) 
 - [**Has State Label**](#has-state-label) 
- [**Content / Settings**](#content--settings)
 - [**Active**](#active) 
 - [**On Label**](#onlabel) 
 - [**Off Label**](#offlabel)  
- [**States**](#states)
 - [**Disabled**](#disabled) 
 - [**Readonly**](#readonly)
- [**Dependencies**](#dependencies)
 - [**Form-Label**](#form-label) 
 - [**Form Caption**](#form-caption)  
</Markdown>
        `,
      },
    },
  },
};

export const BlrToggleSwitch = (params: BlrToggleSwitchType) => BlrToggleSwitchRenderFunction(params);

BlrToggleSwitch.storyName = 'ToggleSwitch';
BlrToggleSwitch.args = defaultParams;

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
        offLabel: undefined,
        onLabel: undefined,
        size: 'sm',
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        label: 'Toggle Switch MD',
        hasHint: false,
        offLabel: undefined,
        onLabel: undefined,
        size: 'md',
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        label: 'Toggle Switch LG',
        hasHint: false,
        offLabel: undefined,
        onLabel: undefined,
        size: 'lg',
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
        variant: 'trailing',
        hasHint: false,
        label: 'Without state label',
        offLabel: undefined,
        onLabel: undefined,
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        variant: 'leading',
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
 * ### Active
 * The Toggle Switch component can be active or inactive. The active state indicates that the associated function or setting is currently enabled or turned on. The inactive state signifies that the associated function or setting is currently disabled or turned off.
 */
export const Active = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasHint: false,
        label: undefined,
        offLabel: undefined,
        onLabel: undefined,
        checked: true,
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasHint: false,
        label: undefined,
        offLabel: undefined,
        onLabel: undefined,
      })}
    </div>
  `;
};
Active.story = { name: ' ' };

/**
 * ### OnLabel
 * The Toggle Switch component can have an on label that is displayed when the component has a state label and is active.
 */
export const OnLabel = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        checked: true,
        hasHint: false,
        label: undefined,
        onLabel: 'This is an onLabel',
        offLabel: undefined,
      })}
    </div>
  `;
};
OnLabel.story = { name: ' ' };

/**
 * ### OffLabel
 * The Toggle Switch component can have an off label that is displayed when the component has a state label and is inactive.
 */
export const OffLabel = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hasHint: false,
        label: undefined,
        offLabel: 'This is an offLabel',
        onLabel: undefined,
      })}
    </div>
  `;
};
OffLabel.story = { name: ' ' };

/**
 * ## States
 * Apart from states like rest, hover, pressed and focus, the Toggle Switch component can also be disabled or readonly. The error state is documented under validation [link to Validation].
 * ### Disabled
 * The Toggle Switch component in the disabled state can not be interacted with. This means it can not receive focus or be selected.
 */
export const Disabled = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        disabled: true,
        hasHint: false,
        label: undefined,
        onLabel: undefined,
        offLabel: undefined,
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
        readonly: true,
        hasHint: false,
        label: undefined,
        onLabel: undefined,
        offLabel: undefined,
      })}
    </div>
  `;
};
Readonly.story = { name: ' ' };

/**
 * ## Dependencies
 * ### Form Label
 * The Toggle Switch component can display an optional Form Label component, consisting of a label and a label appendix. For more information have a look at the [Form Label](/docs/design-system-web-components-internal-components-formlabel--docs) component.
 */
export const FormLabel = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        label: 'With a label',
        hasHint: false,
        onLabel: undefined,
        offLabel: undefined,
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        label: undefined,
        hasHint: false,
        onLabel: undefined,
        offLabel: undefined,
      })}
    </div>
  `;
};
FormLabel.story = { name: ' ' };

/**
 * ## Dependencies
 * ### Form Caption
 * The Toggle Switch component can display an optional hint message with or without icons. For more information have a look at the [Form Caption Group](/docs/design-system-web-components-internal-components-formcaptiongroup--docs) component.
 */
export const FormCaption = () => {
  return html`
    ${sharedStyles}
    <div class="stories-toggle-switch">
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hintMessage: 'This is a small hint message',
        label: undefined,
        offLabel: undefined,
        onLabel: undefined,
      })}
      ${BlrToggleSwitchRenderFunction({
        ...defaultParams,
        hintMessage: 'This is a small hint message without Icon',
        hintIcon: undefined,
        label: undefined,
        offLabel: undefined,
        onLabel: undefined,
      })}
    </div>
  `;
};
FormCaption.story = { name: ' ' };
