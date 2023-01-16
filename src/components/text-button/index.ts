class TextButton extends HTMLElement {
  constructor() {
    super();
  }

  get label() {
    return this.getAttribute('label');
  }

  get onClick() {
    return this.getAttribute('onClick');
  }

  get disabled() {
    return this.getAttribute('disabled');
  }

  // set label(value) {
  //   this.setAttribute('label', value);
  // }

  // static get observedAttributes() {
  //   return ['label'];
  // }

  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
      <button 
        onclick="${this.onClick}"
        >
        ${this.label}
      </button>`;
  }
}

window.customElements.define('text-button', TextButton);

module.exports = TextButton;
