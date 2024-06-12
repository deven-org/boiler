import { html, nothing } from 'lit';
import { property } from '../../utils/lit/decorators.js';
import { IconMapping, IconType } from '@boiler/icons';
import { styleCustom } from './index.css.js';
import { SizesType } from '../../globals/types.js';
import { DirectiveResult } from 'lit/directive.js';
import { ClassMapDirective, classMap } from 'lit/directives/class-map.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { TAG_NAME } from './renderFunction.js';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes.js';
import { BlrClickEvent, createBlrClickEvent } from '../../globals/events.js';
import { LitElementCustom } from '../../utils/lit/element.js';
import { ElementInterface } from '../../utils/lit/element.js';

export type BlrIconEventHandlers = {
  blrClick?: (event: BlrClickEvent) => void;
};

/**
 * @fires blrClick Icon was clicked
 */
export class BlrIcon extends LitElementCustom {
  static styles = [styleCustom];

  @property() accessor icon: IconType | undefined = 'blr360Xs';
  @property() accessor sizeVariant: SizesType | undefined = 'md';
  @property() accessor fillParent: boolean | undefined = true;

  @property() accessor theme: ThemeType | undefined = 'Light';
  @property() accessor classMap: DirectiveResult<typeof ClassMapDirective> | undefined;

  protected handleClick = (event: MouseEvent | KeyboardEvent) => {
    this.dispatchEvent(createBlrClickEvent({ originalEvent: event }));
  };

  protected render() {
    const sizeKey = this.fillParent ? 'full' : this.sizeVariant!.toLowerCase();
    const classes = classMap({
      'blr-icon': true,
      [sizeKey]: sizeKey,
      [this.theme!]: this.theme!,
    });

    const iconMarkup = IconMapping[this.icon!];

    return html`<span
      @click=${this.handleClick}
      @keydown=${(event: KeyboardEvent) => {
        if (event.code === 'Space') {
          this.handleClick(event);
        }
      }}
      class="${classes}"
      >${iconMarkup ? unsafeSVG(iconMarkup) : nothing}</span
    >`;
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrIcon);
}

export type BlrIconType = ElementInterface<BlrIcon>;
