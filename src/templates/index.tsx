import * as React from 'react'
import Layout from '../layout/default'
import styled from 'styled-components'
import Articles from '../components/Articles'
import Pagination from '../components/Pagination'
import { graphql } from 'gatsby'
import { device } from '../assets/styles.js'
import { Box, makeStyles, Typography } from '@material-ui/core'
import h1Image from '../images/icons/091-time.svg'

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
    file(relativePath: {eq: "logo.jpg"}) {
      childImageSharp{
        fixed(width: 200) {
            ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

const useStyles = makeStyles({
  h1: {
    margin: '0 auto',
    textAlign: 'center',
    padding: 20,
    fontSize: 24
  }
})

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

type ChildPagination = React.ComponentProps<typeof Pagination>

// markup
const IndexPage = (props: BlogQuery & ChildPagination) => {
  const { pageContext } = props
  const articles = props.data.posts.nodes
  const classes = useStyles()
  return (
    <Layout>
      <Box>
        <Typography variant="h1" className={classes.h1}>
          <img src={h1Image} width="100" height="100" />
          masaru514 blog
        </Typography>
      </Box>
      <TheMain>
        <Articles articles={articles} />
        <Pagination pageContext={pageContext} isAbsolute={false} />
      </TheMain>
    </Layout>
  )
}


const TheMain = styled.main`
    max-width: 800px;
    margin: 0 auto 0;
    padding: 3rem;

    @media ${device.mobileL} {
      margin: 10px auto 0;
      padding: 10px;
    }
  `


export default IndexPage
