import styled from "styled-components";
type Theme = 'light' | 'dark';
type ToggleButtonProps = {
  mode: Theme;
  toggle: () => void;
}

export const ToggleButton = ({toggle, mode}: ToggleButtonProps) => {
  return (
      <ToggleWrapper onClick={toggle} mode={mode}>
        {mode === 'dark' ? '🌚' : '🌝'}
      </ToggleWrapper>
  )
}
const ToggleWrapper = styled.button<{ mode: Theme }>`
    cursor: pointer;
    position: fixed;
    z-index: 999999;
    bottom: 4%;
    right: 3%;

    background-color: ${props => props.theme.bgColor};
    border: ${props => props.theme.borderColor};
    font-size: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 96px;
    height: 48px;
    border-radius: 30px;
    box-shadow: ${
            props => props.mode === 'dark' ? '0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)'
                    : '0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)'
    }
`