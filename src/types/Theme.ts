export type Theme = 'rwanda' | 'sweden';

export interface ThemeContextT {
  theme: Theme;
  toggleTheme: (arg: Theme) => void;
  city: string;
  toggleCity: (arg: string) => void;
}
