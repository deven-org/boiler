import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrButtonGroup } from '.';

export const BlrButtonGroupReact = createComponent({
  tagName: 'blr-button-group',
  elementClass: BlrButtonGroup,
  react: React,
  events: {
    onClick: 'pointerdown' as EventName<PointerEvent>,
  },
});
