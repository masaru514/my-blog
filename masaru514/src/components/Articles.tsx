import * as React from 'react'
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'

interface ContentfulQuery {
  allContentfulMasaru514Blog: {
    nodes: [
      {
        id: string
        slug: string
        tags: string | null
        title: string
        updatedAt: string
        createdAt: string
        body: {
          childMarkdownRemark: {
            html: string
          }
        }
      },
    ]
  }
}

const query = graphql`
  query {
    allContentfulMasaru514Blog {
      nodes {
        slug
        tags
        title
        updatedAt
        createdAt
        body {
          childMarkdownRemark {
            html
          }
          id
        }
      }
    }
  }
`

const Articles: React.FC = () => {
  const { allContentfulMasaru514Blog }: ContentfulQuery = useStaticQuery(query)
  const articles = allContentfulMasaru514Blog.nodes

  const Section = styled.section`
    border: 1px solid #f0f0f0;
    margin-bottom: 5rem;
    border-radius: 5px;
    padding: 2rem 3rem 3rem 3rem;
    font-family: 'Noto Sans JP';
    max-width: 800px;
    color: #333;
    background: #fff;
  `

  const Flex = styled.div`
    display: flex;
    > p {
      color: #aaa;
      font-size: 0.8rem;
    }
    > p:first-child {
      margin-right: 1rem;
    }
  `

  const SectionTitle = styled.h2`
    font-size: 2rem;
    font-weight: bold;
    margin-top: 1.5rem;
  `

  const Body = styled.div`
    margin-top: 2rem;
    line-height: 2;
  `

  return (
    <div>
      {articles.map((article) => {
        const jstCreatedAt = utcToZonedTime(article.createdAt, 'Asia/Tokyo')
        const createdAt = format(jstCreatedAt, 'yyyy/MM/dd HH:mm')

        const jstUpdatedAt = utcToZonedTime(article.updatedAt, 'Asia/Tokyo')
        const updatedAt = format(jstUpdatedAt, 'yyyy/MM/dd HH:mm')
        return (
          <Section key={article.title}>
            <Flex>
              <p className="text-center">作成日 {createdAt}</p>
              {createdAt !== updatedAt ? <p>更新日 {updatedAt}</p> : ''}
            </Flex>
            <SectionTitle>{article.title}</SectionTitle>
            <Body dangerouslySetInnerHTML={{ __html: article.body.childMarkdownRemark.html }} />
          </Section>
        )
      })}
    </div>
  )
}

export default Articles
