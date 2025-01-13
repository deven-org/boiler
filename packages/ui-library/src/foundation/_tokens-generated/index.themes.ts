export const Themes = ['Licht_value', 'Dunkel_value'] as const;
export type ThemeType = (typeof Themes)[number];
