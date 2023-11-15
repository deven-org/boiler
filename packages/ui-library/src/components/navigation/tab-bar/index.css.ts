import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

export const styleCustom = typeSafeNestedCss`
  .panel-wrapper {
    margin-top: 2rem;

    > slot {
      display: none;

      &.active {
        display: block;
      }
    }
  }
`;
