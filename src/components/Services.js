import React from "react"
import Title from "./Title"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from "gatsby"
import SmallTitle from "./SmallTitle"
import Tools from "./Tools"
// import images from "../constants/services"

const Services = () => {
  const language_query = graphql`
    {
      allFile(filter: {extension: {eq: "png"}, relativeDirectory: {eq: "languages"}}) {
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
  const language_images = useStaticQuery(language_query)

return <section className="section bg-gray">
    <Title title="SKILLS"/>
    <SmallTitle title="Languages"/>
    <div className="section-center services-center">
      {language_images.allFile.edges.map(image => { 
        return (
          <Img fluid={image.node.childImageSharp.fluid} className="service"/>
        )})}
    </div>
    <div className="underline" style={{width:700, height:1}}></div>
    <SmallTitle title="Tools" />
    <Tools></Tools>
  </section>
}

export default Services
