import { Signal } from '@lit-labs/preact-signals';
import { LitElementCustom } from './element.js';

export function registerSignal<TProps>(
  hub: SignalHub<TProps>,
  key: keyof TProps,
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  signal: Signal<any>,
) {
  Object.defineProperty(hub, key, { value: signal });
}

export type SignalHub<TProps> = Omit<
  {
    readonly [P in keyof TProps]-?: Signal<TProps[P]>;
  },
  keyof LitElementCustom
>;
