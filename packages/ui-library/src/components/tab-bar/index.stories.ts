import { html } from 'lit-html';
import { BlrTabBarType } from './index.js';
import { BlrTabBarRenderFunction } from './renderFunction.js';
import {
  FormSizes,
  IconPositionVariant,
  OverflowVariantsStandard,
  OverflowVariantsFullWidth,
  TabAlignmentVariants,
  TabContentVariants,
  TabVariants,
} from '../../globals/constants.js';
import { Themes } from '../../foundation/_tokens-generated/index.themes.js';

// this loads the all components instances and registers their html tags
import '../../index.js';
import { action } from '@storybook/addon-actions';

export default {
  title: 'Components/TabBar',
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
    badges: ['Draft'],
    design: {
      type: 'figma',
      url: 'https://www.figma.com/file/C4vgEKz8mKyulJ4gm3Qdql/%F0%9F%AB%A7-%5BBLR%5D-The-B01LER?node-id=3231%3A94377&mode=dev',
    },
    viewMode: 'docs',
  },
};

const tabsAsChildren = html`
  <blr-tab-bar-item disabled="true" label="Tab 1" icon="blr360">Tab 1</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 2" icon="blr360" @blrFocus=${(e) => e} @blrBlur=${(e) => e}>Tab 2</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 3" icon="blr360">Tab 3</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 4" icon="blr360">Tab 4</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 5" icon="blr360">Tab 5</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 6" icon="blr360">Tab 6</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 7" icon="blr360">Tab 7</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 8" icon="blr360">Tab 8</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 9" icon="blr360">Tab 9</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 10" icon="blr360">Tab 10</blr-tab-bar-item>
  <blr-tab-bar-item label="Tab 11" icon="blr360">Tab 11</blr-tab-bar-item>
`;

export const BlrTabBar = (params: BlrTabBarType) => BlrTabBarRenderFunction(params, tabsAsChildren);

BlrTabBar.storyName = 'TabBar';

const args: BlrTabBarType = {
  theme: Themes[0],
  variant: 'standard',
  overflowVariantStandard: 'buttons',
  overflowVariantFullWidth: 'browserOverflow',
  size: 'md',
  showDivider: true,
  tabContent: 'labelAndIcon',
  iconPosition: 'leading',
  alignment: 'left',
  blrSelectedValueChange: () => action('blrSelectedValueChange'),
};

BlrTabBar.args = args;
