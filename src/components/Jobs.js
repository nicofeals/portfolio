import React from "react"
import Title from "./Title"
import { MdShortText } from "react-icons/md"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"

export const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        date
        position
        logo {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs:{ nodes:jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const {position, date, logo, desc} = jobs[value]
  return (
    <section className="section jobs">
      <Title title="EXPERIENCE"></Title>
      <div className="jobs-center">
        <div className="btn-container">
          {jobs.map((item, index)=>{
            return (
            <button 
              key={item.strapiId} 
              onClick={()=>setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}>
                {item.company}
            </button>
            )
          })}
        </div>
        <article className="job-info">
          <h3>{position}</h3>
          <Image  fluid={logo.childImageSharp.fluid} className="job-logo"/>
          <p className="job-date">{date}</p>
          {
            desc.map((item)=>{
              return <div key={item.id} className="job-desc">
                <MdShortText className="job-icon"></MdShortText>
                <p>{item.name}</p>
              </div>
            })
          }
        </article>
      </div>
    </section>
  )
}

export default Jobs
