import React from 'react'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

interface SiteData {
  site: {
    id: string
    siteMetadata: {
      defaultTitle: string
      defaultDescription: string
    }
  }
}

type MetaTagGroup = {
  title?: string
  description?: string
}

const Head = ({ title, description }: MetaTagGroup): JSX.Element => {
  const { site }: SiteData = useStaticQuery(query)
  const { defaultTitle, defaultDescription } = site.siteMetadata
  const metaData = {
    title: title || defaultTitle,
    description: description || defaultDescription,
  }
  return (
    <Helmet>
      <title>{metaData.title}  |  masaru514</title>
      <meta name="description" content={metaData.description} />
    </Helmet>
  )
}

export default Head

const query = graphql`
  query {
    site {
      siteMetadata {
        defaultTitle: title
        defaultDescription: description
      }
    }
  }
`
