import { css } from "lit";
import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: tabBarLight, tokenizedDark: tabBarDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { Silent } = semanticTokens.Action;
    const { IconButton } = componentTokens.Action;
    const { TabBar } = componentTokens.Navigation;

    return css`
      .blr-tab-bar-group {
        overflow-x: auto;
        padding: 0 0 0.7rem;
        width: 100%;

        &.fullWidth {
          .blr-tab-bar {
            .nav-list {
              justify-content: space-between;
            }
          }
        }

        .blr-tab-bar {
          display: flex;
          align-items: center;
          position: relative;
          width: 100%;

          &.left {
            justify-content: flex-start;
          }

          &.center {
            justify-content: center;
          }

          &.right {
            justify-content: flex-end;
          }

          .tab-bar-navigation {
            position: absolute;
            width: 100%;

            .arrow {
              background: none;
              color: ${Silent.Icon.Rest};
              border: none;
              padding: 0;
              font: inherit;
              cursor: pointer;
              outline: inherit;
              font-size: 24px;

              &.left {
                float: left;
              }

              &.right {
                float: right;
              }

              &.sm {
                padding: ${IconButton.SM.Padding};
                gap: ${IconButton.SM.ItemSpacing};
              }

              &.md {
                padding: ${IconButton.MD.Padding};
                gap: ${IconButton.MD.ItemSpacing};
              }

              &.lg {
                padding: ${IconButton.LG.Padding};
                gap: ${IconButton.LG.ItemSpacing};
              }
            }
          }

          .nav-list {
            display: flex;
            list-style: none;
            padding: 0 1.5rem;
            margin: 0;
            align-items: center;
            z-index: 1;

            &.left {
              justify-content: flex-start;
            }

            &.center {
              justify-content: center;
            }

            &.right {
              justify-content: flex-end;
            }

            &.wrap {
              flex-wrap: wrap;
            }

            .nav-item-container {
              display: flex;
              flex-direction: column;
              flex: 0 1 0px;

              .nav-item-content-wrapper {
                display: flex;
                justify-content: center;

                > a {
                  color: ${TabBar.Tab.Label.Unselected};
                  display: flex;
                  text-decoration: none;
                  align-items: center;
                  flex-shrink: 0;

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

              &.sm {
                padding-top: ${TabBar.Tab.SM.ContentCol.TopPadding};
                gap: ${TabBar.Tab.SM.ContentCol.ItemSpacing};

                .nav-item-content-wrapper {
                  > a {
                    padding-left: ${TabBar.Tab.SM.ContentRow.PaddingLeftRight};
                    padding-right: ${TabBar.Tab.SM.ContentRow.PaddingLeftRight};
                    gap: ${TabBar.Tab.SM.ContentRow.ItemSpacing};
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
                .nav-item-underline {
                  background-color: ${TabBar.Tab.HighlightLine.SurfaceFill};
                  opacity: ${TabBar.Tab.HighlightLine.Selected.Opacity};
                }
              }
            }
          }
        }
      }
    `;
  }
);
