/* eslint-disable-next-line no-restricted-imports */
import { LitElement, PropertyDeclaration } from 'lit';

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

export class LitElementCustom extends LitElement {
  /**
   * Sets the attribute name in kebab-case
   *
   * This function overwrites the lit elements createProperty method,
   * here it converts the provided attribute name to kebab-case instead of lowercase,
   * which is the convention for HTML attributes.
   *
   * For more information on observed attributes in web components,
   * refer to the official Lit documentation:
   * https://lit.dev/docs/components/properties/#observed-attributes
   *
   * @param {string} name - The attribute name to convert.
   * @returns {string} The attribute name in kebab-case.
   */
  static createProperty(name: PropertyKey, options: PropertyDeclaration) {
    let customOptions = options;

    // generate the attribute name if it hasn't been defined or if it's disabled.
    if (typeof options?.attribute === 'undefined' || options?.attribute === true) {
      const attributeName = camelCaseToKebabCase(name.toString());
      customOptions = { ...options, attribute: attributeName };
    }

    return super.createProperty(name, customOptions);
  }
}
