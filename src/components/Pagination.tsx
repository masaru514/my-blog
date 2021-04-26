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
}

const Pagination = ({ pageContext }: PageContext) => {
  const { previousPagePath, nextPagePath } = pageContext
  return (
    <PaginationDiv>
      {previousPagePath ? <Link to={previousPagePath}> ← 前のページ</Link> : <div></div>}
      {nextPagePath ? <Link to={nextPagePath}>次のページ →</Link> : <div></div>}
    </PaginationDiv>
  )
}

const PaginationDiv = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2.5rem;
`

export default Pagination