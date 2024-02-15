import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

export const styleCustom = typeSafeNestedCss`
  .blr-icon-link {
    align-items: center;
    justify-content: center;
    display: inline-flex;
    cursor: pointer;
    padding-right: 3px;
    padding-left: 3px;
  }

  .blr-icon-button:focus {
    /*  Component Tokens for Outline are missing */
    /* Need to make sure we meet AA requirements with this custom outline */
    outline: 2px solid black;
  }
`;
