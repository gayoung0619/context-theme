import './App.css'
import {ThemeProvider} from "./context/ThemeContext.tsx";
import {Header} from "./components/Header.tsx";
import {Content} from "./components/Content.tsx";
import styled from "styled-components";
import {TimeProvider} from "./context/TimeContext.tsx";

function App() {
  return (
    <ThemeProvider>
      <TimeProvider>
        <Wrapper>
          <Header />
          <Content />
        </Wrapper>
      </TimeProvider>
    </ThemeProvider>
  )
}

const Wrapper = styled.div`
    height: 100vh;
`

export default App
