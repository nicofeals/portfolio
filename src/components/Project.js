import React from "react"
import Image from "gatsby-image"
import { FaGithubSquare, FaShareSquare } from "react-icons/fa"
import Reactmarkdown from "react-markdown"

const Project = ({description, title, github, stack, url, image, index, duration}) => {
  return <article className="project">
    <Image fluid={image.childImageSharp.fluid} className="project-img"></Image>
    <div className="project-info">
      <span className="project-number">{duration}</span>
      <h3>{title}</h3>
      <Reactmarkdown className="project-desc">
        {description}
      </Reactmarkdown>
      <div className="project-stack">
        {stack.map((item)=>{
          return <span key={item.id}>{item.name}</span>
        })}
      </div>
      <div className="project-links">
        { !(!github || 0 === github.length) && <a style={{display: "table-cell"}} href={github} target="_blank" rel="noopener" aria-label="Github"><FaGithubSquare className="project-icon"/></a>}
        { !(!url || 0 === url.length) && <a style={{display: "table-cell"}} href={url} target="_blank" rel="noopener" aria-label="url"><FaShareSquare className="project-icon"/></a>}
      </div>
    </div>
  </article>
}

Project.propTypes = {}

export default Project
