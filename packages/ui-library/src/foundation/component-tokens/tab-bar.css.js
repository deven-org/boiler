import { css } from "lit";
import { renderThemedCssStrings } from "../_tokens-generated/index.pseudo.generated";

export const { tokenizedLight: tabBarLight, tokenizedDark: tabBarDark } = renderThemedCssStrings(
  (componentTokens, semanticTokens) => {
    const { Silent } = semanticTokens.Action;
    const { IconButton } = componentTokens.Action;
    const { TabBar } = componentTokens.Navigation;

    return css`
      .blr-tab-bar-group {
        width: 100%;
        display: flex;
        align-items: center;

        &.fullWidth {
          .blr-tab-bar {
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
          background-color: white;

          &.left {
            position: absolute;
            left: 1.8rem;
            top: 50%;
            z-index: 2;
            transform: translateY(-50%);
          }

          &.right {
            position: absolute;
            right: 1.8rem;
            top: 50%;
            z-index: 2;
            transform: translateY(-50%);
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
          align-items: center;
          position: relative;
          width: 100%;
          overflow: auto;
          padding-bottom: 15px;
          margin-bottom: -15px;
          max-width: calc(100% - 2rem);

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
            }

            .nav-item-container {
              display: flex;
              flex-direction: column;
              flex: 0 1 0px;

              &.fullWidth {
                flex: 1 1 0px;
              }

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
