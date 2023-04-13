import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrPassword } from '.';

export const BlrPasswordReact = createComponent({
  tagName: 'blr-text-input',
  elementClass: BlrPassword,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
