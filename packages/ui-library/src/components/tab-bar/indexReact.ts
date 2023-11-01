import React from 'react';
import { createComponent, EventName } from '@lit/react';

import { BlrTabBar } from '.';

export const BlrTabBarReact = createComponent({
  tagName: 'blr-tab-bar',
  elementClass: BlrTabBar,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
