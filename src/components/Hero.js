import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
import ReactRotatingText from 'react-rotating-text';

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

const descriptions = [
  'Machine Learning', 
  'Deep Learning', 
  'Computer Vision',
  'Data Science',
  'Computer Science',
  'Active Learning',
]

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
          <h1 style={{fontWeight:300,letterSpacing:0.1}}>Hi, I'm Nicolas</h1>
          <div className="underline"></div>
          <h3 style={{marginBottom:"0.08rem",marginTop:"1rem"}}>I am a </h3>
          <div className="hero-desc">
            <div className="hero-rotate">
              <ReactRotatingText items={descriptions} />
            </div>
            <h3> student.</h3>
          </div>
          <Link to="/contact" className="btn">Let's get in touch!</Link>
          <SocialLinks/>
        </div>
      </article>
      <Image fluid={fluid} className="hero-img"/>
    </div>
  </header>
}

export default Hero