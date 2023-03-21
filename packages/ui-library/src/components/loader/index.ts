import { LitElement, html } from 'lit';
import { classMap } from 'lit/directives/class-map.js';
import { customElement, property } from 'lit/decorators.js';
import { styleCustom } from './css';
import { SizesType } from '../../globals/types';

@customElement('blr-loader')
export class BlrLoader extends LitElement {
  static styles = [styleCustom];

  @property() arialabel: string;
  @property() size?: SizesType = 'md';

  render() {
    const classes = {
      [`${this.size}`]: this.size,
    };

    const getIconSize = (iconSize: string) => {
      return iconSize.charAt(0).toUpperCase() + iconSize.slice(1);
    };

    return html`<div aria-label="${this.ariaLabel}" class="blr-loader ${classMap(classes)}">
      <blr-icon
        name="blrLoadingSpinner${getIconSize(this.size)}"
        class="loading-spinner"
        size="${this.size}"
        aria-hidden
      ></blr-icon>
    </div>`;
  }
}
