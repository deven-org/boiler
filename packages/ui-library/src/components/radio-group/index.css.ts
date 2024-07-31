import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  .blr-radio,
  .blr-legend,
  .caption-group {
    margin: 0 1rem;
  }

  .blr-legend {
    padding: 0;
  }

  .horizontal > slot {
    display: flex;
    flex-direction: row;
    column-gap: 1rem;
    height: 40px;
  }

  .vertical > slot {
    flex-direction: column;
  }
`;
