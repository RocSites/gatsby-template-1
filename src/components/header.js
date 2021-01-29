import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import RedPinLogo from '../images/vector/default-monochrome-black.svg'
import {makeStyles} from '@material-ui/core/styles'

const withStyles = makeStyles((theme) => ({
  logo: {
    height: "auto",
    width: "170px",
    margin: "20px"
  },
  navbar: {
    background: "rgb(253,29,29)",
    background: "linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(255,123,14,1) 48%, rgba(255,213,42,0.9640231092436975) 100%)"

  }

}));

const Header = ({ siteTitle }) => {

  const classes = withStyles();

  return (
    <header className={classes.navbar}>
        <Link to="/"style={{color: `white`,textDecoration: `none`,}}>
          <img className={classes.logo} src={RedPinLogo} alt="redpin ventures logo" />  
        </Link>
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
