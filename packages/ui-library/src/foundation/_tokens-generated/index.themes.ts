export const Themes = ['Dark', 'Light'] as const;
export type ThemeType = (typeof Themes)[number];
