import { BlrFormCaptionGroupType } from './index';
import { BlrFormCaptionGroupRenderFunction } from './renderFunction';
import { html } from 'lit-html';
import { BlrFormCaptionRenderFunction } from '../form-caption/renderFunction';
import { FormSizes } from '../../globals/constants';
import '../../index';

export default {
  title: 'Components/Form Caption Group',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'radio' },
      description:
        ' Choose size of the component. The size variant influences the spacing between the two Form Captions.',
      table: {
        category: 'Appearance',
      },
    },
  },
  parameters: {
    badges: ['New'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=8273%3A7564&mode=dev',
    },
    viewMode: 'docs',
    layout: 'centered',
    docs: {
      description: {
        component: `<Markdown>
        The Form Caption Group is a combination of two Form Caption components, which allow to show both a hint and an error message or only one of each. 

Technically both instances of the Form Caption are placed inside slots that are stacked above each other. The Form Caption Group only has one property named size to change the spacing in between the slots depending on the size of the component. For more information have a look at the internal [Form Caption](/docs/design-system-web-components-internal-components-form-caption--docs)  component

The Form Caption Group is intended to be used when creating new components. Currently, it is used like this in the following components:
        
- [**Checkbox**](?path=/docs/components-checkbox--docs)
- [**Number Input**](?path=/docs/components-number-input--docs)
- [**Radio**](?path=/docs/components-radio--docs)
- [**Radio Group**](?path=/docs/components-radio-group--docs)
- [**Select**](?path=/docs/components-select--docs)
- [**Text Input**](?path=/docs/components-text-input--docs)
- [**Text Area**](?path=/docs/components-text-area--docs)

It is not intended to use the Form Caption Group directly when creating new applications.
      </Markdown>
      `,
      },
    },
  },
};

const hintCaption = BlrFormCaptionRenderFunction({
  message: 'hint',
  variant: 'hint',
  icon: 'blrInfo',
  theme: 'Light',
});

const errorCaption = BlrFormCaptionRenderFunction({
  message: 'error',
  variant: 'error',
  icon: 'blrErrorFilled',
  theme: 'Light',
});

const mixedCaptions = html` ${hintCaption} ${errorCaption} `;

export const BlrFormCaptionGroup = (params: BlrFormCaptionGroupType) =>
  BlrFormCaptionGroupRenderFunction(params, mixedCaptions);

BlrFormCaptionGroup.storyName = 'Form Caption Group';

const args: BlrFormCaptionGroupType = {
  size: 'sm',
};

BlrFormCaptionGroup.args = args;
