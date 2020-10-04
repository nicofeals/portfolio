import React from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
      }
    }
  }
`

const SEO = ({title, description}) => {
  const {site} = useStaticQuery(query)
  const {
    siteDesc,
    author,
    siteTitle,
    siteUrl,
    image,
  } = site.siteMetadata
  return <Helmet htmlAttributes={{lang:"en"}} title={`${title} | ${siteTitle}`}>
    <meta name="description" content={description || siteDesc} />
    <meta name="image" content={image} />
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:author" content={author} />
    <meta name="twitter:title" content={siteTitle} />
    <meta name="twitter:description" content={siteDesc} />
    <meta name="twitter:image" content={`${siteUrl}${image}`} />
    <meta property="og:title" content={siteTitle} />
    <meta property="og:type" content="website" />
    <meta property="og:locale" content="en_US" />
    <meta property="og:card" content="summary_large_image" />
    <meta property="og:description" content={siteDesc} />
    <meta property="og:image" content={`${siteUrl}${image}`} />
  </Helmet>
}

export default SEO
