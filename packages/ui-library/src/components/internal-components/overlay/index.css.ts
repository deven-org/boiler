import { css } from "lit";

export const styleCustom = css`
  :host {
    display: inline-flex;
    flex-shrink: 0;
    width: 100%;
  }

  .modal {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: 1050;
    display: none;
    overflow: hidden;
    -webkit-overflow-scrolling: touch;
    outline: 0;
    overflow-x: hidden;
    overflow-y: auto;
  }

  .modal-dialog {
    width: 600px;
    margin: 30px auto;
    position: relative;
  }

  .modal-content {
    position: relative;
    background-color: #fff;
    -webkit-background-clip: padding-box;
    background-clip: padding-box;
    border: 1px solid #999;
    border: 1px solid rgba(0 0 0 / 0.2);
    border-radius: 6px;
    -webkit-box-shadow: 0 5px 15px rgb(0 0 0 / 0.5);
    box-shadow: 0 5px 15px rgb(0 0 0 / 0.5);
    outline: 0;
  }

  .modal-header {
    padding: 15px;
  }

  .modal-header h4 {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1.4rem;
    margin: 1.3rem 0.5rem;
  }

  .modal-body p {
    font-family: "Source Sans Pro", sans-serif;
    font-size: 1rem;
    margin: 0 0.5rem;
  }

  blr-icon {
    color: #135bec;
    cursor: pointer;
  }

  .modal-body {
    position: relative;
    padding: 15px;
  }

  .fade {
    opacity: 0;
    -webkit-transition: opacity 0.15s linear;
    -o-transition: opacity 0.15s linear;
    transition: opacity 0.15s linear;
  }

  .fade.in {
    opacity: 1;
    display: block;
  }

  .modal-backdrop {
    background-color: transparent;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    opacity: 0.6;
    width: 100%;
    height: 100%;
    z-index: 1040;
  }

  .modal-backdrop-transparent {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: transparent;
    opacity: 0;
    width: 100%;
    height: 100%;
    z-index: -1000;
  }

  .modal-transition {
    transition: all 0.4s ease;
  }
`;