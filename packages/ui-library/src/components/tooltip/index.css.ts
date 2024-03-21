import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

export const styleCustom = typeSafeNestedCss`
  :host {
    display: inline-block;
  }
`;
