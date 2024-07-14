import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html, body {
    height: 100%;
  }

  body {
    font-family: 'Arial', sans-serif;
    background-color: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.textPrimary};
    overflow-x: hidden;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 80%;
  }
`;

export default GlobalStyles;

