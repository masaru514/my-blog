import React from 'React'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

const Head = ({ title, description }) => {
  const { site } = useStaticQuery(query)
  const { defaultTitle, defaultDescription } = site.siteMetadata
  const metaData = {
    title: `${title} | ${defaultTitle}`,
    description: description | defaultDescription,
  }
  return (
    <Helmet>
      <title>{metaData.title}</title>
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
