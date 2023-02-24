import { css } from 'lit';

export const styleCustom = css`
  /* correct icon sizes will come from figma soon. this will probably also be outsourced to a component token */

  :host {
    line-height: 0;
  }

  .blr-icon.xs {
    height: 10px;
    width: 10px;
  }

  .blr-icon.sm {
    height: 12px;
    width: 12px;
  }

  .blr-icon.md {
    height: 14px;
    width: 14px;
  }

  .blr-icon.lg {
    height: 16px;
    width: 16px;
  }

  .blr-icon.xl {
    height: 18px;
    width: 18px;
  }
`;
