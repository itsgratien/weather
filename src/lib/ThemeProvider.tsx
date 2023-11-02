'use client';
import React from 'react';
import { ThemeContext } from '@/contexts/Theme';
import { Theme, ThemeContextT } from '@/types/Theme';
import { ThemeColor } from '@/utils/Color';
import { RwandaCity, SwedenCity } from '@/utils/Enum';
import useSwr from 'swr';
import axios, { AxiosResponse } from 'axios';
import { Weather } from '@/types/Weather';
import { useWeatherAction } from '@/hooks/useWeatherAction';

export const ThemeProvider = ({ children }: { children?: React.ReactNode }) => {
  const [theme, setTheme] = React.useState<Theme>(
    (localStorage.getItem('theme') as Theme) ?? 'rwanda',
  );

  const [city, setCity] = React.useState<string>(RwandaCity.Kigali);

  const [changed, setChanged] = React.useState<boolean>(false);

  const { onSave } = useWeatherAction();

  const { data, error, isLoading } = useSwr<AxiosResponse<Weather>>(
    `https://api.openweathermap.org/data/2.5/weather?q=${city},${theme}&APPID=${process.env.NEXT_PUBLIC_API_KEY}`,
    axios,
  );

  const toggleTheme: ThemeContextT['toggleTheme'] = React.useCallback((arg) => {
    setTheme(arg);
    setChanged(true);
    localStorage.setItem('theme', arg);

    switch (arg) {
      case 'rwanda':
        setCity(RwandaCity.Kigali);
        break;
      case 'sweden':
        setCity(SwedenCity.Stockholm);
        break;

      default:
        setCity(RwandaCity.Kigali);
    }
  }, []);

  const toggleCity: ThemeContextT['toggleCity'] = React.useCallback((arg) => {
    setCity(arg);
    setChanged(true);
  }, []);

  const contextValue: ThemeContextT = React.useMemo(
    () => ({
      theme,
      toggleTheme,
      city,
      toggleCity,
      loading: isLoading,
      error,
      data: data?.data,
    }),
    [theme, toggleTheme, city, toggleCity, isLoading, error, data?.data],
  );

  React.useEffect(() => {
    if (changed && data && data.data) {
      setChanged(() => false);
      onSave(data.data, { country: theme, city });
    }
  }, [changed, city, data, onSave, theme]);

  return (
    <ThemeContext.Provider value={contextValue}>
      <ThemeContext.Consumer>
        {(args) => (
          <body
            style={{
              background:
                args.theme === 'rwanda' ? ThemeColor.Rwanda : ThemeColor.Sweden,
              color: args.theme === 'rwanda' ? 'white' : 'black',
              overflow: 'hidden',
            }}
          >
            {children}
          </body>
        )}
      </ThemeContext.Consumer>
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
