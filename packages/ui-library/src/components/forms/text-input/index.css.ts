import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

export const styleCustom = typeSafeNestedCss`
  .blr-text-input {
    display: flex;
    flex-direction: column;
    position: relative;
  }

  .blr-text-input:disabled {
    pointer-events: none;
  }

  .blr-input-icon:hover {
    cursor: pointer;
  }

  .blr-input-icon:disabled {
    cursor: none;
  }
`;
