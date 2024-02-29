import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrInputNumber } from '.';

export const BlrInputNumberReact = createComponent({
  tagName: 'blr-input-number',
  elementClass: BlrInputNumber,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
