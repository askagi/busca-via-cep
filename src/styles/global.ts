import { createGlobalStyle } from 'styled-components';
import pointBackground from '../assets/point-background.svg';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  body {
    background: #f0f0f5 url(${pointBackground}) no-repeat 70% top;
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 16px Roboto, sans-serif;
  }

  button {
    cursor: pointer
  }

  #root {
    max-width: 660px;
    margin: 0 auto;
    padding: 80px 20px;

  }
`;
