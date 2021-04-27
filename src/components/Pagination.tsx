import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components'

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

const Pagination = ({ pageContext, isAbsolute }: PageContext) => {
  const { previousPagePath, nextPagePath } = pageContext

  const previousPath = isAbsolute ? `/${previousPagePath}` : previousPagePath
  const nextPath = isAbsolute ? `/${nextPagePath}` : nextPagePath

  console.warn(nextPath, isAbsolute)
  return (
    <PaginationDiv>
      {previousPagePath ? <Link to={previousPath}> ← 前のページ</Link> : <div></div>}
      {nextPagePath ? <Link to={nextPath}>次のページ →</Link > : <div></div>}
    </PaginationDiv>
  )
}

const PaginationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`

export default Pagination