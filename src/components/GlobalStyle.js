import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';

export const GlobalStyle = createGlobalStyle`

  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
     background-color: #edf4fe;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  img {
  display: block;
  max-width: 100%;
  height: auto;
}

html {
  box-sizing: border-box;
  width: 100vw;
  overflow-x: hidden;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

  ul {
    padding: 0;
    margin: 0;
    list-style: none;
  }
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    margin: 0;
  }
`;
