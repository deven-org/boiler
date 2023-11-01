import React from 'react';
import { createComponent, EventName } from '@lit/react';

import { BlrSelect } from '.';

export const BlrSelectReact = createComponent({
  tagName: 'blr-select',
  elementClass: BlrSelect,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
