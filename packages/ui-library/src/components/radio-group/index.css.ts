import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = typeSafeNestedCss`
  .blr-radio,
  .blr-legend,
  .caption-group {
    margin: 0 1rem;
  }

  .vertical > div {
    flex-direction: column;
  }

  .horizontal > div {
    flex-direction: row;
  }
`;
