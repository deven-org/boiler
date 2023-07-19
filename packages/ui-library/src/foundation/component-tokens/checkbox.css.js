import { css } from "lit";
import { componentTokens, semanticTokens } from "../_tokens-generated/index.generated";

const { Checkbox } = componentTokens.Forms;
const { SM, MD, LG, LabelNextToControl } = semanticTokens.Forms;

export const checkbox = css`
  .blr-label-checkbox {
    display: flex;
    gap: ${Checkbox.SM.MainContainer.ItemSpacing};

    > input {
      outline-offset: 2px;
      border-radius: ${Checkbox.ControlBorderRadius};
      background-color: ${Checkbox.Control.Foreground.Unselected.Fill.Rest};
      border: 1px solid ${Checkbox.Control.Background.Unselected.Stroke.Rest};
      -moz-appearance: none;
      -webkit-appearance: none;
      -o-appearance: none;
    }

    .label-container {
      display: flex;
    }

    &.sm {
      > input {
        margin-top: ${Checkbox.SM.ControlWrapper.TopMargin};
        width: ${Checkbox.SM.Control.Foreground.Sizing.Unselected.Rest};
        height: ${Checkbox.SM.Control.Foreground.Sizing.Unselected.Rest};
      }

      .label-container {
        padding-top: ${Checkbox.SM.ContentCol.PaddingTop};
        gap: ${Checkbox.SM.ContentCol.ItemSpacing};

        > label {
          font-family: ${SM.LabelNextToControl.fontFamily}, sans-serif;
          font-weight: ${SM.LabelNextToControl.fontWeight} !important;
          line-height: ${SM.LabelNextToControl.lineHeight};
          font-size: ${SM.LabelNextToControl.fontSize};
        }
      }
    }

    &.md {
      > input {
        margin-top: ${Checkbox.MD.ControlWrapper.TopMargin};
        width: ${Checkbox.MD.Control.Foreground.Sizing.Unselected.Rest};
        height: ${Checkbox.MD.Control.Foreground.Sizing.Unselected.Rest};
      }

      .label-container {
        padding-top: ${Checkbox.MD.ContentCol.PaddingTop};
        gap: ${Checkbox.MD.ContentCol.ItemSpacing};

        > label {
          font-family: ${MD.LabelNextToControl.fontFamily}, sans-serif;
          font-weight: ${MD.LabelNextToControl.fontWeight} !important;
          line-height: ${MD.LabelNextToControl.lineHeight};
          font-size: ${MD.LabelNextToControl.fontSize};
        }
      }
    }

    &.lg {
      > input {
        margin-top: ${Checkbox.LG.ControlWrapper.TopMargin};
        width: ${Checkbox.LG.Control.Foreground.Sizing.Unselected.Rest};
        height: ${Checkbox.LG.Control.Foreground.Sizing.Unselected.Rest};
      }

      .label-container {
        padding-top: ${Checkbox.LG.ContentCol.PaddingTop};
        gap: ${Checkbox.LG.ContentCol.ItemSpacing};

        > label {
          font-family: ${LG.LabelNextToControl.fontFamily}, sans-serif;
          font-weight: ${LG.LabelNextToControl.fontWeight} !important;
          line-height: ${LG.LabelNextToControl.lineHeight};
          font-size: ${LG.LabelNextToControl.fontSize};
        }
      }
    }
  }
`;
