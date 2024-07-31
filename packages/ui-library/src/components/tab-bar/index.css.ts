import { ComponentThemeIterator } from "../../foundation/_tokens-generated/index.pseudo.generated.js";
import { css } from "../../utils/css-in-ts/nested-typesafe-css-literals.js";

export const staticStyles = css`
  ${ComponentThemeIterator((theme, cmp, typeSafeCss) => {
    const { ButtonIcon } = cmp;
    const { TabBar } = cmp;

    return typeSafeCss/* css */ `
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
            padding: ${ButtonIcon.Container.Padding.SM};

            &.left {
              margin: ${TabBar.ButtonWrapper.Padding.Leading.SM};
            }

            &.right {
              margin: ${TabBar.ButtonWrapper.Padding.Trailing.SM};
            }
          }

          &.md {
            padding: ${ButtonIcon.Container.Padding.MD};

            &.left {
              margin: ${TabBar.ButtonWrapper.Padding.Leading.MD};
            }

            &.right {
              margin: ${TabBar.ButtonWrapper.Padding.Trailing.MD};
            }
            
          }

          &.lg {
            padding: ${ButtonIcon.Container.Padding.LG};

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
          }
        }
      }
    `;
  })}
`;
