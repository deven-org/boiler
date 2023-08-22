import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrBackdrop } from '.';

export const BlrIconLinkReact = createComponent({
  tagName: 'blr-backdrop',
  elementClass: BlrBackdrop,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
