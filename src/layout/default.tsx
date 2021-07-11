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
      <div>Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
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
      width: 100%;
    }
  `

export default Layout
