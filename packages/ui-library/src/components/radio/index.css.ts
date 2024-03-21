import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

export const styleCustom = typeSafeNestedCss`
  .blr-radio:disabled {
    pointer-events: none;
  }
`;
