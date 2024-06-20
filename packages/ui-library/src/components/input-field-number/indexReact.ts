import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrInputFieldNumber } from './index.js';

export const BlrInputFieldNumberReact = createComponent({
  tagName: 'blr-input-field-number',
  elementClass: BlrInputFieldNumber,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
