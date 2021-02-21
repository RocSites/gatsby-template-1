import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import RedPinLogo from '../images/vector/default-monochrome-white.svg'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import scrollTo from 'gatsby-plugin-smoothscroll'
import Typography from '@material-ui/core/Typography';


const withStyles = makeStyles((theme) => ({
  logo: {
    height: "39px",
    width: "160px",
    margin: "20px",
  },
  navbar: {
    display: "flex",
    justifyContent: "space-between",
    background: "rgb(253,29,29)",
    background: "linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,123,14,1) 48%, rgba(255,213,42,0.9640231092436975) 100%)",
  },
  navbarWrapper:{
    display: "flex",
    justifyContent: "flex-end",
    flexDirection: "row",
  },
  navbarLink: {
    borderBottom: "1px solid black",
    margin: "20px",
    paddingTop: "10px",
  },
  navbarButton: {
    margin:"20px",
    backgroundColor: "black",
    color: "white",
    borderRadius: "35px",
    textTransform: "none",
    width: "150px",
    "& a": {
      textDecoration: "none",
      color: "white"
    },
    '&:hover': {
      backgroundColor: 'gray',
      boxShadow: 'none',
    },
    "@media(max-width: 650px)":{
    }
  }

}));

const Header = (props) => {

  const classes = withStyles();

  return (
    <header className={classes.navbar}>
        <Link to="/"style={{color: `white`,textDecoration: `none`, display: "flex"}}>
          <img className={classes.logo} src={RedPinLogo} alt="redpin ventures logo" />  
        </Link>
        <div className={classes.navbarWrapper}>
          {/* <Typography className={classes.navbarLink}>Button 1</Typography>
          <Typography className={classes.navbarLink}>Button 2</Typography>
          <Typography className={classes.navbarLink}>Button 3</Typography>  */}
          {props.showContactUs === true ? (
            <Button 
              className={classes.navbarButton}
              onClick={() => scrollTo('#contactForm')} 
            >
              Contact Us
            </Button>
          ):null}
          
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
