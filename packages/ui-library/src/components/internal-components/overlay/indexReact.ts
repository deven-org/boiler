import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrOverlay } from '.';

export const BlrIconLinkReact = createComponent({
  tagName: 'blr-overlay',
  elementClass: BlrOverlay,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
