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
          <div className="service-wrap" key={image.node.id}>
            <div className="service-description">{image.node.name}</div>
            <Img fluid={image.node.childImageSharp.fluid} className="service" alt={image.node.name}/>
          </div>
        )})}
    </div>
    <div className="underline" style={{width:700, height:1}}></div>
    <SmallTitle title="Tools" />
    <Tools></Tools>
  </section>
}

export default Services
