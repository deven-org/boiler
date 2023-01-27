import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import './index.ts';

export default {
  title: 'BoilerTextButton',
  args: {
    label: 'Name',
    onClick: () => console.log('onClick'),
    icon: 'boilerChevronDownGreen',
  },
};

const BoilerTextButtonStory: Story<JSX.IntrinsicElements['boiler-text-button']> = (args) => (
  <boiler-text-button {...args} />
);
export const BoilerTextButton = BoilerTextButtonStory.bind({});
BoilerTextButton.storyName = 'BoilerTextButton';
