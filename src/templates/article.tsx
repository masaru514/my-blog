import * as React from 'react'
import { graphql, Link } from 'gatsby'
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import styled from 'styled-components'
import { device } from '../assets/styles.js'
import Layout from '../layout/default'
import Pagination from '../components/Pagination'


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


const TheHeader = styled.header`
    background: #fff;
    padding: 1rem 0;
  `

const H1Title = styled.h1`
    font-family: 'Inter, Noto sans JP';
    font-size: 24px;
    color: #333;
    margin: 0 auto;
    padding-left: 1rem;
    max-width: 800px;
    > a {
      color: #333;
      text-decoration: none;
    }
  `

const Body = styled.div`
    margin-top: 2rem;
    line-height: 2;
    > p {
      padding: 0.5rem 0;
    }

    code {
      word-break: break-word;
    }

    @media ${device.mobileL} {
      > p {
          font-size: 0.9rem;
          line-height: 1.9;
        }
    }
  `

const Section = styled.section`
    border: 1px solid #f0f0f0;
    margin-bottom: 5rem;
    border-radius: 5px;
    padding: 2rem 3rem 3rem 3rem;
    font-family: 'Noto Sans JP';
    max-width: 800px;
    color: #333;
    background: #fff;
    @media screen and ${device.mobileL} {
      padding: 20px;
      &:last-child {
        margin-bottom: 2.5rem;
      }
    }
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
    @media ${device.mobileL} {
      font-size: 1.5rem;
    }
  `

const TheMain = styled.main`
    max-width: 800px;
    margin: 2rem auto 0;
    padding: 3rem;

    @media ${device.mobileL} {
      margin: 10px auto 0;
      padding: 10px;
    }
  `


const Article = props => {
  const article = props.data.posts.nodes[0]
  const { pageContext } = props

  const jstCreatedAt = utcToZonedTime(article.createdAt, 'Asia/Tokyo')
  const createdAt = format(jstCreatedAt, 'yyyy/MM/dd HH:mm')

  const jstUpdatedAt = utcToZonedTime(article.updatedAt, 'Asia/Tokyo')
  const updatedAt = format(jstUpdatedAt, 'yyyy/MM/dd HH:mm')

  return (
    <Layout>
      <TheHeader>
        <H1Title><Link to="/blog">技術書 by masaru514</Link></H1Title>
      </TheHeader>
      <TheMain>
        <Section>
          <Flex>
            <p className="text-center">作成日 {createdAt}</p>
            {createdAt !== updatedAt ? <p>更新日 {updatedAt}</p> : ''}
          </Flex>
          <SectionTitle>{article.title}</SectionTitle>
          <Body dangerouslySetInnerHTML={{ __html: article.body.childMarkdownRemark.html }} />
        </Section>
        <Pagination pageContext={pageContext} isAbsolute={true} />
      </TheMain>
    </Layout>
  )
}

export default Article