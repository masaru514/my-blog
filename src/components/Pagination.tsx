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
    maxWidth: '800px',
    margin: '5rem auto 5rem',
    padding: '0 3rem',
    boxSizing: 'border-box'
  },
  linkLeft: {
    textAlign: 'left',
    color: '#666',
    transition: 'all 0.2s',
    textDecoration: 'none',
    width: '200px',
    '&:hover': {
      color: '#7adbde'
    }
  },
  linkHome: {
    textAlign: 'center',
    color: '#666',
    transition: 'all 0.2s',
    textDecoration: 'none',
    width: '200px',
    '&:hover': {
      color: '#7adbde'
    }
  },
  linkRight: {
    textAlign: 'right',
    color: '#666',
    transition: 'all 0.2s',
    textDecoration: 'none',
    width: '200px',
    '&:hover': {
      color: '#7adbde'
    }
  },
})

const Pagination = ({ pageContext, isAbsolute }: PageContext) => {
  const classes = useStyles()
  const { previousPagePath, nextPagePath } = pageContext

  const previousPath = isAbsolute ? `/${previousPagePath}` : previousPagePath
  const nextPath = isAbsolute ? `/${nextPagePath}` : nextPagePath
  const home = isAbsolute ? `/` : ''

  return (
    <Box className={classes.pagination}>
      {previousPagePath ? <Link className={classes.linkLeft} to={previousPath}> ← 前のページ</Link> : <Box width={200} />}
      {home ? <Link className={classes.linkHome} to={home}>HOME</Link> : <Box width={200} />}
      {nextPagePath ? <Link className={classes.linkRight} to={nextPath}>次のページ →</Link> : <Box width={200} />}
    </Box>
  )
}

export default Pagination