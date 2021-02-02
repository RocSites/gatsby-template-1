import React from "react"
import Layout from "../components/layout"
import ReCAPTCHA from "react-google-recaptcha"

const Contact = () => (
  <Layout>
          <form 
        name="Contact Form" 
        method="POST" 
        data-netlify="true" 
        data-netlify-recaptcha="true"
        action="/thank-you"
        >
        <input type="hidden" name="form-name" value="Contact Form" />
        <div>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div>
          <label>How can we help?</label>
          <textarea name="message" />
        </div>
        <br/>
        <ReCAPTCHA sitekey="6Le9Z0YaAAAAAKmid2I2A10qNfD86kqqGI7oKOGR" />
        <button type="submit">Send</button>
      </form>
  </Layout>
)

export default Contact