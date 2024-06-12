import { Sizes } from '../globals/constants.js';

// 'Xxs|Xs|Sm|Md|Lg|Xl' but from same source as the type def
const keyws = Sizes.map((a) => a.charAt(0).toUpperCase() + a.substring(1)).join('|');
// /(?<size>Xxs|Xs|Sm|Md|Lg|Xl)/;
export const capturingRegex = new RegExp('(?<size>' + keyws + ')');
