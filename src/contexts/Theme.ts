import React from 'react';
import { ThemeContextT } from '@/types/Theme';

export const ThemeContext = React.createContext<ThemeContextT>({
  theme: 'rwanda',
  toggleTheme: (arg) => {},
});
