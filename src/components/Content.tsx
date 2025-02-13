import styled from "styled-components";
import React, { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { ToggleButton } from "./ToggleButton.tsx";
import Timer from "./Timer.tsx";
import Message from "./Message.tsx";

export const Content = React.memo(() => {
  const themeContext = useContext(ThemeContext);

  if (!themeContext) {
    return (
      <div>Error: Please wrap Content with ThemeProvider and TimeProvider.</div>
    );
  }

  const { themeMode, toggleTheme } = themeContext;
  const displayMode = () => (themeMode === "dark" ? "🌚" : "🌝");

  return (
    <Wrapper>
      <h1>Hello! Welcome to my website!</h1>
      <p>Current mode is {displayMode}</p>
      <Timer />
      <Message />
      <ToggleButton toggle={toggleTheme} mode={themeMode} />
    </Wrapper>
  );
});

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 300px;
  height: calc(100vh - 60px);
  transition: all 0.5s ease;
  background-color: ${(props) => props.theme.bgColor};
  box-sizing: border-box;
  h1 {
    color: ${(props) => props.theme.textColor};
    font-size: 40px;
    margin: 0;
  }
  p {
    color: ${(props) => props.theme.textColor};
    font-size: 28px;
    margin: 0;
    margin-top: 10px;
  }
  span {
    color: ${(props) => props.theme.textColor};
    margin-top: 0px;
    margin-top: 15px;
  }
`;
