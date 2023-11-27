import { Label } from "../../components/forms/textarea/index.stories";
import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: tabBarLight, tokenizedDark: tabBarDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { Silent } = semanticTokens.Action;
  const { IconButton } = componentTokens.Actions;
  const { TabBar } = componentTokens.Navigation;

  return typeSafeNestedCss/* css */ `
      .wrapper-horizontal {
        position: relative;
        display: block;

        &.wrap {
          flex-wrap: wrap;
          justify-content: space-between;
          padding: 0;
        }

        &.browserOverflow {
          padding: 0px 1rem;
        }
      }
      
      .blr-tab-bar-group {
        width: 100%;
        display: flex;
        align-items: start;
        position: relative;

        &.fullWidth {
          justify-content: space-evenly;
          .blr-tab-bar {
            max-width: none;
            .nav-list {
              justify-content: space-between;
            }
          }
        }

_FIX_START {
 "Button arrow should be an iconButton";
 "The IconButton shuld be wrapped, so we can apply Navigation.TabBar.ButtonWrapper.Padding";
}
        button.arrow {
          background: none;
          color: ${Silent.Icon.Rest};
          border: none;
          font: inherit;
          cursor: pointer;
          outline: inherit;
          background-color: ${Silent.SurfaceFill.Rest};
          border-color: ${Silent.SurfaceStroke.Rest};
          color: ${Silent.Icon.Rest};
          line-height: 0;

          

          &.sm {
            padding: ${IconButton.Container.Padding.SM};
            &.left {
              margin: ${TabBar.ButtonWrapper.Padding.Leading.SM};
            }
            &.right {
              margin: ${TabBar.ButtonWrapper.Padding.Trailing.SM};
            }
          }

          &.md {
            padding: ${IconButton.Container.Padding.MD};
            &.left {
              margin: ${TabBar.ButtonWrapper.Padding.Leading.MD};
            }
            &.right {
              margin: ${TabBar.ButtonWrapper.Padding.Trailing.MD};
            }
            
          }

          &.lg {
            padding: ${IconButton.Container.Padding.LG};
            &.left {
              margin: ${TabBar.ButtonWrapper.Padding.Leading.LG};
            }
            &.right {
              margin: ${TabBar.ButtonWrapper.Padding.Trailing.LG};
            }
          }
        }
_FIX_END { "" }

        .blr-tab-bar {
          position: relative;
          width: 100%;
          overflow-x: auto;
          _FIX_padding-top: 15px;
          _FIX_padding-bottom: 15px;
          _FIX_margin-bottom: -15px;
          max-width: calc(100% - 2rem);

          .nav-list {
            display: flex;
            list-style: none;
            _FIX_padding: 0 0.5rem;
            padding: 0;
            margin: 0;
            align-items: center;

            &.left {
              justify-content: flex-start;
            }

            &.center {
              justify-content: center;
            }

            &.right {
              justify-content: flex-end;
            }

            &.space-between {
              justify-content: space-between;
            }

            &.space-around {
              justify-content: space-around;
            }

            &.space-evenly {
              justify-content: space-evenly;
            }

            &.wrap {
              flex-wrap: wrap;
              overflow-x: visible;
              padding: 0;
            }

            .nav-item-container {
              display: flex;
              flex-direction: column;
              flex: 0 1 0px;
              justify-content: center;
              overflow: clip;


              &:focus-within {
                outline: 2px solid black;
                outline-offset: -2px;
                border-radius: 4px;
              }

              &.fullWidth {
                flex: 1 1 0px;
              }

              &.active {
                .nav-item-content-wrapper {
                  > a {
                  color: ${TabBar.Tab.Label.TextColor.Active.Rest};

                  &:hover {
                    &:not(.disabled) {
                      > p {
                        color: ${TabBar.Tab.Label.TextColor.Active.Hover};
                      }

                      > blr-icon {
                        color: ${TabBar.Tab.Icon.IconColor.Active.Hover};
                      }
                    }
                  }

                  &:focus {
                    &:not(.disabled) {
                      > p {
                        color: ${TabBar.Tab.Label.TextColor.Active.Focus};
                      }

                      > blr-icon {
                        color: ${TabBar.Tab.Icon.IconColor.Active.Focus};
                      }
                    }
                  }

                  &:active {
                    &:not(.disabled) {
                      > p {
                        color: ${TabBar.Tab.Label.TextColor.Active.Pressed};
                      }

                      > blr-icon {
                        color: ${TabBar.Tab.Icon.IconColor.Active.Pressed};
                      }
                    }
                  }
                }
                }
              }

              .nav-item-content-wrapper {
                display: flex;
                justify-content: center;
                &:focus-visible {
                  outline: none;
                }

                > a {
                  color: ${TabBar.Tab.Label.TextColor.Inactive.Rest};
                  display: flex;
                  text-decoration: none;
                  align-items: center;
                  flex-shrink: 0;

                  > blr-icon {
                    align-items: center;
                  }

                  &:focus-visible {
                    outline: none;
                  }

                  &:hover {
                    &:not(.disabled) {
                      > p {
                        color: ${TabBar.Tab.Label.TextColor.Inactive.Hover};
                      }
                      > blr-icon {
                        color: ${TabBar.Tab.Icon.IconColor.Inactive.Hover};
                      }
                    }
                  }


                  &:active {
                    &:not(.disabled) {
                      > p {
                        color: ${TabBar.Tab.Label.TextColor.Inactive.Pressed};
                      }
                      > blr-icon {
                        color: ${TabBar.Tab.Icon.IconColor.Inactive.Pressed};
                      }
                    }
                  }

                  &:focus {
                    &:not(.disabled) {
                      > p {
                        color: ${TabBar.Tab.Label.TextColor.Inactive.Focus};
                      }
                      > blr-icon {
                        color: ${TabBar.Tab.Icon.IconColor.Inactive.Focus};
                      }
                    }
                  }

                  &.disabled {
                    > slot {
                      color: ${TabBar.Tab.Label.TextColor.Inactive.Disabled}
                    }

                    > blr-icon {
                      color: ${TabBar.Tab.Icon.IconColor.Inactive.Disabled};
                    }
                  }

                  &.leading {
                    flex-direction: row;
                  }

                  &.trailing {
                    flex-direction: row-reverse;
                  }

                  > p {
                    margin-block-start: 0;
                    margin-block-end: 0;
                    margin-inline-start: 0;
                    margin-inline-end: 0;
                    padding-block-start: 0;
                    padding-block-end: 0;
                    padding-inline-start: 0;
                    padding-inline-end: 0;
                  }
                }
              }

              .nav-item-underline {
                opacity: ${TabBar.Tab.HighlightLine.Opacity.Inactive.Rest};
              }

              &.sm {
                padding-top: ${TabBar.Tab.ContentCol.PaddingTop.SM};
                gap: ${TabBar.Tab.ContentCol.ItemSpacing.SM};

                .nav-item-content-wrapper {
                  > a {
                    padding-left: ${TabBar.Tab.ContentRow.PaddingLeftRight.SM};
                    padding-right: ${TabBar.Tab.ContentRow.PaddingLeftRight.SM};
                    gap: ${TabBar.Tab.ContentRow.ItemSpacing.SM};
                    _FIX_LineHeight: "not ideal yet - this needs taken care of";
                    line-height:  1rem;

                    > blr-icon {
                      width: ${TabBar.Tab.Icon.IconSize.SM};
                      height: ${TabBar.Tab.Icon.IconSize.SM};
                    }
                  }
                }

                .nav-item-underline {
                  height: ${TabBar.Tab.HighlightLine.Height.SM};
                }
              }

              &.md {
                padding-top: ${TabBar.Tab.ContentCol.PaddingTop.MD};
                gap: ${TabBar.Tab.ContentCol.ItemSpacing.MD};

                .nav-item-content-wrapper {
                  > a {
                    padding-left: ${TabBar.Tab.ContentRow.PaddingLeftRight.MD};
                    padding-right: ${TabBar.Tab.ContentRow.PaddingLeftRight.MD};
                    gap: ${TabBar.Tab.ContentRow.ItemSpacing.MD};
                    _FIX_LineHeight: "not ideal yet - this needs taken care of";
                    line-height:  1rem;

                    > blr-icon {
                      width: ${TabBar.Tab.Icon.IconSize.MD};
                      height: ${TabBar.Tab.Icon.IconSize.MD};
                    }
                  }
                }

                .nav-item-underline {
                  height: ${TabBar.Tab.HighlightLine.Height.MD};
                }
              }

              &.lg {
                padding-top: ${TabBar.Tab.ContentCol.PaddingTop.LG};
                gap: ${TabBar.Tab.ContentCol.ItemSpacing.LG};

                .nav-item-content-wrapper {
                  > a {
                    padding-left: ${TabBar.Tab.ContentRow.PaddingLeftRight.LG};
                    padding-right: ${TabBar.Tab.ContentRow.PaddingLeftRight.LG};
                    gap: ${TabBar.Tab.ContentRow.ItemSpacing.LG};
                    _FIX_LineHeight: "not ideal yet - this needs taken care of";
                    line-height:  1.5rem;

                    > blr-icon {
                      width: ${TabBar.Tab.Icon.IconSize.LG};
                      height: ${TabBar.Tab.Icon.IconSize.LG};
                    }
                  }
                }

                .nav-item-underline {
                  height: ${TabBar.Tab.HighlightLine.Height.LG};
                }
              }

              .nav-item-underline {
                opacity: 0;
              }

              &.active {
                &:not(.disabled) {
                  .nav-item-underline {
                    background-color: ${TabBar.Tab.HighlightLine.BackgroundColor.Active.Rest};
                    opacity: ${TabBar.Tab.HighlightLine.Opacity.Active.Rest};
                  }
              }
            }
          }
        }
      }
    `;
});
