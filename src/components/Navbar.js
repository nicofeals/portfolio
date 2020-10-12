import React from "react"
import WhiteLogo from "../assets/logo_white.png"
import { FiMenu } from "react-icons/fi"
import PageLinks from "../constants/links"
import ModeToggle from './ModeToggle'
import useDarkMode from 'use-dark-mode';

const Navbar = ({home, toggleSidebar}) => {
  var classname = "navbar"
  if (home === false) {
    classname = "navbar-grey"
  }
  const darkMode = useDarkMode(true, );
  console.log("DARK MODE:",darkMode.value)
  var dark_mode_class = "nav-logo";
  if (darkMode.value === false) {
    dark_mode_class = "nav-logo-black"
  }
  console.log("Class:",dark_mode_class)
  return (
    <nav className={classname}>
      <div className="nav-center">
        <div className="nav-header">
          <img src={WhiteLogo} alt="logo" width='140px' className={dark_mode_class}/>
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
