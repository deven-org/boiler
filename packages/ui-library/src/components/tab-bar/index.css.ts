import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated";
import { typeSafeNestedCss } from "../../utils/css-in-ts/nested-typesafe-css-literals";

export const staticStyles = typeSafeNestedCss`
  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { buttonicon } = cmp;
    const { tabbar } = cmp;

    return typeSafeCss/* css */ `
      .panel-wrapper {
        margin-top: 2rem;
    
        & > slot {
          display: none;
    
          &.active {
            display: block;
          }
        }
      } 

      slot {
        display: none;
      }

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
      
      .blr-tab-bar-group.${theme} {
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
          line-height: 0;

          &.sm {
            padding: ${buttonicon.container.padding.sm};

            &.left {
              margin: ${tabbar.buttonwrapper.padding.leading.sm};
            }

            &.right {
              margin: ${tabbar.buttonwrapper.padding.trailing.sm};
            }
          }

          &.md {
            padding: ${buttonicon.container.padding.md};

            &.left {
              margin: ${tabbar.buttonwrapper.padding.leading.md};
            }

            &.right {
              margin: ${tabbar.buttonwrapper.padding.trailing.md};
            }
            
          }

          &.lg {
            padding: ${buttonicon.container.padding.lg};

            &.left {
              margin: ${tabbar.buttonwrapper.padding.leading.lg};
            }

            &.right {
              margin: ${tabbar.buttonwrapper.padding.trailing.lg};
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
              justify-content: center;


              &:focus-within:not(.disabled) {
                outline: 2px solid black;
                outline-offset: -2px;
                border-radius: 4px;
              }

              .nav-item-underline {
                &.selected {
                background-color: ${tabbar.tab.highlightline.bgcolor.active.pressed}
                }
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
                      color: ${tabbar.tab.icon.iconcolor.active.rest};
                    }

                    & > label {
                      color: ${tabbar.tab.label.textcolor.active.rest};
                    }

                    &:focus {

                      &:not(.disabled) {

                        & > blr-icon {
                          color: ${tabbar.tab.icon.iconcolor.active.focus};
                        }

                        & > label {
                          color: ${tabbar.tab.label.textcolor.active.focus};
                        }
                      }
                    }

                    &:hover {

                      &:not(.disabled) {

                        & > blr-icon {
                          color: ${tabbar.tab.icon.iconcolor.active.hover};
                        }

                        & > label {
                          color: ${tabbar.tab.label.textcolor.active.hover};
                        }
                      }
                    }

                    &:active {

                      & > blr-icon {
                        color: ${tabbar.tab.icon.iconcolor.active.pressed};
                      }

                      & > label {
                        color: ${tabbar.tab.label.textcolor.active.pressed};
                      }
                    }
                  }
                  &:not(.selected) {

                    & > blr-icon {
                      color: ${tabbar.tab.icon.iconcolor.inactive.rest};
                    }

                    & > label {
                      color: ${tabbar.tab.label.textcolor.inactive.rest};
                    }

                    &:focus {

                      & > blr-icon {
                        color
                        : ${tabbar.tab.icon.iconcolor.inactive.focus};
                      }
                      & > label {
                        color: ${tabbar.tab.label.textcolor.inactive.focus};
                      }
                    }

                    &:hover {

                      & > blr-icon {
                        color: ${tabbar.tab.icon.iconcolor.inactive.hover};
                      }

                      & > label {
                        color: ${tabbar.tab.label.textcolor.inactive.hover};
                      }
                    }

                    &:active {

                      & > blr-icon {
                        color: ${tabbar.tab.icon.iconcolor.inactive.pressed};
                      }

                      & > label {
                        color: ${tabbar.tab.label.textcolor.inactive.pressed};
                      }
                    }

                    &.disabled {

                      & > blr-icon {
                        color: ${tabbar.tab.icon.iconcolor.inactive.disabled};
                      }

                      & > label {
                        color: ${tabbar.tab.label.textcolor.inactive.disabled};
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
                padding-top: ${tabbar.tab.contentcol.paddingtop.sm};
                gap: ${tabbar.tab.contentcol.itemspacing.sm};

                .nav-item-content-wrapper {

                  & > .nav-item {
                    padding-left: ${tabbar.tab.contentrow.padding_h.sm};
                    padding-right: ${tabbar.tab.contentrow.padding_h.sm};
                    gap: ${tabbar.tab.contentrow.itemspacing.sm};
                    line-height:  ${tabbar.tab.label.typography.sm.lineHeight};

                    & > blr-icon {
                      width: ${tabbar.tab.icon.iconsize.sm};
                      height: ${tabbar.tab.icon.iconsize.sm};
                    }
                  }
                }

                .nav-item-underline {
                  height: ${tabbar.tab.highlightline.height.sm};
                }
              }

              &.md {
                padding-top: ${tabbar.tab.contentcol.paddingtop.md};
                gap: ${tabbar.tab.contentcol.itemspacing.md};

                .nav-item-content-wrapper {

                  & .nav-item {
                    padding-left: ${tabbar.tab.contentrow.padding_h.md};
                    padding-right: ${tabbar.tab.contentrow.padding_h.md};
                    gap: ${tabbar.tab.contentrow.itemspacing.md};
                    line-height:  ${tabbar.tab.label.typography.md.lineHeight};

                    & blr-icon {
                      width: ${tabbar.tab.icon.iconsize.md};
                      height: ${tabbar.tab.icon.iconsize.md};
                    }
                  }
                }

                .nav-item-underline {
                  height: ${tabbar.tab.highlightline.height.md};
                }
              }

              &.lg {
                padding-top: ${tabbar.tab.contentcol.paddingtop.lg};
                gap: ${tabbar.tab.contentcol.itemspacing.lg};

                .nav-item-content-wrapper {

                  & > .nav-item {
                    padding-left: ${tabbar.tab.contentrow.padding_h.lg};
                    padding-right: ${tabbar.tab.contentrow.padding_h.lg};
                    gap: ${tabbar.tab.contentrow.itemspacing.lg};
                    line-height:  ${tabbar.tab.label.typography.lg.lineHeight};

                    & > blr-icon {
                      width: ${tabbar.tab.icon.iconsize.lg};
                      height: ${tabbar.tab.icon.iconsize.lg};
                    }
                  }
                }

                .nav-item-underline {
                  height: ${tabbar.tab.highlightline.height.lg};
                }
              }
            }
          }
        }
      }
    `;
  })}
`;
