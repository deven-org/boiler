import React from 'react';
import { createComponent, EventName } from '@lit/react';

import { BlrTextInput } from '.';

export const BlrTextInputReact = createComponent({
  tagName: 'blr-text-input',
  elementClass: BlrTextInput,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
