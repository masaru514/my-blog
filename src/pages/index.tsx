import * as React from 'react'
import Layout from '../layout/default'
import styled from 'styled-components'
import Articles from '../components/Articles'

// markup
const IndexPage: React.FC = () => {
  const H1Title = styled.h1`
    font-family: 'Noto Sans JP';
    font-size: 24px;
    color: #333;
    width: 1000px;
    margin: 0 auto;
    padding-left: 1rem;
  `

  const TheHeader = styled.header`
    background: #fff;
    padding: 1rem 0;
  `

  const TheMain = styled.main`
    max-width: 800px;
    margin: 2rem auto;
    padding: 3rem;
  `

  return (
    <Layout>
      <TheHeader>
        <H1Title className="text-center">masaru514 技術書</H1Title>
      </TheHeader>
      <TheMain>
        <Articles perPageDisplay={5} />
      </TheMain>
    </Layout>
  )
}

export default IndexPage
