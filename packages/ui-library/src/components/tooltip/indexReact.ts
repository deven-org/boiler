import React from 'react';
import { createComponent } from '@lit-labs/react';

import { BlrTooltip } from '.';

export const BlrTooltipReact = createComponent({
  tagName: 'blr-tooltip',
  elementClass: BlrTooltip,
  react: React,
});
