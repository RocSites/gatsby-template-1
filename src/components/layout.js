import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {makeStyles, createMuiTheme} from "@material-ui/core/styles"
import Header from "./header"
import "./layout.css"
import "@fontsource/raleway"
import theme from "../theme"

const withStyles = makeStyles((theme) =>({
  footer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.palette.action.active,
    color: theme.palette.text.primary,
    height: "50px",
  },
  layoutRoot: {
    display: "flex",
    flexDirection: "column",
  },
   content:{
     flexGrow: 1
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
          © {new Date().getFullYear()} RedPin Ventures LLC
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
