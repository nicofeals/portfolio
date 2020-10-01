import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import AboutMe from "../assets/svg/about-me.svg"
import Reactmarkdown from "react-markdown"

export const query = graphql`
  {
    about:allStrapiAbout {
      nodes {
        id
        title
        intro 
        info {
          id
          text
          name
        }
        stack {
          name
          id
        }
      }
    }
  }
`

const About = ({
  data: {
    about: { nodes }
  }
}) => {
  const {title,intro,info,stack} = nodes[0]
  const [value, setValue] = React.useState(0)
  const {text} = info[value]
  return <Layout>
    <section className="about-page">
      <div className="section-center about-center">
        <AboutMe className="about-img"/>
        <article className="about-text">
          <Title title={title}/>
          <Reactmarkdown source={intro}/>
          <div className="underline" style={{width:"100%", height:0.8}}></div>
          <div className="about-info">
            <div className="about-btn-container">
              {info.map((item, index)=>{
                return (
                <button 
                  key={item.id} 
                  onClick={()=>setValue(index)}
                  className={`job-btn ${index === value && 'active-btn'}`}>
                    {item.name}
                </button>
                )
              })}
            </div>
            <article className="about-info-container">
              <Reactmarkdown source={text} className="about-info-text"/>
            </article>
          </div>          
          <div className="about-stack">
            {stack.map(item=>{
              return <span key={item.id}>{item.name}</span>
            })}
          </div>
        </article>
      </div>
    </section>
  </Layout>
}

export default About
