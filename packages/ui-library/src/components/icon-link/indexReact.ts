import React from 'react';
import { createComponent, EventName } from '@lit/react';

import { BlrIconLink } from '.';

export const BlrIconLinkReact = createComponent({
  tagName: 'blr-icon-link',
  elementClass: BlrIconLink,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
