import React from "react"
import logo from "../assets/logo_black_round.png"
import { FaAlignRight } from "react-icons/fa"
import PageLinks from "../constants/links"
const Navbar = ({home, toggleSidebar}) => {
  var classname = "navbar"
  if (home === false) {
    classname = "navbar-grey"
  }
  console.log(classname, home)
  return (
    <nav className={classname}>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} alt="logo" width='140px' className="nav-logo"/>
          </a>
          <button type="button" className="toggle-btn" onClick={toggleSidebar}>
            <FaAlignRight></FaAlignRight>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
