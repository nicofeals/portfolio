import React from "react"
import BlackLogo from "../assets/logo_black.png"
import WhiteLogo from "../assets/logo_white.png"
import { FiMenu } from "react-icons/fi"
import PageLinks from "../constants/links"
import ModeToggle from './ModeToggle'
import useDarkMode from 'use-dark-mode';

const Navbar = ({home, toggleSidebar}) => {
  const darkMode = useDarkMode(false);
  var classname = "navbar"
  if (home === false) {
    classname = "navbar-grey"
  }
  return (
    <nav className={classname}>
      <div className="nav-center">
        <div className="nav-header">
          <a href="/">
            {darkMode.value === true ? <img src={WhiteLogo} alt="logo" width='140px' className="nav-logo"/> : <img src={BlackLogo} alt="logo" width='140px' className="nav-logo"/>}
          </a>
          <ModeToggle />
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
