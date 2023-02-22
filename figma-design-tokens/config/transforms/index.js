// Import all the modules and export them as a single object
const fontWeight = require('./font-weight');
const resolveMath = require('./resolve-math');
const StrReplacePxDuplicate = require('./str-replace-pxpx');
const transformDimension = require('./transform-dimension');

module.exports = {
  fontWeight,
  resolveMath,
  StrReplacePxDuplicate,
  transformDimension
};
