import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaShareSquare,
} from "react-icons/fa"
import Resume from "../assets/CV_EN.pdf"

const data = [
  {
    id: 1,
    icon: <FaGithubSquare className="social-icon"></FaGithubSquare>,
    url: "https://www.github.com/nicofeals",
  },
  {
    id: 2,
    icon: <FaLinkedin className="social-icon"></FaLinkedin>,
    url: "https://www.linkedin.com/in/nicolasceccarello",
  },
  {
    id: 3,
    icon: <FaEnvelopeSquare className="social-icon"></FaEnvelopeSquare>,
    url: "mailto:nicolas.ceccarello@epita.fr",
  },
  {
    id: 4,
    icon: <FaShareSquare className="social-icon"></FaShareSquare>,
    url: Resume,
  }
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      {link.id === 4 ? 
        <a style={{display: "table-cell"}} href={link.url} className="social-link" target="_blank" download title="Download my resume">
          {link.icon}
        </a> :
        <a style={{display: "table-cell"}} href={link.url} className="social-link" target="_blank">
          {link.icon}
        </a>
      }
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
