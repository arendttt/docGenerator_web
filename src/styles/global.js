import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;  
  }

  :root {
    font-size: 16px;
  }

  :focus {
    outline: transparent;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.GRAY_600};
    color: ${({ theme }) => theme.COLORS.WHITE};

    font-family: "Inter", sans-serif;
    -webkit-font-smoothing: antialiased;
  }

  button, h2, input {
    font-family: "Inter", sans-serif;
  }

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.8);
  }

`;