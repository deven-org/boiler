import { typeSafeNestedCss } from "../../utils/nested-typesafe-css-literals";

import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: tabBarLight, tokenizedDark: tabBarDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { Silent } = semanticTokens.Action;
  const { IconButton } = componentTokens.Action;
  const { TabBar } = componentTokens.Navigation;

  return typeSafeNestedCss`
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
        align-items: center;
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

        .arrow {
          background: none;
          color: ${Silent.Icon.Rest};
          border: none;
          font: inherit;
          cursor: pointer;
          outline: inherit;
          background-color: ${Silent.SurfaceFill.Rest};
          border-color: ${Silent.SurfaceStroke.Rest};
          color: ${Silent.Icon.Rest};


          &.left {
            padding-top: 15px;
          }

          &.right {
            padding-top: 15px;
          }

          &.sm {
            gap: ${IconButton.SM.ItemSpacing};
          }

          &.md {
            gap: ${IconButton.MD.ItemSpacing};
          }

          &.lg {
            gap: ${IconButton.LG.ItemSpacing};
          }
        }

        .blr-tab-bar {
          position: relative;
          width: 100%;
          overflow-x: auto;
          padding-top: 15px;
          padding-bottom: 15px;
          margin-bottom: -15px;
          max-width: calc(100% - 2rem);

          .nav-list {
            display: flex;
            list-style: none;
            padding: 0 0.5rem;
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


              &:focus-within {
                outline: 2px solid black;
                border-radius: 4px;
              }

              &.fullWidth {
                flex: 1 1 0px;
              }

              &.active {
                .nav-item-content-wrapper {
                  > a {
                  color: ${TabBar.Tab.Label.Selected.Rest};

                  &:hover {
                    &:not(.disabled) {
                      > p {
                        color: ${TabBar.Tab.Label.Selected.Hover};
                      }

                      > blr-icon {
                        color: ${TabBar.Tab.Icon.Selected.Hover};
                      }
                    }
                  }

                  &:focus {
                    &:not(.disabled) {
                      > p {
                        color: ${TabBar.Tab.Label.Selected.Focus};
                      }

                      > blr-icon {
                        color: ${TabBar.Tab.Icon.Selected.Focus};
                      }
                    }
                  }

                  &:active {
                    &:not(.disabled) {
                      > p {
                        color: ${TabBar.Tab.Label.Selected.Pressed};
                      }

                      > blr-icon {
                        color: ${TabBar.Tab.Icon.Selected.Pressed};
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
                  color: ${TabBar.Tab.Label.Unselected.Rest};
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
                        color: ${TabBar.Tab.Label.Unselected.Hover};
                      }
                      > blr-icon {
                        color: ${TabBar.Tab.Icon.Unselected.Hover};
                      }
                    }
                  }


                  &:active {
                    &:not(.disabled) {
                      > p {
                        color: ${TabBar.Tab.Label.Unselected.Pressed};
                      }
                      > blr-icon {
                        color: ${TabBar.Tab.Icon.Unselected.Pressed};
                      }
                    }
                  }

                  &:focus {
                    &:not(.disabled) {
                      > p {
                        color: ${TabBar.Tab.Label.Unselected.Focus};
                      }
                      > blr-icon {
                        color: ${TabBar.Tab.Icon.Unselected.Focus};
                      }
                    }
                  }

                  &.disabled {
                    > slot {
                      color: ${TabBar.Tab.Label.Unselected.Disabled}
                    }

                    > blr-icon {
                      color: ${TabBar.Tab.Icon.Unselected.Disabled};
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
                opacity: ${TabBar.Tab.HighlightLine.Opacity.Unselected.Rest};
              }

              &.sm {
                padding-top: ${TabBar.Tab.SM.ContentCol.TopPadding};
                gap: ${TabBar.Tab.SM.ContentCol.ItemSpacing};

                .nav-item-content-wrapper {
                  > a {
                    padding-left: ${TabBar.Tab.SM.ContentRow.PaddingLeftRight};
                    padding-right: ${TabBar.Tab.SM.ContentRow.PaddingLeftRight};
                    gap: ${TabBar.Tab.SM.ContentRow.ItemSpacing};

                    > blr-icon {
                      width: ${TabBar.Tab.SM.Icon.Sizing};
                      height: ${TabBar.Tab.SM.Icon.Sizing};
                    }
                  }
                }

                .nav-item-underline {
                  height: ${TabBar.Tab.SM.HighlightLine.Height};
                }
              }

              &.md {
                padding-top: ${TabBar.Tab.MD.ContentCol.TopPadding};
                gap: ${TabBar.Tab.MD.ContentCol.ItemSpacing};

                .nav-item-content-wrapper {
                  > a {
                    padding-left: ${TabBar.Tab.MD.ContentRow.PaddingLeftRight};
                    padding-right: ${TabBar.Tab.MD.ContentRow.PaddingLeftRight};
                    gap: ${TabBar.Tab.MD.ContentRow.ItemSpacing};

                    > blr-icon {
                      width: ${TabBar.Tab.MD.Icon.Sizing};
                      height: ${TabBar.Tab.MD.Icon.Sizing};
                    }
                  }
                }

                .nav-item-underline {
                  height: ${TabBar.Tab.MD.HighlightLine.Height};
                }
              }

              &.lg {
                padding-top: ${TabBar.Tab.LG.ContentCol.TopPadding};
                gap: ${TabBar.Tab.LG.ContentCol.ItemSpacing};

                .nav-item-content-wrapper {
                  > a {
                    padding-left: ${TabBar.Tab.LG.ContentRow.PaddingLeftRight};
                    padding-right: ${TabBar.Tab.LG.ContentRow.PaddingLeftRight};
                    gap: ${TabBar.Tab.MD.ContentRow.ItemSpacing};


                    > blr-icon {
                      width: ${TabBar.Tab.LG.Icon.Sizing};
                      height: ${TabBar.Tab.LG.Icon.Sizing};
                    }
                  }
                }

                .nav-item-underline {
                  height: ${TabBar.Tab.LG.HighlightLine.Height};
                }
              }

              .nav-item-underline {
                opacity: 0;
              }

              &.active {
                &:not(.disabled) {
                  .nav-item-underline {
                    background-color: ${TabBar.Tab.HighlightLine.SurfaceFill.Selected.Rest};
                    opacity: ${TabBar.Tab.HighlightLine.Opacity.Selected.Rest};
                  }
              }
            }
          }
        }
      }
    `;
});
