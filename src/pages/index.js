import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import {makeStyles} from '@material-ui/core/styles'

const withStyles = makeStyles((theme) => ({
  root: {
    background: "rgb(253,29,29)",
    minHeight: "100vh",
    background: "linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,123,14,1) 48%, rgba(255,213,42,0.9640231092436975) 100%)"
  }

}));

const IndexPage = () => {
  const classes = withStyles();

  return (
    <Layout>
    <SEO title="Home" />
    <div className={classes.root}>
     {/* <Image/> */}
    </div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
  )
}

export default IndexPage
