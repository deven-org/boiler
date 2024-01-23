import { html } from 'lit-html';
import { BlrTabBarType } from './index';
import { BlrTabBarRenderFunction } from './renderFunction';
import {
  FormSizes,
  IconPositionVariant,
  OverflowVariantsStandard,
  OverflowVariantsFullWidth,
  TabAlignmentVariants,
  TabContentVariants,
  TabVariants,
} from '../../../globals/constants';
import { Themes } from '../../../foundation/_tokens-generated/index.themes';

// this loads the all components instances and registers their html tags
import '../../../index';

export default {
  title: 'Design System/Web Components/Navigation/TabBar',
  argTypes: {
    theme: {
      options: Themes,
      control: { type: 'select' },
    },
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    tabContent: {
      options: TabContentVariants,
      control: { type: 'select' },
    },
    iconPosition: {
      if: { arg: 'tabContent', eq: 'labelAndIcon' },
      options: IconPositionVariant,
      control: { type: 'select' },
    },
    variant: {
      options: TabVariants,
      control: { type: 'select' },
    },
    overflowVariantStandard: {
      if: { arg: 'variant', eq: 'standard' },
      options: OverflowVariantsStandard,
      control: { type: 'select' },
    },
    overflowVariantFullWidth: {
      if: { arg: 'variant', eq: 'fullWidth' },
      options: OverflowVariantsFullWidth,
      control: { type: 'select' },
    },
    alignment: {
      options: TabAlignmentVariants,
      control: { type: 'select' },
    },
  },
  parameters: {
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3231%3A94377&mode=dev',
    },
    viewMode: 'docs',
  },
};

const tabsAsChildren = html`
  <p disabled label="Tab 1" icon="blr360">Tab 1</p>
  <p label="Tab 2" icon="blrInfo">Tab 2</p>
  <p label="Tab 3" icon="blrCrop">Tab 3</p>
  <p label="Tab 4" icon="blrDocumentNew">Tab 4</p>
  <p label="Tab 5" icon="blrDocumentTwo">Tab 5</p>
  <p label="Tab 6" icon="blrDownload">Tab 6</p>
  <p label="Tab 7" icon="blrHeart">Tab 7</p>
  <p label="Tab 8" icon="blrHome">Tab 8</p>
  <p label="Tab 9" icon="blrLockClosed">Tab 9</p>
  <p label="Tab 10" icon="blrMusic">Tab 10</p>
  <p label="Tab 11" icon="blrPen">Tab 11</p>
`;

export const BlrTabBar = (params: BlrTabBarType) => BlrTabBarRenderFunction(params, tabsAsChildren);

BlrTabBar.storyName = 'TabBar';

const args: BlrTabBarType = {
  theme: 'Light',
  variant: 'standard',
  overflowVariantStandard: 'buttons',
  overflowVariantFullWidth: 'browserOverflow',
  size: 'md',
  showDivider: true,
  tabContent: 'labelAndIcon',
  iconPosition: 'leading',
  alignment: 'left',
};

BlrTabBar.args = args;
