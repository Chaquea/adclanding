/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import "./layout.css"



import facebook from "../images/facebook.png" // Tell Webpack this JS file uses this image
import instagram from "../images/instagram.png" // Tell Webpack this JS file uses this image
import twitter from "../images/twitter.png" // Tell Webpack this JS file uses this image
import linkedin from "../images/linkedin.png" // Tell Webpack this JS file uses this image


const Layout = ({ children }) => {
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
      <Header siteTitle={data.site.siteMetadata.title} />
        <main className="container">{children}</main>
        <footer className="container">
          <ul className="social-icons">
            <li className="facebook">
              <a href="https://google.com" title="Facebook" target="_blank" rel="noopener noreferrer" >
                <img src={facebook} alt="facebook" />
              </a>
            </li>
            <li className="twitter">
              <a href="https://google.com" title="twitter" target="_blank" rel="noopener noreferrer" >
                <img src={twitter} alt="Twitter" />
              </a>
            </li>
            <li className="instagram">
              <a href="https://google.com" title="Instagram" target="_blank" rel="noopener noreferrer" >
                <img src={instagram} alt="Instagram" />
              </a>
            </li>
            <li className="linkedin">
              <a href="https://google.com" title="LinkedIn" target="_blank" rel="noopener noreferrer" >
                <img src={linkedin} alt="LinkedIn" />
              </a>
            </li>
          </ul>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
