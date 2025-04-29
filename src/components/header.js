import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import RocSitesLogo from '../images/RocSites-logo/vector/newLogo_transparent.svg'
import { makeStyles } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import scrollTo from 'gatsby-plugin-smoothscroll'
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import { Typography } from "@material-ui/core"

const withStyles = makeStyles((theme) => ({
  logo: {
    height: "75px",
    margin: "20px",
    fill: "currentColor",
    "@media(max-width: 400px)": {
      marginLeft: "10px"
    },
    "& path": {
      fill: "#555555"
    }

  },
  navBar: {
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    top: 0,
    zIndex: "1"
  },
  navbarWrapper: {
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  // navbarLink: {
  //   borderBottom: "1px solid black",
  //   margin: "20px",
  //   paddingTop: "10px",
  // },
  navbarButton: {
    margin: "auto 50px auto 0px",
    fontWeight: "bold",
    textTransform: "none",
    color: "white",
    '&:hover': {
      backgroundColor: "black",
      boxShadow: 'none',
      cursor: "pointer"
    },
    "@media(max-width: 960px)": {
      margin: "30px 10px 0px 10px",
      width: "max-content"
    },
  },
  socialIconLink: {
    "@media(max-width: 600px)": {
      display: "none"
    }
  },
  socialIcon: {
    color: "white"
  }

}));

const Header = (props) => {

  const classes = withStyles();

  return (
    <header className={classes.navBar}>
      <Link to="/" style={{ color: `white`, textDecoration: `none`, display: "flex" }}>
        <img className={classes.logo} src={RocSitesLogo} alt="rocsites logo" />
      </Link>
      <div className={classes.navbarWrapper}>
        {/* <Typography className={classes.navbarLink}>Button 1</Typography>
          <Typography className={classes.navbarLink}>Button 2</Typography>
          <Typography className={classes.navbarLink}>Button 3</Typography>  */}
        {props.showContactUs === true ? (
          <Typography
            className={classes.navbarButton}
            onClick={() => scrollTo('#contactForm')}
          >
            Contact Us
          </Typography>

        ) : null}

        <Typography
          className={classes.navbarButton}
          onClick={() => scrollTo('#contactForm')}
        >
          Services
        </Typography>
        {/* <a className={classes.socialIconLink} href="https://www.facebook.com/RedPinVentures" style={{margin:"auto"}}>
          <FacebookIcon fontSize="large" className={classes.socialIcon}/>
          <FacebookIcon fontSize="large" style={{color: "rgb(20 82 147)"}}/>
        </a> */}
        {/* <a className={classes.socialIconLink} href="https://www.linkedin.com/company/redpin-ventures/" style={{margin:"auto", marginRight: "20px"}}>
            <LinkedInIcon fontSize="large" className={classes.socialIcon}/>
            <LinkedInIcon fontSize="large" style={{color:"rgb(32 118 210)", margin:"auto"}}/>
        </a> */}
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
