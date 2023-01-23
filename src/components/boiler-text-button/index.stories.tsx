import React from 'react';
import { Story } from '@storybook/react/types-6-0';

import './index.ts';

export default {
  title: 'BoilerTextButton',
  args: {
    label: 'Name',
    onClick: () => console.log('onClick'),
  },
};

const BoilerTextButtonStory: Story = (args) => <boiler-text-button label={args.label} onClick={args.onClick} />;
export const BoilerTextButton = BoilerTextButtonStory.bind({});
BoilerTextButton.storyName = 'BoilerTextButton';
