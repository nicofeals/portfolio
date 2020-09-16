import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
// import {FaArrowUp} from "react-icons/fa"
import {BsChevronUp} from "react-icons/bs"
import { animateScroll as scroll } from "react-scroll"
export default () => {
  return (
    <Layout>
      <div id="home">
        <Hero id="home"/>
      </div>
      <div id="skills">
        <Services id="skills"/>
      </div>
      <BsChevronUp className="scroll-top" onClick={() => scroll.scrollToTop()}></BsChevronUp>
    </Layout>
    )
}
// ...GatsbyImageSharpFluid
