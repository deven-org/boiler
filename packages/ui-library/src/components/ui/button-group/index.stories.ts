/* eslint-disable no-console */
import { BlrButtonGroupType } from './index';
import { BlrButtonGroupRenderFunction } from './renderFunction';
import { BlrTextButtonRenderFunction } from '../../actions/buttons/text-button/renderFunction';
import { BlrIconButtonRenderFunction } from '../../actions/buttons/icon-button/renderFunction';
import { html } from 'lit';
import { ButtonGroupAlignmentVariants, ButtonGroupSizes } from '../../../globals/constants';
// this loads the all components instances and registers their html tags
import '../../../index';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 20px;
      width: 500px;
    }

    h4 {
      font-family: Source Sans Pro, sans-serif;
      font-weight: 400;
      line-height: 1rem;
      font-size: 1rem;
      text-align: center;
    }
    .label {
      font-family: Source Sans Pro, sans-serif;
      font-weight: 400;
      line-height: 1rem;
      font-size: 1.5rem;
      text-align: center;
    }
  </style>
`;

export default {
  title: 'Design System/Web Components/UI/Button Group',
  argTypes: {
    size: {
      options: ButtonGroupSizes,
      description: ' Choose size of the component.',
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
    alignment: {
      options: ButtonGroupAlignmentVariants,
      description: '   Choose alignment of the component.',
      control: { type: 'select' },
      table: {
        category: 'Appearance',
      },
    },
  },
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: `<markdown>
        Button Group allows users to select one option from the group. They are visually cohesive, meaning they share a similar appearance in terms of size, style, and often color. This consistency helps users quickly identify that these buttons are related. The Button Group component utilizes the slot element, rendering multiple Text Button or Icon Button components, or the combination of both. For more information have a look at the [Text Button](?path=/docs/design-system-web-components-actions-buttons-text-button--docs) and the Icon Button [Icon Button](?path=/docs/design-system-web-components-actions-buttons-icon-button--docs) components.
        - [**Appearance**](#appearance)
          - [**Alignment**](#alignment)
      </markdown>
      `,
      },
    },
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3777%3A114816&mode=dev',
    },
    viewMode: 'docs',
  },
};

const contentButtons = html`
  ${BlrTextButtonRenderFunction({
    label: 'Yes',
    size: 'md',
    theme: 'Light',
    loading: false,
    variant: 'primary',
    loadingStatus: 'Loading',
    disabled: false,
    buttonDisplay: 'inline-block',
  })}
  ${BlrIconButtonRenderFunction({
    size: 'md',
    theme: 'Light',
    loading: false,
    variant: 'primary',
    loadingStatus: 'Loading',
    disabled: false,
    arialabel: 'button_1',
    icon: 'blr360',
  })}
  ${BlrTextButtonRenderFunction({
    label: 'No',
    size: 'md',
    theme: 'Light',
    loading: false,
    variant: 'secondary',
    loadingStatus: 'Loading',
    disabled: false,
    buttonDisplay: 'inline-block',
  })}
  ${BlrIconButtonRenderFunction({
    size: 'md',
    theme: 'Light',
    loading: false,
    variant: 'secondary',
    loadingStatus: 'Loading',
    disabled: false,
    arialabel: 'button_2',
    icon: 'blrBookmark',
  })}
`;

export const ButtonGroup = (params: BlrButtonGroupType) => BlrButtonGroupRenderFunction(params, contentButtons);

const defaultParams: BlrButtonGroupType = {
  size: 'md',
  alignment: 'left',
};

ButtonGroup.args = defaultParams;

/**
 *  ## Appearance
 *  ### Aligmnet
 * The Button Group component can be left, right and center aligned.
 */
export const Aligmnet = () => {
  return html`
    ${sharedStyles}
    <div class="wrapper">
      <h3 class="label">Button Group left</h3>
      ${ButtonGroup({
        ...defaultParams,
        alignment: 'left',
      })}
    </div>
    <div class="wrapper">
      <h3 class="label">Button Group right</h3>
      ${ButtonGroup({
        ...defaultParams,
        alignment: 'right',
      })}
    </div>
    <div class="wrapper">
      <h3 class="label">Button Group center</h3>
      ${ButtonGroup({
        ...defaultParams,
        alignment: 'center',
      })}
    </div>
  `;
};

Aligmnet.story = { name: ' ' };
