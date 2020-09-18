import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
// import {FaArrowUp} from "react-icons/fa"
import {BsChevronUp} from "react-icons/bs"
import { animateScroll as scroll } from "react-scroll"

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        duration
        description
        github
        id
        title
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
  }
`

export default ({data}) => {
  const {allStrapiProjects:{nodes:projects}} = data
  return (
    <Layout>
      <div id="home">
        <Hero id="home"/>
      </div>
      <div id="skills">
        <Services id="skills"/>
      </div>
      <Projects projects={projects} title="FEATURED PROJECTS" showLink/>
      <div id="experience">
        <Jobs id="experience"></Jobs>
      </div>
      <BsChevronUp className="scroll-top" onClick={() => scroll.scrollToTop()}></BsChevronUp>
    </Layout>
    )
}
