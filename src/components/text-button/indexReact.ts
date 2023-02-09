import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BoilerTextButton } from '.';

export const BoilerTextButtonReact = createComponent({
  tagName: 'boiler-text-button',
  elementClass: BoilerTextButton,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
