import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {makeStyles, createMuiTheme} from "@material-ui/core/styles"
import Header from "./header"
import "./layout.css"
import "@fontsource/raleway"
import FacebookIcon from '@material-ui/icons/Facebook';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import theme from "../theme"

const withStyles = makeStyles((theme) =>({
  footer: {
    display: "flex",
    justifyContent: "space-between",
    background: theme.palette.background.default,
    color: "black",
    height: "50px",
  },
  layoutRoot: {
    display: "flex",
    flexDirection: "column",
  },
   content:{
     flexGrow: 1
   },
   copyright: {
     marginTop: "auto",
     marginBottom: "auto",
     marginLeft: "20px",
     fontWeight: "bold"
   },
   socialIconsFooter: {
     "@media(min-width: 600px)":{
       display: "none",
     },
     marginTop: "auto",
     marginBottom: "auto"
   },
   socialIcons: {
     color: theme.palette.action.hover,
   }
}))

const Layout = (props) => {
  const classes = withStyles();

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header 
        showContactUs={props.showContact ?? true} 
        siteTitle={data.site.siteMetadata?.title || `Title`} 
      />
      <div className={classes.layoutRoot}>
        <main className={classes.content}>{props.children}</main>
        <footer className={classes.footer}>
          <div className={classes.copyright}>
            © {new Date().getFullYear()} RocSites
          </div>
          {/* <div className={classes.socialIconsFooter}>
            <a href="https://www.facebook.com/RedPinVentures" style={{margin:"auto"}}>
            <FacebookIcon className={classes.socialIcons} fontSize="large"/>
            </a>
            <a  href="https://www.linkedin.com/company/redpin-ventures/" style={{margin:"auto", marginRight: "20px"}}>
                <LinkedInIcon className={classes.socialIcons} fontSize="large"/>
            </a>
          </div> */}
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
