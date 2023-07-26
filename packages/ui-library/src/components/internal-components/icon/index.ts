import { LitElement, html, nothing } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { IconMapping, IconType } from '@boiler/icons';
import { icon } from '../../../foundation/component-tokens/ui.css';
import { styleCustom } from './index.css';
import { SizesType } from '../../../globals/types';
import { DirectiveResult } from 'lit-html/directive';
import { ClassMapDirective } from 'lit-html/directives/class-map';
import { styleMap } from 'lit/directives/style-map.js';

@customElement('blr-icon')
export class BlrIcon extends LitElement {
  static styles = [styleCustom, icon];

  @property() icon!: IconType;
  @property() size!: SizesType;

  protected render() {
    if (IconMapping.hasOwnProperty(this.icon) && typeof IconMapping[this.icon] === 'function') {
      return html`${IconMapping[this.icon](`blr-icon ${this.size.toLowerCase()}`)}`;
    } else {
      return nothing;
    }
  }
}

// BlrIconType is a new Type containing all properties of BlrIcon without the properties of LitElement
// and some additional properties which are not part of the component
export type BlrIconType = Partial<Omit<BlrIcon, keyof LitElement>> & {
  classMap?: DirectiveResult<typeof ClassMapDirective>;
  onClick?: HTMLElement['onclick'];
  hideAria?: boolean;
  name?: string;
  disablePointerEvents?: boolean;
};

export const BlrIconRenderFunction = ({
  icon,
  size,
  classMap,
  onClick,
  hideAria,
  name,
  disablePointerEvents,
}: BlrIconType) => {
  return html`<blr-icon
    class=${classMap}
    .icon=${icon || nothing}
    .size=${size}
    .name=${name || nothing}
    aria-hidden=${hideAria || nothing}
    @click=${onClick}
    style=${disablePointerEvents ? styleMap({ pointerEvents: 'none' }) : nothing}
  ></blr-icon>`;
};
