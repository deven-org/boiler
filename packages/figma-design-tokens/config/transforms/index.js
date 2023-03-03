// Import all the modules and export them as a single object
const fontWeight = require('./_font-weight');
const resolveMath = require('./_resolve-math');
const StrReplacePxDuplicate = require('./_str-replace-pxpx');
const transformDimension = require('./_transform-dimension');
const transformFontToRem = require('./_font-to-rem');

module.exports = {
  fontWeight,
  resolveMath,
  StrReplacePxDuplicate,
  transformDimension,
  transformFontToRem,
};
