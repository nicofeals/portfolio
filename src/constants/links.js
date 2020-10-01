import React from "react"
import { AnchorLink } from "gatsby-plugin-anchor-links";
const data = [
  {
    id: 1,
    text: "home",
    url: "/",
  },
  {
    id: 2,
    text: "skills",
    url: "/#skills",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects",
  },
  {
    id: 4,
    text: "experience",
    url: "/#experience",
  },
  {
    id: 5,
    text: "about",
    url: "/about/",
  },
  {
    id: 6,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  if (link.text !== "featured-projects") {
    return (
      <li key={link.id}>
        <AnchorLink
          to={link.url}
          title={link.text}
          className="nav-anchor"
          stripHash
        />
      </li>
    )
  }
})

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`} style={{letterSpacing:0}}>
      {tempLinks}
    </ul>
  )
}
