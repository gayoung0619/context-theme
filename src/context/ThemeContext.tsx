import {createContext, useState, ReactNode, useEffect} from "react";
import {darkTheme, lightTheme} from "../theme/theme.ts";
import { ThemeProvider as StyledProvider } from 'styled-components';
type Theme = 'light' | 'dark';
interface ThemeContextType {
  themeMode: Theme;
  toggleTheme: () => void;
  currentTime: string;
  updateTime: () => void;
}
interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<Theme>('light');
  const [currentTime, setCurrentTime] = useState<string>(new Date().toLocaleTimeString());
  const themeObject = themeMode === 'light' ? lightTheme : darkTheme
  const toggleTheme = () => {
    if(themeMode === 'light'){
      setThemeMode("dark")
    } else {
      setThemeMode("light")
    }
  }
  const updateTime = () => {
    setCurrentTime(new Date().toLocaleTimeString());
  };

  useEffect(() => {
    const interval = setInterval(updateTime, 1000);
    return () => clearInterval(interval); // 컴포넌트 언마운트 시 interval 클리어
  }, []);
  return(
    <ThemeContext.Provider value={{themeMode, toggleTheme, currentTime, updateTime}}>
      <StyledProvider theme={themeObject}>
        {children}
      </StyledProvider>
    </ThemeContext.Provider>
  )
}