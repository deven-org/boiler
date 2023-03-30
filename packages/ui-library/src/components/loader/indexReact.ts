import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrLoader } from '.';

export const BlrIconLinkReact = createComponent({
  tagName: 'blr-loader',
  elementClass: BlrLoader,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
