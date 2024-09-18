import { ReactiveController, ReactiveControllerHost } from 'lit';
import { SignalHub, registerSignal } from '../../utils/lit/signals.js';
import { LitElementCustom } from '../../utils/lit/element.js';
import { SanitizeFunction, SanitizeFunctionResult } from './sanitize.js';
import { Signal } from '@lit-labs/preact-signals';
export class SanitizationController<TTarget, TResult extends SanitizeFunctionResult<TTarget>>
  implements ReactiveController
{
  private _host: ReactiveControllerHost & LitElementCustom;
  private _sanitize: SanitizeFunction<TTarget, TResult>;
  private _sanitizedSignal: Signal<TResult>;

  constructor({
    host,
    sanitize,
  }: {
    host: ReactiveControllerHost & LitElementCustom;
    sanitize: SanitizeFunction<TTarget, TResult>;
  }) {
    this._host = host;
    this._sanitize = sanitize;

    // Initialize signal with the result of initial sanitization
    this._sanitizedSignal = new Signal<TResult>(this._sanitize(this._host as TTarget));

    registerSignal(
      this._host.signals as SignalHub<{ sanitizedValues: TResult }>,
      'sanitizedValues',
      this._sanitizedSignal,
    );

    this._host.addController(this);
  }

  private _sanitizeValues(): void {
    const sanitizedValues = this._sanitize(this._host as TTarget);
    this._sanitizedSignal.value = sanitizedValues;
  }

  public get values(): Readonly<TResult> {
    return this._sanitizedSignal.value;
  }

  hostConnected(): void {
    // Perform sanitization when the host connects
    this._sanitizeValues();
  }
}
