import { BlrTextButtonLinkType, BlrTextButtonLinkRenderFunction } from './index';
import { PureIconKeys } from '@boiler/icons';
import { ActionVariants, FormSizes } from '../../globals/constants';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components/Actions/Buttons/TextButtonLink',
  argTypes: {
    leadingIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    trailingIcon: {
      options: [undefined, ...PureIconKeys],
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    variant: {
      options: ActionVariants,
      control: { type: 'select' },
    },
    href: {
      control: { type: 'text' },
    },
    target: {
      control: { type: 'select' },
      options: ['_blank', '_self'],
    },
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
  },
  parameters: {
    viewMode: 'docs',
  },
};

export const BlrTextButtonLink = ({
  label,
  onClick,
  onBlur,
  loading,
  linkId,
  variant,
  size,
  leadingIcon,
  trailingIcon,
  loadingStatus,
  href,
  target,
  theme,
}: BlrTextButtonLinkType) =>
  BlrTextButtonLinkRenderFunction({
    label,
    onClick,
    onBlur,
    loading,
    linkId,
    variant,
    size,
    leadingIcon,
    trailingIcon,
    loadingStatus,
    href,
    target,
    theme,
  });

BlrTextButtonLink.storyName = 'TextButtonLink';

BlrTextButtonLink.args = {
  theme: 'Light',
  label: 'Button',
  // eslint-disable-next-line no-console
  onClick: () => console.log('onClick'),
  // eslint-disable-next-line no-console
  onBlur: () => console.log('onBlur'),
  leadingIcon: undefined,
  trailingIcon: 'blrChevronDown',
  loading: false,
  linkId: 'link-id',
  variant: 'cta',
  size: 'md',
  href: '',
  target: undefined,
  loadingStatus: 'Loading',
};
