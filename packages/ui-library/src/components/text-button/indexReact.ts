import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrTextButton } from '.';

export const BlrTextButtonReact = createComponent({
  tagName: 'blr-text-button',
  elementClass: BlrTextButton,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
