import {createContext, useState, ReactNode} from "react";
type Theme = 'light' | 'dark';
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}
interface ThemeProviderProps {
  children: ReactNode;
}
export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider = ({children}: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light')
  const toggleTheme = () => {
    setTheme((prevState) => prevState === 'light' ? 'dark' : 'light')
  }
  return(
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}