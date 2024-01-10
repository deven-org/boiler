import React from 'react';
import { createComponent } from '@lit-labs/react';

import { BlrTooltip } from '.';

export const BlrToolTipReact = createComponent({
  tagName: 'blr-tooltip',
  elementClass: BlrTooltip,
  react: React,
});
