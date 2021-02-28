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
import {makeStyles, ThemeProvider} from '@material-ui/core/styles'
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
    background: theme.palette.primary.main,
    minHeight: "100vh",
    background: theme.palette.primary.light,
    "@media(max-width: 650px)":{
      height: "calc(100vh - calc(100vh -100%))"
    }
  },
  landingWrapper:{
    display: "flex",
    margin: "auto",
    marginTop: "150px",
    flexDirection: "column",
  },
  landingText: {
    textAlign: "center",
    marginTop: "5%",
    color: "white",
    fontSize: "2.0rem",
    "@media(max-width: 960px)":{
      margin: "10px",
      marginTop: "5%"
    },
    "@media(max-width:650px)":{
      fontSize: "1.25rem",
    }
  },
  landingLogo:{
    width: "300px",
    margin: "auto",
    marginTop: "10%"
  },
  landingButton: {
    margin:"20px",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    borderRadius: "35px",
    padding:"15px",
    paddingLeft: "25px",
    paddingRight: "25px",
    textTransform: "none",
    fontSize: "1.0rem",
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
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
    padding: "20px",
    paddingTop: "90px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
    "@media(max-width: 650px)":{
      marginTop: "110px"
    }
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
    backgroundColor: theme.palette.background.paper,
    borderRadius: "15px",
    paddingTop: "0px",
    margin:"20px"
  },
  stockPhotoCardHeader: {
    color: theme.palette.text.primary,
    textAlign: "center",
    "& span":{
      fontWeight: "bold",
    }
  },
  laptopMobileVectorWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "160px",
    "@media (max-width:960px)":{
      flexDirection: "column",
      marginBottom: "100px"
    },
    "@media (max-width:650px)":{
      marginBottom: "50px",
    }
  },
  laptopMobileHeaderWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    width: "40%",
    minWidth: "600px",
    "@media (max-width:960px)":{
      width: "100%",
      minWidth: "unset"
    }
  },
  laptopMobileVector: {
    maxHeight: "400px",
    marginTop: "35px",
    "@media (max-width:960px)":{
      margin: "auto",
      marginTop: "35px",
      width: "100%",
    },
  },
  laptopMobileHeader: {
    fontSize: "3.35rem",
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
  },
  scrollToMarketing: {
    height: "50px",
    background: theme.palette.primary.light
  },
  laptopImageWrapper: {
    display: "flex",
    width: "60%",
    "@media (max-width:960px)":{
      width: "unset"
    }
  },
  stockPhotoCardText: {
      margin: "25px",
      marginTop: "0px"
  }
}));


const Main = () => {
  const classes = withStyles();

  return (
      <>
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
      <div className={classes.scrollToMarketing} id="marketing"></div>
      <div className={classes.servicesWrapper}>
        <div className={classes.laptopMobileVectorWrapper}>
          <div className={classes.laptopMobileHeaderWrapper}>
            <Typography className={classes.laptopMobileHeader}>Build your Website</Typography>
            <div className={classes.lineSpacer}></div>
            <Typography className={classes.laptopMobileHeader}>Build your Business</Typography>
            <div className={classes.servicesDescription}>
              <Typography>Whether you're looking for a custom, <b>mobile-ready</b> website or to elevate your company's <b>online presence</b>, we can help you take your business to the <b>next level.</b></Typography>
            </div>
          </div>
          <div className={classes.laptopImageWrapper}>
          <img className={classes.laptopMobileVector} alt="laptop mock logo" src={LaptopMobileVector}/>
          </div>
        </div>
        <div className={classes.servicesHeaders}>
          <Typography className={classes.servicesHeader}>Website Design & Marketing Solutions</Typography>
        </div>
        <div className={classes.stockPhotoWrapper}>
          <Card className={classes.stockPhotoCard}>
          <img className={classes.stockPhoto} src={ResponsiveDesign}/>
          <CardHeader className={classes.stockPhotoCardHeader} title="Website Design Packages"></CardHeader>
          <Typography className={classes.stockPhotoCardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Typography>
          </Card>
          <Card className={classes.stockPhotoCard}>
          <img className={classes.stockPhoto} src={SeoPhoto}/>
          <CardHeader className={classes.stockPhotoCardHeader} title="Custom Marketing Solutions"></CardHeader>
          <Typography className={classes.stockPhotoCardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Typography>
          </Card>
          <Card className={classes.stockPhotoCard}>
          <img className={classes.stockPhoto} src={MarketingPhoto}/>
          <CardHeader className={classes.stockPhotoCardHeader} title="Search Engine Optimization"></CardHeader>
          <Typography className={classes.stockPhotoCardText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
          </Typography>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Main
