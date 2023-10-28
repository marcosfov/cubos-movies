'use client'

import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 100%;
  }

  html, body, #__next {
    height: 100%;
  }

 a {
  text-decoration: none;
  color: #6c6c6c;
 }
`

export default GlobalStyles
