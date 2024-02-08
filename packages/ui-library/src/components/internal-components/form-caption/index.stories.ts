/* eslint-disable no-console */
import { PureIconKeys } from '@boiler/icons';
import { FormSizes, CaptionVariants } from '../../../globals/constants';
import { BlrFormCaptionType } from './index';
import { BlrFormCaptionRenderFunction } from './renderFunction';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { html } from 'lit-html';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 1.25em;
    }
  </style>
`;

export default {
  title: 'Components/Web Components/Internal Components/Form Caption',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'radio' },
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
      description: 'Select an icon which is displayed inside of the input.',
      table: {
        category: 'Content / Setting',
      },
    },
    message: {
      options: [undefined, ...PureIconKeys],
      description: 'Enter the message the component should have.',
      table: {
        category: 'Content / Setting',
      },
    },
    arialabel: {
      options: [undefined, ...PureIconKeys],
      description:
        'Provides additional information about the elements purpose and functionality to assistive technologies, such as screen readers.',
      table: {
        category: 'Accessibility',
      },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125223&mode=dev',
    },
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
        Form Caption provides either a brief hint or error message to a related form element such as Text Input or Select. It is typically displayed below the form element, and it can be used to provide additional information about the type of information a user has to provide, like an example of the correct data format.
        - [**Appearance**](#appearance)
          - [**Variant**](#variant)
          - [**Size Variant**](#size-variant)
        - [**Dependencies**](#dependencies)
          - [**Icon**](#icon)
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
  arialabel: 'Hint',
  icon: 'blr360',
  variant: 'hint',
  size: 'sm',
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
        size: 'sm',
        message: 'Hint',
        icon: 'blr360',
      })}
    </div>
    <div class="wrapper">
      ${BlrFormCaptionRenderFunction({
        variant: 'error',
        theme: 'Light',
        size: 'sm',
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
        size: 'sm',
        message: 'Form Caption SM',
        icon: 'blr360',
      })}
    </div>
    <div class="wrapper">
      ${BlrFormCaptionRenderFunction({
        variant: 'hint',
        theme: 'Light',
        size: 'md',
        message: 'Form Caption MD',
        icon: 'blr360',
      })}
    </div>

    <div class="wrapper">
      ${BlrFormCaptionRenderFunction({
        variant: 'hint',
        theme: 'Light',
        size: 'lg',
        message: 'Form Caption LG',
        icon: 'blr360',
      })}
    </div>
  `;
};

SizeVariant.story = { name: ' ' };

/**
 *  ## Dependencies
 *  ### Icon
 *  The Form Caption component makes use of the Icon component. For more information have a look at the [Icon](/docs/design-system-web-components-ui-icon-icon--docs) component.
 */

export const Icon = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      ${BlrFormCaptionRenderFunction({
        variant: 'hint',
        theme: 'Light',
        size: 'sm',
        message: 'With icon',
        icon: 'blr360',
      })}
    </div>
    <div class="wrapper">
      ${BlrFormCaptionRenderFunction({
        variant: 'hint',
        theme: 'Light',
        size: 'sm',
        message: 'Without icon',
      })}
    </div>
  `;
};

Icon.story = { name: ' ' };
