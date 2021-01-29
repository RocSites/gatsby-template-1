import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import LogoHorizontal from '../images/default-monochrome-white.svg'
import SEO from "../components/seo"
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'



const withStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "rgb(253,29,29)",
    minHeight: "70vh",
    background: "linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,123,14,1) 48%, rgba(255,213,42,0.9640231092436975) 100%)",
  },
  diagonal: {
    backgroundColor: "white",
    height: "16vh",
    transform: "skewY(-4deg)",
    position: "relative",
    bottom: "70px",
    border: "1px solid black"
  },
  landingWrapper:{
    display: "flex",
    margin: "auto",
    marginTop: "7%",
    flexDirection: "column",
  },
  landingText: {
    textAlign: "center",
    marginTop: "10%",
    color: "white"
  },
  landingLogo:{
    width: "300px",
    margin: "auto",
    marginTop: "10%"
  },
  landingButton: {
    margin:"20px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "6px",
    textTransform: "none",
    width: "150px"
  },
  landingButtonWrapper: {
    marginTop: "3%"
  }

}));

const IndexPage = () => {
  const classes = withStyles();

  return (
    <Layout>
    <SEO title="Home" />
    <div className={classes.root}>
      <div className={classes.landingWrapper}>
        <img className={classes.landingLogo} src={LogoHorizontal}/>
        <Typography className={classes.landingText}>Web Design & Marketing Solutions</Typography>
        <div className={classes.landingButtonWrapper}>
          <Button className={classes.landingButton}>Landing Button 1</Button>
          <Button className={classes.landingButton}>Landing Button 2</Button>
        </div>
      </div>
    </div>
    <div className={classes.diagonal}></div>
    <Link to="/page-2/">Go to page 2</Link> <br />
  </Layout>
  )
}

export default IndexPage
