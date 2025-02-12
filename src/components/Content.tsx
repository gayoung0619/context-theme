import { useContext } from 'react';
import { ThemeContext } from '../context/ThemeContext';
export const Content = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('Content must be used within a ThemeProvider');
  }
  const { theme } = context;
  return (
      <main style={{
        padding: '20px',
        background: theme === 'light' ? '#fff' : '#555',
        color: theme === 'light' ? '#000' : '#fff'
      }}>
        <p>
          현재는 <strong>{theme}</strong> 모드.
        </p>
      </main>
  )
}