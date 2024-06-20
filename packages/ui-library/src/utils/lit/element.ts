// eslint-disable-next-line no-restricted-imports
import { LitElement as LitElementCustom } from 'lit';

export { LitElementCustom };

export type ElementInterface<TElement extends LitElementCustom> = Record<string | number | symbol, unknown> &
  Omit<UndefinedToOptional<TElement>, keyof LitElementCustom>;

type UndefinedToOptional<T> = Optional<T> & Required<T>;

type Optional<T> = Partial<Pick<T, KeysOfType<T, undefined>>>;

type Required<T> = Omit<T, KeysOfType<T, undefined>>;

type KeysOfType<T, SelectedType> = {
  [Key in keyof T]: SelectedType extends T[Key] ? Key : never;
}[keyof T];
