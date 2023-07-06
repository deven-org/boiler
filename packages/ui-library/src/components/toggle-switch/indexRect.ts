import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrLabelToggleSwitch } from '.';

export const BlrLabelCheckboxReact = createComponent({
  tagName: 'blr-label-toggleswitch',
  elementClass: BlrLabelToggleSwitch,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
