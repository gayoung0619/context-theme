import {useContext} from "react";
import {ThemeContext} from "../context/ThemeContext.tsx";

export const Header = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Header must be used within a ThemeProvider');
  }
  const { theme, toggleTheme } = context;
  return (
      <header style={{
        padding: '20px',
        background: theme === 'light' ? '#f0f0f0' : '#333',
        color: theme === 'light' ? '#000' : '#fff'
      }}>
        <h1>Context API</h1>
        <button onClick={toggleTheme} style={{padding: '10px 20px', marginTop: '10px'}}>
          {theme === 'light' ? 'Dark' : 'Light'} Mode
        </button>
      </header>
  )
}