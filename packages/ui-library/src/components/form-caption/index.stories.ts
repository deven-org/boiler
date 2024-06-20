/* eslint-disable no-console */
import { PureIconKeys } from '@boiler/icons';
import { FormSizes, CaptionVariants } from '../../globals/constants.js';
import { BlrFormCaptionType } from './index.js';
import { BlrFormCaptionRenderFunction } from './renderFunction.js';
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { html } from 'lit-html';
import '../../index.js';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 1.25em;
    }
  </style>
`;

export default {
  title: 'Components/Form Caption',
  argTypes: {
    sizeVariant: {
      options: FormSizes,
      control: { type: 'radio' },
      defaultValue: 'sm',
      description: ' Choose size of the component.',
      table: {
        category: 'Appearance',
      },
    },
    variant: {
      options: CaptionVariants,
      control: { type: 'select' },
      description: 'Choose variant of the component',

      table: {
        category: 'Appearance',
      },
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
      description: 'Choose the Theme of the component',
      table: {
        category: 'Appearance',
      },
    },
    icon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
      defaultValue: 'blr360',
      description: 'Select an icon which is displayed inside of the input.',
      table: {
        category: 'Content / Settings',
      },
    },
    message: {
      options: [undefined, ...PureIconKeys],
      description: 'Enter the message the component should have.',
      table: {
        category: 'Content / Settings',
      },
    },
  },
  parameters: {
    badges: ['New'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125223&mode=dev',
    },
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
        Form Caption provides either a brief hint or error message to a related form element such as Input Field Text or Select. It is typically displayed below the form element, and it can be used to provide additional information about the type of information a user has to provide, like an example of the correct data format.
        - [**Appearance**](#appearance)
          - [**Variant**](#variant)
          - [**Size Variant**](#size-variant)
        - [**Dependencies**](#dependencies)
          - [**Icon**](#icon)

        The Form Caption is intended to be used when creating new components. Currently, it is used like this in the following components:
        - [**Form Caption Group**](?path=/docs/components-form-caption-group--docs)
        - [**Toggle Switch**](?path=/docs/components-toggle-switch--docs)
        
        It is not intended to use the Form Caption directly when creating new applications. 
      </Markdown>
      `,
      },
    },
  },
};

export const BlrFormCaption = (params: BlrFormCaptionType) => BlrFormCaptionRenderFunction(params);

BlrFormCaption.storyName = 'Form Caption';

const args: BlrFormCaptionType = {
  theme: 'Light',
  message: 'Message-text',
  icon: 'blrInfo',
  variant: 'hint',
  sizeVariant: 'sm',
};

BlrFormCaption.args = args;

/**
 *  ## Appearance
 *  ### Variant
 *  The Form Caption component comes in 2 variants: hint and error.
 */

export const Variant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrFormCaptionRenderFunction({
        variant: 'hint',
        theme: 'Light',
        sizeVariant: 'sm',
        message: 'Hint',
        icon: 'blrInfo',
      })}
    </div>
    <div class="wrapper">
      ${BlrFormCaptionRenderFunction({
        variant: 'error',
        theme: 'Light',
        sizeVariant: 'sm',
        message: 'Error',
        icon: 'blrErrorFilled',
      })}
    </div>
  `;
};

Variant.story = { name: ' ' };

/**
 *  ### Size Variant
 *  The Form Caption component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrFormCaptionRenderFunction({
        variant: 'hint',
        theme: 'Light',
        sizeVariant: 'sm',
        message: 'Form Caption SM',
        icon: 'blrInfo',
      })}
    </div>
    <div class="wrapper">
      ${BlrFormCaptionRenderFunction({
        variant: 'hint',
        theme: 'Light',
        sizeVariant: 'md',
        message: 'Form Caption MD',
        icon: 'blrInfo',
      })}
    </div>

    <div class="wrapper">
      ${BlrFormCaptionRenderFunction({
        variant: 'hint',
        theme: 'Light',
        sizeVariant: 'lg',
        message: 'Form Caption LG',
        icon: 'blrInfo',
      })}
    </div>
  `;
};

SizeVariant.story = { name: ' ' };

/**
 *  ## Dependencies
 *  ### Icon
 *  The Form Caption component makes use of the Icon component. For more information have a look at the [Icon](/docs/components-icon--docs) component.
 */

export const Icon = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrFormCaptionRenderFunction({
        variant: 'hint',
        theme: 'Light',
        sizeVariant: 'sm',
        message: 'With icon',
        icon: 'blrInfo',
      })}
    </div>
    <div class="wrapper">
      ${BlrFormCaptionRenderFunction({
        variant: 'hint',
        theme: 'Light',
        sizeVariant: 'sm',
        message: 'Without icon',
      })}
    </div>
  `;
};

Icon.story = { name: ' ' };
