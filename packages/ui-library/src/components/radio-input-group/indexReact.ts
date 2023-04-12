import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrRadioInputGroup } from '.';

export const BlrRadioInputReact = createComponent({
  tagName: 'blr-radio-input',
  elementClass: BlrRadioInputGroup,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
