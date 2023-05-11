import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';

import { styleCustom } from './index.css';

import { SizesType } from '../../globals/types';

// import { action } from '../../foundation/semantic-tokens/action.css';
// import { labelCheckbox } from '../../foundation/component-tokens/action.css';

@customElement('blr-label-checkbox')
export class BlrLabelCheckbox extends LitElement {
  static styles = [styleCustom /* action, textButton */];

  @property() label = 'CheckyMcCheckboxFace';
  @property() onClick?: HTMLButtonElement['onclick'];
  @property() onFocus?: HTMLButtonElement['onfocus'];
  @property() onBlur?: HTMLButtonElement['onblur'];
  @property() onChange?: HTMLButtonElement['onchange'];
  @property() disabled?: boolean;
  @property() checked?: boolean;
  @property() size!: SizesType;

  toogle(event: MouseEvent) {
    this.checked = !this.checked;
    if (this.onClick) {
      this.onClick(event);
    }
  }

  render() {
    const classes = classMap({
      [`${this.size}`]: this.size || 'md',
      checked: Boolean(this.checked),
    });

    // eslint-disable-next-line lit-a11y/click-events-have-key-events
    return html`<label
        class="blr-semantic-action blr-label-checkbox ${classes}"
        @click="${this.toogle}"
        @change="${this.onChange}"
        @focus="${this.onFocus}"
        @blur="${this.onBlur}"
        ?disabled="${this.disabled}"
        ?checked="${this.checked}"
        for="peter"
      >
        ${this.label}
      </label>

      <input type="checkbox" id="peter" name="scales" ${this.checked ? 'checked' : ''} />`;
  }
}
