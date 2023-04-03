import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

type HintVariant = 'hint' | 'error';

type FormHintType = {
  message: string;
  variant: HintVariant;
};

export const BlrFormHint = ({ message, variant }: FormHintType) => {
  const classes = classMap({
    [`${variant}`]: variant,
  });

  return html`
    <span class="blr-form-hint ${classes}">
      <blr-icon name="${variant === 'error' ? 'blr360Xl' : 'blr360Xl'}"></blr-icon>
      <span>${message}</span>
    </span>
  `;
};
