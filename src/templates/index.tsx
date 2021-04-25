import * as React from 'react'
import Layout from '../layout/default'
import styled from 'styled-components'
import Articles from '../components/Articles'
import { graphql } from 'gatsby'
import { device } from '../assets/styles.js'

interface BlogQuery {
  data: {
    posts: {
      nodes: [{
        id: string,
        slug: string,
        tags: [] | null,
        title: string,
        updatedAt: string
        createdAt: string
        body: {
          childMarkdownRemark: {
            html: string,
          }
        }
      }]
    }
  }
}

// markup
const IndexPage = (props: BlogQuery) => {
  const articles = props.data.posts.nodes
  const H1Title = styled.h1`
    font-family: 'Noto Sans JP';
    font-size: 24px;
    color: #333;
    margin: 0 auto;
    padding-left: 1rem;
  `

  const TheHeader = styled.header`
    background: #fff;
    padding: 1rem 0;
  `

  const TheMain = styled.main`
    max-width: 800px;
    margin: 2rem auto 0;
    padding: 3rem;

    @media ${device.mobile} {
      padding: 1rem;
    }
  `

  return (
    <Layout>
      <TheHeader>
        <H1Title className="text-center">masaru514 技術書</H1Title>
      </TheHeader>
      <TheMain>
        <Articles articles={articles} />
      </TheMain>
    </Layout>
  )
}

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    posts: allContentfulMasaru514Blog(
      sort: { fields: createdAt, order: DESC }
      skip: $skip
      limit: $limit
    ) {
      nodes {
        id
        tags
        title
        updatedAt
        createdAt
        slug
        body {
          id
          childMarkdownRemark {
            html
          }
        }
      }
    }
  }
`

export default IndexPage
