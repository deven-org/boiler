import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrButtonText } from './index.js';

export const BlrButtonTextReact = createComponent({
  tagName: 'blr-button-text',
  elementClass: BlrButtonText,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
