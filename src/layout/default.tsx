import * as React from 'react'
import Head from '../components/Head'
import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import 'prismjs/themes/prism-tomorrow.css'

const Layout: React.FC = ({ children }) => {
  return (
    <Body>
      <GlobalStyle />
      <Head title="HOME" />
      {children}
    </Body>
  )
}

const Body = styled.div`
    background: #f8f8f8;
  `

const GlobalStyle = createGlobalStyle`
    ${reset}
    h2 {
      font-weight: 800;
      font-size: 1.4rem;
    }
    img {
      max-width: 600px;
      width: 100%;
    }
  `

export default Layout
