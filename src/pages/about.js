import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
import AboutMe from "../assets/svg/about-me.svg"

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        id
        title
        info
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          name
          id
        }
      }
    }
  }
`

const About = ({
  data: {
    about: { nodes }
  }
}) => {
  const {title,info,image,stack} = nodes[0]
  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <AboutMe className="about-img"/>
        <article className="about-text">
          <Title title={title}/>
          <p>{info}</p>
          <div className="about-stack">
            {stack.map(item=>{
              return <span key={item.id}>{item.name}</span>
            })}
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export default About
