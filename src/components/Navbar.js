import React from "react"
import logo from "../assets/logo_black_round.png"
import { FiMenu } from "react-icons/fi"
import PageLinks from "../constants/links"
const Navbar = ({home, toggleSidebar}) => {
  var classname = "navbar"
  if (home === false) {
    classname = "navbar-grey"
  }
  return (
    <nav className={classname}>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            <img src={logo} alt="logo" width='140px' className="nav-logo"/>
          </a>
          <button type="button" className="toggle-btn" onClick={toggleSidebar} aria-label="Menu">
            <FiMenu>Menu</FiMenu>
          </button>
        </div>
        <PageLinks styleClass="nav-links"></PageLinks>
      </div>
    </nav>
  )
}

export default Navbar
