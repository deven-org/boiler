import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrTabBar } from '.';

export const BlrTextInputReact = createComponent({
  tagName: 'blr-text-input',
  elementClass: BlrTabBar,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
