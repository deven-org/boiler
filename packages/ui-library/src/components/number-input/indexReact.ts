import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrNumberInput } from '.';

export const BlrNumberInputReact = createComponent({
  tagName: 'blr-number-input',
  elementClass: BlrNumberInput,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
