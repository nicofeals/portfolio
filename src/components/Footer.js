import React from "react"
import SocialLinks from "../constants/socialLinks"
import Navbar from "./Navbar"
const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <SocialLinks styleClass="footer-links"></SocialLinks>
        <h4>copyright&copy;{new Date().getFullYear()} 
          <span> Nicolas Ceccarello</span> all rights reserved
        </h4>
      </div>
    </footer>
  )
}

export default Footer
