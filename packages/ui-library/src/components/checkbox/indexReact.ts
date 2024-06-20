import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrCheckbox } from './index.js';

export const BlrCheckboxReact = createComponent({
  tagName: 'blr-checkbox',
  elementClass: BlrCheckbox,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
