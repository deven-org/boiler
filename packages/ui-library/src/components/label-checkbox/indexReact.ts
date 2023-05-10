import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrLabelCheckbox } from '.';

export const BlrLabelCheckboxReact = createComponent({
  tagName: 'blr-label-checkbox',
  elementClass: BlrLabelCheckbox,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
