import React from "react"
import Layout from "../components/Layout"
import { Link } from "gatsby"
import SEO from "../components/SEO"
import NotFound from "../assets/svg/not-found.svg"
import { Button } from "react-scroll"

const Error = () => {
  return <Layout>
    <main className="error-page">
      <div style={{position:"absolute",left:"50%",top:"20%"}}>
        <h3>Sorry, we couldn't find this page...</h3>
      </div>
      <div style={{position:"absolute",left:"50%",top:"40%"}}>
        <Link to="/" className="btn">back home</Link>
      </div>
      <NotFound className="error-img"/>
    </main>
  </Layout>
}

export default Error
