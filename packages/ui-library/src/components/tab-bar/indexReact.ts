import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrTabBar } from './index.js';

export const BlrInputFieldTextReact = createComponent({
  tagName: 'blr-tab-bar',
  elementClass: BlrTabBar,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
