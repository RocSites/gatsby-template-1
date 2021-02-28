import React from "react"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import SEO from "../components/seo"
import Main from "../components/main"
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
import theme from '../theme'

const withStyles = makeStyles((theme) => ({
  '@global': {
    "@media(max-width: 400px)":{
      body: {
        width: "100%",
        height: "100%",
        margin: 0,
        padding: 0,
        overflowX: "hidden"
      }
    }
  }
}));

const IndexPage = () => {
  const classes = withStyles();

  return (
    <ThemeProvider theme={theme}>
      <Layout>
      <SEO title="Home" />
        <Main/>
        <ContactForm/>
    </Layout>
  </ThemeProvider>
  )
}

export default IndexPage
