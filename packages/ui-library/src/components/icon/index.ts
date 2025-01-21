import { html, nothing } from 'lit';
import { property } from '../../utils/lit/decorators.js';
import { IconMapping, IconType } from '@boiler/icons';
import { styleCustom } from './index.css.js';
import { SizesType } from '../../globals/types.js';
import { DirectiveResult } from 'lit/directive.js';
import { ClassMapDirective, classMap } from 'lit/directives/class-map.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';
import { TAG_NAME } from './renderFunction.js';
import { ThemeType, Themes } from '../../foundation/_tokens-generated/index.themes.js';
import { BlrClickEvent, createBlrClickEvent } from '../../globals/events.js';
import { LitElementCustom, ElementInterface } from '../../utils/lit/element.js';
import { makeSanitizer } from '../../utils/lit/sanitize.js';
import { SanitizationController } from '../../utils/lit/sanitization-controller.js';

const propertySanitizer = makeSanitizer((unsanitized: BlrIconType) => ({
  icon: unsanitized.icon ?? 'blrArrowDownXs',
  sizeVariant: unsanitized.sizeVariant ?? 'md',
  fillParent: unsanitized.fillParent ?? false,
  theme: unsanitized.theme ?? Themes[0],
}));

export class BlrIcon extends LitElementCustom {
  static styles = [styleCustom];

  @property() accessor icon: IconType | undefined;
  @property() accessor sizeVariant: SizesType | undefined;
  @property({ type: Boolean }) accessor fillParent: boolean | undefined;
  @property() accessor theme: ThemeType | undefined;
  @property({ type: Object }) accessor classMap: DirectiveResult<typeof ClassMapDirective> | undefined;

  private sanitizedController: SanitizationController<
    BlrIconType, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    any
  >;

  constructor() {
    super();
    this.sanitizedController = new SanitizationController<
      BlrIconType, // eslint-disable-next-line @typescript-eslint/no-explicit-any
      any
    >({
      host: this,
      sanitize: propertySanitizer,
    });
  }

  protected handleClick = (event: MouseEvent | KeyboardEvent) => {
    this.dispatchEvent(createBlrClickEvent({ originalEvent: event }));
  };

  protected render() {
    const sanitized = this.sanitizedController.values;

    const sizeKey = sanitized.fillParent ? 'full' : sanitized.sizeVariant!.toLowerCase();
    const classes = classMap({
      'blr-icon': true,
      [sizeKey]: sizeKey,
      [sanitized.theme!]: sanitized.theme!,
    });

    const iconMarkup = IconMapping[sanitized.icon! as keyof typeof IconMapping];

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
