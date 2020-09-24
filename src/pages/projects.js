import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Projects from "../components/Projects"

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
  return <Layout>
    <section className="projects-page">
      <Projects projects={projects} title="ALL PROJECTS"/>
    </section>
  </Layout>
}

export default ProjectsPage
