/* eslint-disable no-console */
import { Themes } from '../../../foundation/_tokens-generated/index.themes';
import { FormSizes, LabelVariants } from '../../../globals/constants';
import { BlrFormLabelType } from './index';
import { BlrFormLabelRenderFunction } from './renderFunction';
import { html } from 'lit-html';

// this loads the all components instances and registers their html tags
import '../../../index';

const sharedStyles = html`
  <style>
    .stories-form-label {
      padding: 1.25rem;
    }
  </style>
`;

export default {
  title: 'Design System/Web Components/Internal Components/Form Label',
  argTypes: {
    labelSize: {
      name: 'sizeVariant',
      description: 'Choose size of the component.',
      options: FormSizes,
      control: { type: 'radio' },
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
    labelText: {
      name: 'label',
      description: 'Enter string used as label text.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Content / Settings',
      },
    },
    labelAppendix: {
      name: 'labelAppendix',
      description:
        'Enter string used as an appendix to the label. Use this to inform the user in case this field is required.',
      control: {
        type: 'text',
      },
      table: {
        category: 'Content / Settings',
      },
    },

    variant: {
      name: 'has Error',
      description: 'Choose if component has an error.',
      options: LabelVariants,
      control: { type: 'select' },
      table: {
        category: 'Validation',
      },
    },
    forValue: {
      description: 'This references the id of the component to which the label is added.',
      control: { type: 'text' },
      table: {
        category: 'Accessibility',
      },
    },
  },
  parameters: {
    badges: ['New'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3618%3A125225&mode=dev',
    },
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown> Form Label provides a descriptive text or caption for an input field. The <label> element must be associated with an input field using the for attribute. 
    - [**Appearance**](#appearance)
      - [**Size Variant**](#size-variant)
    - [**Content / Settings**](#content--settings)
      - [**Label Appendix**](#label-appendix)
    - [**Validation**](#validation)
      - [**Has Error**](#has-error)
  </Markdown>`,
      },
    },
  },
};

export const BlrFormLabel = (params: BlrFormLabelType) => BlrFormLabelRenderFunction(params);
BlrFormLabel.storyName = 'Form Label';

const defaultParams: BlrFormLabelType = {
  theme: 'Light',
  labelSize: 'md',
  labelText: 'Label-text',
  labelAppendix: '(Appendix)',
  variant: 'label',
  forValue: 'Form Label',
};
BlrFormLabel.args = defaultParams;

/**
 * ## Appearance
 *  ### Size Variant
 * The Form Label component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`${sharedStyles}
    <div class="stories-form-label">
      ${BlrFormLabelRenderFunction({
        ...defaultParams,
        labelSize: 'sm',
        labelText: 'Form label SM',
        labelAppendix: '(Appendix SM)',
      })}
    </div>
    <div class="stories-form-label">
      ${BlrFormLabelRenderFunction({
        ...defaultParams,
        labelSize: 'md',
        labelText: 'Form label MD',
        labelAppendix: '(Appendix MD)',
      })}
    </div>
    <div class="stories-form-label">
      ${BlrFormLabelRenderFunction({
        ...defaultParams,
        labelSize: 'lg',
        labelText: 'Form label LG',
        labelAppendix: '(Appendix LG)',
      })}
    </div>`;
};
SizeVariant.story = { name: ' ' };

/**
 * ## Content / Settings
 * ### Label Appendix
 * The Form Label component can display an appendix text next to the label text. The label appendix should be used to inform the users in case this field is required.
 */
export const LabelAppendix = () => {
  return html`
    ${BlrFormLabelRenderFunction({
      ...defaultParams,
      labelSize: 'lg',
      labelText: 'Form label',
      labelAppendix: '(required)',
    })}
    ${BlrFormLabelRenderFunction({
      ...defaultParams,
      labelSize: 'lg',
      labelText: 'Form label',
      labelAppendix: '(optional)',
    })}
    ${BlrFormLabelRenderFunction({
      ...defaultParams,
      labelSize: 'lg',
      labelText: 'Form label',
      labelAppendix: ' ',
    })}
  `;
};
LabelAppendix.story = { name: ' ' };

/**
 * ## Validation
 *
 * ### Has Error
 * The Form Label component can be set to have an error.
 */
export const HasError = () => {
  return html` ${BlrFormLabelRenderFunction({
    ...defaultParams,
    labelText: 'Error',
    labelAppendix: '(with Appendix)',
    variant: 'error',
  })}`;
};
HasError.story = { name: ' ' };
