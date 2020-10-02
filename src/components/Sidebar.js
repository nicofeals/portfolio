import React from "react"
import Links from "../constants/links"
import SocialLinks from "../constants/socialLinks"
import { FiX } from "react-icons/fi"
const Sidebar = ({isOpen, toggleSidebar}) => {
  return <aside className={`sidebar ${isOpen ? "show-sidebar" : ""}`}>
    <button className="close-btn" onClick={toggleSidebar} aria-label="Close">
      <FiX>Close</FiX>
    </button>
    <div className="side-container" onClick={toggleSidebar}>
      <Links styleClass={`${isOpen ? "sidebar-links" : "sidebar-links-closed"}`}/>
      <SocialLinks styleClass={`${isOpen ? "sidebar-icons" : ""}`}/>
    </div>
  </aside>
}

export default Sidebar
