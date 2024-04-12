import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

export const staticStyles = typeSafeNestedCss`
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
