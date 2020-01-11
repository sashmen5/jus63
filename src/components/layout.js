import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./footer"
import "./layout.css"

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
      <Header/>
      <div
        style={{
          paddingTop: 0,
					marginTop: '54px'
        }}
      >
        <main style={{
					padding: `0px 1.0875rem 1.45rem`,
					margin: `0 auto`,
					maxWidth: 900,
				}}>{children}</main>
				<Footer/>
      </div>
    </>
  )
}

export default Layout
