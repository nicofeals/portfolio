import React from "react"
import {
  FaGithubSquare,
  FaLinkedin,
  FaEnvelopeSquare,
  FaBehanceSquare,
  FaTwitterSquare,
} from "react-icons/fa"

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
  }
]
const links = data.map(link => {
  return (
    <li key={link.id}>
      <a style={{display: "table-cell"}} href={link.url} className="social-link" target="_blank">
        {link.icon}
      </a>
    </li>
  )
})

export default ({ styleClass }) => {
  return (
    <ul className={`social-links ${styleClass ? styleClass : ""}`}>{links}</ul>
  )
}
