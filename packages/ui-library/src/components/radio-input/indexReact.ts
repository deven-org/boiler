import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrRadioInput } from '.';

export const BlrRadioInputReact = createComponent({
  tagName: 'blr-radio-input',
  elementClass: BlrRadioInput,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
