import React from 'react';
import { createComponent } from '@lit-labs/react';

import { BlrFloater } from '.';

export const BlrFloaterReact = createComponent({
    tagName: 'blr-floater',
    elementClass: BlrFloater,
    react: React
})
