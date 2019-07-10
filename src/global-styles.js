import { createGlobalStyle } from 'styled-components';

export const blue = '#003164'
export const pink = '#FF4384'

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', serif;
  }

  html * {
    font-size: 16px;
  }
`

export default GlobalStyle
