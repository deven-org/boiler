import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrToggleSwitch } from './index.js';

export const BlrLabelCheckboxReact = createComponent({
  tagName: 'blr-label-toggleswitch',
  elementClass: BlrToggleSwitch,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
