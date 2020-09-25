import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"
const Layout = ({ children }) => {
  const [isOpen,setIsOpen] = React.useState(false)
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }
  var home = true
  if (children.length !== 5) {
    home = false
  }
  return (
    <>
      <Navbar home={home} toggleSidebar={toggleSidebar}/>
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar}/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
