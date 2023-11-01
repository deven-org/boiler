import React from 'react';
import { createComponent, EventName } from '@lit/react';

import { BlrCheckbox } from '.';

export const BlrCheckboxReact = createComponent({
  tagName: 'blr-checkbox',
  elementClass: BlrCheckbox,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
