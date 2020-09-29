import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return <Layout>
    <section className="contact-page">
      <section className="contact-form">
        <h3>Get In Touch</h3>
        <form action="https://formspree.io/myybzjnq" method="POST">
          <div className="form-group">
            <input 
              type="text" 
              placeholder="name"
              name="name"
              className="form-control"
            />
            <input 
              type="text" 
              placeholder="email" 
              name="_replyto"
              className="form-control"
            />
            <textarea
              name="message"
              rows="7"
              placeholder="message"
              className="form-control"
            ></textarea>            
          </div>
          <button type="submit" className="submit-btn btn">
            send
          </button>
        </form>
      </section>
    </section>
  </Layout>
}

export default contact
