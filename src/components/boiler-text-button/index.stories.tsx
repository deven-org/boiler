import React from 'react';
import { Story } from '@storybook/react/types-6-0';
import {BoilerTextButtonReact} from './indexReact';

export default {
  title: 'BoilerTextButton',
  args: {
    label: 'Name',
    onClick: () => console.log('onClick'),
    icon: 'boilerChevronDownGreen',
  },
};

const BoilerTextButtonStory: Story = (args) => (
  <BoilerTextButtonReact {...args}/>
);
export const BoilerTextButton = BoilerTextButtonStory.bind({});
BoilerTextButton.storyName = 'BoilerTextButton';
