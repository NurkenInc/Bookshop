import {
  useState, useEffect, useMemo, ReactNode,
} from 'react';
import { ThemeContext, LOCAL_STORAGE_THEME_KEY, Theme } from '../lib/ThemeContext';

interface ThemeProviderProps {
  children: ReactNode,
  initialTheme?: Theme,
}

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEME_KEY) as Theme || Theme.LIGHT;

const ThemeProvider = (props: ThemeProviderProps) => {
  const {
    children,
    initialTheme,
  } = props;
  const [theme, setTheme] = useState<Theme>(initialTheme || defaultTheme);

  const defaultValue = useMemo(() => ({
    theme,
    setTheme,
  }), [theme, setTheme]);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <ThemeContext.Provider value={defaultValue}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
