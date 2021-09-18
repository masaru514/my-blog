import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'

interface PageContext {
  pageContext: {
    humanPerNumber: number,
    limit: number,
    nextPagePath: string,
    numberOfPages: string,
    previousPagePath: string,
    skip: number,
  }
  isAbsolute: boolean
}

const useStyles = makeStyles({
  pagination: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '5rem',
    marginBottom: '2.5rem',
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 3rem',
    boxSizing: 'border-box'
  },
  link: {
    color: '#333',
    transition: 'all 0.2s',
    textDecoration: 'none',
    '&:hover': {
      color: '#7adbde'
    }
  }
})

const Pagination = ({ pageContext, isAbsolute }: PageContext) => {
  const classes = useStyles()
  const { previousPagePath, nextPagePath } = pageContext

  const previousPath = isAbsolute ? `/${previousPagePath}` : previousPagePath
  const nextPath = isAbsolute ? `/${nextPagePath}` : nextPagePath
  const home = isAbsolute ? `/` : ''

  return (
    <Box className={classes.pagination}>
      {previousPagePath ? <Link className={classes.link} to={previousPath}> ← 前のページ</Link> : <div />}
      {home ? <Link className={classes.link} to={home}>HOME</Link> : <div />}
      {nextPagePath ? <Link className={classes.link} to={nextPath}>次のページ →</Link> : <div />}
    </Box>
  )
}

export default Pagination