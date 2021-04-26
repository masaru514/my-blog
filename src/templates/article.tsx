import * as React from 'react'
import { graphql } from 'gatsby'

export const pageQuery = graphql`
  query($pageId: String!) {
    posts: allContentfulMasaru514Blog {
      edges {
        node(id: { eq: $pageId }) {
          id
        }
      }
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

const Article = props => {
  const { data } = props
  console.warn(data)
  return (
    <div></div>
  )
}

export default Article