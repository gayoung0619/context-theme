import styled from 'styled-components'
export const Header = () => {
  return (
      <HeaderStyle>
        <div>
          <h1>🌝 LOGO 🌚</h1>
          <p>nav</p>
        </div>
      </HeaderStyle>
  )
}

const HeaderStyle = styled.header`
    border-bottom: 1px solid #D1D4D6;
    transition: all 0.5s ease;
    background-color: ${(props) => props.theme.bgColor};
    padding: 0 30px;
    > div {
        display: flex;
        align-items: center;
        justify-content: space-between;
        background: transparent;
        height: 60px;
        h1{
            color: ${(props) => props.theme.textColor};
            font-size: 20px; 
        }
        p{
            color: ${(props) => props.theme.textColor};
            font-size: 16px;
        }
    }
`
