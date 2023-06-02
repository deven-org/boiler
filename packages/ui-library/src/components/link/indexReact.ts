import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrLink } from '.';

export const BlrLinkReact = createComponent({
  tagName: 'blr-link',
  elementClass: BlrLink,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
