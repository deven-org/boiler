import { standardProperty } from 'lit/decorators.js';
import type { PropertyDeclaration, ReactiveElement } from 'lit';

/**
 * Extends lit's property decorator with the following custom functionality:
 * - Automatic kebab-casing of correlated HTML attribute name if {@link PropertyDeclaration.attribute|options.attribute} is undefined.
 */
export function property(options?: PropertyDeclaration) {
  return <C extends Interface<ReactiveElement>, V>(
    target: ClassAccessorDecoratorTarget<C, V> | ((this: C, value: V) => void),
    context: ClassSetterDecoratorContext<C, V> | ClassAccessorDecoratorContext<C, V>
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  ): any => {
    return standardProperty(
      { ...options, attribute: options?.attribute ?? camelCaseToKebabCase(context.name.toString()) },
      target,
      context
    );
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

type Interface<T> = {
  [K in keyof T]: T[K];
};
