import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrTextarea } from '.';

export const BlrTextareaReact = createComponent({
  tagName: 'blr-text-area',
  elementClass: BlrTextarea,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
