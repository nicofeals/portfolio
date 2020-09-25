import React, { useState } from "react"
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
import { MdNotificationsNone } from "react-icons/md"

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
  const [showScroll, setShowScroll] = useState(false)
  const checkScrollTop = () => {    
    if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)    
    } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)    
    }  
  };
  window.addEventListener('scroll', checkScrollTop)
  return (
    <Layout>
      <div id="home">
        <Hero id="home"/>
      </div>
      <div id="skills">
        <Services id="skills"/>
      </div>
      <Projects projects={projects} title="FEATURED PROJECTS" showLink id="featured-projects"/>
      <div id="experience">
        <Jobs id="experience"></Jobs>
      </div>
      <BsChevronUp className="scroll-top" onClick={() => scroll.scrollToTop()} style={{display: showScroll ? 'flex' : 'none'}}></BsChevronUp>
    </Layout>
    )
}
