import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrDivider } from './index.js';

export const BlrDividerReact = createComponent({
  tagName: 'blr-divider',
  elementClass: BlrDivider,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
