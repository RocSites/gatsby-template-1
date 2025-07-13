import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import LogoHorizontal from '../images/RedPin_Black_Red_Pin_cropped.png'
import PhoneFloating from '../images/neil-soni-6wdRuK7bVTE-unsplash.jpg'
import BangzPhoto from '../images/BangzScreenshot.png'
import PayviewPhoto from '../images/payviewScreenShoot2.png'
import VectorBackground from '../images/endless-constellation2.svg'
import PhPoolsPhoto from '../images/phPoolsSpaScreenshot.png'
import NykPhoto from "../images/nyk-screenshot.png"
import EstuaryPhoto from "../images/estuary_screenshot.png"
import EducePhoto from "../images/educe_screenshot.png"
import ChillGrillPhoto from "../images/chill_grill_screenshot.png"
import CloverPhoto from "../images/clover_screenshot.png"
import BethRogersPhoto from "../images/beth_rogers_screenshot.png"
import QualityCabinetsPhoto from "../images/qualitycab_screenshot.png"
import PittsfordPrintingPhoto from "../images/pittsford_printing_screenshot.png"
import FairportComputerPhoto from "../images/fairport_screenshot_2.png"
import SupSolPhoto from "../images/supsol_screenshot.png"
import SmallTallPhoto from "../images/small_tall_Screenshot.png"
import B2PPhoto from "../images/b2p_one_screenshot.png"
import ResponsiveDesign from '../images/web-design.png'
import SeoPhoto from '../images/seo2.png'
import MarketingPhoto from '../images/monitor.png'
import DartPhotoOneRedDart from '../images/shutterstock_onedartred.jpg'
import { makeStyles, ThemeProvider } from '@material-ui/core/styles'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Card from '@material-ui/core/Card'
import CardHeader from "@material-ui/core/CardHeader"
import scrollTo from 'gatsby-plugin-smoothscroll'
import BackgroundImage from 'gatsby-background-image'
import "./main.css"

const withStyles = makeStyles((theme) => ({
  '@global': {
    "@media(max-width: 400px)": {
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
    minHeight: "100vh",
    // background:"radial-gradient(at left bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0))",
    background: "black",
    "@media(max-width: 650px)": {
      height: "calc(100vh - calc(100vh -100%))",
    }
  },
  bannerImage: {
    width: "100%"
  },
  bannerText: {
    color: "white",
    fontSize: "5rem",
    "@media(max-width: 960px)": {
      fontSize: "3rem",
    },
    "@media(max-width: 600px)": {
      textAlign: "center",
    },
  },
  bannerTextImpactWord: {
    color: "#162444",
    fontSize: "5rem",
    fontWeight: "bold",
    textAlign: "center",
    "@media(max-width: 960px)": {
      fontSize: "3rem",
    },
  },
  bannerTextWrapper: {
    display: "flex",
    margin: "auto",
    flexDirection: "column",
    "@media(max-width: 960px)": {
      flexDirection: "column"
    },
  },
  landingWrapper: {
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
    "@media(max-width: 960px)": {
      margin: "10px",
      marginTop: "5%"
    },
    "@media(max-width:650px)": {
      fontSize: "1.25rem",
    }
  },
  landingLogo: {
    width: "300px",
    margin: "auto",
    marginTop: "10%"
  },
  landingButton: {
    margin: "20px",
    backgroundColor: theme.palette.background.default,
    color: theme.palette.text.primary,
    boxShadow: `inset 0 0 0 1px ${theme.palette.action.active}`,
    fontWeight: "bold",
    borderRadius: "35px",
    padding: "15px",
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
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgb(27 27 27)",
  },
  servicesHeader: {
    fontSize: "2.5rem",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "20px",
    color: "black",
    "@media(max-width: 650px)": {
      fontSize: "1.9rem"
    }
  },
  servicesHeaders: {
    display: "flex",
    flexDirection: "column",
    backgroundRepeat: "no-repeat",
    backgroundSize: "100% 95%",
    background: "white",
    padding: "8px 0",
    width: "100%",
    "@media(max-width: 650px)": {
      width: "100%"
    }
  },
  servicesDescription: {
    margin: "10px 0 10px 0"
  },

  clientsHeader: {
    fontSize: "3.35rem",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "20px",
    color: "#6acce1",
    "@media(max-width: 650px)": {
      fontSize: "1.9rem"
    }
  },
  clientsHeaderHow: {
    fontSize: "3.35rem",
    textAlign: "center",
    fontWeight: "bold",
    marginTop: "20px",
    color: "#162444",
    "@media(max-width: 650px)": {
      fontSize: "1.9rem"
    }
  },
  

  clientsWrapper: {
    display: "flex",
    width: "100%",
    color: "white",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#162444",
    "@media(max-width: 650px)": {
      paddingTop: "110px"
    }
  },
  stockPhotoWrapper: {
    display: "flex",
    paddingTop: "20px",
    background: "white",
    "@media(max-width: 650px)": {
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
    backgroundColor: "#162444",
    borderRadius: "15px",
    paddingTop: "0px",
    margin: "20px"
  },
  stockPhotoCardHeader: {
    color: "white",
    textAlign: "center",
    "& span": {
      fontWeight: "bold",
    }
  },
  laptopMobileVectorWrapper: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "160px",
    marginLeft: "20px",
    marginRight: "20px",
    height: "600px",
    color: "white",
    "@media (max-width:960px)": {
      flexDirection: "column",
      marginBottom: "100px"
    },
    "@media (max-width:650px)": {
      marginBottom: "50px",
    }
  },
  laptopMobileHeaderWrapper: {
    display: "flex",
    flexDirection: "column",
    marginTop: "70px",
    width: "40%",
    minWidth: "600px",
    textAlign: "center",
    color: "#162444",
    "@media (max-width:960px)": {
      width: "100%",
      minWidth: "unset",
      marginTop: "-210px"
    },
    "@media (max-width:600px)": {
      marginTop: "-280px"
    },
  },
  marketingText: {
    fontSize: "1.25rem"
  },
  marketingTextDivider: {
    margin: "15px"
  },
  laptopMobileVector: {
    marginTop: "35px",
    margin: "auto",
    maxHeight: "550px",
    borderRadius: "35px",
    maxWidth: "50%",
    "@media (max-width:960px)": {
      margin: "auto",
      marginTop: "35px",
      width: "100%",
    },
  },
  laptopMobileHeader: {
    fontSize: "3.35rem",
    lineHeight: "1.7",
    fontWeight: "bold",
    color: "#ffffff",
    "@media (max-width:960px)": {
      textAlign: "center",
      fontSize: "1.9rem"
    }
  },
  lineSpacer: {
    borderTop: "3px solid black",
    width: "100%",
    "@media (max-width:960px)": {
      borderTop: "3px solid black",
      margin: "auto"
    }
  },
  scrollToMarketing: {
    height: "50px",
    background: "#162444"
  },
  laptopImageWrapper: {
    display: "flex",
    width: "40%",
    "@media (max-width:960px)": {
      width: "unset"
    }
  },
  stockPhotoCardText: {
    margin: "25px",
    marginTop: "0px",
    color: "white"
  },
  clientPhoto: {
    width: "100%",
    borderRadius: "25px"
  },
  clientSubwrapper: {
    display: "flex",
    margin: "auto",
    margin: "0 10%"
  },
  clientDescription: {
    margin: "40px 0"
  },
  liveSiteButton: {
    textTransform: "none",
    backgroundColor: "#ffffff",
    borderRadius: "35px",
    display: "flex",
    width: "50%",
    margin: "10px auto 30px auto",
    "&:hover": {
      backgroundColor: "#6acce1",    }
  },
  clientTitle: {
    marginTop: "50px",
    fontSize: "1.5rem",
    "@media (max-width:600px)": {
      textAlign: "center",
    }
  },
  // landingImageBackgroundWrapper: {
  //   display: "flex",
  //   width: "100%",
  //   backgroundImage: `url(${VectorBackground})`
  // }
}));


const Main = () => {
  const classes = withStyles();

  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      desktopImage: file(relativePath: { eq: "yassine-khalfalli-tftTUaQ8iNc-unsplash-BW.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mobileImage: file(relativePath: { eq: "yassine-khalfalli-tftTUaQ8iNc-unsplash-BW.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 650) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const sources = [
    mobileImage.childImageSharp.fluid,
    {
      ...desktopImage.childImageSharp.fluid,
      media: `(min-width: 650px)`
    }
  ]

  return (
    <>
      <div className={classes.root}>
        <div class="landingBackground" className={classes.landingImageBackgroundWrapper}>
          <div className={classes.bannerTextWrapper}>
            <Typography className={classes.bannerText}>Let's Build Your Website</Typography>
            <Typography className={classes.bannerTextImpactWord}>Together</Typography>
              <button class="getStartedLandingButton"  onClick={() => scrollTo('#contactForm')}>Get Started</button>
          </div>
        </div>
      </div>
      {/* <div className={classes.scrollToMarketing} id="marketing"></div> */}
      <div className={classes.servicesWrapper}>
        <BackgroundImage
          fluid={sources}
          className={classes.bannerImage}
        >
          <div className={classes.laptopMobileVectorWrapper}>

            <div className={classes.laptopMobileHeaderWrapper}>
              <Typography className={classes.laptopMobileHeader}>Build Your <span style={{color: "#6acce1"}}>Business</span></Typography>
              {/* <div className={classes.lineSpacer}></div> */}
              <div className={classes.servicesDescription}>
                <Typography className={classes.marketingText}>Custom, <span class="buildBoldText">mobile-ready</span> websites that <span class="buildBoldText">elevate</span> your company's <span class="buildBoldText">online presence</span> and take your business to the <span class="buildBoldText">next level</span>.</Typography>
              </div>
            </div>
            {/* <div className={classes.laptopImageWrapper}>
            <img className={classes.laptopMobileVector} alt="phone floating in hand" src={PhoneFloating} />
          </div> */}
          </div>
          <p style={{ color: "white", margin: "10px", fontSize: ".75rem" }}>photo by <a style={{ color: "white" }} href="https://unsplash.com/@yassine_khalfalli" target="_blank">Yassine Khalfalli</a></p>

        </BackgroundImage>


        <div className={classes.clientsWrapper}>
          <Typography className={classes.clientsHeader}>Recent Projects</Typography>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Small & Tall Power Washing - Rochester, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website for a local power/pressure washing company.
              </Typography>
              <a target="_blank" href="https://smallandtallpowerwashing.com/" class="image featured"
              ><img className={classes.clientPhoto} src={SmallTallPhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://smallandtallpowerwashing.com/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Superior Solutions - Webster, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website for a local packing and shipping company.
              </Typography>
              <a target="_blank" href="https://supsol.us/" class="image featured"
              ><img className={classes.clientPhoto} src={SupSolPhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://supsol.us/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Fairport Computers - Fairport, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom Shopify ecommerce website for local computer sales and service company.
              </Typography>
              <a target="_blank" href="https://fairportcomputer.com/" class="image featured"
              ><img className={classes.clientPhoto} src={FairportComputerPhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://fairportcomputer.com/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Pittsford Printing - Pittsford, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website and cloud portal for local Rochester printing and mailing company.
              </Typography>
              <a target="_blank" href="https://pittsfordprinting.com/" class="image featured"
              ><img className={classes.clientPhoto} src={PittsfordPrintingPhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://pittsfordprinting.com/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Begin'rs To Pro's Pro Shop  - Greece, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website and content management system for local Rochester bowling pro shop.
              </Typography>
              <a target="_blank" href="https://b2pproshop.com/" class="image featured"
              ><img className={classes.clientPhoto} src={B2PPhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://b2pproshop.com/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Quality Cabinets - Rochester, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website for local Rochester cabinet distributor.
              </Typography>
              <a target="_blank" href="https://qualitycabinets.pro/" class="image featured"
              ><img className={classes.clientPhoto} src={QualityCabinetsPhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://qualitycabinets.pro/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Beth Rogers Agency Inc. - Rochester, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website for local Rochester insurance agency.
              </Typography>
              <a target="_blank" href="https://bethrogersagency.com/" class="image featured"
              ><img className={classes.clientPhoto} src={BethRogersPhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://bethrogersagency.com/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Clover Lawn, Landscape, & Nursery - Rochester, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website for a local Rochester lawn and landscape company.
              </Typography>
              <a target="_blank" href="https://cloverlandscape.net/" class="image featured"
              ><img className={classes.clientPhoto} src={CloverPhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://cloverlandscape.net/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Chill & Grill - Rochester, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website for a local Rochester ice cream shop and grill.
              </Typography>
              <a target="_blank" href="https://thatsasmall.com/" class="image featured"
              ><img className={classes.clientPhoto} src={ChillGrillPhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://thatsasmall.com/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Educe - Rochester, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website and web application for note-taking application.
              </Typography>
              <a target="_blank" href="https://www.educe.club/" class="image featured"
              ><img className={classes.clientPhoto} src={EducePhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://www.educe.club/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Estuary - New York, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website and content management system for a real-time data pipeline and streaming company.
              </Typography>
              <a target="_blank" href="https://estuary.dev/" class="image featured"
              ><img className={classes.clientPhoto} src={EstuaryPhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://estuary.dev/">Live Site</Button>
            </section>
          </div>

          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>New York Kitchen - Canandaigua, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website and ticketing sales platform for a non-profit, focused on serving local NY food and beverage.
              </Typography>
              <a target="_blank" href="https://www.nykitchen.com/" class="image featured"
              ><img className={classes.clientPhoto} src={NykPhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://www.nykitchen.com/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Payview - Rochester, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Real estate website and platform that provides accurate and secure proof of
                funds reports.
              </Typography>
              <a target="_blank" href="https://www.mypayview.com/" class="image featured"
              ><img className={classes.clientPhoto} src={PayviewPhoto} alt="image of website" /></a>

              <Button className={classes.liveSiteButton} target="_blank" href="https://www.mypayview.com/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>PH Pool & Spa - Rochester, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website built for a local Rochester pool company.
              </Typography>
              <a
                href="https://www.phpoolandspas.com/"
                class="image featured"
                target="_blank"
              ><img className={classes.clientPhoto} src={PhPoolsPhoto} alt="image of website"
                /></a>


              <Button className={classes.liveSiteButton} target="_blank" href="https://www.phpoolandspas.com/">Live Site</Button>
            </section>
          </div>
          <div className={classes.clientSubwrapper}>
            <section>
              <header>
                <h3 className={classes.clientTitle}>Bangz Salon - Penfield, NY</h3>
              </header>
              <Typography className={classes.clientDescription}>
                Custom website built for a local Rochester salon.
              </Typography>
              <a target="_blank" href="https://www.bangzsalon.com/" class="image featured"
              ><img className={classes.clientPhoto} src={BangzPhoto} alt="image of website"
                /></a>


              <Button className={classes.liveSiteButton} target="_blank" href="https://www.bangzsalon.com/">Live Site</Button>
            </section>
          </div>
        </div>
        <div style={{ height: "100px" }} id="services"></div>
        <div className={classes.servicesHeaders}>
          <Typography className={classes.clientsHeaderHow}>How We Can Help</Typography>

        </div>
        <div className={classes.stockPhotoWrapper}>
          <Card className={classes.stockPhotoCard}>
            <img className={classes.stockPhoto} src={ResponsiveDesign} alt="computer graphic image" />
            <CardHeader className={classes.stockPhotoCardHeader} title="Website Design Packages"></CardHeader>
            <Typography className={classes.stockPhotoCardText}>
              Every business is <b>different</b>. We will build something that not only looks great, but delivers <b>results</b>.
            </Typography>
            {/* <Typography className={classes.stockPhotoCardText}>
              We will work with you every step of the way to ensure your website delivers on your needs and expectations.
            </Typography> */}
          </Card>
          <Card className={classes.stockPhotoCard}>
            <img className={classes.stockPhoto} alt="computer monitor graphic" src={MarketingPhoto} />
            <CardHeader className={classes.stockPhotoCardHeader} title="Digital Advertising"></CardHeader>
            <Typography className={classes.stockPhotoCardText}>
              Get your message in front of the right audience. Less noise, more <b>impact</b>.
            </Typography>
          </Card>
          <Card className={classes.stockPhotoCard}>
            <img className={classes.stockPhoto} alt="seo logo on a cloud with arrows" src={SeoPhoto} />
            <CardHeader className={classes.stockPhotoCardHeader} title="Custom Marketing Solutions"></CardHeader>
            <Typography className={classes.stockPhotoCardText}>
              Ensure your business gets the attention it deserves.
            </Typography>
          </Card>
        </div>
      </div>
    </>
  )
}

export default Main
