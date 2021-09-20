import React from 'react'
import { Link } from 'gatsby'
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import Back from '@material-ui/icons/ArrowBackIosNew'
import Forward from '@material-ui/icons/ArrowForwardIos'

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
    alignItems: 'center',
    maxWidth: '800px',
    margin: '5rem auto 5rem',
    padding: '0 2rem',
    boxSizing: 'border-box',
    fontFamily: 'Inter, Hiragino Kaku Gothic ProN, Meiryo',
  },
  icon: {
    display: 'block',
    width: 16,
    height: 16,
  },
  linkLeft: {
    textAlign: 'left',
    color: '#666',
    transition: 'all 0.2s',
    textDecoration: 'none',
    width: '200px',
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      color: '#7adbde'
    }
  },
  linkHome: {
    textAlign: 'center',
    color: '#666',
    transition: 'all 0.2s',
    textDecoration: 'none',
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
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
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
      {previousPagePath ? <Link className={classes.linkLeft} to={previousPath}><Box className={classes.icon} component="span"><Back className={classes.icon} /></Box><Box component="span" ml={1}>新しい投稿</Box></Link> : <Box width={200} />}
      {home ? <Link className={classes.linkHome} to={home}>HOME</Link> : <Box width={200} />}
      {nextPagePath ?
        <Link className={classes.linkRight} to={nextPath}>
          <Box component="span" mr={1}>過去の投稿</Box>
          <Box component="span"><Forward className={classes.icon}  /></Box>
        </Link> : <Box width={200} />}
    </Box>
  )
}

export default Pagination