import { Link } from "gatsby"
import PropTypes from "prop-types"
import React  from "react"
import RedPinLogo from '../images/vector/default-monochrome-black.svg'
import {makeStyles} from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import scrollTo from 'gatsby-plugin-smoothscroll'

const withStyles = makeStyles((theme) => ({
  logo: {
    height: "39px",
    width: "160px",
    margin: "20px",
  },
  navBar: {
    position: "fixed",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
    top: 0,
    background: "white",
    boxShadow: "1px 0 10px 0 rgb(89 98 115 / 20%)",
    zIndex: "1"
  },
  navbarWrapper:{
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
    margin:"20px",
    backgroundColor: theme.palette.background.paper,
    boxShadow: `inset 0 0 0 1px #${theme.palette.action.active}`,
    color: theme.palette.text.primary,
    borderRadius: "35px",
    textTransform: "none",
    width: "150px",
    '&:hover': {
      backgroundColor: theme.palette.action.hover,
      boxShadow: 'none',
    },
  }

}));

const Header = (props) => {

  const classes = withStyles();

  return (
    <header className={classes.navBar}>
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
