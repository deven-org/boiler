import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

export const styleCustom = typeSafeNestedCss`
  .blr-label-toggleswitch {
    display: flex;
    align-items: flex-start;

    & > input {
      all: initial;

      &:disabled + label {
        cursor: not-allowed;
        pointer-events: none;
      }

      &:checked {
        &:disabled + label {
          cursor: not-allowed;
          pointer-events: none;
        }
      }

      &:focus {
        outline-offset: 2px;
      }
    }
  }
`;
