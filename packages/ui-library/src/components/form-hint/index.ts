import { html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';

type HintVariant = 'hint' | 'error';

type FormHintType = {
  message?: string;
  iconName?: string;
  variant: HintVariant;
};

export const BlrFormHint = ({ message, variant, iconName }: FormHintType) => {
  const classes = classMap({
    [`${variant}`]: variant,
  });

  return html`
    <span class="blr-form-hint sm ${classes}">
      <blr-icon name="${iconName}"></blr-icon>
      <span>${message}</span>
    </span>
  `;
};
