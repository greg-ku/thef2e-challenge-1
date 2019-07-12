import { createGlobalStyle } from 'styled-components';

export const blue = '#003164'

export const invertTheme = ({ primary, bg }) => ({ primary, bg })

export const workTheme = {
  primary: '#FF4384',
  bg: '#FFEDF7',
}

export const breakTheme = {
  primary: '#00A7FF',
  bg: '#E5F3FF',
}

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Roboto', serif;
  }

  html * {
    font-size: 16px;
  }
`

export default GlobalStyle
