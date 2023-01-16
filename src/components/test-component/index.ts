import "./index.scss";

class MyComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `<h1>Hello world</h1>`;
    }
}

window.customElements.define('my-component', MyComponent);