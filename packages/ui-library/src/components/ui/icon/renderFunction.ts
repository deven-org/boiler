import { BlrIconType, TAG_NAME } from '.';
import { genericBlrComponentRenderer } from '../../../utils/typesafe-generic-component-renderer';

/*
export const BlrIconRenderFunction = ({
  icon,
  size,
  classMap,
  onClick,
  hideAria,
  name,
  disablePointerEvents,
  ignoreSize,
}: BlrIconType) => {
  return html`<blr-icon
    class="${classMap}"
    .icon=${icon || nothing}
    .ignoreSize=${ignoreSize}
    .size=${size}
    .name=${name || nothing}
    aria-hidden=${hideAria || nothing}
    @click=${onClick}
    style=${disablePointerEvents ? styleMap({ pointerEvents: 'none' }) : nothing}
  ></blr-icon>`;
};
*/

export const BlrIconRenderFunction = (
  params: BlrIconType,
  htmlAttributes?: { [s: string]: string | boolean | number }
) => genericBlrComponentRenderer<BlrIconType>(TAG_NAME, { ...params }, undefined, htmlAttributes);
