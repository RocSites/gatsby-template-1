import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import LogoHorizontal from '../images/default-monochrome-white.svg'
import ResponsiveDesign from '../images/web-design.png'
import SeoPhoto from '../images/seo2.png'
import MarketingPhoto from '../images/monitor.png'
import SEO from "../components/seo"
import {makeStyles} from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from "@material-ui/core/CardHeader"
import scrollTo from 'gatsby-plugin-smoothscroll'
import ReCAPTCHA from "react-google-recaptcha"

const withStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "rgb(253,29,29)",
    minHeight: "100vh",
    background: "linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,123,14,1) 48%, rgba(255,213,42,0.9640231092436975) 100%)",
  },
  // diagonal: {
  //   backgroundColor: "white",
  //   height: "18vh",
  //   transform: "skewY(-4deg)",
  //   position: "relative",
  //   bottom: "70px",
  //   borderBottom: "1px solid black"
  // },
  landingWrapper:{
    display: "flex",
    margin: "auto",
    marginTop: "2%",
    flexDirection: "column",
  },
  landingText: {
    textAlign: "center",
    marginTop: "5%",
    color: "white",
    fontSize: "2.0rem",
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
    borderRadius: "35px",
    padding:"15px",
    paddingLeft: "25px",
    paddingRight: "25px",
    textTransform: "none",
    fontSize: "1.0rem",
    '&:hover': {
      backgroundColor: 'gray',
      boxShadow: 'none',
    },
  },
  landingButtonWrapper: {
    marginTop: "3%",
    display: "flex",
    justifyContent: "center"
  },
  servicesWrapper: {
    display: "flex",
    margin: "20px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  servicesHeader: {
    fontSize: "2.0rem"
  },
  servicesHeaders: {
    display: "flex",
    flexDirection: "column"
  },
  stockPhotoWrapper: {
    display: "flex",
    margin: "20px"
  },
  stockPhoto: {
    width: "55%",
    display: "flex",
    margin: "auto",
    marginTop: "10px"
  },
  stockPhotoCard: {
    backgroundColor: "#f07539",
    borderRadius: "15px",
    paddingTop: "0px",
    margin:"20px"
  },
  stockPhotoCardHeader: {
    color: "white",
    textAlign: "center",
    "& span":{
      fontWeight: "bold",
    }
  },
  formRoot: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
    "& input":{
      borderRadius: "3px",
      fontWeight: "normal"
    },
    "& textarea":{
      fontWeight: "normal",
      height: "100px"
    },
    "& form":{
      marginTop: "1.5rem",
      width: "40%"
    }
  },
  formEmail: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    margin: "10px",
  },
  formTextarea: {
    display: "flex",
    justifyContent: "space-between",
    flexDirection: "column",
    margin: "10px",
    marginBottom: "20px"
  },
  submitButton: {
    margin:"20px",
    backgroundColor: "#f07539",
    color: "white",
    borderRadius: "35px",
    padding:"15px",
    paddingLeft: "25px",
    paddingRight: "25px",
    textTransform: "none",
    fontSize: "1.0rem",
    width: "190px",
    fontWeight: "bold",
    '&:hover': {
      backgroundColor: 'gray',
      boxShadow: 'none',
    },
  },
  submitButtonWrapper: {
    display: "flex",
    justifyContent: "center"
  },
  captchaWrapper: {
    margin: "10px"
  }

}));


const IndexPage = () => {
  const classes = withStyles();

  return (
    <Layout>
    <SEO title="Home" />
    <div className={classes.root}>
      <div className={classes.landingWrapper}>
        <img className={classes.landingLogo} alt="RedPin logo" src={LogoHorizontal}/>
        <Typography className={classes.landingText}>Build your website, build your business</Typography>
        <div className={classes.landingButtonWrapper}>
          <Button 
            onClick={() => scrollTo('#marketing')} 
            className={classes.landingButton}>
            Let's Get Started
            </Button>
        </div>
      </div>
    </div>
    <div className={classes.servicesWrapper}>
      <div className={classes.servicesHeaders}>
        <Typography id="marketing" className={classes.servicesHeader}>Website Design & Marketing Solutions</Typography>
      </div>
      <div>
        <Typography>Whether you're looking for a custom, <b>mobile-ready</b> website or to elevate your company's <b>online presence</b>, we can help you take your business to the <b>next level.</b></Typography>
      </div>
      <div className={classes.stockPhotoWrapper}>
        <Card className={classes.stockPhotoCard}>
         <img className={classes.stockPhoto} src={ResponsiveDesign}/>
         <CardHeader className={classes.stockPhotoCardHeader} title="Website Design Packages"></CardHeader>
        </Card>
        <Card className={classes.stockPhotoCard}>
         <img className={classes.stockPhoto} src={SeoPhoto}/>
         <CardHeader className={classes.stockPhotoCardHeader} title="Custom Marketing Solutions"></CardHeader>
        </Card>
        <Card className={classes.stockPhotoCard}>
         <img className={classes.stockPhoto} src={MarketingPhoto}/>
         <CardHeader className={classes.stockPhotoCardHeader} title="Search Engine Optimization"></CardHeader>
        </Card>
      </div>
    </div>
    <div id="form" className={classes.formRoot}>
      <form 
        name="Contact Form" 
        method="POST" 
        data-netlify="true" 
        data-netlify-recaptcha="true"
        action="/thank-you"
        >
        <input type="hidden" name="form-name" value="Contact Form" />
        <div className={classes.formEmail}>
          <label>Your Email:</label>
          <input type="email" name="email" />
        </div>
        <div className={classes.formTextarea}>
          <label>How can we help?</label>
          <textarea name="message" />
        </div>
        <div className={classes.captchaWrapper}>
          <ReCAPTCHA sitekey="6Le9Z0YaAAAAAKmid2I2A10qNfD86kqqGI7oKOGR" />
        </div>
        <div className={classes.submitButtonWrapper}>
          <button className={classes.submitButton} type="submit">Send</button>
        </div>
      </form>
    </div>
  </Layout>
  )
}

export default IndexPage
