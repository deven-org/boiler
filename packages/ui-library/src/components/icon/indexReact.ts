import React from 'react';
import { createComponent } from '@lit-labs/react';
import { BlrIcon } from './index.js';

export const BlrButtonTextReact = createComponent({
  tagName: 'blr-icon',
  elementClass: BlrIcon,
  react: React,
});
