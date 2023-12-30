import React, { FunctionComponent } from 'react'
import { css, Global } from '@emotion/react'

const defaultStyle = css`
  @import url(https://fonts.googleapis.com/css2?family=Nanum+Gothic&display=swap);

  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    font-family: 'Nanum Gothic', sans-serif;
  }

  html,
  body,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
    min-height: 100%;
  }

  a,
  a:hover {
    color: inherit;
    text-decoration: none;
    cursor: pointer;
  }
`

const GlobalStyle: FunctionComponent = function () {
  return <Global styles={defaultStyle} />
}

export default GlobalStyle
