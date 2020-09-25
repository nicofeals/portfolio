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
  // console.log(children.props.className === "error-page")
  var home = false
  if (children.length === 5 || children.props.className === "error-page") {
    console.log("TRUE")
    home = true
  }
  console.log(home)
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
