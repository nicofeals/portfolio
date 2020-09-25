import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"
// ...GatsbyImageSharpFluid
const About = () => {
  return <Layout>
    <section className="about-page">
      <Title title="ABOUT ME"></Title>
    </section>
  </Layout>
}

export default About
