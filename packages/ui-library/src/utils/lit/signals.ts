import { Signal, ReadonlySignal } from '@lit-labs/preact-signals';
import { LitElementCustom } from './element.js';

export function registerSignal<TProps>(hub: SignalHub<TProps>, key: keyof TProps, signal: Signal) {
  Object.defineProperty(hub, key, { value: signal });
}

export type SignalHub<TProps> = Omit<
  {
    readonly [P in keyof TProps]-?: ReadonlySignal<TProps[P]>;
  },
  keyof LitElementCustom
>;
