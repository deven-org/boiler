import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  ${ComponentThemeIterator((theme, cmp, css) => {
    const { buttonicon } = cmp;
    const { tabbar } = cmp;

    return css`
      .panel-wrapper {
        margin-top: 2rem;
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
          padding: 0 1rem;
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
          }
        }
      }
    `;
  })}
`;
