import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrButtonIcon } from '.';

export const BlrButtonIconReact = createComponent({
  tagName: 'blr-button-icon',
  elementClass: BlrButtonIcon,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
