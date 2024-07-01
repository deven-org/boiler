import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  .blr-radio,
  .blr-legend,
  .caption-group {
    margin: 0 1rem;
  }

  .vertical {
    flex-direction: column;
  }

  .horizontal {
    flex-direction: row;
  }
`;
