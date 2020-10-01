import React, { useState } from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"
import { BsChevronUp } from "react-icons/bs"
import { animateScroll as scroll } from "react-scroll"

export const query = graphql`
  {
    allStrapiProjects(sort: {order: DESC, fields: strapiId}) {
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

const ProjectsPage = ({
  data:{allStrapiProjects:{nodes:projects}}
}) => {
  const [showScroll, setShowScroll] = useState(false)
  const checkScrollTop = () => {
    if (typeof window !== 'undefined') {    
      if (!showScroll && window.pageYOffset > 400){
          setShowScroll(true)    
      } else if (showScroll && window.pageYOffset <= 400){
          setShowScroll(false)    
      }  
    }
  };
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', checkScrollTop)
  }
  return <Layout>
    <section className="projects-page">
      <Projects projects={projects} title="ALL PROJECTS"/>
      <BsChevronUp className="scroll-top" onClick={() => scroll.scrollToTop()} style={{display: showScroll ? 'flex' : 'none'}}></BsChevronUp>
    </section>
  </Layout>
}

export default ProjectsPage
