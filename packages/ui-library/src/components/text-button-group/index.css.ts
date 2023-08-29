import { css } from "lit";

export const styleCustom = css`
  .blr-text-button-group {
    align-items: center;
    display: flex;
    cursor: pointer;
    outline-offset: -2px;
  }

  .blr-text-button-group:disabled {
    pointer-events: none;
  }

  .blr-text-button-group:focus {
    /*  Component Tokens for Outline are missing */
    /* Need to make sure we meet AA requirements with this custom outline */
    outline: 2px solid black;
  }

  .wrapper {
    display: flex;
   &.space-between {
   justify-content: space-between;
   }
   &.space-around {
   justify-content: space-around;
   } 
   &.flex-end {
   justify-content: flex-end;
   }
   &.flex-start {
   justify-content: flex-start;
   }
   &.center {
   justify-content: center;
   }
    &.one {
      background-color: red;
    }
    &.two {
      background-color: blue;
    }
    &.three {
      background-color: yellow;
    }
   }
   `;
