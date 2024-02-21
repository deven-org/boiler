export type BlrFocusEventDetail = {
  originalEvent: FocusEvent;
};
export type BlrFocusEvent = CustomEvent<BlrFocusEventDetail>;
export const BlrFocusEventName = 'blrFocus';
export function createBlrFocusEvent(detail: BlrFocusEventDetail): BlrFocusEvent {
  return new CustomEvent(BlrFocusEventName, { bubbles: true, composed: true, detail });
}

export type BlrBlurEventDetail = {
  originalEvent: FocusEvent;
};
export type BlrBlurEvent = CustomEvent<BlrBlurEventDetail>;
export const BlrBlurEventName = 'blrBlur';
export function createBlrBlurEvent(detail: BlrBlurEventDetail): BlrBlurEvent {
  return new CustomEvent(BlrBlurEventName, { bubbles: true, composed: true, detail });
}

export type BlrClickEventDetail = {
  originalEvent: MouseEvent | KeyboardEvent;
};
export type BlrClickEvent = CustomEvent<BlrClickEventDetail>;
export const BlrClickEventName = 'blrClick';
export function createBlrClickEvent(detail: BlrClickEventDetail): BlrClickEvent {
  return new CustomEvent(BlrClickEventName, { bubbles: true, composed: true, detail });
}

export type BlrSelectEventDetail = {
  originalEvent: Event;
};
export type BlrSelectEvent = CustomEvent<BlrSelectEventDetail>;
export const BlrSelectEventName = 'blrSelect';
export function createBlrSelectEvent(detail: BlrSelectEventDetail): BlrSelectEvent {
  return new CustomEvent(BlrSelectEventName, { bubbles: true, composed: true, detail });
}

/* per-input change events */

export type BlrCheckedChangeEventDetail = {
  originalEvent: Event;
  checkedState: boolean | undefined;
};
export type BlrCheckedChangeEvent = CustomEvent<BlrCheckedChangeEventDetail>;
export const BlrCheckedChangeEventName = 'blrCheckedChange';
export function createBlrCheckedChangeEvent(detail: BlrCheckedChangeEventDetail): BlrCheckedChangeEvent {
  return new CustomEvent(BlrCheckedChangeEventName, { bubbles: true, composed: true, detail });
}

export type BlrSelectedValueChangeEventDetail = {
  originalEvent: Event;
};
export type BlrSelectedValueChangeEvent = CustomEvent<BlrSelectedValueChangeEventDetail>;
export const BlrSelectedValueChangeEventName = 'blrSelectedValueChange';
export function createBlrSelectedValueChangeEvent(
  detail: BlrSelectedValueChangeEventDetail
): BlrSelectedValueChangeEvent {
  return new CustomEvent(BlrSelectedValueChangeEventName, { bubbles: true, composed: true, detail });
}

export type BlrTextValueChangeEventDetail = {
  originalEvent: Event;
};
export type BlrTextValueChangeEvent = CustomEvent<BlrTextValueChangeEventDetail>;
export const BlrTextValueChangeEventName = 'blrTextValueChange';
export function createBlrTextValueChangeEvent(detail: BlrTextValueChangeEventDetail): BlrTextValueChangeEvent {
  return new CustomEvent(BlrTextValueChangeEventName, { bubbles: true, composed: true, detail });
}

declare global {
  interface GlobalEventHandlersEventMap {
    [BlrFocusEventName]: BlrFocusEvent;
    [BlrBlurEventName]: BlrBlurEvent;
    [BlrClickEventName]: BlrClickEvent;
    [BlrCheckedChangeEventName]: BlrCheckedChangeEvent;
    [BlrSelectedValueChangeEventName]: BlrSelectedValueChangeEvent;
    [BlrTextValueChangeEventName]: BlrTextValueChangeEvent;
    [BlrSelectEventName]: BlrSelectEvent;
  }
}
