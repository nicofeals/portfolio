import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
const Project = ({description, title, github, stack, url, image, index, duration}) => {
  return <article className="project">
    <Image fluid={image.childImageSharp.fluid} className="project-img"></Image>
    <div className="project-info">
      <span className="project-number">{duration}</span>
      <h3>{title}</h3>
      <p className="project-desc">
        {description}
      </p>
      <div className="project-stack">
        {stack.map((item)=>{
          return <span key={item.id}>{item.name}</span>
        })}
      </div>
      <div className="project-links">
        { !(!github || 0 === github.length) && <a style={{display: "table-cell"}} href={github} target="_blank"><FaGithubSquare className="project-icon"/></a>}
      </div>
    </div>
  </article>
}

Project.propTypes = {}

export default Project
