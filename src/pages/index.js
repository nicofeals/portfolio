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
  const [iconColor, setIconColor] = useState("black")
  const checkScrollTop = () => {    
    if (!showScroll && window.pageYOffset > 400){
        setShowScroll(true)    
    } else if (showScroll && window.pageYOffset <= 400){
        setShowScroll(false)    
    }  
  };

  const listenScrollEvent = e => {
    if (window.scrollY > 4560) {
      setIconColor("white")
    } else {
      setIconColor("black")
    }
  }
  window.addEventListener('scroll', checkScrollTop)
  window.addEventListener('scroll', listenScrollEvent)
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
      <BsChevronUp className="scroll-top" onClick={() => scroll.scrollToTop()} style={{display: showScroll ? 'flex' : 'none',color:iconColor}}></BsChevronUp>
    </Layout>
    )
}
