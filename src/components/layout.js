/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import {makeStyles} from "@material-ui/core/styles"

import Header from "./header"
import "./layout.css"

const withStyles = makeStyles((theme) =>({
  footer: {
    backgroundColor: "black",
    color: "white",
    marginTop: "1rem"
  }
}))

const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <main>{children}</main>
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
