/* eslint-disable no-console */
import { html } from 'lit-html';
import { BlrTabBarRenderFunction, BlrTabBarType } from './index';
import {
  FormSizes,
  IconPositionVariant,
  OverflowVariants,
  TabAlignmentVariants,
  TabContentVariants,
  TabVariants,
} from '../../globals/constants';
import { PureIconKeys } from '@boiler/icons';
import './index';
import { Themes } from '../../foundation/_tokens-generated/index.themes';

export default {
  title: 'Design System/Web Components',
  argTypes: {
    size: {
      options: FormSizes,
      control: { type: 'select' },
    },
    tabs: { control: 'array' },
    icon: {
      options: [undefined, ...PureIconKeys],
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
    overflowVariant: {
      options: OverflowVariants,
      control: { type: 'select' },
    },
    variant: {
      options: TabVariants,
      control: { type: 'select' },
    },
    alignment: {
      options: TabAlignmentVariants,
      control: { type: 'select' },
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

export const BlrTabBar = ({
  _navItems,
  tabs,
  overflowVariant,
  iconPosition,
  variant,
  tabContent,
  alignment,
  size,
  onChange,
  onBlur,
  onFocus,
  showDivider,
  icon,
  theme,
  onClick,
}: BlrTabBarType) =>
  html`
    ${BlrTabBarRenderFunction({
      _navItems,
      tabs,
      overflowVariant,
      iconPosition,
      variant,
      tabContent,
      alignment,
      size,
      onChange,
      onBlur,
      onFocus,
      showDivider,
      icon,
      theme,
      onClick,
    })}
  `;

BlrTabBar.storyName = 'BlrTabBar';

BlrTabBar.args = {
  theme: 'Light',
  tabs: [
    {
      label: 'Tab 1',
      icon: 'blr360',
      href: './',
      active: true,
    },
    {
      label: 'Tab 2',
      icon: 'blrInfo',
      href: './',
    },
    {
      label: 'Tab 3',
      icon: 'blrCalendar',
      href: './',
    },
    {
      label: 'Tab 4',
      icon: 'blrInfo',
      href: './',
    },
    {
      label: 'Tab 5',
      icon: 'blrCalendar',
      href: './',
    },
    {
      label: 'Tab 6',
      icon: 'blrInfo',
      href: './',
    },
    {
      label: 'Tab 7',
      icon: 'blrCalendar',
      href: './',
    },
    {
      label: 'Tab 8',
      icon: 'blrInfo',
      href: './',
    },
    {
      label: 'Tab 9',
      icon: 'blrCalendar',
      href: './',
    },
    {
      label: 'Tab 10',
      icon: 'blrCalendar',
      href: './',
    },
    {
      label: 'Tab 11',
      icon: 'blrCalendar',
      href: './',
    },
  ],
  overflowVariant: 'wrap',
  size: 'md',
  showDivider: true,
  icon: 'blr360',
  variant: 'standard',
  tabContent: 'labelAndIcon',
  iconPosition: 'leading',
  alignment: 'left',
  onClick: () => console.log('click'),
};
