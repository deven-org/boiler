import React from 'react';
import { createComponent, EventName } from '@lit-labs/react';

import { BlrInputFieldText } from '.';

export const BlrInputFieldTextReact = createComponent({
  tagName: 'blr-input-field-text',
  elementClass: BlrInputFieldText,
  react: React,
  events: {
    onInput: 'pointerdown' as EventName<PointerEvent>,
    onFocus: 'pointerdown' as EventName<PointerEvent>,
  },
});
