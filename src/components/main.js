import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import ContactForm from "../components/contactForm"
import Image from "../components/image"
import LogoHorizontal from '../images/RedPin_Black_Red_Pin_cropped.png'
import LaptopMobileVector from '../images/redpinMockLaptopiPhone.png'
import ResponsiveDesign from '../images/web-design.png'
import SeoPhoto from '../images/seo2.png'
import MarketingPhoto from '../images/monitor.png'
import DartPhotoOneRedDart from '../images/shutterstock_onedartred.jpg'
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
    backgroundImage: `url(${DartPhotoOneRedDart})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    minHeight: "100vh",
    "@media(max-width: 650px)":{
      height: "calc(100vh - calc(100vh -100%))",
      backgroundPositionX: "68%"
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
    marginTop: "3%",
    color: theme.palette.text.primary,
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
    boxShadow: `inset 0 0 0 1px ${theme.palette.action.active}`,
    fontWeight: "bold",
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
    paddingTop: "90px",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: theme.palette.background.default,
    "@media(max-width: 650px)":{
      paddingTop: "110px"
    }
  },
  servicesHeader: {
    fontSize: "2.5rem",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "20px",
    color: theme.palette.background.paper,
    "@media(max-width: 650px)":{
      fontSize: "1.9rem"
    }
  },
  servicesHeaders: {
    display: "flex",
    flexDirection: "column",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 95%",
    background: theme.palette.primary.main,
    padding: "8px 0",
    width: "100%",
    "@media(max-width: 650px)":{
      width: "100%"
    }
  },
  servicesDescription: {
    margin: "10px"
  },
  stockPhotoWrapper: {
    display: "flex",
    paddingTop: "20px",
    background: theme.palette.primary.main,
    "@media(max-width: 650px)":{
      flexDirection: "column"
    }
  },
  stockPhoto: {
    width: "55%",
    display: "flex",
    margin: "auto",
    marginTop: "10px",
    marginBottom: "0px"
  },
  stockPhotoCard: {
    display: "flex",
    flexDirection: "column",
    flex: 1,
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
    marginLeft: "20px",
    marginRight: "20px",
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
    marginTop: "35px",
    margin:"auto",
    maxHeight: "600px",
    "@media (max-width:960px)":{
      margin: "auto",
      marginTop: "35px",
      width: "100%",
    },
    "@media (max-width:650px)":{
        maxHeight: "200px"
      },
  },
  laptopMobileHeader: {
    fontSize: "3.35rem",
    lineHeight: "1.7",
    fontWeight: "bold",
    marginLeft: "auto",
    marginRight: "auto",
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
    background: theme.palette.background.default
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
          <Typography className={classes.servicesHeader}>How We Can Help</Typography>
        </div>
        <div className={classes.stockPhotoWrapper}>
          <Card className={classes.stockPhotoCard}>
            <img className={classes.stockPhoto} src={ResponsiveDesign}/>
            <CardHeader className={classes.stockPhotoCardHeader} title="Website Design Packages"></CardHeader>
            <Typography className={classes.stockPhotoCardText}>
            Websites are worth their weight in gold. When designed correctly, a website can become one of your most powerful marketing and sales assets.
            </Typography>
            <Typography className={classes.stockPhotoCardText}>
            We will work with you every step of the way to ensure your website delivers on your needs and expectations.
            </Typography>
          </Card>
          <Card className={classes.stockPhotoCard}>
            <img className={classes.stockPhoto} src={MarketingPhoto}/>
            <CardHeader className={classes.stockPhotoCardHeader} title="Digital Advertising"></CardHeader>
            <Typography className={classes.stockPhotoCardText}>
              Working with your marketing team shouldn’t be a one-way street. We partner with our clients to offer solutions and strategies that meet your short- and long-term goals. The reality is that you know your customers better than we do, and that knowledge is the start to an effective marketing plan. You tell us what to say – We’ll tell you how to say it.
            </Typography>
          </Card>
          <Card className={classes.stockPhotoCard}>
            <img className={classes.stockPhoto} src={SeoPhoto}/>
            <CardHeader className={classes.stockPhotoCardHeader} title="Custom Marketing Solutions"></CardHeader>
            <Typography className={classes.stockPhotoCardText}>
            From writing blogs and newsletters to SEO and much more. We have a network of partners and in-house capabilities that we can leverage to create a custom solution that fits your needs, budget and goals. 
            </Typography>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Main
