import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"

const Tools = () => {
  const tools_query = graphql`
    {
      allFile(filter: {extension: {eq: "png"}, relativeDirectory: {eq: "tools"}}) {
        edges {
          node {
            id
            name
            childImageSharp {
              fluid {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  `
  const tools_images = useStaticQuery(tools_query)

  return (
    <div className="section-center services-center">
      {tools_images.allFile.edges.map(image => { 
        return (
          <Img fluid={image.node.childImageSharp.fluid} className="service"/>
        )})}
    </div>
  )
}

export default Tools
