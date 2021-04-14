import * as React from 'react'
import Layout from '../layout/default'
import Head from '../components/Head'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'

// markup
const IndexPage = () => {
  return (
    <Layout>
      <Head title="HOME" />
      <main>
        <h1>masaru514 技術書</h1>
        <Articles />
      </main>
    </Layout>
  )
}

const Articles = () => {
  const { allContentfulMasaru514Blog } = useStaticQuery(query)
  const articles = allContentfulMasaru514Blog.nodes

  const Section = styled.section`
    border: 1px solid #f8f8f8;
    margin-bottom: 2rem;
    border-radius: 5px;
    padding: 2rem;
    font-family: 'Inter,Noto Sans JP';
  `

  return articles.map((article) => {
    const jstCreatedAt = utcToZonedTime(article.createdAt, 'Asia/Tokyo')
    const createdAt = format(jstCreatedAt, 'yyyy/MM/dd HH:mm')

    const jstUpdatedAt = utcToZonedTime(article.updatedAt, 'Asia/Tokyo')
    const updatedAt = format(jstUpdatedAt, 'yyyy/MM/dd HH:mm')
    return (
      <Section key={article.title}>
        <p>作成日：{createdAt}</p>
        {createdAt !== updatedAt ? <p>更新日：{updatedAt}</p> : ''}
        <h2>{article.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: article.body.childrenMarkdownRemark[0].html }} />
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
