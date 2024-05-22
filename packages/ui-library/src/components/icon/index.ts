import { html } from 'lit';
import { property } from 'lit/decorators.js';
import { IconMapping, IconType } from '@boiler/icons';
import { styleCustom } from './index.css';
import { SizesType } from '../../globals/types';
import { DirectiveResult } from 'lit/directive.js';
import { ClassMapDirective, classMap } from 'lit/directives/class-map.js';
import { until } from 'lit/directives/until.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { TAG_NAME } from './renderFunction';
import { ThemeType } from '../../foundation/_tokens-generated/index.themes';
import { BlrClickEvent, createBlrClickEvent } from '../../globals/events';
import { LitElementCustom } from '../../utils/lit-element-custom';

export type BlrIconEventHandlers = {
  blrClick?: (event: BlrClickEvent) => void;
};

/**
 * @fires blrClick Icon was clicked
 */
export class BlrIcon extends LitElementCustom {
  static styles = [styleCustom];

  @property() icon: IconType = 'blr360Xs';
  @property() sizeVariant: SizesType = 'md';
  @property() fillParent?: boolean = true;

  @property() theme: ThemeType = 'Light';
  @property() classMap?: DirectiveResult<typeof ClassMapDirective>;

  protected handleClick = (event: MouseEvent | KeyboardEvent) => {
    this.dispatchEvent(createBlrClickEvent({ originalEvent: event }));
  };

  protected render() {
    const sizeKey = this.fillParent ? 'full' : this.sizeVariant.toLowerCase();
    const classes = classMap({
      'blr-icon': true,
      [sizeKey]: sizeKey,
      [this.theme]: this.theme,
    });

    const unfullfilledRenderResult = html`<span
      @click=${this.handleClick}
      @keydown=${(event: KeyboardEvent) => {
        if (event.code === 'Space') {
          this.handleClick(event);
        }
      }}
      class="${classes}"
    >
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"></svg>
    </span>`;

    if (IconMapping.hasOwnProperty(this.icon) && typeof IconMapping[this.icon] === 'function') {
      const importedIcon = IconMapping[this.icon]();

      const fullfilledRenderResult = importedIcon
        .then((iconModule) => {
          return html`<span
            @click=${this.handleClick}
            @keydown=${(event: KeyboardEvent) => {
              if (event.code === 'Space') {
                this.handleClick(event);
              }
            }}
            class="${classes}"
            >${unsafeSVG(iconModule.default)}</span
          >`;
        })
        // eslint-disable-next-line no-console
        .catch((err) => console.error(err.message));

      return until(fullfilledRenderResult, unfullfilledRenderResult);
    } else {
      return unfullfilledRenderResult;
    }
  }
}

if (!customElements.get(TAG_NAME)) {
  customElements.define(TAG_NAME, BlrIcon);
}

export type BlrIconType = Partial<Omit<BlrIcon, keyof LitElementCustom>> & BlrIconEventHandlers;
