import React from "react"
import { Link as GLink } from "gatsby"
import { Link as RLink} from "react-scroll"
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
//   if (link.text == 'about' || link.text == 'contact' || link.text == 'home') {
//     return ( 
//       <li key={link.id}>
//         <GLink to={link.url} >{link.text}</GLink>
//       </li>
//     )
//   } else {
//     return (
//       <li key={link.id}>
//       <RLink
//         // activeClass="active"
//         to={link.text}
//         spy={true}
//         smooth={true}
//         offset={-70}
//         duration={500}
//         className="nav-anchor">{link.text}</RLink>
//     </li>
//   )
// }
  if (link.text != "featured-projects") {
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
// I KNOW WE CAN COMBINE IT !!!!!

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
