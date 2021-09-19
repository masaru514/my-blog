import * as React from 'react'
import { graphql } from 'gatsby'
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import Layout from '../layout/default'
import Pagination from '../components/Pagination'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'gatsby'


export const pageQuery = graphql`
  query($pageId: String!) {
    posts: allContentfulMasaru514Blog(filter: {id: { eq: $pageId }}) {
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

const useStyles = makeStyles(theme => ({
  article: {
    maxWidth: '800px',
    padding: '4rem 3rem 1.5rem 3rem',
    margin: '0 auto',
    boxSizing: 'border-box',
    [theme.breakpoints.down('md')]: {
      padding: '1rem 2rem'
    }
  },
  title: {
    margin: '0 auto',
    textAlign: 'center',
    padding: 24,
    fontSize: 18,
    letterSpacing: '0.5rem',
    fontWeight: 100,
    fontFamily: 'Inter, Hiragino Kaku Gothic ProN, Meiryo'
  },
  articleTitle: {
    fontSize: 24,
    color: '#666',
    marginTop: 8,
    fontFamily: 'Inter, Hiragino Kaku Gothic ProN, Meiryo'
  },
  link: {
    textDecoration: 'none',
    color: '#333',
  },
  markdownStyles: {
    '&> h2': {
      margin: '4rem 0 2rem',
      color: '#666',
      fontWeight: 'normal',
      padding: '8px 0 8px 16px',
      borderLeft: '4px solid #127380',
      fontFamily: 'Inter, Hiragino Kaku Gothic ProN, Meiryo'
    },
    '&> p': {
      margin: '1.6rem 0 1rem',
      letterSpacing: '1px',
      lineHeight: '1.6rem',
      color: '#666',
      fontSize: 15,
      fontFamily: 'Inter, Hiragino Kaku Gothic ProN, Meiryo'
    },
    '&> ul': {
      margin: '2rem 0 1rem',
      color: '#666',
      lineHeight: '1.6rem',
    },
  },
  date: {
    color: '#aaa',
    fontSize: '0.8rem',
    fontWeight: 100,
    '&:first-child': {
      marginRight: '1rem'
    }
  }
}))


const Article = (props: any) => {
  const article = props.data.posts.nodes[0]
  const classes = useStyles()
  const { pageContext } = props

  const jstCreatedAt = utcToZonedTime(article.createdAt, 'Asia/Tokyo')
  const createdAt = format(jstCreatedAt, 'yyyy/MM/dd HH:mm')

  const jstUpdatedAt = utcToZonedTime(article.updatedAt, 'Asia/Tokyo')
  const updatedAt = format(jstUpdatedAt, 'yyyy/MM/dd HH:mm')

  return (
    <Layout>
      <Box>
        <Box>
          <Link className={classes.link} to="/">
            <Typography variant="h2" className={classes.title}>
              MASARU514
            </Typography>
          </Link>
        </Box>
        <Box className={classes.article}>
          <Box display="flex">
            <Typography variant="body2" className={classes.date}>作成日 {createdAt}</Typography>
              {createdAt !== updatedAt && <Typography className={classes.date}>更新日 {updatedAt}</Typography>}
          </Box>
          <Box component="p" className={classes.articleTitle}>{article.title}</Box>
          <Box className={classes.markdownStyles} dangerouslySetInnerHTML={{ __html: article.body.childMarkdownRemark.html }} />
        </Box>
        <Pagination pageContext={pageContext} isAbsolute={true} />
      </Box>
    </Layout>
  )
}

export default Article