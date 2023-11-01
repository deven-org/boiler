import React from 'react';
import { createComponent, EventName } from '@lit/react';

import { BlrRadio } from '.';

export const BlrRadioInputReact = createComponent({
  tagName: 'blr-radio',
  elementClass: BlrRadio,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
