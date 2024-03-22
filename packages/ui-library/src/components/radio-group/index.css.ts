import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

export const styleCustom = typeSafeNestedCss`
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
