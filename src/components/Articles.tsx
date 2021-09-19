import * as React from 'react'
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { Box, makeStyles, Typography } from '@material-ui/core'
import { Link } from 'gatsby'

interface ContentfulQuery {
  articles: [
    {
      id: string
      slug: string
      tags: [] | null
      title: string
      updatedAt: string
      createdAt: string
      body: {
        childMarkdownRemark: {
          html: string
        }
      }
    }
  ]
}

const useStyles = makeStyles(theme => ({
  title: {
    display: 'inline-block',
    color: '#666',
    fontSize: 18,
    letterSpacing: '1px',
    textAlign: 'justify',
    fontWeight: 100,
    transition: 'all 0.3s',
    '&:hover': {
      color: '#7adbde'
    },
  },
  createdAt: {
    color: '#aaa',
    fontSize: '0.8rem',
    fontWeight: 100,
    marginBottom: '8px'
  },
  section: {
    borderBottom: '1px solid #f0f0f0',
    marginBottom: '1rem',
    padding: '1rem 3rem 1.5rem 3rem',
    maxWidth: '800px',
    [theme.breakpoints.down('md')]: {
      lineHeight: '1.5rem',
      fontSize: 18,
      padding: '4px 2rem 1.5rem'
    },
  },
  link: {
    textDecoration: 'none',
    display: 'block',
    color: '#333',
  },
}))


const Articles = ({ articles }: ContentfulQuery) => {
  const classes = useStyles()
  return (
    <div>
      {articles.map((article) => {
        const jstCreatedAt = utcToZonedTime(article.createdAt, 'Asia/Tokyo')
        const createdAt = format(jstCreatedAt, 'yyyy.MM.dd')
        return (
          <Box className={classes.section}  key={article.id}>
            <Box>
                <Typography variant="body2" className={classes.createdAt}>{createdAt}</Typography>
            </Box>
            <Box>
              <Link className={classes.link} to={article.id}>
              <Typography variant="h2" className={classes.title}>
                {article.title}
              </Typography>
            </Link>
            </Box>
          </Box>
        )
      })}
    </div>
  )
}

export default Articles
