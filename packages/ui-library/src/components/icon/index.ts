import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconMapping, IconType } from '@boiler/icons';
import { icon } from '../../foundation/component-tokens/ui.css';
// import { Sizes } from '../../globals/constants';
import { styleCustom } from './index.css';
import { SizesType } from '../../globals/types';
import { DirectiveResult } from 'lit-html/directive';
import { ClassMapDirective } from 'lit-html/directives/class-map';
import { styleMap } from 'lit-html/directives/style-map';

@customElement('blr-icon')
export class BlrIcon extends LitElement {
  static styles = [styleCustom, icon];

  @property() icon!: IconType;
  @property() size!: SizesType;

  render() {
    if (IconMapping.hasOwnProperty(this.icon) && typeof IconMapping[this.icon] === 'function') {
      return html`${IconMapping[this.icon](`blr-icon ${this.size.toLowerCase()}`)}`;
    } else {
      return nothing;
    }
  }
}

type BlrIconType = {
  icon?: IconType;
  size: SizesType;
  classMap?: DirectiveResult<typeof ClassMapDirective>;
  onClick?: HTMLElement['onclick'];
  ariaHidden?: boolean;
  name?: string;
  disablePointerEvents?: boolean;
};

export const BlrIconRenderFunction = ({
  icon,
  size,
  classMap,
  onClick,
  ariaHidden,
  name,
  disablePointerEvents,
}: BlrIconType) => {
  classMap;
  return html`<blr-icon
    class="blr-input-icon ${classMap}"
    icon=${icon || nothing}
    size=${size}
    name=${name || nothing}
    aria-hidden=${ariaHidden || nothing}
    @click=${onClick}
    style=${disablePointerEvents ? styleMap({ pointerEvents: 'none' }) : nothing}
  ></blr-icon>`;
};
