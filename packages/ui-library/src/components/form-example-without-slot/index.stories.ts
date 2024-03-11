/* eslint-disable no-console */
import { PureIconKeys } from '@boiler/icons';
import { FormSizes, CaptionVariants } from '../../globals/constants';
import { BlrFormExampleWithoutSlotType } from './index';
import { BlrFormExampleWithoutSlotRenderFunction } from './renderFunction';
import { Themes } from '../../foundation/_tokens-generated/index.themes';
import { html } from 'lit-html';
import '../../index';

const sharedStyles = html`
  <style>
    .wrapper {
      padding: 1.25em;
      background: red;
    }
  </style>
`;

export default {
  title: 'Components/Form Example',
  argTypes: {},
  parameters: {
    badges: ['Draft'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125223&mode=dev',
    },
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
        This is experimental form.
      </Markdown>
      `,
      },
    },
  },
};

export const BlrFormExampleWithoutSlot = (params: BlrFormExampleWithoutSlotType) =>
  BlrFormExampleWithoutSlotRenderFunction(params);

BlrFormExampleWithoutSlot.storyName = 'BlrFormExampleWithoutSlot';

const args: BlrFormExampleWithoutSlotType = {
  theme: 'Light',
};

BlrFormExampleWithoutSlot.args = args;
