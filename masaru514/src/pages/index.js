import * as React from 'react'
import Layout from '../layout/default'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

// markup
const IndexPage = () => {
  const H1Title = styled.h1`
    font-family: 'Noto Sans JP';
    font-size: 24px;
    color: #333;
    width: 1000px;
    margin: 0 auto;
    padding-left: 1rem;
  `

  const TheHeader = styled.header`
    background: #fff;
    padding: 1rem 0;
  `

  const TheMain = styled.main`
    width: 1000px;
    margin: 2rem auto;
    padding: 3rem;
    background: #fff;
  `

  return (
    <Layout>
      <TheHeader>
        <H1Title className="text-center">masaru514 技術書</H1Title>
      </TheHeader>
      <TheMain>
        <Articles />
      </TheMain>
    </Layout>
  )
}

const Articles = () => {
  const { allContentfulMasaru514Blog } = useStaticQuery(query)
  const articles = allContentfulMasaru514Blog.nodes

  const Section = styled.section`
    border: 1px solid #f0f0f0;
    margin-bottom: 2rem;
    border-radius: 5px;
    padding: 2rem 3rem 3rem 3rem;
    font-family: 'Noto Sans JP';
    max-width: 800px;
    color: #333;
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

  return articles.map((article) => {
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
        <Body dangerouslySetInnerHTML={{ __html: article.body.childrenMarkdownRemark[0].html }} />
      </Section>
    )
  })
}

export default IndexPage

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
          childrenMarkdownRemark {
            html
          }
          id
        }
      }
    }
  }
`
