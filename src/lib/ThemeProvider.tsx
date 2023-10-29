'use client';
import React from 'react';
import { ThemeContext } from '@/contexts/Theme';
import { Theme, ThemeContextT } from '@/types/Theme';
import { ThemeColor } from '@/utils/Color';
import { RwandaCity } from '@/utils/Enum';
import Vector from '@/components/Home/Vector';

export const ThemeProvider = ({ children }: { children?: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<Theme>('rwanda');

  const [city, setCity] = React.useState<string>(RwandaCity.Kigali);

  const toggleTheme: ThemeContextT['toggleTheme'] = React.useCallback((arg) => {
    setTheme(arg);
  }, []);

  const toggleCity: ThemeContextT['toggleCity'] = React.useCallback((arg) => {
    setCity(arg);
  }, []);

  const contextValue: ThemeContextT = React.useMemo(
    () => ({ theme, toggleTheme, city, toggleCity }),
    [theme, toggleTheme, city, toggleCity],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeContext.Consumer>
        {(args) => (
          <body
            style={{
              background:
                args.theme === 'rwanda' ? ThemeColor.Rwanda : ThemeColor.Sweden,
              color: args.theme === 'rwanda' ? 'white' : 'black',
            }}
          >
            {children}
            <Vector />
          </body>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
