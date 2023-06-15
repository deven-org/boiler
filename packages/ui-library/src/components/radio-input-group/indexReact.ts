import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrRadioGroup } from '.';

export const BlrRadioInputReact = createComponent({
  tagName: 'blr-radio',
  elementClass: BlrRadioGroup,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
