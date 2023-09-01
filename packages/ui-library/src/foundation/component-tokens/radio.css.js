import { css } from "lit";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: radioLight, tokenizedDark: radioDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { SM, MD, LG, LabelNextToControl, Legend } = semanticTokens.Forms;
    const { Radio } = componentTokens.Forms;

    return css`
      .blr-radio-group {
        display: flex;
        align-items: flex-start;
        position: relative;
        flex-flow: row wrap;

        &.vertical {
          flex-direction: column;
        }

        .group-error {
          margin-top: 0.5rem;
          display: block;
          width: 100%;

          &.sm {
            margin-left: calc(
              1rem + ${Radio.Control.Background.Unselected.Rest} + ${Radio.SM.ContentRow.ItemSpacing} - 1px
            );
          }

          &.md {
            margin-left: calc(
              1rem + ${Radio.Control.Background.Unselected.Rest} + ${Radio.MD.ContentRow.ItemSpacing} - 1px
            );
          }

          &.lg {
            margin-left: calc(
              1rem + ${Radio.Control.Background.Unselected.Rest} + ${Radio.LG.ContentRow.ItemSpacing} - 1px
            );
          }
        }

        &.sm {
          gap: ${Radio.SM.ContentRow.ItemSpacing};
          padding: ${Radio.SM.ContentRow.Padding};
        }

        &.md {
          gap: ${Radio.MD.ContentRow.ItemSpacing};
          padding: ${Radio.MD.ContentRow.Padding};
        }

        &.lg {
          gap: ${Radio.LG.ContentRow.ItemSpacing};
          padding: ${Radio.LG.ContentRow.Padding};
        }
      }

      .blr-radio {
        display: flex;
        transition: all 0.25s ease 0s;

        .blr-form-label-inline {
          color: ${LabelNextToControl.Rest};
          transition: all 0.25s ease 0s;
          display: flex;
          align-items: center;
        }

        .input-control {
          position: relative;
          transition: all 0.25s ease 0s;
          appearance: none;
          margin: 0;
          border-radius: ${Radio.ControlBorderRadius};
          display: grid;
          place-content: center;

          &::before {
            content: "";
            transition: all 0.25s ease 0s;
            border-radius: ${Radio.ControlBorderRadius};
          }
        }

        .label-wrapper {
          display: flex;
          flex-direction: column;

          .hint-wrapper,
          .error-wrapper {
            flex-basis: 100%;

            .blr-form-hint {
              gap: 0;
            }
          }
        }

        &.sm {
          gap: ${Radio.SM.ContentRow.ItemSpacing};
          padding: ${Radio.SM.ContentRow.Padding};

          .input-control {
            margin-top: ${Radio.SM.ControlWrapper.TopMargin};
          }

          .label-wrapper {
            padding-top: ${Radio.SM.ContentCol.PaddingTop};
            gap: ${Radio.SM.ContentCol.ItemSpacing};

            .hint-wrapper {
              padding: ${SM.CaptionComponent.Padding};
              gap: ${SM.CaptionComponent.ItemSpacing};
            }

            .blr-form-label-inline {
              font-family: ${SM.LabelNextToControl.fontFamily}, sans-serif;
              font-weight: ${SM.LabelNextToControl.fontWeight};
              line-height: ${SM.LabelNextToControl.lineHeight};
              font-size: ${SM.LabelNextToControl.fontSize};
            }
          }
        }

        &.md {
          gap: ${Radio.MD.ContentRow.ItemSpacing};
          padding: ${Radio.MD.ContentRow.Padding};

          .input-control {
            margin-top: ${Radio.MD.ControlWrapper.TopMargin};
          }

          .label-wrapper {
            padding-top: ${Radio.MD.ContentCol.PaddingTop};
            gap: ${Radio.MD.ContentCol.ItemSpacing};

            .hint-wrapper {
              padding: ${MD.CaptionComponent.Padding};
              gap: ${MD.CaptionComponent.ItemSpacing};
            }

            .blr-form-label-inline {
              font-family: ${MD.LabelNextToControl.fontFamily}, sans-serif;
              font-weight: ${MD.LabelNextToControl.fontWeight};
              line-height: ${MD.LabelNextToControl.lineHeight};
              font-size: ${MD.LabelNextToControl.fontSize};
            }
          }
        }

        &.lg {
          gap: ${Radio.LG.ContentRow.ItemSpacing};
          padding: ${Radio.LG.ContentRow.Padding};

          .input-control {
            margin-top: ${Radio.LG.ControlWrapper.TopMargin};
          }

          .label-wrapper {
            padding-top: ${Radio.LG.ContentCol.PaddingTop};
            gap: ${Radio.LG.ContentCol.ItemSpacing};

            .hint-wrapper {
              padding: ${LG.CaptionComponent.Padding};
              gap: ${LG.CaptionComponent.ItemSpacing};
            }

            .blr-form-label-inline {
              font-family: ${LG.LabelNextToControl.fontFamily}, sans-serif;
              font-weight: ${LG.LabelNextToControl.fontWeight};
              line-height: ${LG.LabelNextToControl.lineHeight};
              font-size: ${LG.LabelNextToControl.fontSize};
            }
          }
        }

        &:not(.error) {
          .input-control {
            background-color: ${Radio.Control.Background.Unselected.Fill.Rest};
            width: ${Radio.Control.Background.Unselected.Rest};
            min-width: ${Radio.Control.Background.Unselected.Rest};
            height: ${Radio.Control.Background.Unselected.Rest};
            min-height: ${Radio.Control.Background.Unselected.Rest};

            &::before {
              background-color: ${Radio.Control.Foreground.Unselected.Fill.Rest};
              width: ${Radio.Control.Foreground.Unselected.Rest};
              height: ${Radio.Control.Foreground.Unselected.Rest};
            }

            &:hover {
              &:not(.disabled, .readonly) {
                background-color: ${Radio.Control.Background.Unselected.Fill.Hover};
                width: ${Radio.Control.Background.Unselected.Hover};
                height: ${Radio.Control.Background.Unselected.Hover};

                &::before {
                  content: "";
                  background-color: ${Radio.Control.Foreground.Unselected.Fill.Hover};
                  width: ${Radio.Control.Foreground.Unselected.Hover};
                  height: ${Radio.Control.Foreground.Unselected.Hover};
                }

                + .label-wrapper {
                  .blr-form-label-inline {
                    color: ${LabelNextToControl.Hover};
                  }
                }
              }
            }

            &:active {
              &:not(.disabled, .readonly) {
                background-color: ${Radio.Control.Background.Unselected.Fill.Pressed};
                width: ${Radio.Control.Background.Unselected.Pressed};
                height: ${Radio.Control.Background.Unselected.Pressed};

                &::before {
                  content: "";
                  background-color: ${Radio.Control.Foreground.Unselected.Fill.Pressed};
                  width: ${Radio.Control.Foreground.Unselected.Pressed};
                  height: ${Radio.Control.Foreground.Unselected.Pressed};
                }

                + .label-wrapper {
                  .blr-form-label-inline {
                    color: ${LabelNextToControl.Pressed};
                  }
                }
              }
            }

            &:focus {
              background-color: ${Radio.Control.Background.Unselected.Fill.Focus};
              width: ${Radio.Control.Background.Unselected.Focus};
              height: ${Radio.Control.Background.Unselected.Focus};
              outline: black solid 2px;
              outline-offset: 2px;

              &::before {
                content: "";
                background-color: ${Radio.Control.Foreground.Unselected.Fill.Focus};
                width: ${Radio.Control.Foreground.Unselected.Focus};
                height: ${Radio.Control.Foreground.Unselected.Focus};
              }

              + .label-wrapper {
                .blr-form-label-inline {
                  color: ${LabelNextToControl.Focus};
                }
              }
            }

            &.checked,
            &:checked {
              background-color: ${Radio.Control.Background.Selected.Fill.Rest};

              &::before {
                content: "";
                background-color: ${Radio.Control.Foreground.Selected.Fill.Rest};
                width: ${Radio.Control.Foreground.Selected.Rest};
                height: ${Radio.Control.Foreground.Selected.Rest};
              }

              &:hover {
                background-color: ${Radio.Control.Background.Selected.Fill.Hover};
                width: ${Radio.Control.Background.Selected.Hover};
                height: ${Radio.Control.Background.Selected.Hover};

                &::before {
                  content: "";
                  background-color: ${Radio.Control.Foreground.Selected.Fill.Hover};
                  width: ${Radio.Control.Foreground.Selected.Hover};
                  height: ${Radio.Control.Foreground.Selected.Hover};
                }
              }

              &:active {
                background-color: ${Radio.Control.Background.Selected.Fill.Pressed};
                width: ${Radio.Control.Background.Selected.Pressed};
                height: ${Radio.Control.Background.Selected.Pressed};

                &::before {
                  content: "";
                  background-color: ${Radio.Control.Foreground.Selected.Fill.Pressed};
                  width: ${Radio.Control.Foreground.Selected.Pressed};
                  height: ${Radio.Control.Foreground.Selected.Pressed};
                }
              }

              &:disabled {
                background-color: ${Radio.Control.Background.Selected.Fill.Disabled};
                width: ${Radio.Control.Background.Selected.Disabled};
                height: ${Radio.Control.Background.Selected.Disabled};

                &::before {
                  content: "";
                  background-color: ${Radio.Control.Foreground.Selected.Fill.Disabled};
                  width: ${Radio.Control.Foreground.Selected.Disabled};
                  height: ${Radio.Control.Foreground.Selected.Disabled};
                }
              }

              &[readonly] {
                background-color: ${Radio.Control.Background.Selected.Fill.ReadOnly};
                width: ${Radio.Control.Background.Selected.ReadOnly};
                height: ${Radio.Control.Background.Selected.ReadOnly};

                &::before {
                  content: "";
                  background-color: ${Radio.Control.Foreground.Selected.Fill.ReadOnly};
                  width: ${Radio.Control.Foreground.Selected.ReadOnly};
                  height: ${Radio.Control.Foreground.Selected.ReadOnly};
                }
              }
            }

            &:disabled {
              cursor: not-allowed;
              background-color: ${Radio.Control.Background.Unselected.Fill.Disabled};
              width: ${Radio.Control.Background.Unselected.Disabled};
              height: ${Radio.Control.Background.Unselected.Disabled};

              &::before {
                content: "";
                background-color: ${Radio.Control.Foreground.Unselected.Fill.Disabled};
                width: ${Radio.Control.Foreground.Unselected.Disabled};
                height: ${Radio.Control.Foreground.Unselected.Disabled};
              }

              + .label-wrapper {
                .blr-form-label-inline {
                  cursor: not-allowed;
                  color: ${LabelNextToControl.Disabled};
                }
              }
            }
          }
        }

        &.error {
          .input-control {
            background-color: ${Radio.Control.Background.Unselected.Fill.Error};
            width: ${Radio.Control.Background.Unselected.Error};
            height: ${Radio.Control.Background.Unselected.Error};

            &::before {
              background-color: ${Radio.Control.Foreground.Unselected.Fill.Error};
              width: ${Radio.Control.Foreground.Unselected.Error};
              height: ${Radio.Control.Foreground.Unselected.Error};
            }

            + .label-wrapper {
              .blr-form-label-inline {
                color: ${LabelNextToControl.Error};
              }
            }
          }
        }

        &.disabled {
          .input-control {
            background-color: ${Radio.Control.Background.Unselected.Fill.Disabled};
            width: ${Radio.Control.Background.Unselected.Disabled};
            height: ${Radio.Control.Background.Unselected.Disabled};

            &::before {
              content: "";
              background-color: ${Radio.Control.Foreground.Unselected.Fill.Disabled};
              width: ${Radio.Control.Foreground.Unselected.Disabled};
              height: ${Radio.Control.Foreground.Unselected.Disabled};
            }

            + .label-wrapper {
              .blr-form-label-inline {
                color: ${LabelNextToControl.Disabled};
              }
            }
          }
        }

        &.readonly {
          .input-control {
            background-color: ${Radio.Control.Background.Unselected.Fill.ReadOnly};
            width: ${Radio.Control.Background.Unselected.ReadOnly};
            height: ${Radio.Control.Background.Unselected.ReadOnly};

            &::before {
              content: "";
              background-color: ${Radio.Control.Foreground.Unselected.Fill.ReadOnly};
              width: ${Radio.Control.Foreground.Unselected.ReadOnly};
              height: ${Radio.Control.Foreground.Unselected.ReadOnly};
            }

            + .label-wrapper {
              .blr-form-label-inline {
                color: ${LabelNextToControl.ReadOnly};
              }
            }
          }
        }

        .blr-form-hint {
          margin-top: 0;

          &.sm {
            padding: ${SM.CaptionComponent.CaptionLabelWrapper.Padding};
            font-family: ${SM.Caption.fontFamily}, sans-serif;
            font-size: ${SM.Caption.fontSize};
          }

          &.md {
            padding: ${MD.CaptionComponent.CaptionLabelWrapper.Padding};
            font-family: ${MD.Caption.fontFamily}, sans-serif;
            font-size: ${MD.Caption.fontSize};
          }

          &.lg {
            padding: ${LG.CaptionComponent.CaptionLabelWrapper.Padding};
            font-family: ${LG.Caption.fontFamily}, sans-serif;
            font-size: ${LG.Caption.fontSize};
          }
        }
      }

      .blr-legend {
        &.sm {
          font-weight: ${SM.Legend.fontWeight};
          font-size: ${SM.Legend.fontSize};
          font-family: ${SM.Legend.fontFamily}, sans-serif;
          line-height: ${SM.Legend.lineHeight};
          color: ${Legend.Default};
        }

        &.md {
          font-weight: ${MD.Legend.fontWeight};
          font-size: ${MD.Legend.fontSize};
          font-family: ${MD.Legend.fontFamily}, sans-serif;
          line-height: ${MD.Legend.lineHeight};
          color: ${Legend.Default};
        }

        &.lg {
          font-weight: ${LG.Legend.fontWeight};
          font-size: ${LG.Legend.fontSize};
          font-family: ${LG.Legend.fontFamily}, sans-serif;
          line-height: ${LG.Legend.lineHeight};
          color: ${Legend.Default};
        }
      }
    `;
  }
);
