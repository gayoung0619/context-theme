import { createContext, useState, ReactNode } from "react";
import { darkTheme, lightTheme } from "../theme/theme";
import { ThemeProvider as StyledProvider } from "styled-components";

type Theme = "light" | "dark";

interface ThemeContextType {
  themeMode: Theme;
  toggleTheme: () => void;
}

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);
export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [themeMode, setThemeMode] = useState<Theme>("light");
  const themeObject = () => (themeMode === "light" ? lightTheme : darkTheme)

  const toggleTheme = () => {
    setThemeMode((prevMode) => (prevMode === "light" ? "dark" : "light"));
  }

  return (
      <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
          <StyledProvider theme={themeObject}>{children}</StyledProvider>
      </ThemeContext.Provider>
  );
};
