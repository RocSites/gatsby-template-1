import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import Image from "../components/image"
import LogoHorizontal from '../images/default-monochrome-white.svg'
import LaptopMobileVector from '../images/laptop_mobile_vector_.png'
import HighlightOrange from '../images/brush-stroke-banner-orange.png'
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
  },
  root: {
    display: "flex",
    background: "rgb(253,29,29)",
    minHeight: "60vh",
    background: "linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,123,14,1) 48%, rgba(255,213,42,0.9640231092436975) 100%)",
    "@media(max-width: 650px)":{
      height: "60vh"
    }
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
    "@media(max-width: 960px)":{
      fontSize: "1.25rem"
    }
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
    marginTop: "50px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  servicesHeader: {
    fontSize: "2.0rem",
    textAlign: "center",
    fontWeight: "bold",
    "@media(max-width: 650px)":{
      fontSize: "1.7 rem"
    }
  },
  servicesHeaders: {
    display: "flex",
    flexDirection: "column",
    background: `url(${HighlightOrange})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 95%",
    padding: "8px 0",
    width: "60%",
    "@media(max-width: 650px)":{
      width: "100%"
    }
  },
  servicesDescription: {
    margin: "10px"
  },
  stockPhotoWrapper: {
    display: "flex",
    margin: "20px",
    marginTop: "0px",
    "@media(max-width: 650px)":{
      flexDirection: "column"
    }
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
  laptopMobileVectorWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "80px",
    "@media (max-width:960px)":{
      flexDirection: "column",
      marginBottom: "50px"
    }
  },
  laptopMobileHeaderWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center"
  },
  laptopMobileVector: {
    width: "60%",
    marginTop: "35px",
    "@media (max-width:960px)":{
      margin: "auto",
      marginTop: "35px"
    }
  },
  laptopMobileHeader: {
    fontSize: "3.45rem",
    lineHeight: "1.7",
    fontWeight: "bold",
    "@media (max-width:960px)":{
      textAlign: "center",
      fontSize: "1.9rem"
    }
  },
  lineSpacer: {
    borderTop: "6px solid black",
    width: "75%",
    marginLeft: "auto",
    marginRight: "auto",
    "@media (max-width:960px)":{
      borderTop: "3px solid black",
      width: "60%"
    }
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
        <Typography className={classes.landingText}>Custom Website Design and Marketing Solutions</Typography>
        <div className={classes.landingButtonWrapper}>
          <Button 
            onClick={() => scrollTo('#marketing')} 
            className={classes.landingButton}>
            Let's Get Started
            </Button>
        </div>
      </div>
    </div>
    <div id="marketing" className={classes.servicesWrapper}>
      <div className={classes.laptopMobileVectorWrapper}>
        <div className={classes.laptopMobileHeaderWrapper}>
          <Typography className={classes.laptopMobileHeader}>Build your Website</Typography>
          <div className={classes.lineSpacer}></div>
          <Typography className={classes.laptopMobileHeader}>Build your Business</Typography>
        </div>
        <img className={classes.laptopMobileVector} alt="laptop mock logo" src={LaptopMobileVector}/>
      </div>
      <div className={classes.servicesHeaders}>
        <Typography className={classes.servicesHeader}>Website Design & Marketing Solutions</Typography>
      </div>
      <div className={classes.servicesDescription}>
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
    <ContactForm/>
  </Layout>
  )
}

export default IndexPage
