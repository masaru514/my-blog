import * as React from 'react'
import { format } from 'date-fns'
import { utcToZonedTime } from 'date-fns-tz'
import styled from 'styled-components'
import { device } from '../assets/styles.js'
import { Box, makeStyles, Typography } from '@material-ui/core'

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

const useStyles = makeStyles({
  title: {
    fontSize: 24,
    paddingTop: 16,
    textAlign: 'justify',
    fontWeight: 'bold',
    fontFamily: 'Noto Sans JP'
  }
})


const Articles = ({ articles }: ContentfulQuery) => {
  const classes = useStyles()
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
            <Box>
              <Typography variant="h2" className={classes.title}>
                {article.title}
              </Typography>
            </Box>
            <Body dangerouslySetInnerHTML={{ __html: article.body.childMarkdownRemark.html }} />
          </Section>
        )
      })}
    </div>
  )
}

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
    padding: 1rem;
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

export default Articles
