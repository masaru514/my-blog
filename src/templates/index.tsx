import * as React from 'react'
import Layout from '../layout/default'
import styled from 'styled-components'
import Articles from '../components/Articles'
import Pagination from '../components/Pagination'
import { graphql } from 'gatsby'
import { device } from '../assets/styles.js'
import { Box, makeStyles, Typography } from '@material-ui/core'

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
  title: {
    margin: '0 auto',
    textAlign: 'center',
    padding: 24,
    fontSize: 18,
    letterSpacing: '0.5rem',
    fontWeight: 200,
    fontFamily: 'Inter'
  },
  footer: {
    textAlign: 'center',
    fontFamily: 'Inter',
    fontWeight: 100,
    color: '#666',
    '&> a': {
      color: '#333',
      textDecoration: 'none'
    }
  },
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
        <Typography variant="h2" className={classes.title}>
          MASARU514
        </Typography>
      </Box>
      <TheMain>
        <Articles articles={articles} />
        <Pagination pageContext={pageContext} isAbsolute={false} />
      </TheMain>
      <Box component="footer" py={8}>
        <Box className={classes.footer} textAlign="center">Icons made by <a href="https://www.flaticon.com/authors/icongeek26" title="Icongeek26">Icongeek26</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></Box>
        <Box className={classes.footer} textAlign="center" pt={1}>copyright masaru514</Box>
      </Box>
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
