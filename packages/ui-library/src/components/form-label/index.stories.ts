/* eslint-disable no-console */
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { FormSizes } from '../../globals/constants.js';
import { BlrFormLabelType } from './index.js';
import { BlrFormLabelRenderFunction } from './renderFunction.js';
import { html } from 'lit-html';
import { genericBlrComponentRenderer } from '../../utils/typesafe-generic-component-renderer.js';
import '../../index.js';
import { LitElementCustom } from '../../utils/lit/element.js';

const sharedStyles = html`
  <style>
    .stories-form-label {
      padding: 1.25rem;
    }
  </style>
`;

export default {
  title: 'Components/Form Label',
  argTypes: {
    sizeVariant: {
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
    label: {
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
    hasError: {
      description: 'Choose if component has an error.',
      defaultValue: false,
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
        component: `<Markdown>
        Form Label provides a descriptive text or caption for an input field. The <label> element must be associated with an input field using the for attribute. 

        - [**Appearance**](#appearance)
          - [**Size Variant**](#size-variant)
        - [**Content / Settings**](#content--settings)
          - [**Label Appendix**](#label-appendix)
        - [**Validation**](#validation)
          - [**Has Error**](#has-error)
        
        The Form Label is intended to be used when creating new components. Currently, it is used like this in the following components:
        
        - [**Checkbox**](?path=/docs/components-checkbox--docs)
        - [**Input Field Number**](?path=/docs/components-input-field-number--docs)
        - [**Input Field Text**](?path=/docs/components-input-field-text--docs)
        - [**Select**](?path=/docs/components-select--docs)
        - [**Text Area**](?path=/docs/components-text-area--docs)
        
        It is not intended to use the Form Label directly when creating new applications.
        
  </Markdown>`,
      },
    },
  },
};

// The label is not creating a shadow root itself, but errors if it is outside
// of one. Thus, we're creating a helper component for the stories, that wraps it.
class WrappedBlrLabel extends LitElementCustom {
  labelProps: BlrFormLabelType;

  protected render() {
    return BlrFormLabelRenderFunction(this.labelProps);
  }
}

customElements.define('label-story', WrappedBlrLabel);

const WrappedBlrFormLabelRenderFunction = (params: BlrFormLabelType) =>
  genericBlrComponentRenderer('label-story', { labelProps: params });

export const BlrFormLabel = (params: BlrFormLabelType) => WrappedBlrFormLabelRenderFunction(params);
BlrFormLabel.storyName = 'Form Label';

const defaultParams: BlrFormLabelType = {
  sizeVariant: 'md',
  label: 'Label-text',
  labelAppendix: '(Appendix)',
  hasError: false,
  forValue: 'Form Label',
};
BlrFormLabel.args = defaultParams;

/**
 * ## Appearance
 * ### Size Variant
 * The Form Label component comes in 3 sizes: SM, MD and LG.
 */
export const SizeVariant = () => {
  return html`${sharedStyles}
    <div class="stories-form-label">
      ${WrappedBlrFormLabelRenderFunction({
        ...defaultParams,
        sizeVariant: 'sm',
        label: 'Form label SM',
        labelAppendix: '(Appendix SM)',
      })}
    </div>
    <div class="stories-form-label">
      ${WrappedBlrFormLabelRenderFunction({
        ...defaultParams,
        sizeVariant: 'md',
        label: 'Form label MD',
        labelAppendix: '(Appendix MD)',
      })}
    </div>
    <div class="stories-form-label">
      ${WrappedBlrFormLabelRenderFunction({
        ...defaultParams,
        sizeVariant: 'lg',
        label: 'Form label LG',
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
    ${WrappedBlrFormLabelRenderFunction({
      ...defaultParams,
      sizeVariant: 'md',
      label: 'Form label',
      labelAppendix: '(required)',
    })}
    ${WrappedBlrFormLabelRenderFunction({
      ...defaultParams,
      sizeVariant: 'md',
      label: 'Form label',
      labelAppendix: '(optional)',
    })}
    ${WrappedBlrFormLabelRenderFunction({
      ...defaultParams,
      sizeVariant: 'md',
      label: 'Form label',
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
  return html` ${WrappedBlrFormLabelRenderFunction({
    ...defaultParams,
    label: 'Error',
    labelAppendix: '(with Appendix)',
    hasError: true,
  })}`;
};
HasError.story = { name: ' ' };
