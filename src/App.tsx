import './App.css'
import {ThemeProvider} from "./context/ThemeContext.tsx";
import {Header} from "./components/Header.tsx";
import {Content} from "./components/Content.tsx";

function App() {
  return (
    <ThemeProvider>
      <Header />
      <Content />
    </ThemeProvider>
  )
}

export default App
