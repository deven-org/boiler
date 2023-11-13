import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

export const styleCustom = typeSafeNestedCss`
  :host {
    display: inline-flex;
    flex-shrink: 0;
    width: 100%;
  }
`;
