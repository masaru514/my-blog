import * as React from 'react'
import Head from '../components/Head'
import { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import 'prismjs/themes/prism-tomorrow.css'

type Props = {
  children?: React.ReactNode
  title?: string
  description?: string
}

const Layout = ({ children, title, description }: Props) => {
  return (
    <div>
      <GlobalStyle />
      <Head title={ title || "HOME"} description={description || 'masaru514のブログです。'} />
      {children}
    </div>
  )
}

const GlobalStyle = createGlobalStyle`
    ${reset}
    body {
      font-family: 'Inter, Hiragino Kaku Gothic ProN, Meiryo';
    }
    h2 {
      font-weight: 800;
      font-size: 1.4rem;
    }
    img {
      width: 100%;
    }
  `

export default Layout
