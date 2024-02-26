import { LitElement, html } from 'lit';
import { TAG_NAME } from './renderFunction';
import { property } from 'lit/decorators.js';

export class BlrForm extends LitElement {
  @property({ type: Function }) handleSubmit = () => {};

  protected render() {
    return html`<form @submit=${this.handleSubmit}>
      <slot></slot>
      <blr-text-button
        theme="Light"
        variant="cta"
        sizeVariant="md"
        label="Submit"
        hasIcon="true"
        iconPosition="leading"
        icon="blr360"
        textButtonId="button-id"
        @blrClick=${this.handleSubmit}
      ></blr-text-button>
    </form>`;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrForm);
}

export type BlrFormType = Omit<BlrForm, keyof LitElement>;
