import * as React from 'react'
import Head from '../components/Head'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import 'prismjs/themes/prism-tomorrow.css'

const Layout: React.FC = ({ children }) => {
  const Body = styled.div`
    background: #f8f8f8;
  `

  const GlobalStyle = createGlobalStyle`
    ${reset}
    h2 {
      font-weight: bold;
      font-size: 1.4rem;
    }
    img {
      max-width: 600px;
    }
  `
  return (
    <Body>
      <GlobalStyle />
      <Head title="HOME" />
      {children}
    </Body>
  )
}

export default Layout
