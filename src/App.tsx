import './App.css'
import {ThemeProvider} from "./context/ThemeContext.tsx";
import {Header} from "./components/Header.tsx";
import {Content} from "./components/Content.tsx";
import styled from "styled-components";

function App() {
  return (
    <ThemeProvider>
      <Wrapper>
        <Header />
        <Content />
      </Wrapper>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
    height: 100vh;
`

export default App
