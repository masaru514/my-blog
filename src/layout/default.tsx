import * as React from 'react'
import Head from '../components/Head'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import 'prismjs/themes/prism-tomorrow.css'

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <GlobalStyle />
      <Head title="HOME" />
      {children}
    </div>
  )
}

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
