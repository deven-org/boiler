import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrTabBarItem } from './index.js';

export const BlrTabBarItemReact = createComponent({
  tagName: 'blr-tab-bar-item',
  elementClass: BlrTabBarItem,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
