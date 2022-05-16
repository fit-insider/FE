import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`

  html, body {
    margin: 0;
    font-family: "Trebuchet MS", Helvetica, sans-serif;
  }
  * {
    scrollbar-width: thin;
    scrollbar-color: #cccccc #fbfbfb;
  }
  *::-webkit-scrollbar {
    width: 8px;
    height: 10px;
  }
  *::-webkit-scrollbar-track {
    background: #fbfbfb;
    border-radius: 4px;
  }
  *::-webkit-scrollbar-thumb {
    background-color: #cccccc ;
    border-radius: 4px;
  }
`;

export default GlobalStyle;