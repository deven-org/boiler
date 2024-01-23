import React from 'react';
import { createComponent } from '@lit-labs/react';

import { BlrTooltipBubble } from '.';

export const BlrTooltipBubbleReact = createComponent({
  tagName: 'blr-tooltip-bubble',
  elementClass: BlrTooltipBubble,
  react: React,
});
