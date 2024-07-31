/* eslint-disable @typescript-eslint/no-explicit-any */
import { standardProperty } from 'lit/decorators.js';
import type { PropertyDeclaration } from 'lit';
import { LitElementCustom } from './element.js';
import { Signal } from '@lit-labs/preact-signals';
import { registerSignal } from './signals.js';

/**
 * Extends lit's property decorator with the following custom functionality:
 * - Automatic kebab-casing of correlated HTML attribute name if {@link PropertyDeclaration.attribute|options.attribute} is undefined.
 */
export function property(options?: PropertyDecoratorOptions) {
  return <C extends Interface<LitElementCustom>, V>(
    target: ClassAccessorDecoratorTarget<C, V> | ((this: C, value: V) => void),
    context: ClassSetterDecoratorContext<C, V> | ClassAccessorDecoratorContext<C, V>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): any => {
    const { kind: decoratorKind, name: propertyName } = context;

    const defaultOptions: PropertyDecoratorOptions = {
      ...options,
      attribute: options?.attribute ?? camelCaseToKebabCase(context.name.toString()),
      signal: options?.signal ?? true,
    };

    const litDecoratedProperty = standardProperty(defaultOptions, target, context);

    if (defaultOptions.signal && decoratorKind === 'accessor' && typeof litDecoratedProperty !== 'function') {
      const { set: baseSet, init: baseInit } = litDecoratedProperty;

      litDecoratedProperty.init = function (value) {
        const initialValue = baseInit?.call(this, value) ?? value;
        const signal = new Signal(initialValue);

        registerSignal<any>(this.signals, propertyName, signal);

        return initialValue as V;
      };

      litDecoratedProperty.get = function () {
        return (this.signals as any)[propertyName].value as V;
      };

      litDecoratedProperty.set = function (value) {
        (this.signals as any)[propertyName].value = value;
        baseSet?.call(this, value);
      };
    }

    return litDecoratedProperty;
  };
}

/**
 * Converts a camelCase or PascalCase string to kebab-case.
 * @param {string} str - The input string to convert.
 * @returns {string} The kebab-case version of the input string.
 */
export const camelCaseToKebabCase = (str: string) =>
  str.replace(
    // Regular expression matching camelCase or PascalCase patterns.
    /[A-Z]+(?![a-z])|[A-Z]/g,
    // Replacer function handling the conversion.
    (upperCaseGroup, isNotFirstCharacter) =>
      // If not the first character and an uppercase group is found,
      // add a hyphen before the uppercase group and convert it to lowercase.
      (isNotFirstCharacter ? '-' : '') + upperCaseGroup.toLowerCase()
  );

export type PropertyDecoratorOptions = PropertyDeclaration & {
  signal?: boolean;
};

type Interface<T> = {
  [K in keyof T]: T[K];
};
