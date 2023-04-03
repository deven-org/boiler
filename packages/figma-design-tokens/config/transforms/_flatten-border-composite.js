const StyleDictionary = require('style-dictionary');

StyleDictionary.registerTransform({
  type: 'value',
  transitive: true,
  name: 'transform/composite/token/border/flatten',
  matcher: ({ type }) => {
    return ['border'].includes(type);
  },
  transformer: ({ value }) => {
    if (typeof value === 'string') return;

    const valueWidth = value.width.includes('px') ? value.width : `${value.width}px`;
    const flatValue = `${valueWidth} ${value.style} ${value.color}`;

    return flatValue;
  },
});
