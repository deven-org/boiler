import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrIconButton } from '.';

export const BlrIconButtonReact = createComponent({
  tagName: 'blr-icon-button',
  elementClass: BlrIconButton,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
