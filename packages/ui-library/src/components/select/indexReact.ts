import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrSelect } from './index.js';

export const BlrSelectReact = createComponent({
  tagName: 'blr-select',
  elementClass: BlrSelect,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
