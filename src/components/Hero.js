import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
const query = graphql`
  {
    file(relativePath: {eq: "nicolas-img.png"}) {
      id
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
const Hero = () => {
  const {
    file: {
      childImageSharp: { fluid },
    },
  } = useStaticQuery(query)
  return <header className="hero">
    <div className="section-center hero-center">
      <article className="hero-info">
        <div>
          <div className="underline"></div>
          <h1>Hi, I'm Nicolas</h1>
          <h4>I am an Artificial Intelligence, Data Science</h4> 
          <h4>and Computer Engineering student.</h4>
          <Link to="/contact" className="btn">Let's get in touch!</Link>
          <SocialLinks/>
        </div>
      </article>
      <Image fluid={fluid} className="hero-img"/>
    </div>
  </header>
}

export default Hero