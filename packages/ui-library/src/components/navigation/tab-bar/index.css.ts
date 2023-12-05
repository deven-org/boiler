import { renderThemedCssStrings } from "../../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../../utils/nested-typesafe-css-literals";

export const styleCustom = typeSafeNestedCss`
  .panel-wrapper {
    margin-top: 2rem;

    > slot {
      display: none;

      &.active {
        display: block;
      }
    }
  }
`;

export const { tokenizedLight: tabBarLight, tokenizedDark: tabBarDark } = renderThemedCssStrings((componentTokens, semanticTokens) => {
  const { Silent } = semanticTokens.Action;
  const { IconButton } = componentTokens.Actions;
  const { TabBar } = componentTokens.Navigation;

  /* ToDos
  - [ ] Use Icon Button for pagination-buttons
  - [ ] .nav-item-content-wrapper > a - needs for some reason a lineHeight set, otherwise the height is off. So we need to drill in the appropriate token here.
    - [ ] Create a typotoken dedicated for tab-bar
    - [ ] Apply this new token on tabs
    - [ ] Apply this new token on .nav-item-content-wrapper > a

  
  - [ ] Toggle and position Icon / Label individually for each Tab
  - [ ] Add layoutvariant where I see the buttons, but no scrollbar
  */
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

        .arrow {
          background: none;
          border: none;
          font: inherit;
          cursor: pointer;
          outline: inherit;
          _background-color: ${Silent.SurfaceFill.Rest};
          _border-color: ${Silent.SurfaceStroke.Rest};
          _color: ${Silent.Icon.Rest};
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

        .blr-tab-bar {
          position: relative;
          width: 100%;
          overflow-x: auto;

          .nav-list {
            display: flex;
            list-style: none;
            padding: 0;
            margin: 0;

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
              _flex: 0 1 0px;
              justify-content: center;
              overflow: clip;


              &:focus-within:not(.disabled) {
                outline: 2px solid black;
                outline-offset: -2px;
                border-radius: 4px;
              }

              &.fullWidth {
                _flex: 1 1 0px;
              }

              .nav-item-content-wrapper {
                display: flex;
                justify-content: center;

                &:focus-visible {
                  outline: none;
                }

                & > .nav-item {
                  all: initial;
                  display: flex;
                  text-decoration: none;
                  align-items: center;
                  flex-shrink: 0;

                  &.selected {
                    & > blr-icon {
                      color: ${TabBar.Tab.Icon.IconColor.Active.Rest};
                    }
                    & > label {
                      color: ${TabBar.Tab.Label.TextColor.Active.Rest};
                    }

                    &:focus {
                      &:not(.disabled) {
                        & > blr-icon {
                          color: ${TabBar.Tab.Icon.IconColor.Active.Focus};
                        }
                        & > label {
                          color: ${TabBar.Tab.Label.TextColor.Active.Focus};
                        }
                      }
                    }

                    &:hover {
                      &:not(.disabled) {
                        & > blr-icon {
                          color: ${TabBar.Tab.Icon.IconColor.Active.Hover};
                        }
                        & > label {
                          color: ${TabBar.Tab.Label.TextColor.Active.Hover};
                        }
                      }
                    }

                    &:active {
                      & > blr-icon {
                        color: ${TabBar.Tab.Icon.IconColor.Active.Pressed};
                      }
                      & > label {
                        color: ${TabBar.Tab.Label.TextColor.Active.Pressed};
                      }
                    }
                  }
                  &:not(.selected) {
                    & > blr-icon {
                      color: ${TabBar.Tab.Icon.IconColor.Inactive.Rest};
                    }
                    & > label {
                      color: ${TabBar.Tab.Label.TextColor.Inactive.Rest};
                    }

                    &:focus {
                      & > blr-icon {
                        color: ${TabBar.Tab.Icon.IconColor.Inactive.Focus};
                      }
                      & > label {
                        color: ${TabBar.Tab.Label.TextColor.Inactive.Focus};
                      }
                    }

                    &:hover {
                      & > blr-icon {
                        color: ${TabBar.Tab.Icon.IconColor.Inactive.Hover};
                      }
                      & > label {
                        color: ${TabBar.Tab.Label.TextColor.Inactive.Hover};
                      }
                    }

                    &:active {
                      & > blr-icon {
                        color: ${TabBar.Tab.Icon.IconColor.Inactive.Pressed};
                      }
                      & > label {
                        color: ${TabBar.Tab.Label.TextColor.Inactive.Pressed};
                      }
                    }

                    &.disabled {
                      & > blr-icon {
                        color: ${TabBar.Tab.Icon.IconColor.Inactive.Disabled};
                      }
                      & > label {
                        color: ${TabBar.Tab.Label.TextColor.Inactive.Disabled};
                      }
                    }
                  }

                  &:focus-visible {
                    outline: none;
                  }

                  &.leading {
                    flex-direction: row;
                  }

                  &.trailing {
                    flex-direction: row-reverse;
                  }
                }
              }

              &.sm {
                padding-top: ${TabBar.Tab.ContentCol.PaddingTop.SM};
                gap: ${TabBar.Tab.ContentCol.ItemSpacing.SM};

                .nav-item-content-wrapper {
                  & > .nav-item {
                    padding-left: ${TabBar.Tab.ContentRow.PaddingLeftRight.SM};
                    padding-right: ${TabBar.Tab.ContentRow.PaddingLeftRight.SM};
                    gap: ${TabBar.Tab.ContentRow.ItemSpacing.SM};
                    line-height:  ${TabBar.Tab.Label.Typography.SM.lineHeight};

                    & > blr-icon {
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
                  & .nav-item {
                    padding-left: ${TabBar.Tab.ContentRow.PaddingLeftRight.MD};
                    padding-right: ${TabBar.Tab.ContentRow.PaddingLeftRight.MD};
                    gap: ${TabBar.Tab.ContentRow.ItemSpacing.MD};
                    line-height:  ${TabBar.Tab.Label.Typography.MD.lineHeight};

                    & blr-icon {
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
                  & > .nav-item {
                    padding-left: ${TabBar.Tab.ContentRow.PaddingLeftRight.LG};
                    padding-right: ${TabBar.Tab.ContentRow.PaddingLeftRight.LG};
                    gap: ${TabBar.Tab.ContentRow.ItemSpacing.LG};
                    line-height:  ${TabBar.Tab.Label.Typography.LG.lineHeight};

                    & > blr-icon {
                      width: ${TabBar.Tab.Icon.IconSize.LG};
                      height: ${TabBar.Tab.Icon.IconSize.LG};
                    }
                  }
                }

                .nav-item-underline {
                  height: ${TabBar.Tab.HighlightLine.Height.LG};
                }
              }
            }
          }
        }
      }
    `;
});
